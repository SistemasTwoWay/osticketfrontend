import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TopicsUseCaseService } from '../../../domain/topics/application/topics-use-case.service';
import { Topic } from '../../../domain/topics/domain/topics.model';
import { Department } from '../../../domain/departments/domain/department.model';
import { Priority } from '../../../domain/priorities/domain/priority.model';
import { Status } from '../../../domain/status/domain/status.model';
import { PrioritiesUseCaseService } from '../../../domain/priorities/application/priorities-use-case.service';
import { StatusUseCaseService } from '../../../domain/status/application/status-use-case.service';
import { DepartmentUseCaseService } from '../../../domain/departments/application/department-use-case.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-ticket',
  imports: [
    CommonModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTicketComponent implements OnInit {
  public formTicket = new FormGroup({
    title: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    fullNameUser: new FormControl('', [Validators.required]),
    emailUser: new FormControl('', [Validators.required, Validators.email]),
    phoneUser: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    notes: new FormControl(''),
    priority: new FormControl('', [Validators.required]),
    status: new FormControl(''),
    topic: new FormControl('', [Validators.required]),
  });

  public topicsList: Topic[] = [];
  public departmentsList: Department[] = [];
  public prioritiesList: Priority[] = [];
  public statusList: Status[] = [];

  public options: string[] = [];

  constructor(
    private _departmentsUseCaseService: DepartmentUseCaseService,
    private _prioritiesUseCaseService: PrioritiesUseCaseService,
    private _statusUseCaseService: StatusUseCaseService,
    private _topicsUseCaseService: TopicsUseCaseService
  ) {}
  ngOnInit(): void {
    this.syncData();
  }

  public syncData(event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();

    this.getAllTopics();
    this.getAllDepartments();
    this.getAllPriorities();
    this.getAllStatus();
  }

  private getAllTopics() {
    this._topicsUseCaseService
      .getAllTopics({
        query: 'topics',
        condition: 'all',
      })
      .subscribe({
        next: (response) => {
          const { topics } = response.data;
          this.topicsList = topics;
        },
      });
  }

  private getAllDepartments() {
    this._departmentsUseCaseService
      .sortBy({
        condition: 'all',
        query: 'department',
        sort: 'name',
      })
      .subscribe({
        next: (response) => {
          const { departments } = response.data;
          this.departmentsList = departments;
        },
      });
  }

  private getAllPriorities() {
    this._prioritiesUseCaseService
      .getAllPriorities({
        query: 'ticketPriority',
        condition: 'all',
      })
      .subscribe({
        next: (response) => {
          const { ticket_priority } = response.data;
          this.prioritiesList = ticket_priority;
        },
      });
  }

  private getAllStatus() {
    this._statusUseCaseService
      .getAllStatus({
        query: 'ticketStatus',
        condition: 'all',
      })
      .subscribe({
        next: (response) => {
          const { ticket_status } = response.data;
          this.statusList = ticket_status;
        },
      });
  }
}
