import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl} from '@angular/forms';
import { ReviewService } from '../../services/review.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  courses:string[] = ["Java", "HTML", "CSS3", "Angular", "React JS"];
  reviewForm:any;

  

  constructor(private formbuilder:FormBuilder, private rs:ReviewService) { 
    this.reviewForm = this.formbuilder.group({
      name:['', [Validators.required, isSymbols]], 
      message:['', [Validators.required]],
      email:['', [Validators.required, Validators.pattern("^[A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],

      course:['Java']
    });
  }

  ngOnInit() {
  }

  saveReview() {
    var temp:any={
      name: this.reviewForm.value.name,
      email: this.reviewForm.value.email,
      course: this.reviewForm.value.course,
      message: this.reviewForm.value.message,
      reviewdate: new Date().toString()
    }

    this.rs.postReviews(temp).subscribe(
      data=>{
        alert('Your view is saved');
        location.reload();
      }
    )
  }

}

function isSymbols(input: FormControl) {
  let temp:RegExp = new RegExp('[\._$@0-9]');
  let temp1:boolean = false;

  if (!temp.test(input.value)) {
    temp1 = true;
  }
  return temp1 ? null: {needFormat:true};
}
