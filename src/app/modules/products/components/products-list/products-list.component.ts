import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductService } from 'src/app/service.products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  constructor(private productService: ProductService) {

  }
  search: string = '';
  products: Products[] = [];
  filterProducts: Products[] = []
  openModal: boolean = false;
  selectedProduct: Products = null;



  getProducts(): void {
    this.productService.getProducts().subscribe(products => { this.products = products; this.filterProducts = products });
  }

  onProductClick(product: Products): void {
    this.openModal = true;
    this.selectedProduct = product;
  }
  ngOnInit(): void {
    this.getProducts()
  }

  onCloseModal(event: boolean) {
    this.selectedProduct = null;
    this.openModal = event;
  }

  onSearch(newValue: string) {
    this.search = newValue;
    this.products = this.filterProducts.filter(elements => elements.title.toLowerCase().includes(newValue.toLowerCase()));
  }
}
