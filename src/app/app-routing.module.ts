import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotIncludedComponent } from './not-included/not-included.component';
import { RequestComponent } from './request/request.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  //{ path: 'request/:param', component: RequestComponent } // how to pass params into path, must come before more general route
  { 
    path: 'student', 
    component: StudentComponent,
    children: [ //how to nest components in routes
      { 
        path: 'request', 
        component: RequestComponent 
      }
    ]
  },
  { 
    path: 'not-included', 
    component: NotIncludedComponent 
  },
  { 
    path: '**', // wild card that catches unavailable routes and renders them to NotFound component
    component: NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
