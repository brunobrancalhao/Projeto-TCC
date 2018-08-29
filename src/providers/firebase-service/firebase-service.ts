import { Injectable } from '@angular/core';
import { AngularFireList,AngularFireDatabase} from 'angularfire2/database'
import { first } from '../../../node_modules/rxjs/operator/first';


/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {
  private PATH = 'atividades/';
  constructor(public db: AngularFireDatabase) {
  } 

  async getAtividades(id_aluno : string,id_disciplina : string) {
    var atividades = [];
    await this.db.database.ref('/atividades/').orderByChild('idx_aluno_disciplina').equalTo(id_aluno + '_' + id_disciplina).once('value', (snapshot) => {
        let result = snapshot.val();
        for(let k in result){
          atividades.push({
            key : k,
            id_aluno : result[k].id_aluno,
            id_disciplina : result[k].id_disciplina,
            titulo : result[k].titulo,
            descricao : result[k].descricao,
            status_atividade : result[k].status_atividade,
            atividade_custom : result[k].atividade_custom,
            idx_aluno_disciplina : result[k].idx_aluno_disciplina,
            idx_atvTitulo : result[k].idx_atvTitulo
          })
        }
    })
    return atividades;
  }

  async getAtividadescustom(id_aluno : string,id_disciplina : string, id_atividade : string) {
    var ativCustom :any[] = [];
  
    await this.db.database.ref('/atividades/').orderByChild('idx_atvTitulo').equalTo(id_aluno + '_' + id_disciplina + '_' + id_atividade + '_0').once('value', (snapshot) => { 
        ativCustom = snapshot.val();
    })
    if(ativCustom){
      return false;
    } else {
      return true;
    }
  }

  save(atividade : any){
    this.db.list('atividades')
          .push(atividade)
          .then(result => console.log(result));
  }

}
