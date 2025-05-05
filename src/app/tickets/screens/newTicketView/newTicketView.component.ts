import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-ticket-view',
  imports: [],
  templateUrl: './newTicketView.component.html',
  styleUrl: './newTicketView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTicketViewComponent { }
