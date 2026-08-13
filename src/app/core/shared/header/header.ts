import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { Modalinfo } from '../modalinfo/modalinfo';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  private modalService = inject(NgbModal);

  darkMode = false;

  open() {
    const modalRef = this.modalService.open(Modalinfo);
    modalRef.componentInstance.name =
      'Leon Vieira can solve your problems!';
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    document.body.classList.toggle(
      'dark-mode',
      this.darkMode
    );
  }
}