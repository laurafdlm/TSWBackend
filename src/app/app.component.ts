import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register1Component } from "./register1/register1.component";
import { LoginComponent } from "./login/login.component";
import { DeleteUserComponent } from "./delete-user/delete-user.component";
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Register1Component, LoginComponent, DeleteUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sslfe';
}
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch())]
};
