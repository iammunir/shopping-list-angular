import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


import { CartItem } from 'src/app/models/CartItem';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartTotal: number = 0;
  limitPrice: number = 1000;

  constructor(private productService: ProductService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((product: Product) => {
      this.processProduct(product);
    });
  }

  processProduct(product: Product) {
    const item = new CartItem(product.id, product.name, product.price);

    const productMaybe = this.cartItems.find(it => it.id === item.id);
    if (productMaybe) {
      this.cartItems = this.cartItems.filter(prod => prod.id !== productMaybe.id);      
    } else {
      this.cartItems.push(item);
    }
    
    this.cartTotal = this.cartItems.reduce((acc, curr) => acc + curr.price, 0);
  }

  processTransaction() {
    if (this.cartTotal > this.limitPrice) {
      this.openSnackBar('You don\'t have enough money!', 'OK!');
    } else if (this.cartTotal === 0) {
      this.openSnackBar('Please buy something!', 'OK!');
    } else {
      this.openSnackBar('Transaction success!', 'OK!');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
