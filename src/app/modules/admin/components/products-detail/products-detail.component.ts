import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Products } from 'src/app/products';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';





@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  openModal: boolean = false;
  addModal: boolean = false;
  editModal: boolean = false;
  editData: Products;
  selectedProduct: Products = null;
  products: Products[] = []
  productsData: any;

  displayedColumns: string[] = ['image', 'title', 'description', 'quantity', 'price', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiService,
    private toastr: ToastrService, private dialog: MatDialog,) { }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.api.getProducts()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.productsData = res
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  editProduct(row: any) {
    this.editModal = true;
    this.editData = row;
    event.preventDefault()
  }

  closeEditModal(event: boolean) {
    this.editModal = event;
  }

  deleteProducts(product: any) {
    this.api.deleteProduct(product.id)
      .subscribe(res => {
        this.toastr.success('Product deleted successfully!')
        this.getAllProducts();

      },

        err => {
          this.toastr.error('Something Went wrong!')
        })

  }
  openProductModal() {
    this.addModal = true;
  }

  closeModal(event: boolean) {
    this.addModal = event;

  }

  odEditModal() {
    this.editModal = false;
    this.getAllProducts();
  }

  onSubmit(): void {
    this.addModal = false;
    this.getAllProducts();

  }



}
