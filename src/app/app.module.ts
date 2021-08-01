import { NgModule } from '@angular/core'; // import module decorator that makes the class below a module
import { HttpClientModule } from '@angular/common/http'; // import http client module to access API services
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component'; // automatically imports when added to declaration below
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotIncludedComponent } from './not-included/not-included.component';

import { RequestService } from './service/request.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentComponent } from './student/student.component';
import { FooterComponent } from './footer/footer.component';

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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // to consume API
  ],
  providers: [ // register all dependencies for each componenet in this array
    RequestService // singleton instance pattern
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
