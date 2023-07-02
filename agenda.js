const form = document.getElementById("form_contato");

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeDoContato = document.getElementById('nome-contato');
    const inputTelefoneDoContato = document.getElementById('tel-contato');

    let linha = `</tr>`;
    linha += `<td>${inputNomeDoContato.value}</td>`
    linha += `<td>${inputTelefoneDoContato.value}</td>`

    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;


    inputNomeDoContato.value = '';
    inputTelefoneDoContato.value = '';
})