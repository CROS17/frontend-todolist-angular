import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { AddListTareaComponent } from './components/add-list-tarea/add-list-tarea.component';
import { ListTareaComponent } from './components/list-tarea/list-tarea.component';

const routes: Routes = [
  {
    path: '', component: ListTareaComponent
  },
  {
    path: 'add', component: AddListTareaComponent
  },
  {
    path: 'edit/:id', component: AddListTareaComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
