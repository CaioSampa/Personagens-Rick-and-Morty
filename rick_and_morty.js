const box = document.querySelector('.show');

const img = document.querySelector('img');

const nome = document.querySelector('.nome');

const origem = document.querySelector('.origem');

const especie = document.querySelector('.especie');

const stat = document.querySelector('.status');

const btn_refresh = document.querySelector('.refresh');

const label = document.querySelectorAll('label')
const inputs = document.querySelectorAll('input')

const gerar_nums = (min, max) => { return Math.floor(Math.random() * ( max - min +1)+ min )};

btn_refresh.addEventListener('click',() => {
    label.forEach((item)=>item.style.display='block')
    inputs.forEach((item)=> item.style.display='block')
    btn_refresh.innerHTML = 'Descobrir Personagem'

    fetch('https://rickandmortyapi.com/api/character',{method:'GET'}).then(response =>{

        return response.json();

    }).then((data) => {
        let num = gerar_nums(0,19);

        console.log(data.results[num]);

        img.src = data.results[num].image;
    
        nome.value= data.results[num].name;

        origem.value = data.results[num].origin.name;

        especie.value = data.results[num].species;

        stat.value = data.results[num].status;
    }).catch((err) => {
        new Error(err)
    })
});

