import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseAllModulesI, DataAllModulesI } from '../interfaces/modules';

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

  //Método que consume el servicio que obtiene TODOS los módulos disponibles en la aplicación
  getAllModulesStudent(headers: Map<string, any>, page: number, limit: number, sort: string, order: string): Observable<ApiResponseAllModulesI> {
    this.options = this.getHeaders(headers);
    let queryParams = "?";
    queryParams += `page=${page}&`;
    queryParams += `limit=${limit}&`;
    queryParams += `sort=${sort}&`;
    queryParams += `order=${order}`;
    return this.http.get<ApiResponseAllModulesI>(this.urlApi + `/api/module/with-is-subscribed${queryParams}`, this.options);
  }

  //Método que obtiene la información de un módulo por su ID
  getModuleById(headers: Map<string, any>, idModule: number): Observable<DataAllModulesI> {
    this.options = this.getHeaders(headers);
    return this.http.get<DataAllModulesI>(this.urlApi + `/api/module/${idModule}`, this.options);
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
