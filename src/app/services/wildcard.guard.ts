import { Injectable, NgZone } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { UserService } from '@congacommerce/ecommerce';

/**
 * Wildcard route guard that handles unknown/invalid URLs.
 * - If user is logged in: redirects to home page (orders for partner-commerce)
 * - If user is not logged in: redirects to login page
 */
@Injectable({
    providedIn: 'root',
})
export class WildcardGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router,
        private ngZone: NgZone
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.userService.isLoggedIn().pipe(
            take(1), // Only take the first emission to prevent multiple redirects
            map(loggedIn => {
                this.ngZone.run(() => {
                    if (loggedIn) {
                        // User is logged in, redirect to home page (orders)
                        this.router.navigate(['/orders']);
                    } else {
                        // User is not logged in, redirect to login page
                        this.router.navigate(['/u/login']);
                    }
                });
                return false;
            }),
            catchError(() => {
                // On error, redirect to login page
                this.ngZone.run(() => {
                    this.router.navigate(['/u/login']);
                });
                return of(false);
            })
        );
    }
}
