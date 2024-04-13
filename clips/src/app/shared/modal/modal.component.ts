import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  // providers: [ModalService]
})
export class ModalComponent implements OnInit {

  @Input() modalID: string = ''

  constructor(public modal: ModalService, public el: ElementRef) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  closeModal(): void {
    this.modal.toggleModal(this.modalID)
  }

}
