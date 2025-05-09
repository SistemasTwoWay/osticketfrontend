import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule, NzDescriptionsSize } from 'ng-zorro-antd/descriptions'

@Component({
  selector: 'app-ticket-details-view',
  imports: [
    NzCardModule,
    NzDescriptionsModule,
  ],
  templateUrl: './ticket-details-view.component.html',
  styleUrl: './ticket-details-view.component.css'
})
export class TicketDetailsViewComponent {

}
