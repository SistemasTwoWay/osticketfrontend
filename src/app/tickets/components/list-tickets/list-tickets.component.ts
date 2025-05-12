import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TicketUseCaseService } from '../../../domain/tickets/application/ticket-use-case.service';
import { TicketResume } from '../../../domain/tickets/domain/ticket-resume.model';

interface Tickets {
  userId: number;
  address: string;
  ticket_id: number;
  ticket_number: string;
  status_name: string;
  subject: string;
}

@Component({
  selector: 'app-list-tickets',
  imports: [
    NzDividerModule,
    NzTableModule
  ],
  templateUrl: './list-tickets.component.html',
  styleUrl: './list-tickets.component.css'
})
export class ListTicketsComponent implements OnInit {
  ticketsList: TicketResume[] = [];
  // [
  //   {
  //     userId: 3,
  //     address: "soporte@twt.com.mx",
  //     ticket_id: 3,
  //     ticket_number: "526890",
  //     status_name: "Open",
  //     subject: "Queja",
  //   },
  //   {
  //     userId: 3,
  //     address: "soporte@twt.com.mx",
  //     ticket_id: 6,
  //     ticket_number: "543258",
  //     status_name: "Open",
  //     subject: "Prueba de tipo de Ticket",
  //   },
  //   {
  //     userId: 3,
  //     address: "soporte@twt.com.mx",
  //     ticket_id: 18,
  //     ticket_number: "859629",
  //     status_name: "Open",
  //     subject: "PRUEBA DE INGRESO DE CORREOS",
  //   },
  //   {
  //     userId: 3,
  //     address: "soporte@twt.com.mx",
  //     ticket_id: 22,
  //     ticket_number: "770979",
  //     status_name: "Open",
  //     subject: "prueba envio de correo",
  //   },
  // ]

  constructor(
    private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _ticketUseCaseService: TicketUseCaseService
  ) {}
  ngOnInit(): void {
    this.getTicketsByEmail("soporte@twt.com.mx")
  }

  goToDetails(event: Event, item: any): void {
    event.preventDefault();
    event.stopPropagation();

    this._router.navigate(['/tickets', 'details', item.ticketNumber])
  }

  getTicketsByEmail(email: string) {
    this._ticketUseCaseService.getTicketsByEmail(email).subscribe({
      next: (tickets) => {
        this.ticketsList = tickets;
        this._cdr.detectChanges();
      },
      error: (err) => {},
    })
  }
}
