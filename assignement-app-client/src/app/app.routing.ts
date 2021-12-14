import { Routes } from "@angular/router";
import { AddAssignmentComponent } from "./assignements/addAssignment/addAssignment.component";
import { AssignmentDetailComponent } from "./assignements/detailAssignment/detailAssignment.component";
import { AssignementComponent } from "./assignements/assignements.component";
import { EditAssignmentComponent } from "./assignements/editAssignment/editAssignment.component";
import { AuthGuard } from "./util/auth.guard";
import { LoginComponent } from "./login/login.component";

const routes:Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"home",
    component:AssignementComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"add",
    component:AddAssignmentComponent
  },
  {
    path:"assignment/:id",
    component:AssignmentDetailComponent
  },
  {
    path:"assignment/:id/edit",
    component:EditAssignmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/not-found.html'
  }
]

export {routes}
