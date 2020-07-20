import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  constructor(private CourseService: CourseService) {}

  _courses: Course[] = [];

  _filterBy: string;

  filteredCourses: Course[] = [];

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.CourseService.retrieveAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filteredCourses = courses;
      },
      error: (err) => console.log(err),
    });
  }

  deleteById(courseId: number): void {
    this.CourseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: (err) => console.log('Error', err),
    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) => {
      return (
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
      );
    });
  }

  get filter() {
    return this._filterBy;
  }
}
