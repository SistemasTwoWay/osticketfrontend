import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class TicketDetailsViewComponent implements OnInit {
  number!: string;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.number = this._route.snapshot.paramMap.get('number')!;
    console.log(this.number);
  }
}
