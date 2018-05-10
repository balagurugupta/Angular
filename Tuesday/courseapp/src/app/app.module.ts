import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './banner/banner.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { HomeComponent } from './routes/home/home.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';

import { CourseService } from './services/course.service';
import { OffercodePipe } from './offercode.pipe';
import { FilterpricePipe } from './filterprice.pipe';
import { ReviewlistComponent } from './routes/reviews/reviewlist/reviewlist.component';
import { ReviewComponent } from './routes/reviews/review/review.component'
import { ReviewService } from './services/review.service'
import { EnquiryService } from './services/enquiry.service';
import { CoursedetailsComponent } from './routes/home/coursedetails/coursedetails.component';
import { ScheduleComponent } from './schedule/schedule.component'

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const routes = [
        {path:"", component: HomeComponent},
        {path:"offices", component: OfficesComponent},
        {path:"newcourses", component: NewcoursesComponent},
        {path:"offers", component: OffersComponent},
        {path:"vclass", component: VirtualclassComponent},
        {path:"reviews", component: ReviewsComponent},
        {path:"cdetails/:ccode", component: CoursedetailsComponent},
        {path:"schedules", component:ScheduleComponent, outlet:"sidebar"}

]


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnquiryFormComponent,
    HomeComponent,
    OfficesComponent,
    NewcoursesComponent,
    ReviewsComponent,
    OffersComponent,
    VirtualclassComponent,
    CourselistComponent,
    CourseComponent,
    OffercodePipe,
    FilterpricePipe,
    ReviewlistComponent,
    ReviewComponent,
    CoursedetailsComponent,
    ScheduleComponent
    
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }), ReactiveFormsModule
  ],
  providers: [CourseService, ReviewService, EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
