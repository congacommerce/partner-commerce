import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './list/product-list.component';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ConfigureGuard } from '../../services/configure.guard';
const routes: Routes = [
  {
    path: '',
    title: 'Products',
    component: ProductListComponent
  },
  {
    path: 'compare',
    title: 'Product Comparison',
    loadChildren: () => import('../../modules/compare/compare.module').then(m => m.CompareModule),
    data: { title: 'Product Comparison' }
  },
  {
    path: ':id',
    title: 'Product Details',
    component: ProductDetailComponent
  },
  {
    path: 'category/:categoryId',
    title: 'Products',
    component: ProductListComponent
  },
  {
    path: ':id/:cartItem',
    title: 'Product Details',
    component: ProductDetailComponent,
    canDeactivate: [ConfigureGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
