import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  imports: [NzCardModule],
  templateUrl: './mainView.component.html',
  styleUrl: './mainView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
