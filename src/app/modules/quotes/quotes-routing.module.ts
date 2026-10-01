import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteListComponent } from './list/quote-list.component';
import { QuoteDetailComponent } from './detail/quote-detail.component';
import { CreateQuoteComponent } from './quote-create/create-quote.component';
import { DashboardViewComponent } from '../dashboard/view/dashboard-view.component';
import { PartnerDetailsGuard } from '@congacommerce/ecommerce';

const routes: Routes = [
  {
    path: '',
    title: 'Proposals',
    component: DashboardViewComponent,
    children: [
      {
        component: QuoteListComponent,
        path: '',
        title: 'Proposals'
      }
    ]
  },
  {
    path: 'create',
    title: 'Create Proposal',
    component: CreateQuoteComponent,
  },
  {
    path: ':id',
    title: 'Proposal Details',
    component: QuoteDetailComponent,
    canActivate: [PartnerDetailsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
