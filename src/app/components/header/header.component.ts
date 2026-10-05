import { Component, OnInit, HostListener, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storefront, StorefrontService, UserService, User, Cart, CartService } from '@congacommerce/ecommerce';
import { MiniProfileComponent } from '@congacommerce/elements';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class HeaderComponent implements OnInit {
  @ViewChild('profile', { static: false }) profile: MiniProfileComponent;
  
  pageTop: boolean = true;
  storefront$: Observable<Storefront>;
  user$: Observable<User>;
  cart$: Observable<Cart>;

  constructor(
    private storefrontService: StorefrontService,
    private userService: UserService,
    private router: Router,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.storefront$ = this.storefrontService.getStorefront();
    this.user$ = this.userService.me();
    this.cart$ = this.cartService.getMyCart();
  }

  doLogout() {
    this.profile.doLogout();
    // The MiniProfileComponent.doLogout() handles navigation via window.location.reload()
    // No need to navigate here as it would interfere with the logout process
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.pageTop = window.pageYOffset <= 0;
  }
}
