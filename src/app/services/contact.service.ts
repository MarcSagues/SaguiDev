import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private isOpen = signal(false);

  readonly isOpen$ = this.isOpen.asReadonly();

  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }
}
