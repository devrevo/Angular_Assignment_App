import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignements/assignement.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  assignments:Assignment[] = [];

  constructor(private http:HttpClient) { }
  url = "http://localhost:8010/api/assignments";
  getAssignments():Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.url);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    return this.http.get<Assignment>(this.url+"/"+id);

  }

  addAssignment(assignment:Assignment):Observable<any> {
    return this.http.post(this.url, assignment);
  }

  updateAssignment(assignment:Assignment|undefined):Observable<any>{
    return this.http.put(this.url,assignment);
  }

  deleteAssignment(assignment:Assignment):Observable<any> {
    return this.http.delete(this.url+"/"+assignment._id);
  }
}
