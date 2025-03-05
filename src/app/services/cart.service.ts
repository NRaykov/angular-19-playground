import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    {
      id: 1,
      title: 'Red Handbag',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 100,
      stock: 10
    },
    {
      id: 2,
      title: 'Brown Handbag - Leather',
      image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 200,
      stock: 100
    },
  ]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]); 
  }

  removeToCart(id: number) {
    this.cart.set(this.cart().filter(p => p.id !== id));
  }

  constructor() { }
}
