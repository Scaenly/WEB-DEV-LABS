import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../modeles/product.model';

import { ProductCard } from '../product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {

  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb оранжевый',
      description: `Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, 
                    сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.`,
      price: 649990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 2,
      name: 'Samsung Galaxy A56 5G 8 ГБ/256 ГБ серый',
      description: `Samsung Galaxy A56 5G 8 ГБ/256 ГБ серый — это современный с отличной камерой, 
                    мощным процессором и ярким дисплеем, который подходит для повседневного использования.`,
      price: 209100,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p49/pa1/30496240.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/pa0/30496244.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-zelenyi-136419901/?c=750000000'
    },

    {
      id: 3,
      name: 'Apple iPhone 16 128Gb белый',
      description: `Apple iPhone 16 128Gb белый — это стильный и мощный смартфон, который предлагает высокую производительность,
                    улучшенную камеру и яркий дисплей для комфортного использования в повседневной жизни.`,
      price: 444956,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h79/87295471157278.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h66/h8f/87295471190046.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/hc0/87295471222814.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000'
    },

    {
      id: 4,
      name: 'Apple iPhone 15 256Gb голубой',
      description: `Apple iPhone 15 256Gb голубой — это современный смартфон, который сочетает в себе стильный дизайн, 
                    мощную производительность и улучшенную камеру для создания потрясающих фотографий и видео.`,
      price: 379990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h93/86303746392094.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hab/h93/86303746392094.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h34/83559339261982.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h21/83559332380702.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-goluboi-113137931/?c=750000000'
    },

    {
      id: 5,
      name: 'Samsung Galaxy S24 FE 5G 8 ГБ/128 ГБ черный',
      description: `Samsung Galaxy S24 FE 5G — это доступный флагман с мощным процессором, ярким AMOLED-дисплеем 
                    и продвинутой камерой, идеальный выбор для тех, кто ценит качество по разумной цене.`,
      price: 258930,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdb/p79/1610315.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbe/p79/1610316.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfe/p76/1610320.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-128-gb-chernyi-128143528/?c=750000000'
    },

    {
      id: 6,
      name: 'Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ темно-черный',
      description: `Samsung Galaxy S25 Ultra — это топовый флагман с передовым процессором, 
                    профессиональной камерой на 200 МП и встроенным S Pen для максимальной продуктивности.`,
      price: 593450,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/pcf/20117665.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/pcf/20117666.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/pcf/20117668.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p84/pd2/20117670.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-temno-chernyi-133434571/?c=750000000'
    },

    {
      id: 7,
      name: 'Apple iPhone 15 Pro Max 256Gb серый',
      description: `Apple iPhone 15 Pro Max — это мощнейший Apple с чипом A17 Pro, 
                    титановым корпусом и продвинутой камерой с 5x оптическим зумом.`,
      price: 729334,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p35/p4d/29468313.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h6f/86319874408478.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
    },

    {
      id: 8,
      name: 'Apple iPhone 13 128Gb розовый',
      description: `Apple iPhone 13 — это проверенный временем с чипом A15 Bionic, 
                    отличной камерой и стильным дизайном в красивом розовом цвете.`,
      price: 320375,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h89/hd5/64000136019998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/64000138313758.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000'
    },

    {
      id: 9,
      name: 'Apple iPhone 16 Pro 128Gb Dual eSim черный',
      description: `Apple iPhone 16 Pro — новейший флагман Apple с чипом A18 Pro, 
                    улучшенной камерой с управлением захватом и поддержкой Apple Intelligence.`,
      price: 697699,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h9f/87310433419294.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h9f/87310433419294.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/hed/87310433484830.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/h3c/87310433550366.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-dual-esim-chernyi-124338132/?c=750000000'
    },

    {
      id: 10,
      name: 'Apple iPhone 16 128Gb фиолетовый',
      description: `Apple iPhone 16 — это стильный с чипом A18, 
                    кнопкой управления камерой и поддержкой Apple Intelligence в красивом фиолетовом цвете.`,
      price: 440462,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h64/87295472042014.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h64/87295472042014.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h4f/87295472074782.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hf1/87295472107550.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-fioletovyi-123727182/?c=750000000'
    }
  ];
}