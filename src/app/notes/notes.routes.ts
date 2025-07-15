import { Routes } from "@angular/router";
import { ListComponent } from "./component/list/list.component";
import { CreateComponent } from "./component/create/create.component";
import { DetailComponent } from "./component/detail/detail.component";
import { EditComponent } from "./component/edit/edit.component";
import { AuthGuard } from "../auth/guard/auth.guard";

export const NOTES_ROUTES: Routes = [
  { path: '', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
  { path: ':id', component: DetailComponent, canActivate: [AuthGuard]},
  { path: ':id/delete', component: EditComponent, canActivate: [AuthGuard]},
  { path: ':id/edit', component: EditComponent, canActivate: [AuthGuard]},
];
