/**
 * Apttus Partner Commerce
 *
 * Dedicated routing module for the cart module.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardViewComponent } from '../dashboard/view/dashboard-view.component';
import { CartListComponent } from './list/cart-list.component';
import { CartDetailComponent } from './detail/cart-detail.component';

const routes: Routes = [
  // route to land on the cart list page
  {
    path: '',
    title: 'Carts',
    component: DashboardViewComponent,
    children: [
      {
        path: '',
        title: 'Carts',
        component: CartListComponent
      }
    ]
  },
  // Route to land on the active cart
  {
    path: 'active',
    title: 'Active Cart',
    component: CartDetailComponent
  },
  // Route to land to specific cart
  {
    path: ':id',
    title: 'Cart Details',
    component: CartDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartsRoutingModule { }
