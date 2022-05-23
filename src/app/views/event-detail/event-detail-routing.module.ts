import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsResolverService } from 'src/app/shared/services/events/events-resolver.service';
import { EventDetailComponent } from './main-event-detail/event-detail.component';


const routes = [{
    path: ':id',
    resolve: {detail: EventsResolverService},
    component: EventDetailComponent,
    data: { title: 'Eventos - Detalle de Evento'}
}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailRoutingModule { }
