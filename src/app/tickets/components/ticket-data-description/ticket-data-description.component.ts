import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TicketResume } from '../../../domain/tickets/domain/ticket-resume.model';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { getPriorityClass, getStatusClass } from '../../../shared/helpers/color-tickets';

@Component({
  selector: 'app-ticket-data-description',
  imports: [
    CommonModule,
    NzCardModule,
    NzDescriptionsModule,
  ],
  templateUrl: './ticket-data-description.component.html',
  styleUrl: './ticket-data-description.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketDataDescriptionComponent { 
  @Input() ticketData!: TicketResume;

  getStatus(status: string): string {
    return getStatusClass(status);
  }

  getPriority(priotity: string): string {
    return getPriorityClass(priotity)
  }
}
