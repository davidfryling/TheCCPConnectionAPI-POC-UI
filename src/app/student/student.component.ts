import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal/modal.service'; //REMOVE??

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title = 'Student Dashboard';
  closeResult: string;
  form = new FormGroup({
    course: new FormControl('', [
      Validators.required,
      Validators.minLength(7)
    ]),
    creditHours: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    term: new FormControl('', Validators.required)
  });

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  get course() {
    return this.form.get('course');
  }

  get creditHours() {
    return this.form.get('creditHours');
  }

  get term() {
    return this.form.get('term');
  }

  // openModal(id: string) {
  //   this.modalService.open(id);
  // }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
