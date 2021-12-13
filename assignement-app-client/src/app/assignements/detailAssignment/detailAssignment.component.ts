import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/util/assignment.service';
import { AuthService } from 'src/app/util/auth.service';
import { Assignment } from '../assignement.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './detailAssignment.component.html',
  styleUrls: ['./detailAssignment.component.css'],
})
export class AssignmentDetailComponent implements OnInit {
  assignmentTransmis?: Assignment;

  constructor(private assignmentsService: AssignmentService,
              private route:ActivatedRoute,
              private router:Router,
              private authService:AuthService) {}

  ngOnInit(): void {

    let id:number= +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
    .subscribe(assignment => {
      this.assignmentTransmis = assignment;
    });
  }

  onAssignmentRendu() {
    if (this.assignmentTransmis) 
      this.assignmentTransmis.rendu = true;

    this.assignmentsService
      .updateAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);
        this.router.navigate(["/home"]);
      });

  }

  onDelete() {
    if (this.assignmentTransmis) {
      this.assignmentsService
        .deleteAssignment(this.assignmentTransmis)
        .subscribe();
      this.assignmentTransmis = undefined;
      this.router.navigate(["/home"]);
    }
  }

  onClickEdit() {
    this.router.navigate(["/assignment", this.assignmentTransmis?.id, "edit"],
                        {
                          queryParams: {
                            nom:"TOTO",
                            prenom:"TITI",
                            age:50
                          },
                          fragment:"edit"
                        });
  }

  isAdmin() {
    return this.authService.loggedIn;
  }
}
