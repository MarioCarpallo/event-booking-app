import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class EventsResolverService implements Resolve<Observable<string>>{

  results$: Observable<any>;
  constructor(
    private _eventsService: EventsService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const id = route.paramMap.get('id');
    this.results$ = this._eventsService.getById(id);
    return this.results$;
  }
}
