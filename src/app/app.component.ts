import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = ["hiring"];

  constructor(private dataService: DataService) { }

  click() {
    this.title[0] = "New hiring";
  }
}
