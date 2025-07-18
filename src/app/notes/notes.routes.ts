import { Routes } from "@angular/router";
import { SidebarComponent } from "./component/sidebar/sidebar.component"; // importe ton sidebar ici
import { ListComponent } from "./component/list/list.component";
import { CreateComponent } from "./component/create/create.component";
import { DetailComponent } from "./component/detail/detail.component";
import { EditComponent } from "./component/edit/edit.component";
import { AuthGuard } from "../auth/guard/auth.guard";

export const NOTES_ROUTES: Routes = [
  {
    path: '',
    component: SidebarComponent, // Le layout parent
    canActivate: [AuthGuard], // Protéger tout le layout
    children: [
      { path: '', component: ListComponent },
      { path: 'create', component: CreateComponent },
      { path: ':id', component: DetailComponent },
      { path: ':id/delete', component: EditComponent },
      { path: ':id/edit', component: EditComponent },
    ]
  }
];
