import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventDetail } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() eventDetail : EventDetail
  imageUrl: string;
  startDate: String;
  endDate: String;
  constructor(
    private router: Router) { }

  ngOnInit(): void {
    this.initVariables();
  }

  initVariables() {
    if(this.eventDetail){
      this.imageUrl = `.`+ this.eventDetail.image
      
      this.startDate = new Date(parseInt(this.eventDetail.startDate)).toLocaleDateString('es-ES');
      this.endDate = new Date(parseInt(this.eventDetail.endDate)).toLocaleDateString('es-ES');
    }
  }

  lookEvent(){
    this.router.navigate(['event-detail', this.eventDetail.id]);
  }
}
