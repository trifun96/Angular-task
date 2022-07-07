import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductService } from 'src/app/service.products';



@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  openModal: boolean = false;
  selectedProduct: Products = null;
  products: Products[] = []
  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => { this.products = products })
  }

  onProductClick(product: Products): void {
    this.openModal = true;
    this.selectedProduct = product;
  }

  onCloseModal(event: boolean) {
    this.selectedProduct = null;
    this.openModal = event;
  }
  editProduct() {
    console.log('Edit je')
  }

  deleteProduct() {
    console.log('delete je')
  }
}
