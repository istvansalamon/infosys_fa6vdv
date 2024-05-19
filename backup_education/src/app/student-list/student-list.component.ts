import { Component } from '@angular/core';
import { Student } from '../_model/student';
import { Router } from '@angular/router';
import { StudentService } from '../_service/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: Student[] = [];
  query: string = '';

 

  constructor(
    private studentService: StudentService,
    private router: Router
  ){}


  async ngOnInit() {
    this.students = await this.studentService.loadStudents();
  }

  editStudent(product: any) {
    this.router.navigate(['/student-form', product.id]);
  }

  async search() {
    this.students = await this.studentService.filterStudents(this.query);
  }

}
