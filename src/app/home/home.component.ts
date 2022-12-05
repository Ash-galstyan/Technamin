import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { Item } from './home.model';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  items: Item[] = [];
  page = 0;
  searchText: string = '';
  orders = [
    { value: 'none', viewValue: 'No order' },
    { value: 'name', viewValue: 'Name: Ascending', valueProp: 'asc' },
    { value: 'name', viewValue: 'Name: Descending', valueProp: 'desc' },
    { value: 'price', viewValue: 'Price' }
  ];
  model: any = this.orders[0];
  faSearch = faSearch;

  constructor(
    public shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.shoppingService.getData(this.page).subscribe((items: any) => {
      this.items = items;
      this.page += 12;
    });
  }

  onScroll() {
    setTimeout(() => {
      this.shoppingService.getData(this.page).subscribe((items: any) => {
        this.items.push(...items);
        this.page += 10;
      });
    },500);
  }

  addToCart(item: any) {
    this.shoppingService.addToCart(item)
  }

}
