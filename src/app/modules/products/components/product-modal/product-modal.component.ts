
import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  @Input() data: Products

  @Output() closeEvent = new EventEmitter<boolean>();

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  closeButton(): void {
    this.closeEvent.emit(false);
  }

  addProduct() {
    this.toastr.success('Your product added successfuly')
  }

  saveProduct() {
    this.toastr.success('Your product saved successfuly!')
  }
}
