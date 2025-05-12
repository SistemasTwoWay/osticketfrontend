import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketDataDescriptionComponent } from '../../components/ticket-data-description/ticket-data-description.component';
import { TicketData } from '../../../domain/tickets/domain/ticket-data.model';
import { TicketUseCaseService } from '../../../domain/tickets/application/ticket-use-case.service';

@Component({
  selector: 'app-ticket-details-view',
  imports: [
    TicketDataDescriptionComponent,
  ],
  templateUrl: './ticket-details-view.component.html',
  styleUrl: './ticket-details-view.component.css'
})
export class TicketDetailsViewComponent implements OnInit {
  number!: string;
  ticket!: TicketData;

  constructor(
    private _route: ActivatedRoute,
    private _ticketUseCaseService: TicketUseCaseService
  ) {}

  ngOnInit(): void {
    this.number = this._route.snapshot.paramMap.get('number')!;
    this.getTicketDetails(this.number);
  }

  getTicketDetails(number: string) {
    this._ticketUseCaseService.getTicketDetailsByNumber(number).subscribe({
      next: (response) => {
        if (!response) return;

        const {ticket} = response.data;

        this.ticket = ticket;
      },
      error: () => {}
    })
  }
}
