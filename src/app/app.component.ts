import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { LoaderService } from './shared/services/loader.service';
import { UserConfigComponent } from './shared/components/user-config/user-config.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    RouterLink,
    RouterOutlet,
    SpinnerComponent,
    UserConfigComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private _loaderService = inject(LoaderService);

  public sidebarOpen: boolean = false;
  public showLoading: boolean = false;

  public currentYear: number = new Date().getFullYear();
  public isLoading$ = this._loaderService.isLoading$;
  public userEmail: string = '';

  constructor(private route: ActivatedRoute) {
    this.isLoading$.subscribe({
      next: (isLoading) => {
        this.showLoading = isLoading;
      },
    });

    this.route.queryParams.subscribe((params) => {
      const email = params['email'];
      if (email) this.saveAndVerifyEmail(email);
    });

    this.verifyUserConfig();
  }

  private verifyUserConfig() {
    //TODO: verificar que haya datos en el localStorage
    const userConfig = localStorage.getItem('userConfig');
    if (!userConfig) {
      return;
    }

    const userConfigParsed = JSON.parse(userConfig);
    if (userConfigParsed) {
      this.userEmail = userConfigParsed.email;
    }
  }

  private saveAndVerifyEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) return;

    const userConfig = {
      email: email,
      fullName: '',
      phone: '',
      department: '',
    };
    localStorage.setItem('userConfig', JSON.stringify(userConfig));

    this.userEmail = email;
  }
}
