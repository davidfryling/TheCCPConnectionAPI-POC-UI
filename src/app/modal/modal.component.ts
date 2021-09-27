import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None //allows this to be accessed globally
})
export class ModalComponent implements OnInit {
  form = new FormGroup({
    course: new FormControl(),
    creditHours: new FormControl(),
    term: new FormControl()
  });

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
