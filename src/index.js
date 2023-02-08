import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF';

const cpf = new GeraCPF();

const output = document.querySelector('.output');
const button = document.querySelector('.gerarCpf');

let novoCPF = cpf.novoCPF();
output.value = novoCPF;

document.addEventListener('click', (e) =>  {
    let el = e.target;
    if(el.classList.contains('gerarCpf')){
        novoCPF = cpf.novoCPF();
        output.value = novoCPF;
    }
    if(el.classList.contains('copyIcon')){
        output.select();
        navigator.clipboard.writeText(output.value);
    }
    
});
