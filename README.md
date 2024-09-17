# Aplicação de Cálculo de Categoria, IMC e Média Válida de Atletas

Esta aplicação em JavaScript recebe informações sobre atletas, como nome, idade, peso, altura e notas atribuídas pelos juízes. Com esses dados, a aplicação:
- Calcula a **categoria do atleta** de acordo com a sua idade.
- Calcula o **IMC (Índice de Massa Corporal)** do atleta.
- Calcula a **média válida das notas**, desconsiderando a maior e a menor nota.

Por fim, a aplicação exibe todas as informações do atleta: nome, idade, peso, altura, notas, categoria, IMC e média das notas.

## Funcionalidades

- Receber informações básicas do atleta (nome, idade, peso, altura, notas).
- Determinar a categoria do atleta com base em sua idade.
- Calcular o IMC do atleta com base no peso e na altura.
- Calcular a média das notas, descartando a maior e a menor nota.
- Exibir todas as informações processadas para o usuário.

## Como Executar

1. Certifique-se de que o [Node.js](https://nodejs.org) está instalado em sua máquina.
2. Clone este repositório ou copie o código-fonte.
3. Salve o arquivo como `calculaAtletas.js`.
4. No terminal, navegue até o diretório onde o arquivo está salvo.
5. Execute o seguinte comando:

   ```bash
   node calculaAtletas.js
6. O terminal exibirá as informações do atleta, incluindo sua categoria, IMC e média válida das notas.

## Exemplo de Saída
```
Nome: Cesar Abascal
Idade: 30 anos
Peso: 80 kg
Altura: 1.70
Notas: 7.88, 8.42, 9.34, 10, 10
Categoria: Adulto
IMC: 27.68
Média Válida: 9.25
```
## Tecnologias Utilizadas

- JavaScript (Node.js)

## 
Este projeto demonstra o uso de classes, métodos para cálculos de categorias e IMC, além de manipulação de arrays para calcular a média das notas de atletas.
Este projeto faz parte da certificação de módulo do curso **DevStart** do SENAI.