import { Routes } from "@angular/router";
import { AddAssignmentComponent } from "./assignements/addAssignment/addAssignment.component";
import { AssignmentDetailComponent } from "./assignements/detailAssignment/detailAssignment.component";
import { AssignementComponent } from "./assignements/assignements.component";
import { EditAssignmentComponent } from "./assignements/editAssignment/editAssignment.component";
import { AuthGuard } from "./util/auth.guard";

const routes:Routes = [
  {
    path:"",
    component:AssignementComponent
  },
  {
    path:"home",
    component:AssignementComponent
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
  // appelé lorsque aucune route n'a matché...
  {
    path: '**',
    redirectTo: '/not-found.html'
  }
]

export {routes}
