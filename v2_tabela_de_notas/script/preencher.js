async function preencherTabela() {
    const response = await fetch('http://127.0.0.1:5500/script/bd.json');
    const alunos = await response.json();
    const tbody = document.querySelector('#corpo-tabela');

    //Tira o que tiver na tabela html
    tbody.innerHTML = "";

    alunos.forEach(aluno => {

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.nota_1}</td>
            <td>${aluno.nota_2}</td>
            <td>${aluno.nota_3}</td>
            <td></td>
            <td></td>
        `;

        tbody.appendChild(tr);
    });

    return document.querySelectorAll('tbody tr');
}

export {preencherTabela};
