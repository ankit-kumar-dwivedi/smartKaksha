import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/home/pages/main/main.component';
import { UserMainComponent } from './modules/user/pages/user-main/user-main.component';
import { TeacherLandingComponent } from './modules/user/pages/teacher-landing/teacher-landing.component';
import { LessonPlanComponent } from './modules/user/pages/lesson-plan/lesson-plan.component';
import { StudentLandingComponent } from './modules/user/pages/student-landing/student-landing.component';
import { StatsComponent } from './modules/user/pages/stats/stats.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'user', component: UserMainComponent },
  { path: 'teacherLanding', component: TeacherLandingComponent },
  { path: 'lessonPlan', component: LessonPlanComponent },
  { path: 'studentLanding', component: StudentLandingComponent },
  { path: 'stats', component: StatsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
