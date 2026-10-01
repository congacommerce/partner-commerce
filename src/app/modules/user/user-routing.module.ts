import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { DashboardViewComponent } from '../dashboard/view/dashboard-view.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
  {
    path: '',
    title: 'User Settings',
    component: DashboardViewComponent,
    children: [
      {
        path: '',
        title: 'User Settings',
        component: SettingsComponent
      },
      {
        path: 'change-password',
        title: 'Change Password',
        component: ChangePasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
