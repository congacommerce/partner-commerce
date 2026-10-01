import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardViewComponent } from '../dashboard/view/dashboard-view.component';
import { FavoriteDetailComponent } from './detail/favorite-detail/favorite-detail.component';
import { FavoriteListComponent } from './list/favorite-list/favorite-list.component';


const routes: Routes = [
  {
    path: '',
    title: 'Favorites',
    component: DashboardViewComponent,
    children: [
      {
        path: '',
        title: 'Favorites',
        component: FavoriteListComponent
      }
    ]
  },
  {
    path: ':id',
    title: 'Favorite Details',
    component: FavoriteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
