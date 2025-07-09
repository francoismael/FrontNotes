import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorMessage: string = '';
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

    this.registerForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const credentials = this.registerForm.getRawValue() as {
        username: string;
        email: string;
        password: string;
      };

      this.auth.register(credentials).subscribe({
        next: (res) => {
          console.log('Registration successful', res);
          this.errorMessage = 'Enregistrement effectuer'
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Erreur lors de l\'enregistrement'
        }
      });
    }
  }
}
