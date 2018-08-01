import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';
 
 
@Injectable() 
export class MateriasProvider { 
 
  private API_URL = 'http://localhost:3000/'; 
 
  constructor(public http: Http) { 
  }
    login(username: string, password: string) {
      return new Promise((resolve, reject) => {
        this.http.get('http://dev2.unifacef.com.br:8000/api/matriculado_grad/'+username )
          .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
      });
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