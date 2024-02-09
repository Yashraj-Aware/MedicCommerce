<h1 align="center">
🌐 Medic-Commerce
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs, Tailwindcss
</p>

> Medic-Commerce is a web-application Amazon for all medicines and surgical instruments.

## Clone or Download
```terminal
$ git clone https://github.com/Yashraj-Aware/MedicCommerce.git
$ yarn # or npm i
```

## Project Structure
```terminal
backend/
   controllers (has routing functionality stored)
   models      (model schema for the collections in db)
   router      (passing respective controller , along with endpoint)
   middleware  (acts as helper function for auth and various purpose)
   server.js   (start point of backend)
   .env        (to create .env, check [prepare your secret session])
   package.json
frontend/
    public
    src
    tailwind.config.js
   package.json
...
```
