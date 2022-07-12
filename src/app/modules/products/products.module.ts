import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SharedModule } from 'src/app/shared.module';
import { ProductModalComponent } from './components/product-modal/product-modal.component';



@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule

  ],
  declarations: [
    ProductsListComponent,
    ProductModalComponent
  ],
})
export class ProductsModule { }
