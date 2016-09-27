# wivo_challenging
WivoChallenging

--------------------------------------------

Este proyecto sencillo consiste en buscar usuarios de github por ubicaicón, lenguaje y cantidad de seguidores y añadirlo a una lista de favoritos.

Está dividido en dos partes, la carpeta git-search-backend y la carpeta git-search-wivo.

---- Paso 1: Levantamiento del Backend -----

En la carpeta git-search-backen se encuentra un proyecto de Play Java que contiene los modelos y web services para añadir, eliminar y listar favoritos, además de listar los lenguajes.

Se empleó una versión de play compatible con Java 7. La versión de Play empleada fue 2.2.6 (https://downloads.typesafe.com/play/2.2.6/play-2.2.6.zip). Para instalación y configuración ver https://www.playframework.com/documentation/2.2.x/Installing

Una vez configurado e instalado Play, cambia los parámetros de conexión a tu base de datos en el archivo conf/application.conf. Una base de datos de prueba se encuentra en la carpeta bd. Se recomienda usar Mysql, ya que en el sbt del proyecto está configurado para descargar el conector Mysql de Maven. Si desea usar otra base de datos, debe añadir la dependencia en el archivo build.sbt.

Para correr la aplicación, ejecutar en la dirección del proyecto play, el comando "play", luego ejecutar el comando "run 8000". 

Ejecute en su navegador localhost:8000 y verifique la consola para chequear si todo funciona correctamente.

----- Paso 2: CORS (Cross-Origin Resource Sharing) ----

Antes de correr el proyeco de angular, debe tener instalado en su navegador el plugin de CORS, y luego de instalado, encenderlo para habilitar Access-Control-Allow-Origin:"*", ya que en caso contrario arrojará un error de conexión de  XMLHttpRequest Request preflight y no podrán invocar los servicios que están corriendo en localhost:8000


--- Paso 3: Levantamiento del Frontend -----

La carpeta git-search-wivo tiene en proyecto de angular. Recuerde ejecutar bower install para bajar todas las dependencias. Luego ejecute el comando grunt serve para levantar la página. 

Este proyecto además de realizar peticiones a nuestro proyecto play, realiza peticiones a los web services de github para obtener la información de los usuarios y realizar la búsqueda de los mismos. Al pulsar las estrellas, agregamos un usuario a favoritos y al destildarla lo eliminamos. Por otro lado, puede listar todos los favoritos en el apartado Favorites.






