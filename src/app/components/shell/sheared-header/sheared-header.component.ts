import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sheared-header',
  templateUrl: './sheared-header.component.html',
  styleUrls: ['./sheared-header.component.scss']
})
export class ShearedHeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  isLoggedIn: boolean;

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
  logout() {
    this.isLoggedIn = false;
    this.auth.logout()
  }
}



