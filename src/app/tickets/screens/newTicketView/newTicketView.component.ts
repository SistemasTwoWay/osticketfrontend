import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateTicketComponent } from '../../components/create-ticket/create-ticket.component';

@Component({
  selector: 'app-new-ticket-view',
  imports: [CreateTicketComponent],
  templateUrl: './newTicketView.component.html',
  styleUrl: './newTicketView.component.css',
})
export class NewTicketViewComponent {}
