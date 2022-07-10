import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  searchValue: string = ''

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })


  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) {

  }


  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin'])
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((result) => {
        this.router.navigate(['admin'])
        this.toastr.success('You are logged in successfuly!')
      },
        (err: Error) => {
          this.toastr.error('Something Went wrong!', 'Please fill in the fields.')
        }
      )
    }
    this.searchValue = null;


  }
}
