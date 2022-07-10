import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModalComponent } from './components/shell/shared-modal/shared-modal.component';
import { ShearedFooterComponent } from './components/shell/sheared-footer/sheared-footer.component';
import { ShearedHeaderComponent } from './components/shell/sheared-header/sheared-header.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ShearedHeaderComponent, ShearedFooterComponent, SharedModalComponent],
  exports: [ShearedHeaderComponent, ShearedFooterComponent, SharedModalComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule { }
