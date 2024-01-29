# Create SSL VUE 3 With Https Server Localhost Test

With this script you were able to create certificates simply, with just one command executed via the prompt.

The idea is to facilitate the creation of certificates for developers who use the VUE3 connection and need to test the system using SSL / Https running on localhost

Follow the steps to install the script. Don't skip any steps.

#### 1) Within the root folder of your project, clone the project

```
git clone https://github.com/Tellys/create-ssl-vue-https-server-localhost.git

```

#### 2) Go to your project folder/create-ssl-vue-https-server-localhost

```
cd create-ssl-vue-https-server-localhost
```

## 3) Now configure the variables of your SSL certificate
Remember that the variables here are extremely important, because if they are not filled in correctly, the certificate may not work / may not be recognized by the server

```
cd tool-create-certs-ssl
```

Open the openssl-custom.cnf file

```
//openssl-custom.cnf

[dn]
C = <COUNTRY>
ST = <STATE>
L = <LOCALITY / CITY>
O = <ORGANIZATION>
OR = <ORGANIZATION_UNIT>
emailAddress = <EMAIL_ADDRESS>
CN=<HOSTNAME/IP_ADDRESS>
```

#### 4) Now give the command below for the system to create the certificates

```
bash generate.sh
```

## 5) Create a VUE3 app

```
cd vue3-ssl
npm i
```

#### 6) Move the certificates to the VUE3 rais folder

```
mkdir certs
mv ../tool-create-certs-ssl/server.key ../tool-create-certs-ssl/server.crt certs/
```

#### 7) Check the vue.config.js file

```
//vue.config.js

const { defineConfig } = require('@vue/cli-service')
const fs = require('fs');

module.exports = defineConfig({
   transpileDependencies: true,
   devServer: {
     server: {
       type: 'https',
       options: {
         key: fs.readFileSync('./certs/server.key'),
         cert: fs.readFileSync('./certs/server.crt'),
       }
     },
     client: {
       webSocketURL: 'wss://localhost:8080/ws',
     },
   }
})

```

#### 8) Run NPM server

```
npm run serves
```