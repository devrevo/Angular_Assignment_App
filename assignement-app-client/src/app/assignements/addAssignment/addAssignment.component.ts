import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentService } from '../../util/assignment.service';
import { Assignment } from '../assignement.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './addAssignment.component.html',
  styleUrls: ['./addAssignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {

  nomAssignment?: string = '';
  dateDeRendu?: Date;

  constructor(private assignmentsService:AssignmentService,
              private router:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    let newAssignement = new Assignment();
    if (this.nomAssignment && this.dateDeRendu) {
      newAssignement.nom = this.nomAssignment;
      newAssignement.dateDeRendu = this.dateDeRendu;
      newAssignement.rendu = false;
      newAssignement.id = Math.round(Math.random()*10000000);

      this.assignmentsService.addAssignment(newAssignement)
      .subscribe(() => {
        this.router.navigate(["/home"]);
      });
    }
  }
}
