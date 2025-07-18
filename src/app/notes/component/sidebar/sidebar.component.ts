import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, File, Menu, HouseIcon, UserCheck } from 'lucide-angular';
import { LogoutComponent } from "../../../auth/component/logout/logout.component";
import { CommonModule } from '@angular/common';
;

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [LucideAngularModule, RouterModule, LogoutComponent, CommonModule]
})
export class SidebarComponent {
  readonly File = File;
  readonly Menu = Menu;
  readonly HouseIcon = HouseIcon;
  readonly UserCheck = UserCheck;

  showLogout = false;
  toggleLogout(){
      this.showLogout = !this.showLogout;
  }
}
