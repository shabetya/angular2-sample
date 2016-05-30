import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Departament } from '/app/home/departament';

@Injectable()
export class DepartmentsService {

  constructor(private http: Http) { }

  getDepartaments(): Promise<Departament[]> {
    return this.http.get('http://0.0.0.0:3000/api/Departments')
               .toPromise()
               .then(response => 
               		response.json())
               .catch(this.handleError);
  }

  getDepartament(id:string): Promise<Departament[]> {
    return this.http.get('http://0.0.0.0:3000/api/Departments/'+id)
               .toPromise()
               .then(response => 
               		response.json())
               .catch(this.handleError);
  }

  addDepartament(dep:Departament, _method:any): Promise<Departament[]> {

  	let headers = new Headers({
    'Content-Type': 'application/json'});
    let method = 'post';

    if(_method == "modify"){
    	method = 'put';
    }

    return this.http[method]('http://0.0.0.0:3000/api/Departments',JSON.stringify(dep), {headers: headers})
               .toPromise()
               .then(response => 
               		response.json())
               .catch(this.handleError);
  }

  removeDepartament(id:string): Promise<Departament[]>{

  	return this.http.delete('http://0.0.0.0:3000/api/Departments/'+id)
               .toPromise()
               .then(response => 
               		response.json())
               .catch(this.handleError);
  }

}