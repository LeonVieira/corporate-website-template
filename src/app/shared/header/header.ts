import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { Modalinfo } from '../../core/components/modalinfo/modalinfo';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
	private modalService = inject(NgbModal);
 
//These modals use no reference on the html, and will cause a null reference error if you do that.
//Just something worth remembering but still nice looking modal.
	open() {
		const modalRef = this.modalService.open(Modalinfo);
		modalRef.componentInstance.name = 'Leon Vieira can solve your problems!';
	}
}
