import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';
 
 
@Injectable() 
export class MateriasProvider { 
 
  private API_URL = 'http://localhost:3000/'; 
 
  constructor(public http: Http) { 
  }
 
     buscaMaterias(){
        return new Promise((resolve, reject) => { 
 
          let url = this.API_URL + 'materias'; 
           
          this.http.get(url).subscribe((result: any) =>{ 
            resolve(result.json()); 
          }, 
          (error) =>{ 
          reject(error.json()); 
          }) 
        }); 
    }  
 
} 