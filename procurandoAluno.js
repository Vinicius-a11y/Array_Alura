const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeNota(alunos) {
	if (listaDeAlunosEMedias[0].includes(alunos)) {
		console.log(`${alunos} esta cadastrado!`);

		const indice = listaDeAlunosEMedias[0].indexOf(alunos);

		const mediaDoAluno = listaDeAlunosEMedias[1][indice];

		console.log(`${alunos} tem a media ${mediaDoAluno}`);
	} else {
		console.log("Aluno não encontrado!");
	}
}

exibeNomeNota("Julia");
