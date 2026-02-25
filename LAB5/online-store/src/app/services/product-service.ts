import { Injectable } from '@angular/core';
import { Product } from '../modeles/product.model';
import { Category } from '../modeles/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  categories = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    // Smartphones (categoryId: 1)
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes: 1022,
      categoryId: 1
    },
    {
      id: 2,
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000',
      likes: 858,
      categoryId: 1
    },
    {
      id: 3,
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-goluboi-113137931/?c=750000000',
      likes: 492,
      categoryId: 1
    },
    {
      id: 4,
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
      likes: 2340,
      categoryId: 1
    },
    {
      id: 5,
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000',
      likes: 1712,
      categoryId: 1
    },
    // 5 laptops (categoryId: 2)
    {
      id: 6,
      name: 'pple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб',
      description: `Apple MacBook Air 13 2025 — это ультратонкий и легкий ноутбук с мощным процессором,
                    ярким дисплеем и длительным временем автономной работы, идеально подходящий для повседневных задач и творчества.`,
      price: 523993,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/pc0/35723930.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
      likes: 122,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Apple MacBook Pro 16 2021 16.2" / 32 Гб / SSD 512 Гб ',
      description: `Apple MacBook Pro 16 2021 — это мощный профессиональный ноутбук с процессором M1 Pro, 
                    ярким дисплеем Liquid Retina XDR и отличной производительностью для работы с тяжелыми задачами.`,
      price: 699990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p7c/36863342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf9/p7c/36863343.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p31/p7d/36863345.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000',
      likes: 94,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб',
      description: `Apple MacBook Air 13 2020 — это тонкий и легкий ноутбук с процессором Intel, ярким дисплеем Retina и длительным временем автономной работы,
                    идеально подходящий для повседневных задач и творчества.`,
      price: 439969,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      likes: 585,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Ноутбук Apple MacBook Pro 16 2023 16.2" / 48 Гб / SSD 1024 Гб',
      description: `Apple MacBook Pro 16 2023 — это мощный профессиональный ноутбук с процессором M3 Pro, 
                    ярким дисплеем Liquid Retina XDR и отличной производительностью для работы с тяжелыми задачами.`,
      price: 2298500,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf8/h2e/84577772339230.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h3e/84577686388766.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/hca/84577686454302.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h80/84577686585374.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-16-2-48-gb-ssd-1024-gb-macos-muw63ru-a-114863237/?c=750000000',
      likes: 6,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Ноутбук Apple MacBook Air 15 2024 15.3" / 16 Гб / SSD 256 Гб',
      description: `Apple MacBook Air 15 2024 — это тонкий и легкий ноутбук с процессором Apple M3, ярким дисплеем Liquid Retina и отличной производительностью для повседневных задач.`,
      price: 698275,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/p15/16716534.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p14/16716539.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p09/p15/16716538.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p64/p12/16716541.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2024-15-3-16-gb-ssd-256-gb-macos-mc9d4-137243304/?c=750000000',
      likes: 1,
      categoryId: 2
    },

    // 5 headphones (categoryId: 3)
    {
      id: 11,
      name: 'Apple AirPods 4 белый',
      description: `Apple AirPods 4 — это беспроводные наушники с улучшенной эргономикой,
                    мощным звуком и длительным временем автономной работы, идеально подходящие для прослушивания музыки и общения.`,
      price: 59975,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h63/h66/64362740416542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p20/108964628.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
      likes: 3267,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Apple EarPods USB-C белый',
      description: `Apple EarPods USB-C белый — это беспроводные наушники с улучшенной эргономикой,
                    мощным звуком и длительным временем автономной работы, идеально подходящие для прослушивания музыки и общения.`,
      price: 9263,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h55/hd8/84353546846238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/ha9/84353546911774.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/h1d/84353547108382.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-usb-c-belyi-114086432/?c=750000000',
      likes: 3270,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Apple AirPods Pro 2 белый',
      description: `Apple AirPods Pro 2 белый — это беспроводные наушники с улучшенной эргономикой,
                    мощным звуком и длительным временем автономной работы, идеально подходящие для прослушивания музыки и общения.`,
      price: 149900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
      likes: 2509,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Наушники Apple AirPods 3 with Lightning Charging Case белыйНаушники Apple AirPods 3 белый',
      description: `Наушники Apple AirPods 3 with Lightning Charging Case белый — это беспроводные наушники с улучшенной эргономикой,
                    мощным звуком и длительным временем автономной работы, идеально подходящие для прослушивания музыки и общения.`,
      price: 61990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/ha4/64362737860638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h63/h66/64362740416542.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
      likes: 2413,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Наушники Apple EarPods Lightning белый',
      description: `Наушники Apple EarPods Lightning белый — это проводные наушники с разъемом Lightning,
                    обеспечивающие качественный звук и удобство использования для прослушивания музыки и общения.`,
      price: 9739,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p23/108964618.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/h9c/63764029636638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/hdb/63764030423070.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-lightning-belyi-4801876/?c=750000000',
      likes: 3007,
      categoryId: 3
    },

    // 5 tablets (categoryId: 4)
    {
      id: 16,
      name: 'Apple iPad Pro 11 2024 Wi-Fi 11 дюйм 8 Гб/256 Гб',
      description: `Apple iPad Pro 11 2024 Wi-Fi — это мощный планшет с ярким дисплеем Liquid Retina,
                    производительным процессором и поддержкой Apple Pencil для творчества и продуктивности.`,
      price: 513833,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h89/86106948272158.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hc6/86106948304926.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000',
      likes: 117,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб синий',
      description: `Apple iPad A16 11 2025 Wi-Fi — это мощный планшет с ярким дисплеем Liquid Retina,
                    производительным процессором и поддержкой Apple Pencil для творчества и продуктивности.`,
      price: 201707,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p12/37019483.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/?c=750000000',
      likes: 423,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Apple iPad Air 10.9 2022 Wi-Fi 10.9 дюйм 8 Гб/256 Гб серый',
      description: `Apple iPad Air 10.9 2022 Wi-Fi — это мощный планшет с ярким дисплеем Liquid Retina,
                    производительным процессором и поддержкой Apple Pencil для творчества и продуктивности.`,
      price: 356900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h59/hb3/86369746649118.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h6c/86369746681886.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-seryi-104235732/?c=750000000',
      likes: 204,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Apple iPad mini 8.3 2024 Wi-Fi 8.3 дюйм 8 Гб/128 Гб серый',
      description: `Apple iPad mini 8.3 2024 Wi-Fi — это компактный планшет с ярким дисплеем Liquid Retina,
                    производительным процессором и поддержкой Apple Pencil для творчества и продуктивности.`,
      price: 308089,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p45/p50/12213625.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p45/p50/12213625.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p4f/12213628.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd5/p4f/12213629.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-mini-8-3-2024-wi-fi-8-3-djuim-8-gb-128-gb-seryi-131140447/?c=750000000',
      likes: 39,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Apple iPad Pro 12.9 2022 Wi-Fi 12.9 дюйм 8 Гб/128 Гб серый',
      description: `Apple iPad Pro 12.9 2022 Wi-Fi — это мощный планшет с ярким дисплеем Liquid Retina,
                    производительным процессором и поддержкой Apple Pencil для творчества и продуктивности.`,
      price: 659985,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pa1/78319822.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/pa1/78319823.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=750000000',
      likes: 20,
      categoryId: 4
    },

  ];








  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}