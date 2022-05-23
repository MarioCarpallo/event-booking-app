import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { EventCardComponent } from './components/event-card/event-card.component';



@NgModule({
  declarations: [MainHomeComponent, EventCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
