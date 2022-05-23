import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EVENT_184_MOCK, EVENT_68_MOCK, GET_ALL_EVENTS_LIST_MOCK } from '../../mocks/events.mock';
import { EventDetail } from '../../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { 
  }

  
  public getAllEvents(): Observable<EventDetail[]>{

      return of(GET_ALL_EVENTS_LIST_MOCK)
  }

  public getById(id: string): Observable<any>{
    const endpoint = 'http://localhost:4000/test'
    switch(id){
      case '68':
        return of(EVENT_68_MOCK)
        break;
        
        case '184':
        // return this.http.get(endpoint);
        return of(EVENT_184_MOCK)
        break;

      default:
      return of({})

    }
  }
}
