import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../util/assignment.service';
import { Assignment } from './assignement.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignements.component.html',
  styleUrls: ['./assignements.component.css']
})
export class AssignementComponent implements OnInit {
  couleur = 'orange';
  ajoutActive = false;

  assignments:Assignment[] = [];

  constructor(private assignmentsService:AssignmentService) { }

  ngOnInit(): void {
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignments()
    .subscribe(assignments => {
      this.assignments = assignments;
    });
  }
}
