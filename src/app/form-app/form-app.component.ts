import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-form-app',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-app.component.html',
  styleUrl: './form-app.component.scss',
})
export class FormAppComponent {
  inputValue: string = '';
  clearInput(): void {
    this.inputValue = '';
  }

  password: string = '';
  showPassword: boolean = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
