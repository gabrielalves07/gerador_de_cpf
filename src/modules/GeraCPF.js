import ValidaCPF from "./ValidaCPF";

export default class GeraCPF{

    novoCPF(){
        const cpfSemDigito = GeraCPF.cpfAleatorio();

        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);

        return GeraCPF.formataCPF(cpfSemDigito, digito1, digito2);
    }

    static cpfAleatorio(){
        let emptyArray = [];

        for(let i = 0; i < 9; i++){
            let rand = Math.floor(Math.random() * 10);
            emptyArray.push(rand);
        }
        return emptyArray.join('');
    }

    static formataCPF(csd, digito1, digito2){
        return `${csd.slice(0, 3)}.${csd.slice(3, 6)}.${csd.slice(6, 9)}-${digito1}${digito2}`;
    }

}