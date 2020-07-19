import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course.info.component.html',
})
export class CourseInfoComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private CourseService: CourseService
  ) {}

  course: Course;

  ngOnInit(): void {
    let id = +this.ActivatedRoute.snapshot.paramMap.get('id');
    this.course = this.CourseService.retrieveById(id);
    console.log(this.course);
  }

  save(): void {
    this.CourseService.save(this.course);
  }
}
