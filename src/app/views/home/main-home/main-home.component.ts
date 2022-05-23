import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EventDetail } from 'src/app/shared/models/event.model';
import { EventsService } from 'src/app/shared/services/events/events.service';
import {  takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  eventList: EventDetail[]

  constructor(    
    private _eventsService: EventsService,
    ) { }

  ngOnInit(): void {
    //Nada más entrar, hace la consulta de todos los eventos y los guarda en una variable
    this.getAllEvents();
  }

  getAllEvents(){
    this._eventsService.getAllEvents().pipe(takeUntil(this.destroy$)).subscribe((data: EventDetail[]): void => {
      this.eventList = data
    })
    //Los ordenamos por fecha
    this.eventList.sort(function(a,b){
      return parseInt(a.endDate) - parseInt(b.endDate);
    });
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
