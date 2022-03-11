import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Request } from '../models/request'; // model of request object
import { RequestService } from '../services/request.service'; // connects us to request service
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  requestAdded: boolean;
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
  creditHourOptions: number[];
  newRequestInput: Request;
  newRequestResponse: Request;
  i: number;

  constructor(private modalService: NgbModal, private requestService: RequestService) { 
    this.creditHourOptions = [];
    
    for(this.i = 0; this.i <= 10; this.i += .50)
    {
      this.creditHourOptions.push(this.i);
    }
  }

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

  createRequest(): void {
    this.modalService.dismissAll('Save click');

    this.newRequestInput = {
      timestamp: new Date(),
      courseName: this.course?.value,
      courseCreditHours: Number(this.creditHours?.value),
      courseTerm: this.term?.value
    };

    this.requestService.create(this.newRequestInput).subscribe(
      (response) => {
        this.newRequestResponse = response;
      },
      (error: AppError) => { 
        if (error instanceof NotFoundError)
          alert('The page you are looking for does not exist');
        else
          throw error; 
      },
      () => console.log('New request sent')
    );

    let courseControl = this.form.controls['course'];
    let creditHoursControl = this.form.controls['creditHours'];
    let termControl = this.form.controls['term'];

    courseControl.setValue('');
    courseControl.markAsPristine();
    courseControl.markAsUntouched();
    courseControl.updateValueAndValidity();

    creditHoursControl.setValue('');
    creditHoursControl.markAsPristine();
    creditHoursControl.markAsUntouched();
    creditHoursControl.updateValueAndValidity();

    termControl.setValue('');
    termControl.markAsPristine();
    termControl.markAsUntouched();
    termControl.updateValueAndValidity();
  }

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
