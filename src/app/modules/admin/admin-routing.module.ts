import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';


const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      { path: 'products-detail', component: ProductsDetailComponent },
      { path: '', redirectTo: '/admin/products-detail', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
