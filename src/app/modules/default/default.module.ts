import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [LandingComponent, AboutComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }
