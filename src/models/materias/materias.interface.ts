export class materias{

    public $key: string;
    
    constructor(
        public descricao : string,
        public id_aluno : string,
        public id_disciplina : string,
        public titulo : string
    ){}
}