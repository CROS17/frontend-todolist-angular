import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tareas';

@Component({
  selector: 'app-list-tarea',
  templateUrl: './list-tarea.component.html',
  styleUrls: ['./list-tarea.component.scss']
})
export class ListTareaComponent implements OnInit {

	listTareas: Tarea[] =[
		{
      id: 1,
			name: 'natacion',
			description: 'estilo mariposa',
			price: 250
		},
    {
      id: 2,
      name: 'karate',
      description: 'conseguir cinta negra',
      price: 450
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
