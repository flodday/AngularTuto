import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {DummyComponent} from './component/dummy/dummy.component';

@Component({
  selector: 'crm-root',
  imports: [RouterOutlet, HeaderComponent, DummyComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCRM';
  content = 'Hello, CCI !';

  handleClick(event: string): void {
    console.log(event);
  }
}
