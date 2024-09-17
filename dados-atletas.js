class Atleta {
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    calculaCategoria(){
        let calcCategoria = ""
        if (this.idade >= 9 && this.idade <= 11) {
            calcCategoria = "Infantil"
            return calcCategoria
        } else if (this.idade === 12 || this.idade === 13) {
            calcCategoria = "Juvenil"
            return calcCategoria
        } else if (this.idade === 14 || this.idade === 15) {
            calcCategoria = "Intermediário"
            return calcCategoria
        } else if (this.idade >= 16 && this.idade <= 30) {
            calcCategoria = "Adulto"
            return calcCategoria
        } else {
            calcCategoria = "Sem categoria"
            return calcCategoria
        }
    }

    calculaIMC(){
        let calcImc = this.peso / this.altura**2
        return calcImc
    }
    
    calculaMediaValida(){
        let calcMedia = this.notas.sort((a,b) => a-b).slice(1,-1).reduce(function(total,atual){
            return total + atual
        },0) / ( this.notas.length -2)
        return calcMedia
    }

    obtemNomeAtleta(){
        return console.log(`Nome: ${this.nome}`)
    }
    
    obtemIdadeAtleta(){
        return console.log(`Idade: ${this.idade} anos`)
    }
    
    obtemPesoAtleta(){
        return console.log(`Peso: ${this.peso} kg`)
    }

    obtemAlturaAtleta(){
        return console.log(`Altura: ${this.altura.toFixed(2)}`)
    }
    
    obtemNotasAtleta(){
        return console.log(`Notas: ${this.notas.join(", ")}`)
    }
    
    obtemCategoria(){
        let categoria = this.calculaCategoria()
        return console.log(`Categoria: ${categoria}`)
    }
    
    obtemIMC(){
        let imc = this.calculaIMC()
        return console.log(`IMC: ${imc.toFixed(2)}`)
    }
    
    obtemMediaValida(){
        let media = this.calculaMediaValida()
        return console.log(`Média Válida: ${media.toFixed(2)}`)
    }
}

let novoAtleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
    
novoAtleta.obtemNomeAtleta()
novoAtleta.obtemIdadeAtleta()
novoAtleta.obtemPesoAtleta()
novoAtleta.obtemAlturaAtleta()
novoAtleta.obtemNotasAtleta()
novoAtleta.obtemCategoria()
novoAtleta.obtemIMC()
novoAtleta. obtemMediaValida()