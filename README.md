# appDiario
Aplicação de monitoração diária de tarefas usando electron e dexiejs (indexeddb)

Usado:

NPM 6.14.12

e

Node v14.16.1

---------------------------------------------------------

Comandos:
* Para instalar os módulos necessários

npm install 


* Para rodar a aplicação

npm run start


* Para compilar a aplicação

npm run make

-> verifique o diretório "out"

* Se houver o npx instalado pode-se compilar da usando o electron-packager indicando a plataforma

npx electron-packager . appDiario --platform=win32 --arch=x64
