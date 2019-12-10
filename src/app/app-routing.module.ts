import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'biography', component: BiographyComponent},
  {path: 'home', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
