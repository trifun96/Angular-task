import { Injectable } from "@angular/core";
import { Products } from "./products";
import { PRODUCTS } from "./mock-products";
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: 'root',
})

export class ProductService {

  constructor() {

  }

  getProducts(): Observable<Products[]> {
    const products = of(PRODUCTS)
    return products;
  }


}
