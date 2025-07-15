import { Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";
import { DetailComponent } from "./detail/detail.component";
import { EditComponent } from "./edit/edit.component";
import { AuthGuard } from "../auth/auth.guard";

export const NOTES_ROUTES: Routes = [
  { path: '', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
  { path: ':id', component: DetailComponent, canActivate: [AuthGuard]},
  { path: ':id/delete', component: EditComponent, canActivate: [AuthGuard]},
  { path: ':id/edit', component: EditComponent, canActivate: [AuthGuard]},
];
