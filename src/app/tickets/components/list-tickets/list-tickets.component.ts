import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TicketUseCaseService } from '../../../domain/tickets/application/ticket-use-case.service';
import { TicketLite } from '../../../domain/tickets/domain/ticket-resume.model';

@Component({
  selector: 'app-list-tickets',
  imports: [NzDividerModule, NzTableModule],
  templateUrl: './list-tickets.component.html',
  styleUrl: './list-tickets.component.css',
})
export class ListTicketsComponent implements OnInit {
  ticketsList: TicketLite[] = [];

  constructor(
    private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _ticketUseCaseService: TicketUseCaseService
  ) {}

  ngOnInit(): void {
    this.getTicketsByEmail('soporte@twt.com.mx');
  }

  goToDetails(event: Event, item: any): void {
    event.preventDefault();
    event.stopPropagation();

    this._router.navigate(['/tickets', 'details', item.ticket_number]);
  }

  getTicketsByEmail(email: string) {
    this._ticketUseCaseService.getTicketsByEmail(email).subscribe({
      next: (response) => {
        if (!response) return;

        const { tickets } = response.data;
        this.ticketsList = tickets;
        this._cdr.detectChanges();
      },
      error: (err) => {},
    });
  }
}
