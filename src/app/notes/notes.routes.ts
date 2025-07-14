import { Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";
import { DetailComponent } from "./detail/detail.component";
import { EditComponent } from "./edit/edit.component";

export const NOTES_ROUTES: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent},
  { path: ':id', component: DetailComponent},
  { path: ':id/delete', component: EditComponent},
];
