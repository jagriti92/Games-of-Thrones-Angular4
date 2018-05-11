import { Component, Pipe } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
