import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarea } from '../interfaces/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

	private myAppUrl: string;
	private myApiUrl: string;
  
	constructor(private http: HttpClient) { 
	  this.myAppUrl = environment.endpoint;
	  this.myApiUrl = 'api/tareas/'
	}

	getListTareas(): Observable<Tarea[]> {
		return this.http.get<Tarea[]>(`${this.myAppUrl}${this.myApiUrl}`);
	   }
	 
	   deleteTarea(id: number): Observable<void> {
		 return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
	   }
	 
	   saveTarea(tarea: Tarea): Observable<void> {
		 return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,tarea)
	   }
	 
	   getTarea(id: number): Observable<Tarea> {
		 return this.http.get<Tarea>(`${this.myAppUrl}${this.myApiUrl}${id}`)
	   }
	 
	   updateTarea(id: number, tarea: Tarea): Observable<void> {
		 return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, tarea);
	   }
  
}
