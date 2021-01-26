import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCartHandler(product: Product) {
    this.productService.addToCart(product);
  }

}
