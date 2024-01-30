# Crie SSL VUE 3 com teste de host local do servidor Https

Com este script você conseguiu criar certificados SSL para seu APP VUE.JS de forma simples, com apenas um comando executado via prompt.

A ideia é facilitar a criação de certificados para desenvolvedores que utilizam VUE3 e precisam testar o sistema, utilizando SSL/Https rodando em localhost

Siga as etapas para instalar o script. Não pule nenhuma etapa.

#### 1) Dentro da pasta raiz do seu projeto, clone o projeto

```
clone do git https://github.com/Tellys/create-ssl-vue-https-server-localhost.git

```

#### 2) Vá para a pasta do seu /create-ssl-vue-https-server-localhost

```
cd create-ssl-vue-https-server-localhost
```

## 3) Agora configure as variáveis do seu certificado SSL
Lembre-se que as variáveis aqui são extremamente importantes, pois se não forem preenchidas corretamente o certificado pode não funcionar/não ser reconhecido pelo servidor

```
cd ferramenta-criar-certs-ssl
```

Abra o arquivo openssl-custom.cnf

```
//openssl-custom.cnf

[dn]
C = <PAÍS>
ST = <ESTADO>
L = <LOCALIDADE / CIDADE>
O = <ORGANIZAÇÃO>
OU = <ORGANIZAÇÃO_UNIT>
emailAddress = <EMAIL_ADDRESS>
CN=<HOSTNAME/IP_ADDRESS>
```

#### 4) Agora dê o comando abaixo para o sistema criar os certificados PowerShell Script

```
bash generate.sh
```

## 5) Crie um aplicativo VUE3

```
cd ../vue3-ssl
npm i
```

#### 6) Mova os certificados para a pasta VUE3 rais

```
mkdir certs 
mv ../tool-create-certs-ssl/server.key ../tool-create-certs-ssl/server.crt certs/
```

#### 7) Verifique o arquivo vue.config.js

```
//vue.config.js

const {defineConfig} = require('@vue/cli-service')
const fs = requer('fs');

module.exports=defineConfig({
    transpileDependências: verdadeiro,
    devServidor: {
      servidor: {
        digite: 'https',
        opções: {
          chave: fs.readFileSync('./certs/server.key'),
          certificado: fs.readFileSync('./certs/server.crt'),
        }
      },
      cliente: {
        webSocketURL: 'wss://localhost:8080/ws',
      },
    }
})

```

#### 8) Execute o servidor NPM

```
npm run serve
```