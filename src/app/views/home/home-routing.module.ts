import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';


const routes = [{
    path: '',
    component: MainHomeComponent,
    data: { title: 'Eventos - Venta de tickets Online'}
}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
