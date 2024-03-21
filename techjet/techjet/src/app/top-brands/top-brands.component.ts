import { Component } from '@angular/core';

@Component({
  selector: 'app-top-brands',
  templateUrl: './top-brands.component.html',
  styleUrl: './top-brands.component.css'
})
export class TopBrandsComponent {
  brands = [
    { imageUrl: 'assets/brands/acer.webp', name: 'Acer', link: 'your-brand-link-1' },
    { imageUrl: 'assets/brands/amd.webp', name: 'AMD', link: 'your-brand-link-2' },
    { imageUrl: 'assets/brands/apple.webp', name: 'Apple', link: 'your-brand-link-3' },
    { imageUrl: 'assets/brands/asus.webp', name: 'Asus', link: 'your-brand-link-4' },
    { imageUrl: 'assets/brands/dell.webp', name: 'Dell', link: 'your-brand-link-5' },
    { imageUrl: 'assets/brands/hp.webp', name: 'HP', link: 'your-brand-link-6' },
    { imageUrl: 'assets/brands/intel.webp', name: 'Intel', link: 'your-brand-link-6' },
    { imageUrl: 'assets/brands/lenovo.webp', name: 'Lenovo', link: 'your-brand-link-6' },
    { imageUrl: 'assets/brands/microsoft.webp', name: 'Microsoft', link: 'your-brand-link-6' },
    { imageUrl: 'assets/brands/msi.webp', name: 'Msi', route: '/brand/msi' },
    // Add more objects representing other brands
  ];
}
