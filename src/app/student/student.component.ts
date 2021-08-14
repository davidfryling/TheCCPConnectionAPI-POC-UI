import { Component, OnInit } from '@angular/core';
import { RequestComponent } from '../request/request.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title = 'Student Dashboard';

  constructor() { }

  ngOnInit(): void {
  }

}
