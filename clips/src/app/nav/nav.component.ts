import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  // isAuthenticated = false

  constructor(
    public modal: ModalService,
    public auth: AuthService,

  ) {
    // this.auth.isAuthenticated$.subscribe(status => this.isAuthenticated = status)
  }

  ngOnInit(): void {
  }

  openModal($event: Event): void {
    $event.preventDefault()
    this.modal.toggleModal('auth')
  }

}
