// Construtor com classe Aluno
class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

// Instâncias da classe Aluno
const alunos = [
    new Aluno('Valdir', 8),
    new Aluno('Valdecir', 5),
    new Aluno('Valcir', 7),
    new Aluno('Daicir', 3),
    new Aluno('Ademir', 9),
    new Aluno('Adair', 6),
    new Aluno('Jair', 5),
    new Aluno('Almir', 10)
]

// Função para filtrar alunos com nota maior ou igual a 6
const filtrarAlunos = listaAlunos => listaAlunos.filter(({ nota }) => nota >= 6);

const alunosAprovados = filtrarAlunos(alunos);

// Mostrar alunos com nota maior ou igual a 6
console.log('Os alunos com nota maior ou igual a 6 são:');
alunosAprovados.forEach(aluno => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
});