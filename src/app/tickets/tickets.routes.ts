import { Routes } from '@angular/router';

export const TICKET_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./screens/mainView/mainView.component').then(
            (c) => c.MainViewComponent
          ),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./screens/newTicketView/newTicketView.component').then(
            (c) => c.NewTicketViewComponent
          ),
      },
      {
        path: 'list',
        loadComponent: () =>
          import('./screens/listTicketsView/listTicketsView.component').then(
            (c) => c.ListTicketsViewComponent
          ),
      },
      {
        path: 'details/:number',
        loadComponent: () =>
          import('./screens/ticket-details-view/ticket-details-view.component').then(
            (c) => c.TicketDetailsViewComponent
          ),
      }
    ],
  },
];
