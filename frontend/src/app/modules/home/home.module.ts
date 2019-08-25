import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [LandingComponent, MainComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    
  ]
})
export class HomeModule { }
