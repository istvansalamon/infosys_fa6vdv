import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  students: Student[]= [];

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<Student[]>('/api/students')
  }

  async loadStudentsIfEmpty() {
    if (!this.students || this.students.length === 0) {
      const students = await new Promise<Student[]>((resolve, reject) => {
        this.getAll().subscribe({
          next: (students) => {
            resolve(students);
          },
          error: (err) => {
            reject(err);
          }
        });
      });

      this.students = students;
    }
  }

  async loadStudents() {
    await this.loadStudentsIfEmpty();
    return this.students;
  }

  async filterStudents(query: string) {
    try {
      await this.loadStudentsIfEmpty();
      return this.students.filter(student => {
        if (!student.name) {
          return false;
        }
        return student.name.toLowerCase().includes(query.toLowerCase());
      });
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async addStudent(student: Student){
    await this.loadStudentsIfEmpty();
    this.students.unshift(student);
  }

}
