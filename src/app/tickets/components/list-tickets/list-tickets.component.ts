import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

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
export class ListTicketsComponent {
  ticketsList: Tickets[] = [
    {
      userId: 3,
      address: "soporte@twt.com.mx",
      ticket_id: 3,
      ticket_number: "526890",
      status_name: "Open",
      subject: "Queja",
    },
    {
      userId: 3,
      address: "soporte@twt.com.mx",
      ticket_id: 6,
      ticket_number: "543258",
      status_name: "Open",
      subject: "Prueba de tipo de Ticket",
    },
    {
      userId: 3,
      address: "soporte@twt.com.mx",
      ticket_id: 18,
      ticket_number: "859629",
      status_name: "Open",
      subject: "PRUEBA DE INGRESO DE CORREOS",
    },
    {
      userId: 3,
      address: "soporte@twt.com.mx",
      ticket_id: 22,
      ticket_number: "770979",
      status_name: "Open",
      subject: "prueba envio de correo",
    },
  ]
}
