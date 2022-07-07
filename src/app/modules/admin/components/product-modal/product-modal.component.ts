import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  @Input() data: Products

  @Output() closeEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeButton(): void {
    this.closeEvent.emit(false);
  }

  addProduct() {
    alert('Product is add to cart!')
  }

  saveProduct() {
    alert('Product is saved!')
  }
}
