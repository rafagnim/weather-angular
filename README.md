# Criando projeto para consultar a previsão do tempo via API

Este projeto foi desenvolvido em aula proporcionada pela Digital Innovation One, através do desenvolvedor João Victor Ghignatti.

Foi desenvolvido um projeto em Angular para consultar/consumir uma API disponibilizada no site: https://openweathermap.org/

Para utilizar/testar este projeto, há necessidade de cadastrar-se como membro no referido site e obter a API key.

Esta key deverá ser registrada no environment, nos arquivos do projeto: environment.ts e environment.prod.ts.


## Modificações

Em relação ao projeto desenvovido em aula, fiz as seguintes modificações:

Quando o usuário solicitava alteração da unidade de temperatura, não estava ocorrendo a conversão da temperatura, apenas estava sendo alterada a unidade.

Embora pareça um alteração simples, permitiu a prática/compreensão de quantidade significativa do conteúdo desenvolvido, já que foi necessário trabalhar com states, utilizando selector e action para implantar a modificação.

Outras alterações pequenos detalhes.


## Alguns comandos úteis:

ng serve

ng generate component component-name

ng build

ng test

ng help
