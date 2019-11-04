import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerTableComponent } from './customer-table/customer-table.component';

const routes: Routes = [
  { path: 'customers', component: CustomerTableComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: '**', redirectTo: '/customers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
