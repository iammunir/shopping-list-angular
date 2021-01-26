import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();

  btnColor: string = 'basic';
  btnTitle: string = 'Add to cart';
  btnIcon: string = 'add_shopping_cart';

  constructor() { }

  ngOnInit(): void {
  }

  resetButton() {
    this.btnColor = this.product.added ? 'primary' : 'basic';
    this.btnTitle = this.product.added ? 'Added to cart!' : 'Add to cart';
    this.btnIcon = this.product.added ? 'shopping_cart' : 'add_shopping_cart';
  }

  onClick(product: Product) {
    this.product.added = !this.product.added;
    this.addToCart.emit(product);
    this.resetButton();
  }

}
