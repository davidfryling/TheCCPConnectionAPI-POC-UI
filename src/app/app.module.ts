import { NgModule } from '@angular/core'; // import module decorator that makes the class below a module
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestsComponent } from './requests.component';
import { RequestComponent } from './request/request.component'; // automatically imports when added to declaration below
import { RequestsService } from './requests.service';

@NgModule({ // module decorator
  declarations: [ // this is where components are added to the module
    AppComponent,
    RequestsComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ // register all dependencies for each componenet in this array
    RequestsService // singleton instance pattern
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
