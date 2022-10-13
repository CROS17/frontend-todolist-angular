import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/interfaces/tareas';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-list-tarea',
  templateUrl: './list-tarea.component.html',
  styleUrls: ['./list-tarea.component.scss']
})
export class ListTareaComponent implements OnInit {

  listTareas: Tarea[] = []
  loading: boolean = false;

  constructor(private _tareaService: TareaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListTareas();
  }

  getListTareas() {
    this.loading = true;

    this._tareaService.getListTareas().subscribe((data: Tarea[]) => {
      this.listTareas = data;
      this.loading = false;
    })
  }

  deleteTarea(id: number) {
    this.loading = true;
    this._tareaService.deleteTarea(id).subscribe(() => {
      this.getListTareas();
      this.toastr.warning('La Tarea fue eliminada con exito', 'Tarea eliminada');
    })
  }

}
