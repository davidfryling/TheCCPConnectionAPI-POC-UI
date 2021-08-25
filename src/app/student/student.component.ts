import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title = 'Student Dashboard';

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

}
