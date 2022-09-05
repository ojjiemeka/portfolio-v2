import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'index', component: IndexComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'contact-me', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
