import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Curso de Angular',
        imageUrl: '',
        price: 99.99,
        code: 'ANG-01',
        duration: 120,
        rating: 5.4,
        releaseDate: 'November, 2, 2019',
      },
      {
        id: 1,
        name: 'Curso de Angular Avançado',
        imageUrl: '',
        price: 99.99,
        code: 'ANG-02',
        duration: 120,
        rating: 5.4,
        releaseDate: 'December, 2, 2019',
      },
    ];
  }
}
