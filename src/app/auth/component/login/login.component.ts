import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm= this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.getRawValue() as { email: string; password: string };

      this.auth.login(credentials).subscribe({
        next: (res: any) => {
          console.log('Login successful', res);
          localStorage.setItem('token', res.access_token);
          this.router.navigate(['/notes']); // Redirige après login
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Mot de passe ou email incorrecte';
        }
      });
    }
  }

}
