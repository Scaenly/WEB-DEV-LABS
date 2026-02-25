import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ProductListComponent } from './components/product-card/product-list/product.list'; // ✅ правильный путь
import { Category } from './modeles/category.model';
import { Product } from './modeles/product.model'; // ✅ у тебя было из category.model — это ошибка
import { ProductService } from './services/product-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent], // ✅ если standalone
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  categories: Category[] = [];
  selectedProducts: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.selectedProducts = this.productService.getProductsByCategory(categoryId);
  }
}