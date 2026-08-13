import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { Modalinfo } from '../modalinfo/modalinfo';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  private modalService = inject(NgbModal);
  private themeService = inject(ThemeService);

  open() {
    const modalRef = this.modalService.open(Modalinfo);

    modalRef.componentInstance.name =
      'Leon Vieira can solve your problems!';
  }

  toggleDarkMode() {
    this.themeService.toggle();
  }

  get darkMode(): boolean {
    return this.themeService.isDarkMode();
  }
}