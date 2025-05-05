import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-tickets-view',
  imports: [],
  templateUrl: './listTicketsView.component.html',
  styleUrl: './listTicketsView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTicketsViewComponent { }
