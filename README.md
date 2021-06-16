# Adonis API application
## Setup of new project
```bash
adonis new <project name> --api-only
```
## Install
get adonis command
```bash
npm i -g @adonisjs/cli
```
```bash
npm install
```
## Develop
```bash
adonis serve --dev
```
## Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
## Create Controller and Models
```
adonis make:model ModelName
```
```
adonis make:controller ModelController
```
## Get Help
```bash
adonis --help
```
# MongoDB
### use Lucid Mongo framework
```bash
adonis install lucid-mongo
```
#### or
```bash
npm i --save lucid-mongo
```
## Setup connect to MongoDB in ````.env````
```bash
cp .env.example .env
```
## In flie ````.env````
1. url => mongodb+srv://<DB_USER>:<DB_PASSWORD>@<DB_HOST>/<DB_DATABASE>?retryWrites=true&w=majority
* can see url in https://account.mongodb.com/
```
HOST=127.0.0.1
PORT=3333
APP_URL=http://${HOST}:${PORT}
NODE_ENV=development
CACHE_VIEWS=false
APP_KEY=<secret-app-key>
DB_CONNECTION=mongodb
DB_HOST=<DB_HOST>   <---- 127.0.0.1
DB_PORT=27017
DB_USER=<DB_USER>   <---- root
DB_PASSWORD=<DB_PASSWORD>
DB_DATABASE=<DB_DATABASE>
DB_CONNECTION_STRING=mongodb+srv://<DB_USER>:<DB_PASSWORD>@<DB_HOST>/<DB_DATABASE>?retryWrites=true&w=majority
HASH_DRIVER=bcrypt
```

2. Make sure to register the lucid provider to make use of Database and LucidMongo models. The providers are registered inside start/app.js
```
const providers = [
  // ...
  'lucid-mongo/providers/LucidMongoProvider'
]

const aceProviders = [
  // ...
  'lucid-mongo/providers/MigrationsProvider'
]
```

# RabbitMQ

# อ้างอิง
* AdonisJS https://legacy.adonisjs.com/
* Lucid https://legacy.adonisjs.com/docs/3.2/lucid
* AdonisJS v4.0 REST API with MongoDB https://github.com/BagusAK95/demo-adonis-api-mongodb
* Lucid Mongo https://github.com/duyluonglc/lucid-mongo