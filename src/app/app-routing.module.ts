import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailModule } from './views/event-detail/event-detail.module';
import { HomeModule } from './views/home/home.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    data: {title: 'Eventos - Venta de tickets Online'}
  },
  {
    path: 'event-detail',
    loadChildren: () => import('./views/event-detail/event-detail.module').then(m => m.EventDetailModule),
    data: {title: 'Eventos - Venta de tickets Online'}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**', 
    redirectTo: '/home'
  }
];

HomeModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
