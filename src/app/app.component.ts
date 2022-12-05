import { LoginService } from './services/login.service';
import { ShoppingService } from './services/shopping.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer: any;

  constructor(public shoppingService: ShoppingService, public loginService: LoginService) {}

  closeDrawer(event: any) {
    this.drawer.toggle();
  }
}
