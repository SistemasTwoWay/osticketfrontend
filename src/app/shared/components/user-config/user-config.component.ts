import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DepartmentUseCaseService } from '../../../domain/departments/application/department-use-case.service';
import { Department } from '../../../domain/departments/domain/department.model';
import { NotifyService } from '../../services/notify.service';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-user-config',
  imports: [
    NzButtonModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzModalModule,
    NzSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-config.component.html',
  styleUrl: './user-config.component.css',
})
export class UserConfigComponent implements OnInit {
  public formUserConfig = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    department: new FormControl(''),
  });

  public isVisible: boolean = false;
  public isConfirmLoading: boolean = false;
  public departmentsList: Department[] = [];

  constructor(
    private _departmentsUseCaseService: DepartmentUseCaseService,
    private _notifyService: NotifyService
  ) {
    this.getAllDepartments();
  }

  ngOnInit(): void {
    this.verifyUserConfig();
  }

  private showNotif(
    type: 'success' | 'info' | 'warning' | 'error' | 'blank',
    content: string
  ) {
    this._notifyService.showNotification(type, 'Notification', content);
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

  private verifyUserConfig() {
    const userConfig = localStorage.getItem('userConfig');
    if (!userConfig) {
      return;
    }

    const userConfigParsed = JSON.parse(userConfig);

    if (userConfigParsed) {
      this.formUserConfig.patchValue({
        fullName: userConfigParsed.fullName,
        email: userConfigParsed.email,
        phone: userConfigParsed.phone,
        department: userConfigParsed.department,
      });
    }
  }

  public showModal(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.isVisible = true;
    this.verifyUserConfig();
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.formUserConfig.invalid) {
      this.showNotif(
        'error',
        'Por favor, completa al menos los campos requeridos (Nombre y Correo electrónico).'
      );
      this.formUserConfig.markAllAsTouched();
      return;
    }

    this.isConfirmLoading = true;
    this.saveUserConfig();
  }

  private saveUserConfig() {
    const departmentId = Number(this.formUserConfig.value.department);
    const department = this.departmentsList.find(
      (dep) => dep.department_id === departmentId
    );

    const userConfig = {
      fullName: this.formUserConfig.value.fullName,
      email: this.formUserConfig.value.email,
      phone: this.formUserConfig.value.phone,
      department: department,
    };

    localStorage.setItem('userConfig', JSON.stringify(userConfig));
    this.showNotif(
      'success',
      'Configuración de usuario guardada correctamente.'
    );
    this.isVisible = false;
    this.isConfirmLoading = false;
    this.formUserConfig.reset();
  }
}
