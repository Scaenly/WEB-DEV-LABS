import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../modeles/product.model';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  // input() — получаем продукт от ProductListComponent
  product = input.required<Product>();

  // output() — отправляем id удаляемого продукта в ProductListComponent
  deleteProduct = output<number>();

  likeProduct(): void {
    this.product().likes++;
  }

  onDelete(): void {
    this.deleteProduct.emit(this.product().id);
  }

  setMainImage(image: string): void {
    this.product().image = image;
  }

  shareWhatsApp(): void {
    const text = `Check out this product: ${this.product().link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareTelegram(): void {
    const p = this.product();
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`,
      '_blank'
    );
  }
}