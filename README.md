# Notas:

Esta es una aplicación de sockets con estilos, notificaciones. El funcionamiento es sencillo. En la pantalla inicial tienen dos botones:
* Pantalla pública: te lleva a otra pantalla en la que se ve el ticket que se está atendiendo y los 3 anteriores antendidos y por el escritorio atendido.
* Crear Tickets: te crea tickets que pasan a la cola para ser atendidos por los escritorios

También en la pantalla principal tenemos un textbox para crear escritorios y un botón para ingresar a ese escritorio creado y poder atender tickets.

Está desplegada en Heroku en la siguiente url https://colas-ibejarano.herokuapp.com

Recordar que si descargan el código deben reconstruir los módulos de node con el comando:

```
npm install
```

Para arrancar la aplicación:

```
nodemon server/server
```

O bien:

```
npm start
```