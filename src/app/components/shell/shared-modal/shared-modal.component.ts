import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-modal',
  templateUrl: './shared-modal.component.html',
  styleUrls: ['./shared-modal.component.scss']
})
export class SharedModalComponent implements OnInit {



  @Output() closeEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  closeButton(): void {
    this.closeEvent.emit(false);
  }

}
