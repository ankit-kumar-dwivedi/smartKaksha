import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { UserMainComponent } from './pages/user-main/user-main.component';
import { UserLandingComponent } from './components/user-landing/user-landing.component';
import { TeacherLandingComponent } from './pages/teacher-landing/teacher-landing.component';
import { LessonPlanComponent } from './pages/lesson-plan/lesson-plan.component';
import { StudentLandingComponent } from './pages/student-landing/student-landing.component';
import { StatsComponent } from './pages/stats/stats.component';

@NgModule({
  declarations: [UserMainComponent, UserLandingComponent, TeacherLandingComponent, LessonPlanComponent, StudentLandingComponent, StatsComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    
  ],
})
export class UserModule { }
