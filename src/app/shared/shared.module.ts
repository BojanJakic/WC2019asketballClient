import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
      NgbModule.forRoot(),
      CommonModule
    ],
    entryComponents: [
      ModalComponent
    ],
    exports: [
      NgbModule
    ]
  })
  export class SharedModule { }
  