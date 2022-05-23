import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart, EventInfo, EventSession, Session } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  eventSessions = new EventSession();
  emptySessions = false;
  cart: Cart[] = [];
  cartQuantity = [];
  indexEvento = 0;
  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDataFromRoute()
  }

  //Recoge los datos del resolver (GetById)
  getDataFromRoute(): void {
    const snapshot = this._activatedRoute.snapshot;
    this.eventSessions = snapshot.data.detail;
    this.showInfoPannel();
  }

  //En el caso de que no haya resultados de la consulta, hacemos que muestre el panel de información
  showInfoPannel(){
    if(Object.keys(this.eventSessions).length === 0){
      this.emptySessions = true;
    }else{
      this.emptySessions = false;
      this.sortEventSessions();
    }
  }
//Ordenamos por fechas y inicializamos el array del carrito
  sortEventSessions(): void {
    var totalSessions = 0;
    this.eventSessions.sessions.sort(function(a,b){
      totalSessions++
      return parseInt(a.date) - parseInt(b.date);
    });

    for (let index = 0; index < totalSessions; index++) {
      this.cartQuantity.push(0)      
    }
  }

  
  addToCart(date: string, index){
    var availability = this.eventSessions.sessions[index].availability;
    this.eventSessions.sessions[index].availability = (parseInt(availability)-1).toString();
    this.cartQuantity[index]++;
    /*En el caso de que el carrito esté vacío, hacemos un push sin comprobar que el evento exista con anterioridad*/
    if(this.cart.length === 0){
      this.addFirstSession(date);
    }else{
      this.addMoreSessions(date);
    }

  }
  
  /*Creamos el objeto para añadirlo al carrito*/
  addFirstSession(date: string){
    const firstSessionCart = {
      eventInfo: this.eventSessions.event,
      sessions:[
        {
          date: date,
          quantity: 1,
        }
    ]
      
    }

    this.cart.push(firstSessionCart)
  }


  addMoreSessions(date: string) {
    var sessionFind = session => session.eventInfo.id == this.eventSessions.event.id;
    var index = 0;
    /* Buscamos si en el carrito ya está el evento añadido, en el caso de que lo esté, recogemos el índice para modificar cantidades
    o en su defecto añadir la nueva fecha */
    if(this.cart.find(sessionFind)){
      index = this.cart.findIndex(sessionFind);
      this.searchSameDate(date, index);
    }else{
      this.addFirstSession(date)
    }
  }

  /*Función para buscar si la sesión (fecha) ya está añadida*/
  searchSameDate(date, cartIndex){
    var dateFind = session => session.date == date;
    var dateIndex = 0;

    //Si ya existe, sumamos 1 a la cantidad, si no, vamos a la función para meter otra sesión
    if(this.cart[cartIndex].sessions.find(dateFind)){
      dateIndex = this.cart[cartIndex].sessions.findIndex(dateFind);
      this.cart[cartIndex].sessions[dateIndex].quantity ++;
    }else{
      this.addNewSesionDate(date, cartIndex, dateIndex);
    }

    
  }
  
  //Creamos el objeto a añadir y lo añadimos dentro del evento que es
  addNewSesionDate(date: string, cartIndex: string, dateIndex: number){
    const newSession = {
      date: date,
      quantity: 1,
    }

    this.cart[cartIndex].sessions.push(newSession)
  }
  

  deleteFromList(date: string, i?: string){
    //Volver a poner disponibilidad
    this.eventSessions.sessions[i].availability++;


    //Eliminarlo del carrito
    this.cartQuantity[i]--;
    var indexSession;
    indexSession = this.cart[this.indexEvento].sessions.findIndex(session => session.date == date)

    if(this.cart[this.indexEvento].sessions[indexSession].quantity > 1){
      this.cart[this.indexEvento].sessions[indexSession].quantity--
    }else{
      if(indexSession > -1){
        this.cart[this.indexEvento].sessions.splice(indexSession,1)
      }

    if(this.cart[this.indexEvento].sessions.length == 0){
      this.cart = [];
    }
    }
  }

  //Función para borrar una sesión del carrito.
  deleteFromCart(event){
    //Conseguimos saber en que posición de la lista está
    var indexSession = this.eventSessions.sessions.findIndex(session => session.date == event.date);

  //Reutilizamos la misma función que se usa para eliminar desde la propia lista
    if(this.eventSessions.event.id == event.id){
      this.deleteFromList(event.date, indexSession.toString())
    }else{
      alert('diferente')
    }
  }

  backButton(){
    this.router.navigate(['home']);
  }
}
