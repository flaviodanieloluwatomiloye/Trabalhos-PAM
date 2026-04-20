async function preencherTabela() {

    const response = await fetch('./bd.json'); 
    const pacientes = await response.json();
    
    const tbody = document.querySelector('tbody'); 

    tbody.innerHTML = ""; 

    pacientes.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.nome}</td>
            <td>${p.idade}</td>
            <td class="info-altura">${p.altura}</td>
            <td class="info-peso">${p.peso}</td>
            <td class="info-imc"></td>
            <td class="info-status"></td>
        `;
        tbody.appendChild(tr);
    });

    return document.querySelectorAll('tbody tr');
}

export { preencherTabela };