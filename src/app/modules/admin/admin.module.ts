import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/shell/header/header.component';
import { FooterComponent } from './components/shell/footer/footer.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductModalComponent } from './components/product-modal/product-modal.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProductsDetailComponent,
    ProductModalComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class AdminModule { }
