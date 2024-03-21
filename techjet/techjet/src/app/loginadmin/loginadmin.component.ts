import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrl: './loginadmin.component.css'
})
export class LoginadminComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    // Implement your authentication logic here
    if (this.username === 'sabit' && this.password === '123456') {
      this.router.navigate(['/admin-pannel']);
    } else {
      // Handle incorrect credentials
      console.log('Invalid credentials. Please try again.');
    }
  }
}
