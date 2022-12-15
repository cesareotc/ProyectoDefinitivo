# ProyectoDefinitivo

# Proyecto FullStack de manejo de Base de Datos utilizando Peticiones HTTP/REST desde Postman y también desde un Cliente IONIC

Implementación de una Base de Datos MySql/Sequelize para la gestión básica de motocicletas, utilizando Node-Express como Backend de la APP, 
y Peticiones HTTP/REST desde el Frontend (Cliente IONIC).

## Comenzando

Para ejecutar la aplicación bastará con descargar a una carpeta de nuestro equipo los ficheros de este repositorio. 
En todo caso, será necesario tener instaladas las herramientas o paquetes descritos en la siguiente "Sección de Prerequisitos" para poder correr luego la Aplicación en nuestra máquina.

### Prerequisitos

Para ejecutar la Aplicación, deberemos tener instalado en nuestro equipo las siguientes herramientas:

```
NodeJS/npm
Express
Sequelize
MySQL Server/Workbench
Postman
Ionic/CLI 

Como Editor de Código (caso necesario) se recomienda utilizar Visual Studio Code (VSC)
```
Todas y cada una de estas herramientas se podrán descargar líbremente (código gratuito) desde sus respectivos sitios de descarga. En la "Sección Construído con" se indicarán dichas url's de descarga. Además en la "Sección Haciendo pruebas", se indicará la finalidad concreta de cada una de estas herramientas en la aplicación

### Instalación

La simple descarga de la Aplicación creará la estructura de carpetas necesarias para su funcionamiento, no siendo por ello necesario realizar ningún proceso concreto de instalación.
El proceso básicamente generará 2 subcarpetas: Backend y Frontend. Backend contendrá realmente todo el código funcional de la Aplicación (la API). Frontend servirá para acotar en dónde incluir el código de gestión del Cliente en caso de implementarlo como tal, y para este ejemplo se encuentra vacía. En este sentido, y puesto que nuestra pruebas las realizaremos desde Postman para probar las respuestas de nuestra API frente a peticiones HTTP (API/REST), tal implementación desde el lado del Cliente no ha sido necesaria.

## Probando la Aplicación

Previamente a lanzar nuestra Aplicación deberemos arrancar MySQL (MySQL Workbench) en nuestro equipo, y proceder a crear nuestra base de datos local para la gestión de nuestra motocicletas. Este base de datos deberemos llamarla bd_motorbikes. 

En las siguientes líneas se recogen los parámetros de configuración necesarios de introducir a nuestra Basde de Datos MySQL para hacerla funcionar correctamente con nuestra Aplicación:

```
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "db_motorbikes"
```

Configurado MySQL, para lanzar nuestra Aplicación, bastará ejecutar el comando node server.js estando situado en la raiz de su carpeta de instalación/descarga. 

Por ejemplo:
```
C:\Users\cesar\Desktop\AppBikes node server.js
```
Esto arrancará nuestro Servidor Web Express que, además de conformar nuestra estructura de rutas para poder dar salida a las distintas Peticiones HTTP, también y de forma automática, cargará la librería Sequelize para la gestión ORM de nuestros datos sobre la Base de Datos creada en MySQL.

A partir de aquí, la Gestión CRUD de los Datos por parte de la Aplicación se realizará a partir de Peticiones HTTTP gestionadas desde Postman, que en este sentido actuará como Cliente. Así, por poner algunos ejemplos, y siempre después de arrancar Postman en nuestro equipo tendríamos



### Pruebas con Postman

## Añadir registros a nuestra Tabla de Motocicletas
```
POST  http://localhost:8080/api/motorbikes
(Incluyendo en "Body", y con formato "x-www-form-urlencoded"):

    brand (KEY)		Suzuki 	(Value)
    model (KEY)		Gladius (Value)
    engine (KEY)	650cc	(Value)

Esta estructura recoge los 3 posibles campos a registrar por motocicleta en nuestra Aplicación.
```
## Leer registros de la BBDD
```
GET  http://localhost:8080/api/motorbikes

Devolverá todos los registros de motocicletas existentes en la BBDD en ese instante.
```
## Actualizar registros
```
PUT  http://localhost:8080/api/motorbikes
(Siendo "n" el id de la motocicleta cuyo campo queremos cambiar, conforme a la estructura del POST):

    brand (KEY)		Suzuki 	(Value)
    model (KEY)		Gladius (Value)
    engine (KEY)	650cc	(Value)
```
## Borrar registros
```
DELETE  http://localhost:8080/api/motorbikes
(De nuevo "n" identificará la motocicleta/registro que querremos borrar):


### Pruebas desde IONIC
Bastará con seguir los pasos indicados en la interfaz de la APP, bastante simple e intuitiva a este respecto.

```
## Despliegue

No se incluyen pruebas de despligue para esta Aplicación.

## Construído con:

* [Node](https://nodejs.org/en/) - Motor JScript del Lado del Servidor.
* [Express](https://expressjs.com/) - Servidor Web para Node.
* [Sequelize](https://sequelize.org/) - ORM compatible con Express y que implementa diferentes dialectos para su conexión con BBDD; entre otros con MySQL.
* [MySQL/MySQL Workbench](https://www.mysql.com/products/workbench/) - Gestor de Base de Datos Relacional/Interfaz Gráfica.
* [Postman](https://www.postman.com/) - Herramienta para la realización de pruebas HTTP/REST sobre API's.
* [IONIC](https://ionicframework.com/) - Framework para el desarrollo de Aplicaciones Multiplataforma y Multidispositivo.


## Autor

* **César Torres** - *Trabajo original* - [Bezkoder.com](https://www.bezkoder.com/node-js-express-sequelize-mysql/)

Ver también la "Sección de Reconocimientos" en este mismo documento

## Licencia

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Reconocimientos

* Tiburcio Cruz Ravelo: Profesor del Módulo de Desarrollo de Aplicaciones Multimedia/Ciclo DAM: IES El Rincón
* Web de Bezkoder.com  https://www.bezkoder.com/node-js-express-sequelize-mysql/
* Web https://remotestack.io/ionic-http-requests-with-httpclient-get-post-put-delete-tutorial/
* Plantilla para fichero README.md de https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
* Otras búsquedas relacionadas en Internet.
