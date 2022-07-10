import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductService } from 'src/app/service.products';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  constructor(private productService: ProductService,
    private api: ApiService
  ) {

  }
  search: string = '';
  filterProducts: Products[] = []
  openModal: boolean = false;
  selectedProduct: Products = null;
  productsData: any;




  getAllProducts(): void {
    this.api.getProducts()
      .subscribe(res => {
        this.productsData = res; this.filterProducts = res
      });
  }

  onProductClick(product: Products): void {
    this.openModal = true;
    this.selectedProduct = product;
  }
  ngOnInit(): void {

    this.getAllProducts()
  }

  onCloseModal(event: boolean) {
    this.selectedProduct = null;
    this.openModal = event;
  }

  onSearch(newValue: string) {
    this.search = newValue;
    this.productsData = this.filterProducts.filter(elements => elements.title.toLowerCase().includes(newValue.toLowerCase()));


  }
}
