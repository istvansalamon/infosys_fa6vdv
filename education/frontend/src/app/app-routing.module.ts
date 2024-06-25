import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';


const routes: Routes = [
  {
    path:"students",
    component: StudentComponent
  },
  {
    path:"students/add",
    component: StudentFormComponent
  },
  {
    path:"students/:id",
    component: StudentFormComponent
  }  ,
  {
    path:"teachers",
    component: TeacherComponent
  },
  {
    path:"teachers/add",
    component: TeacherFormComponent
  },
  {
    path:"teachers/:id",
    component: TeacherFormComponent
  }  ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
