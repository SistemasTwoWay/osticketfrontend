import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { LoaderService } from './shared/services/loader.service';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private _loaderService = inject(LoaderService);

  public isCollapsed: boolean = false;
  public showLoading: boolean = false;
  public currentYear: number = new Date().getFullYear();
  public isLoading$ = this._loaderService.isLoading$;

  constructor(private cdr: ChangeDetectorRef) {
    this.isLoading$.subscribe({
      next: (isLoading) => {
        this.showLoading = isLoading;
        this.cdr.detectChanges();
      },
    });
  }
}
