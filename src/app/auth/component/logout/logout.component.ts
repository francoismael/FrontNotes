import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
       constructor(private router: Router){}
       logout(){
            localStorage.removeItem('token');
            this.router.navigate(['/auth/login'])
       }
}
