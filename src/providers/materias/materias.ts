import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';
 
 
@Injectable() 
export class MateriasProvider { 
 
  private API_URL = 'http://dev2.unifacef.com.br:8000/api/'; 
 
  constructor(public http: Http) { 
  }
    login(username: string, password: string) {
      return new Promise((resolve, reject) => {
        let url = this.API_URL + 'matriculadoGrad/'; 
        let url_teste = 'http://localhost:3000/matriculado_grad/';
        this.http.get(url+username )
          .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
      });
    }
 
     buscaMaterias(id_aluno: string){
        return new Promise((resolve, reject) => { 
 
          let url = this.API_URL + 'inscricoesDisciplinaGrad/'; 
          let url_teste = 'http://localhost:3000/inscricoesDisciplinaGrad/';
          this.http.get(url+id_aluno).subscribe((result: any) =>{ 
            resolve(result.json()); 
          }, 
          (error) =>{ 
          reject(error.json()); 
          }) 
        }); 
    } 

    buscaAtividades(id_materia: string){
      return new Promise((resolve, reject) => { 

        let url = this.API_URL + 'atividadesDisciplina/';
        let url_teste = 'http://localhost:3000/atividadesDisciplina/';
        
        this.http.get(url_teste+id_materia).subscribe((result: any) =>{ 
          resolve(result.json()); 
        }, 
        (error) =>{ 
        reject(error.json()); 
        }) 
      }); 
  } 
 
} 