import { Injectable } from '@angular/core';

interface IModal {
  id: string
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() { }

  register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
  }

  unregister(id: string): void {
    this.modals = this.modals.filter(modal => modal.id !== id)
  }

  isModalopen(id: string): boolean {
    return Boolean(this.modals.find(modal => modal.id === id)?.visible)
  }

  toggleModal(id: string): void {
    const modal = this.modals.find(modal => modal.id === id)
    if (modal)
      modal.visible = !modal.visible
  }
}
