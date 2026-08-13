import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';

@Component({
  selector: 'app-modalinfo',
  imports: [],
  templateUrl: './modalinfo.html',
  styleUrl: './modalinfo.css',
})
export class Modalinfo {
	activeModal = inject(NgbActiveModal);

	@Input() name: string | undefined;
}
