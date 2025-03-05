import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products = signal<Product[]>([
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
    {
      id: 3,
      title: 'Black Handbag - Leather',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 300,
      stock: 0
    },
    {
      id: 4,
      title: 'Black Handbag - Ameli',
      image: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 500,
      stock: 10
    }
  ]);

}
