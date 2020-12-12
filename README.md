# Tehnologije korištene za projekat
Za ovaj projekat korištene su tehnologije: ReactJS, nodeJS, mySQL DB, 

## Instrukcije za pokretanje

Za pokretanje, unutar foldera `server` pokrenuti komandu: 

### `nodemon server`

a unutar foldera `/db/index.js` namjestiti password za bazu. 

Nakon toga pokrenuti react server:

### `npm start`

## Baza podataka
Unutar fajla `ecommerceDB.sql` se nalaze svi exportovani podaci iz baze podataka.

Ukoliko baza izbaci error, potrebno je pokrenuti komandu u `MySQL Workbench-u`
### `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`
### `flush privileges;`
