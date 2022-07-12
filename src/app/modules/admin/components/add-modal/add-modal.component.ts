import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/products';



@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  productsModelObj: Products = new Products();
  productData: any;
  constructor(
    private api: ApiService,
    private toastr: ToastrService,
  ) { }

  previewImage: string = "";

  url = './assets/images/adidas.jpeg';

  hasPreviewImage: boolean = false;



  @Output() closeEvent = new EventEmitter<boolean>();
  @Output() submitEvent = new EventEmitter<any>();

  @Input() editData: Products;
  @Input() isEdit: boolean;

  ngOnInit(): void {
    if (this.isEdit) {
      this.profileForm.controls['title'].setValue(this.editData.title);
      this.profileForm.controls['description'].setValue(this.editData.description);
      this.profileForm.controls['quantity'].setValue(this.editData.quantity);
      this.profileForm.controls['price'].setValue(this.editData.price as any);
      this.hasPreviewImage = true;
      this.previewImage = this.editData.image;
      this.productsModelObj.image = this.editData.image;
    }


  }



  profileForm = new FormGroup({
    image: new FormControl(this.productsModelObj.image, Validators.required),
    title: new FormControl(this.productsModelObj.title, [Validators.required]),
    description: new FormControl(this.productsModelObj.title, Validators.required),
    quantity: new FormControl(this.productsModelObj.quantity, Validators.required),
    price: new FormControl(this.productsModelObj.price, Validators.required)
  })



  onSelectFile(e) {
    if (e.target.files) {
      var reader = new FileReader();
      const image = reader.readAsDataURL(e.target.files[0]);

      reader.onload = (event: any) => {
        console.log('aaa', event.target)
        this.hasPreviewImage = true;
        this.previewImage = event.target.result;
        this.productsModelObj.image = event.target.result;
      }
    }
  }


  postProductsDetails() {
    this.productsModelObj.title = this.profileForm.value.title;
    this.productsModelObj.description = this.profileForm.value.description;
    this.productsModelObj.quantity = this.profileForm.value.quantity;
    this.productsModelObj.price = this.profileForm.value.price;


    if (this.isEdit) {
      this.api.updateProduct(this.productsModelObj, this.editData.id).subscribe(res => {
        this.toastr.success("Your product is successfuly updated!")
      }, err => {
        this.toastr.error("Something Went wrong...")
      })
      this.getAllProducts();
      return;
    }

    this.api.postProducts(this.productsModelObj)
      .subscribe(res => {
        this.toastr.success('Your Product added successfuly!')
      },
        err => {
          this.toastr.error('Something Went wrong!')
        })
    this.getAllProducts();
  }

  getAllProducts() {
    this.api.getProducts()
      .subscribe(res => {
        this.productData = res;

      })

  }

  submitModal(): void {
    this.submitEvent.emit();

  }

  closeButton(): void {
    this.closeEvent.emit(false);
  }


}
