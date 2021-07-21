import { NgModule } from '@angular/core'; // import module decorator that makes the class below a module
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestsComponent } from './requests.component';
import { RequestComponent } from './request/request.component'; // automatically imports when added to declaration below

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
