import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './main-event-detail/event-detail.component';
import { EventDetailRoutingModule } from './event-detail-routing.module';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [EventDetailComponent, CartComponent],
  imports: [
    CommonModule, EventDetailRoutingModule]
})
export class EventDetailModule { }
