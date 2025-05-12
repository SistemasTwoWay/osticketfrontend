import { Component, OnInit } from '@angular/core';
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
import { NotifyService } from '../../../shared/services/notify.service';
import { NzNotificationContentType } from 'ng-zorro-antd/notification';
import { TicketCreate } from '../../../domain/tickets/domain/ticket-create.model';
import { TicketUseCaseService } from '../../../domain/tickets/application/ticket-use-case.service';
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
    private _notifyService: NotifyService,
    private _prioritiesUseCaseService: PrioritiesUseCaseService,
    private _statusUseCaseService: StatusUseCaseService,
    private _ticketUseCaseService: TicketUseCaseService,
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

  private showNotif(
    type: 'success' | 'info' | 'warning' | 'error' | 'blank',
    content: string
  ) {
    this._notifyService.showNotification(type, 'Notification', content);
  }

  private getAllTopics() {
    this._topicsUseCaseService
      .getAllTopics({
        condition: 'all',
        query: 'topics',
      })
      .subscribe({
        next: (response) => {
          const { topics } = response.data;
          this.topicsList = topics;
        },
        error: (err) => {
          this.showNotif(
            'error',
            err?.error.message ||
              err?.message ||
              'Algo salió mal cuando se intentó cargar los temas'
          );
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
        error: (err) => {
          this.showNotif(
            'error',
            err?.error.message ||
              err?.message ||
              'Algo salió mal cuando se intentó cargar los departamentos'
          );
        },
      });
  }

  private getAllPriorities() {
    this._prioritiesUseCaseService
      .getAllPriorities({
        condition: 'all',
        query: 'ticketPriority',
      })
      .subscribe({
        next: (response) => {
          const { ticket_priority } = response.data;
          this.prioritiesList = ticket_priority;
        },
        error: (err) => {
          this.showNotif(
            'error',
            err?.error.message ||
              err?.message ||
              'Algo salió mal cuando se intentó cargar las prioridades'
          );
        },
      });
  }

  private getAllStatus() {
    this._statusUseCaseService
      .getAllStatus({
        condition: 'all',
        query: 'ticketStatus',
      })
      .subscribe({
        next: (response) => {
          const { ticket_status } = response.data;
          this.statusList = ticket_status;
        },
        error: (err) => {
          this.showNotif(
            'error',
            err?.error.message ||
              err?.message ||
              'Algo salió mal cuando se intentó cargar los estados'
          );
        },
      });
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.formTicket.invalid) {
      this.formTicket.markAllAsTouched();
      this.showNotif(
        'error',
        'Por favor, completa todos los campos obligatorios'
      );
      return;
    }

    const data = this.mapFormValuesToTicket();
    this.createTicket(data);
  }

  private createTicket(parameters: TicketCreate): void {
    this._ticketUseCaseService
      .createTicket({
        condition: 'add',
        parameters,
        query: 'ticket',
      })
      .subscribe({
        next: (response) => {
          const { ticket_id } = response.data;
          this.showNotif(
            'success',
            `El ticket fue creado correctamente con el ID ${ticket_id}`
          );
          this.formTicket.reset();
        },
        error: (err) => {
          this.showNotif(
            'error',
            err?.error.message ||
              err?.message ||
              'Algo salió mal cuando se intentó crear el ticket'
          );
        },
      });
  }

  private mapFormValuesToTicket(): TicketCreate {
    return {
      dept_id: Number(this.formTicket.get('department')?.value!),
      full_name_user: this.formTicket.get('fullNameUser')?.value!,
      priority_id: Number(this.formTicket.get('priority')?.value!),
      sla_id: 1, //TODO: revisar bien para que es el SLA
      status_id: 1, //TODO: añadir catalogo de estados
      subject: this.formTicket.get('subject')?.value!,
      title: this.formTicket.get('title')?.value!,
      topic_id: Number(this.formTicket.get('topic')?.value!),
      user_email: this.formTicket.get('emailUser')?.value!,
      user_notes: 'test', //TODO: revisar para que sirve el user_notes
      user_phone: this.formTicket.get('phoneUser')?.value!,
    };
  }
}
