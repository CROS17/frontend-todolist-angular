import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Tarea } from 'src/app/interfaces/tareas';

@Component({
  selector: 'app-add-list-tarea',
  templateUrl: './add-list-tarea.component.html',
  styleUrls: ['./add-list-tarea.component.scss']
})
export class AddListTareaComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      price:[null, Validators.required, Validators.min(1)],

    })
  }

  ngOnInit(): void {
  }

  addTarea(){
    console.log(this.form);
    const tarea: Tarea = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price
    }
  }

}
