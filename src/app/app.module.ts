import { ErrorHandler, NgModule } from '@angular/core'; // import module decorator that makes the class below a module
import { HttpClientModule } from '@angular/common/http'; // import http client module to access API services
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // bootstrap modal

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component'; // automatically imports when added to declaration below
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotIncludedComponent } from './not-included/not-included.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentComponent } from './student/student.component';
import { FooterComponent } from './footer/footer.component';

import { RequestService } from './services/request.service';

import { AppErrorHandler } from './common/app-error-handler';

@NgModule({ // module decorator
  declarations: [ // this is where components are added to the module
    AppComponent,
    RequestComponent,
    NavbarComponent,
    HomeComponent,
    NotIncludedComponent,
    NotFoundComponent,
    StudentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, //DOM
    AppRoutingModule, //Routing
    HttpClientModule, //Consume APIs
    FormsModule, //Template-driven forms
    ReactiveFormsModule, //Reactive forms
    NgbModule //Bootstrap modal
  ],
  providers: [ // register all dependencies for each componenet in this array
    RequestService, // singleton instance pattern
    { provide: ErrorHandler, useClass: AppErrorHandler } // telling angular to use new class instead of default error handler class
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
