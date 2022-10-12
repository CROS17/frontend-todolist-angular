import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/interfaces/tareas';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-add-list-tarea',
  templateUrl: './add-list-tarea.component.html',
  styleUrls: ['./add-list-tarea.component.scss']
})
export class AddListTareaComponent implements OnInit {

	form: FormGroup;
	loading: boolean = false;
	id: number;
	operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _tareaService: TareaService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      price:[null, Validators.required, Validators.min(1)],
    })
	this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
	if (this.id != 0) {
		// Es editar
		this.operacion = 'Editar ';
		this.getTarea(this.id);
	}
  }

  getTarea(id: number) {
    this.loading = true;
    this._tareaService.getTarea(id).subscribe((data: Tarea) => {
      this.loading = false;
      this.form.setValue({
        name: data.name,
        description: data.description,
        price: data.price
      })
    })
  }

  addTarea() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */
    const tarea: Tarea = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price
    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      tarea.id = this.id;
      this._tareaService.updateTarea(this.id, tarea).subscribe(() => {
        this.toastr.info(`La tarea ${tarea.name} fue actualizado con exito`, 'Tarea actualizada');
        this.loading = false;
        this.router.navigate(['/']);
      })

    } else {
      // Es agregagar
      this._tareaService.saveTarea(tarea).subscribe(() => {
        this.toastr.success(`La tarea ${tarea.name} fue registrado con exito`, 'Tarea registrada');
        this.loading = false;
        this.router.navigate(['/']);
      })
    }
  }

}
