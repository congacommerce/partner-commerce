import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetListComponent } from './list/asset-list.component';


const routes: Routes = [
  {
    path: '',
    title: 'Assets',
    component: AssetListComponent
  },
  {
    path: ':operation/:productId',
    title: 'Assets',
    component: AssetListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
