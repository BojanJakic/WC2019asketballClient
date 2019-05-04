import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() type: string;
  @Input() message: string;
  @Input() actionButtonText: string;
  @Output() isConfirmed = new EventEmitter<boolean>();

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  cancel() {
    this.activeModal.dismiss();
  }

  action() {
    this.activeModal.dismiss();
    this.isConfirmed.emit(true);
  }

}
