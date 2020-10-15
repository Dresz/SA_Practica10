# SA_Practica10
# Video de explicación[Aqui](https://youtu.be/Jnr83iqqOxg)
# Cliente
para crear la imagen de cliente ese necesario correr el siguiente comando que se ejecutara en la carpeta de src/Cliente
```
docker build -t cliente .
```
# Restaurante
para crear la imagen de cliente ese necesario correr el siguiente comando que se ejecutara en la carpeta de src/Restaurante
```
docker build -t restaruante .
```
# Repartidor
para crear la imagen de cliente ese necesario correr el siguiente comando que se ejecutara en la carpeta de src/Repartidor
```
docker build -t repartido .
```
# ESB
para crear la imagen de cliente ese necesario correr el siguiente comando que se ejecutara en la carpeta de src/ESB
```
docker build -t esb .
```
# Ejecucion
Despues de crear todos las imagenes nos situamos dentro de la carpeta que contenga el archivo docker-compose.yml, para ejecutar la practica debemos ejecutar el siguiente comando
```
docker-compose up
```
Listo todos los servicios empezaran a correr automaticamente.
