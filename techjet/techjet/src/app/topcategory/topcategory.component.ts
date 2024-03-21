import { Component } from '@angular/core';

@Component({
  selector: 'app-topcategory',
  templateUrl: './topcategory.component.html',
  styleUrl: './topcategory.component.css'
})
export class TopcategoryComponent {

  categories = [
    { imageUrl: 'assets/catagory/Laptop.svg', title: 'Laptop', link: 'https://www.ryanscomputers.com/category/laptop-all-laptop' },
    { imageUrl: 'assets/catagory/Processor.svg', title: 'Processor', link: 'https://www.ryanscomputers.com/category/laptop-all-laptop' },
    { imageUrl: 'assets/catagory/all-in-one.svg', title: 'Aio', link: 'https://www.ryanscomputers.com/category/laptop-all-laptop' },
    { imageUrl: 'assets/catagory/speaker.svg', title: 'Speaker', link: 'https://www.ryanscomputers.com/category/laptop-all-laptop' },
    { imageUrl: 'assets/catagory/Monitor.svg', title: 'Monitor', link: 'https://www.ryanscomputers.com/category/laptop-all-laptop' },
    { imageUrl: 'assets/catagory/Laptop.svg', title: 'Laptop', link: 'https://www.ryanscomputers.com/category/laptop-all-laptop' },
    { imageUrl: 'assets/catagory/printer.svg', title: 'Printer', link: 'https://www.ryanscomputers.com/category/laptop-all-laptop' },
    { imageUrl: 'assets/catagory/GPU.svg', title: 'Gpu', link: 'https://www.ryanscomputers.com/category/laptop-all-laptop' },
    { imageUrl: 'assets/catagory/camera.svg', title: 'Camera', link: 'https://www.ryanscomputers.com/category/laptop-all-laptop' },
    { imageUrl: 'assets/catagory/Laptop.svg', title: 'Laptop', link: 'https://www.ryanscomputers.com/category/laptop-all-laptop' },
    // Add more objects representing other categories
  ];
}
