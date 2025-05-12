import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListTicketsComponent } from '../../components/list-tickets/list-tickets.component';

@Component({
  selector: 'app-list-tickets-view',
  imports: [
    ListTicketsComponent,
  ],
  templateUrl: './listTicketsView.component.html',
  styleUrl: './listTicketsView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTicketsViewComponent { }
