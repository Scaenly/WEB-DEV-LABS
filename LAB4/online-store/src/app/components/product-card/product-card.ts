import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../modeles/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {

  @Input() product!: Product;

  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Check out this product: ' + this.product.link
    )}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}