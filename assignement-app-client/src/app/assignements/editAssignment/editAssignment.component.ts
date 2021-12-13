import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/util/assignment.service';
import { Assignment } from '../assignement.model';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './editAssignment.component.html',
  styleUrls: ['./editAssignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
  assignment?: Assignment;
  nomAssignment?: string;
  dateDeRendu?: Date;

  constructor(
    private activatedRoute: ActivatedRoute,
    private assignmentsService: AssignmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];

    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      this.assignment = assignment;
      this.nomAssignment = assignment?.nom;
      this.dateDeRendu = assignment?.dateDeRendu;
    });
  }

  onSaveAssignment() {
    if (!this.assignment) return;

    if (this.nomAssignment) {
      this.assignment.nom = this.nomAssignment;
    }

    if (this.dateDeRendu) {
      this.assignment.dateDeRendu = this.dateDeRendu;
    }
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}