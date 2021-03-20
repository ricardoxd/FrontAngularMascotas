import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './pages/persona/persona.component';
import { CreatePersonaComponent } from './pages/create-persona/create-persona.component';

const routes: Routes = [
  {
    path: 'personas',
    component: PersonaComponent
  },
  {
    path: 'create-persona',
    component: CreatePersonaComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
