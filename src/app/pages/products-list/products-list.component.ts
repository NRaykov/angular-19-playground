import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products = signal<Product[]>([
    {
      id: 1,
      title: 'Product 1',
      image: 'https://via.placeholder.com/150',
      price: 100,
      stock: 10
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://via.placeholder.com/150',
      price: 200,
      stock: 100
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'https://via.placeholder.com/150',
      price: 300,
      stock: 0
    }
  ]);

}
