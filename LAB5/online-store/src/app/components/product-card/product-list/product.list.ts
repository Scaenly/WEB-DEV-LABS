import { CommonModule } from '@angular/common';
import { Component, input, signal, effect } from '@angular/core';
import { Product } from '../../../modeles/product.model';               // ✅ к modeles (на 3 вверх)
import { ProductItemComponent } from '../../product-item/product-item'; // ✅ к product-item (на 2 вверх)

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();
  productList = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.productList.set([...this.products()]);
    });
  }

  onDelete(id: number) {
    this.productList.update(list => list.filter(p => p.id !== id));
  }
}