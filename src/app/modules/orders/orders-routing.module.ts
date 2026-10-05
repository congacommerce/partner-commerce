import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './list/order-list.component';
import { OrderDetailComponent } from './detail/order-detail.component';
import { DashboardViewComponent } from '../dashboard/view/dashboard-view.component';
import {PartnerDetailsGuard} from '@congacommerce/ecommerce';


const routes: Routes = [
  {
    path: '',
    title: 'Orders',
    component: DashboardViewComponent,
    children: [
      {
        path: '',
        title: 'Orders',
        component: OrderListComponent
      }
    ]
  },
  {
    path: ':id',
    title: 'Order Details',
    component: OrderDetailComponent,
    canActivate: [PartnerDetailsGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
