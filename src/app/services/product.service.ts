import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  subject: Subject<Product> = new Subject();

  products: Product[] = [
    new Product('PR11', 'Kokorowatari', 444, 
      'https://i.imgur.com/POR1PVd.jpg', 
      'Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.'),
    new Product('PR12', 'Star Platinum', 555,
      'https://i.imgur.com/cdJ6GDW.jpg', 
      'Star Platinum is the Stand of Kujo Jotaro. It has long, flowing hair, and resembling a tall, well-built man. It is silent, except when it throws punches, during which it cries "ORAORAORA" loudly and repeatedly.'),
    new Product('PR13', 'The World', 500, 
      'https://i.imgur.com/3KBm7hK.jpg', 
      'The pineapple (Ananas comosus) is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries. The introduction of the pineapple to Europe in the 17th century made it a significant cultural icon of luxury.'),
    new Product('PR14', '3D Maneuver Gear', 200, 
      'https://i.imgur.com/9E0Agn2.jpg',
      'The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility.The equipment enables the user to fight in a 3D space as opposed to a 2D one.The equipment itself takes the form of a body harness that encompasses much of the body below the neck.'),
    new Product('PR15', 'Excalibur', 300, 
      'https://i.imgur.com/nutN73L.jpg',
      'Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur.As that which can be called the physical actualization of her ideals and the symbol of her heroism,it is her greatest and most powerful Noble Phantasm.'),
    new Product('PR16', 'Dragon Slayer', 450, 
      'https://i.imgur.com/WPdYq5Z.jpg',
      'It was too big to be called a sword. Massive, thick, heavy, and far too rough.Indeed, it was a heap of raw iron.The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.'),
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addToCart(product: Product): void {
    this.subject.next(product);
  }

  getProduct(): Observable<Product> {
    return this.subject.asObservable();
  }

}
