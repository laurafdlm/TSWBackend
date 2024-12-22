import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email?: string;
  password?: string;

  constructor(private userService: UserService) {}

  login() {
    this.userService.login(this.email!, this.password!).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
      },
      (error) => {
        console.error('Error en el login:', error);
      }
    );
  }
}
