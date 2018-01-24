import { UtilityService } from './shared/services/utility.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common/src/common_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private util:UtilityService){}
}
