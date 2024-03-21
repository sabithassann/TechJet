import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrl: './trending-products.component.css'
})
export class TrendingProductsComponent implements OnInit{
  trendingProducts=[
    { id: 1, name: 'Apple MacBook Air (2023) Apple M2 Chip 15-Inch Liquid Retina Display 8GB RAM 512GB SSD', price: '$50', imageUrl: 'assets/feature/apple.jpg' },
    { id: 2, name: 'MSI PRO MP223 21.45" Full HD Business Monitor', price: '$60', imageUrl: 'assets/feature/monitor1.webp' },
    { id: 3, name: 'MSI MAG ARTYMIS 274CP 27" FHD 165Hz Curved FreeSync Gaming Monitor', price: '$60', imageUrl: 'assets/feature/monitor2.webp' },
    { id: 4, name: 'MSI OPTIX MAG275R2 27" FHD 170Hz IPS Gaming Monitor', price: '$60', imageUrl: 'assets/feature/monitor3.webp' },
    { id: 5, name: 'Acer Nitro QG221Q H 21.5" 100Hz Full HD Monitor', price: '$60', imageUrl: 'assets/feature/monitor4.webp' },
    { id: 6, name: 'Colorful iGame GeForce RTX 4060 Ultra W DUO OC 8GB-V GDDR6 Graphics Card', price: '$60', imageUrl: 'assets/feature/gpu1.webp' },
    { id: 7, name: 'Colorful GeForce RTX 4060 Ti NB DUO 8GB-V GDDR6 Graphics Card', price: '$60', imageUrl: 'assets/feature/gpu2.webp' },
    { id: 8, name: 'Colorful iGame GeForce RTX 4060 Ti Ultra W DUO OC 16GB-V GDDR6 Graphics Card', price: '$60', imageUrl: 'assets/feature/gpu3.webp' },
    { id: 9, name: 'Acer Aspire 7 A715-42G-R2NE Ryzen 5 5500U GTX 1650 4GB Graphics 15.6" FHD Gaming', price: '$60', imageUrl: 'assets/feature/laptop1.webp' },
    { id: 10, name: 'Acer Aspire 5 5P-A515-58P Intel Core i3 1305U 8GB RAM 512GB SSD 15.6 Inch', price: '$60', imageUrl: 'assets/feature/laptop2.webp' },
    { id: 11, name: 'Amazfit Pop 3R 1.43" AMOLED Display Bluetooth Calling Smart Watch', price: '$60', imageUrl: 'assets/feature/watch1.webp' },
    { id: 12, name: 'MSI MAG CH120 I Steel Base Gaming Chair Black', price: '$60', imageUrl: 'assets/feature/chair1.jpg' },
    { id: 13, name: 'iPhone 15 Pro Max 256GB Natural Titanium (Singapore)', price: '$60', imageUrl: 'assets/feature/phone1.jpg' },
    { id: 14, name: 'Apple iPad 10.2-Inch 9th Gen 64GB Wi-Fi Silver (MK2L3LL/A)', price: '$60', imageUrl: 'assets/feature/phone2.webp' },
    { id: 15, name: 'OnePlus 10T 5G Smartphone (16/256GB)', price: '$60', imageUrl: 'assets/feature/phone3.webp' },
    { id: 16, name: 'OnePlus Nord N20 SE Smartphone (4/128GB)', price: '$60', imageUrl: 'assets/feature/phone4.webp' },
    { id: 17, name: 'Samsung Galaxy A33 5G Smartphone (8/128GB)', price: '$60', imageUrl: 'assets/feature/phone5.webp' },
    { id: 18, name: 'Xiaomi Mi A2 L55M7-EAUKR/EAME 55-Inch 4K UltraHD Android Smart LED TV with', price: '$60', imageUrl: 'assets/feature/tv1.webp' },
  ]
  

  constructor(private router:Router){}

  ngOnInit(): void {
    
  }

}
