import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MainComponent } from './modules/home/pages/main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { LandingComponent } from './modules/home/components/landing/landing.component';
import { UserMainComponent } from './modules/user/pages/user-main/user-main.component';
import { UserLandingComponent } from './modules/user/components/user-landing/user-landing.component';
import { TeacherLandingComponent } from './modules/user/pages/teacher-landing/teacher-landing.component';
import { LessonPlanComponent } from './modules/user/pages/lesson-plan/lesson-plan.component';
import { StudentLandingComponent } from './modules/user/pages/student-landing/student-landing.component';
import { MatRadioModule } from '@angular/material/radio';
import { StatsComponent } from './modules/user/pages/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LandingComponent,
    UserMainComponent,
    UserLandingComponent,
    TeacherLandingComponent,
    LessonPlanComponent,
    StudentLandingComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  exports: [
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
