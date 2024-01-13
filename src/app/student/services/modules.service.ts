import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseModulesStudentI } from '../interfaces/modules';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  // Variables
  urlApi = environment.URL_API;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Access-Control-Request-Header': 'Content-type',
    'Access-Control-Allow-Origin': '*'
  });
  options = {}

  // Constructor
  constructor(
    private http: HttpClient,
  ) { }

  //Método que consume el servicio que obtiene TODOS los módulos para mostrar a un estudiante
  getAllModulesStudent(headers: Map<string, any>, page: number, limit: number, sort: string, order: string): Observable<ApiResponseModulesStudentI> {
    this.options = this.getHeaders(headers);
    let queryParams = "?";
    queryParams += `page=${page}&`;
    queryParams += `limit=${limit}&`;
    queryParams += `sort=${sort}&`;
    queryParams += `order=${order}`;
    console.log("Ruta completa");
    console.log(`/api/module/with-is-subscribed${queryParams}`);
    console.log("options");
    console.log(this.options);
    return this.http.get<ApiResponseModulesStudentI>(this.urlApi + `/api/module/with-is-subscribed${queryParams}`, this.options);
  }

  //Método que obtiene los headers
  public getHeaders(headers: Map<string, any> | undefined) {
    if (headers != null) {
      headers.forEach((value, key) => {
        if(this.headers.has(key))
          this.headers = this.headers.delete(key);
        this.headers = this.headers.append(key, value || '');
      });
    }
    this.headers = this.headers.delete('Authorization');
    this.headers = this.headers.append('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    this.options = { headers: this.headers };
    return this.options;
  }
}
