import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StudentService } from '../_service/student.service';
import { Router } from '@angular/router';
import { Student } from '../_model/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ){}
    
 studentForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    name: this.formBuilder.control(''),
    mark: this.formBuilder.control(0),
    class: this.formBuilder.control(''),
    subject: this.formBuilder.control('')
    
  })

async addStudent(){
  const student = this.studentForm.value as Student;
  this.studentService.addStudent(student);
  this.router.navigateByUrl('/'); 
}

}
