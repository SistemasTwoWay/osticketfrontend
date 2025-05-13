import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-spinner',
  imports: [NzSpinModule],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {}
