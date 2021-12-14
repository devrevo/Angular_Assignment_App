import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignementComponent } from './assignements/assignements.component';
import { RenduDirective } from './util/rendu.directive';
import { NonrenduDirective } from './util/nonrendu.directive';
import { FormsModule } from '@angular/forms';
import { AssignmentDetailComponent } from './assignements/detailAssignment/detailAssignment.component';
import { AddAssignmentComponent } from './assignements/addAssignment/addAssignment.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routing';
import { EditAssignmentComponent } from './assignements/editAssignment/editAssignment.component';
@NgModule({
  declarations: [
    AppComponent,
    AssignementComponent,
    LoginComponent,
    RenduDirective,
    NonrenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    BrowserAnimationsModule, MatButtonModule, MatIconModule, MatDividerModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatListModule, MatCardModule, MatCheckboxModule, MatSlideToggleModule,HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
