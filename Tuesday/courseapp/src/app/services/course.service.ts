import { Injectable } from '@angular/core';
import { course } from   '../course';

@Injectable()
export class CourseService {
  private courses:course[];

  constructor() { 
    this.courses = [{
      image: "image1.jpg",
      price: 200,
      name: "Angular4",
      description:"Angular Framework 4" 
    },
    {
      image: "image3.jpg",
      price: 300,
      name: "Angular2",
      description:"Angular Framework 1" 
    },
    {
      image: "image5.jpg",
      price: 250,
      name: "Angular1",
      description:"Angular Framework 1.6" 
    },
    {
      image: "image6.jpg",
      price: 650,
      name: "Angular1.6",
      description:"Angular Framework 2" 
    },
    {
      image: "image4.jpg",
      price: 400,
      name: "Angular5",
      description:"Angular Framework 5" 
    }]
  }

  getCourses():course[] {
    return this.courses;
  }

}
