import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PersonComponent } from './person/person.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

// we declare an array of objects of all the routes we would like implemented
const routes: Routes = [
  // Angular will find the first match and show it

  // we can have several links that end up in the same place
 { path:'', redirectTo:'home', pathMatch:'full'},
 { path:'start', component:HomeComponent},
 { path:'home', component:HomeComponent},
 { path:'about', component:AboutComponent},
 { path:'person', component:PersonComponent},
//  to pass UEL parameters, use /:
 { path:'person/:name', component:PersonComponent },
 { path:'person/:name/:age', component:PersonComponent },
 { path:'details', component:DetailsComponent},
 // if NO other path matches we end up here (make this the last statement)
 { path:'**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
