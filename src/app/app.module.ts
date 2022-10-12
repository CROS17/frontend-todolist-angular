import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modules
import {ReactiveFormsModule} from "@angular/forms";

// componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListTareaComponent } from './components/list-tarea/list-tarea.component';
import { AddListTareaComponent } from './components/add-list-tarea/add-list-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListTareaComponent,
    AddListTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
