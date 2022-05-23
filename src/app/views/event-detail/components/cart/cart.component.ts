import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart, Session } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() cart: Cart;
  @Output() deleteFromCartEvt: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  //Función que construirá un objeto simple con el id del evento y la fecha
  deleteFromCart(cart: Cart, date){
    const sessionToDlt = {
      id: cart.eventInfo.id,
      date: date
    }
    this.deleteFromCartEvt.emit(sessionToDlt);
  }
  

}
