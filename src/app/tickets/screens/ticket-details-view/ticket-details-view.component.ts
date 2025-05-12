import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import {
  NzDescriptionsModule,
  NzDescriptionsSize,
} from 'ng-zorro-antd/descriptions';
import { TicketLite } from '../../../domain/tickets/domain/ticket-resume.model';
import { CommonModule } from '@angular/common';
import {
  getPriorityClass,
  getStatusClass,
} from '../../../shared/helpers/color-tickets';
import { TicketDataDescriptionComponent } from '../../components/ticket-data-description/ticket-data-description.component';

@Component({
  selector: 'app-ticket-details-view',
  imports: [TicketDataDescriptionComponent],
  templateUrl: './ticket-details-view.component.html',
  styleUrl: './ticket-details-view.component.css',
})
export class TicketDetailsViewComponent implements OnInit {
  number!: string;
  ticket!: TicketLite;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.number = this._route.snapshot.paramMap.get('number')!;
  }
}
