var name1 = document.getElementById("name-1").value;
var name2 = document.getElementById("name-2").value;
var name3 = document.getElementById("name-3").value;
var name4 = document.getElementById("name-4").value;
var name5 = document.getElementById("name-5").value;
var history = document.getElementById("history").value;

// Monta o objeto com os dados a serem enviados
var data = {
    "names": [name1, name2, name3, name4, name5],
    "message": history
};

// Faz a solicitação POST para a API
fetch('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
        console.log('Resposta da API:', data);
        alert('Dados enviados com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
        alert('Ocorreu um erro ao enviar os dados.');
    });