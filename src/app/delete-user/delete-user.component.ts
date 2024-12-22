import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  userId?: string;

  constructor(private userService: UserService) {}

  deleteUser() {
    this.userService.deleteUser(this.userId!).subscribe(
      (response) => {
        console.log('Usuario eliminado:', response);
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }
}
