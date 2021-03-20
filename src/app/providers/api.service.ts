import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IPersona } from '../interfaces/IPersona';
import { IMascota } from '../interfaces/IMascota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  /**
   * Obtener lista de Persona
   * @return {Observable<Payload<string>>}
   */
    public getPersonaList(): Observable<IPersona[]> {
    return this.http.get<IPersona[]>(`${environment.apiUrl}/persona/list`)
        .pipe(map(listPersona => {
            return listPersona;
        }));
    }
  /**
   * Obtener lista de mascotas por persona
   * @param {number} idPersona Id de persona
   * @return {Observable<Payload<string>>}
   */
    public getMascotasbyPersona(idPersona: number): Observable<IMascota[]> {
    return this.http.get<IMascota[]>(`${environment.apiUrl}/mascota/bypersona/`+idPersona)
        .pipe(map(listMascota => {
            return listMascota;
        }));
    }
  /**
   * Crear Persona Y mascotas
   * @param {IPersona} newPersona Persona a guardar
   * @return {Observable<Payload<string>>}
   */
    public createPersonaWithMascotas(newPersona: IPersona): Observable<IPersona> {
    return this.http.post<IPersona>(`${environment.apiUrl}/persona/create`,newPersona)
        .pipe(map(persona => {
            return persona;
        }));
    }
}
