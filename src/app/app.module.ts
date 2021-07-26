import { NgModule } from '@angular/core'; // import module decorator that makes the class below a module
import { HttpClientModule } from '@angular/common/http'; // import http client module to access API services
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RequestsComponent } from './requests.component'; // from tutorial
import { RequestComponent } from './request/request.component'; // automatically imports when added to declaration below
//import { RequestsService } from './requests.service'; // from tutorial
import { RequestService } from './service/request.service';

@NgModule({ // module decorator
  declarations: [ // this is where components are added to the module
    AppComponent,
    //RequestsComponent, // from tutorial
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // to consume API
  ],
  providers: [ // register all dependencies for each componenet in this array
    //RequestsService, // from tutorial -- singleton instance pattern
    RequestService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
