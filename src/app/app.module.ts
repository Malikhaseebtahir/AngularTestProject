import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from './environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthRedirectGuard } from './auth-redirect.guard';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthRedirectGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthRedirectGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]  },
  { path: 'employee/edit/:id', component: EmployeeComponent },
  { path: 'home', component: HomeComponent }, // Define route for HomeComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Set HomeComponent as default route
  { path: '**', redirectTo: '/home' } // Redirect to HomeComponent if route not found
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
