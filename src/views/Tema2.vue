<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Implementación de <i>backend</i> 

    .row.justify-content-center.align-items-center      
      .col-lg-12.bg-img-2.p-5
        .row.justify-content-center.align-items-center.mt-5.p-5      
          .col-lg-5
            img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img33.svg', alt='')
          .col-lg-7
            p(data-aos="fade-down-right").p-3 Es muy común dar bastante importancia a los aspectos de las aplicaciones web que son visibles, como las imágenes o el diseño, pero también existen otros elementos muy importantes para que una aplicación funcione de forma correcta y que no son visibles a simple vista.

            p(data-aos="fade-down-right").bg-p-color.p-3 El <i>backend</i> es esa parte invisible pero esencial en todo proyecto web, y a la que es de extrema importancia darle toda la trascendencia del caso, porque de él depende en gran parte los procesos informáticos que realiza un sistema. 

        .row.justify-content-center.align-items-center      
          .col-lg-7
            p(data-aos="fade-down-right") En el desarrollo web, el <i>backend</i>, es la parte del sistema que se encarga de todos los procesos necesarios para que la aplicación web funcione de forma correcta y estos procesos o funciones no son visibles. Algunas de estas acciones que controlan el <i>backend</i> son la conexión con la base de datos o la comunicación con el servidor de y los procesos o algoritmos que debe realizar la aplicación. 

            p(data-aos="fade-down-right") A continuación, se presenta cómo desarrollar un <i>backend</i> sencillo que permita interactuar con la base de datos sin prestar mucho énfasis en el desarrollo de algoritmos informáticos. Esto debido a que en los procesos de pruebas es importante comprender cómo funcionan internamente las aplicaciones web.
          .col-lg-5
            img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img34.svg', alt='')            

    separador(data-aos="slide-left")

    #t_2_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.1 CRUD
    p(data-aos="fade-down-right") CRUD hace referencia a un acrónimo, que consiste en las primeras letras de las cuatro operaciones fundamentales que las aplicaciones realizan en sistemas de bases de datos:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/ilustraciones/img35.svg', alt='')

      .tarjeta.color-acento-botones.br-color-red.p-3(x="29.2%" y="59.8%" numero="")
        .h5.text-center.mb-0 Create

      .tarjeta.color-acento-botones.br-color-green.p-3(x="46.2%" y="59.8%" numero="")
        .h5.text-center.mb-0 Read     

      .tarjeta.color-acento-botones.br-color-red.p-3(x="60.7%" y="59.8%" numero="")
        .h5.text-center.mb-0 Update    

      .tarjeta.color-acento-botones.br-color-green.p-3(x="77.6%" y="59.8%" numero="")
        .h5.text-center.mb-0 Delete bzw. Destroy                  

    p.mt-4 En otras palabras, CRUD se denomina a las funciones requeridas por un usuario, en una aplicación para crear y gestionar datos: Create (crear registros), Read (leer registros), Update (actualizar registros) y Delete bzw. Destroy (borrar registros).

    separador(data-aos="slide-left")

    #t_2_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.2 Definición de la base de datos  
    .row.justify-content-center.align-items-center  
      .col-lg-10.bg-card-red-1.p-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            p(data-aos="fade-down-right") Para este caso de prueba se implementará una base de datos para un Sistema de Peticiones, Quejas, Reclamos y Sugerencias (PQRS), que es una herramienta que permite conocer las inquietudes y manifestaciones que tienen los visitantes a un sitio web.

            p.pb-5(data-aos="fade-down-right") La siguiente estructura puede ser la de un documento para una base de datos en MongoDB.              
          .col-lg-4
            img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img36.svg', alt='')                   

    p.mt-5(data-aos="fade-down-right") Se llamará a la colección PQRS y ella contendrá registros o documentos con una estructura similar a la ya mostrada. 

    separador(data-aos="slide-left")

    #t_2_3.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.3 Instalación Node JS 
    .row.justify-content-center.align-items-center  
      .col-lg-10
        p(data-aos="fade-down-right") A continuación, se instalará un intérprete de lenguaje de scripting como Node JS para JavaScript, para que sea ejecutado desde el sistema operativo, que no es la forma más común, ya que este lenguaje nació para navegadores. Para iniciar el proceso se debe ingresar a la página de Node JS para descargar la última versión, y seguir las instrucciones para instalar este intérprete.

        SlyderE.bg-img-3.mt-5.p-5(indicadores="derecha")
          .row.justify-content-center.align-items-center
            .col-12 
              h5 Página de descarga NodeJS.           
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img37.jpg', alt='')   
          .row.justify-content-center.align-items-center
            .col-12 
              p Al ejecutar el archivo en el directorio de  descargas comenzará la instalación cuando hagamos click en Next.
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img39.jpg', alt='')
          .row.justify-content-center.align-items-center
            .col-12 
              p Es preciso aceptar los términos de licencia y dar click de nuevo en Next.
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img40.jpg', alt='')
          .row.justify-content-center.align-items-center
            .col-12 
              p Verificar que la ruta de instalación es correcta y hacemos click en Next.
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img41.jpg', alt='')
          .row.justify-content-center.align-items-center
            .col-12 
              p Verificar los componentes a instalar y dar click de nuevo en Next.
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img42.jpg', alt='')
          .row.justify-content-center.align-items-center
            .col-12 
              p Para completar el proceso, por último dar clic en Install.
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img43.jpg', alt='')              
          .row.justify-content-center.align-items-center
            .col-12 
              p Para comprobar que NodeJS se ha instalado se debe abrir la terminal de Windows pulsando la tecla Windows + R, escribir CMD y luego “node -v”. 
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img44.jpg', alt='') 
          .row.justify-content-center.align-items-center
            .col-12 
              p En la terminal escribir “node -v”. Si todo está bien se mostrará la versión actual de NodeJS instalada en el sistema.
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img45.jpg', alt='') 
          .row.justify-content-center.align-items-center
            .col-12 
              p Para instalar npm se debe escribir en el terminal de Windows npm install npm@latest -g y pulsar enter.
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img46.jpg', alt='')

        p.mt-5(data-aos="fade-down-right") Con estas herramientas instaladas se puede proceder a construcción un api que permita la comunicación de una aplicación web con una base de datos a través de un servidor web creado con el intérprete del lenguaje JavaScript.


    separador(data-aos="slide-left")

    #t_2_4.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.4  Api CRUD con Node JS 

    .row.justify-content-center.align-items-center  
      .col-lg-3
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img47.svg', alt='')      
      .col-lg-7
        p(data-aos="fade-down-right").p-3 Es preciso instalar un servidor web que permita recibir las solicitudes de servicios CRUD desde un navegador u otro sistema de pruebas. Para tal fin, se emplea un conjunto de librerías JavaScript llamado express, para lo cual se debe en el siguiente orden, el comando correspondiente.
        .row.justify-content-center.align-items-center.bg-p-color.p-3  
          .col-lg-8
            h5 Instructivo Api CRUD con Node JS
            h5 Ingresa al instructivo para conocer el paso a paso para la instalación de Api CRUD con Node JS            
          .col-lg-4
            a(:href="obtenerLink('/downloads/Instructivo_Api_CRUD_con_Node_JS.pdf')" target="_blank" type="application/pdf")
              img.img-t.img-a.my-3.btn-h(data-aos="zoom-in")(src='@/assets/ilustraciones/img59.svg', alt='')         

    separador(data-aos="slide-left")

    #t_2_5.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.5 API de acceso a la base de datos
    p.p-gray.mb-0.px-5.py-4(data-aos="fade-down") A continuación, se usará la dependencia de MongoDB para la conexión; por ser un ejemplo práctico se empleará MongoDB instalandolo con el siguiente comando.

    .row.justify-content-center.align-items-center.img-m-top
      .col-lg-10
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img48.svg', alt='')      
    .row.justify-content-center.align-items-center.m-card-top(data-aos="fade-left")
      .col-lg-10.avatar-custom.pt-5.pb-3.px-5
        .row.justify-content-center.align-items-center.pt-5.px-5  
          .col-lg-8
            h5 Instructivo API de acceso a la base de datos
            h5 Ingresa al instructivo para conocer el paso a paso para la instalación de Api desde la base de datos.      
          .col-lg-3
            a(:href="obtenerLink('/downloads/Instructivo_API_de_acceso_a_la_base_de_datos.pdf')" target="_blank" type="application/pdf")
              img.img-t.img-a.my-3.btn-h(data-aos="zoom-in")(src='@/assets/ilustraciones/img58.svg', alt='')            

    separador(data-aos="slide-left")

    #t_2_6.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.6  Codificación
    .row.justify-content-center.align-items-center  
      .col-lg-10
        p(data-aos="fade-down-right") Es la escritura de las sentencias del algoritmo en un lenguaje de programación. A continuación, se presentarán los códigos que contendrá el api REST.
    .row.justify-content-center.align-items-center  
      .col-lg-8
        SlyderE.bg-img-3.p-5(indicadores="derecha")
          .row.justify-content-center.align-items-center
            .col-12 
              h5 GET: obtener todos los datos de la colección
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img49.svg', alt='') 
              p.mt-4 Se define la ruta /PQRS, del método GET, para que retorne todos los elementos de la colección.

          .row.justify-content-center.align-items-center
            .col-12 
              h5 POST: insertar documentos en la colección
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img50.svg', alt='') 
              p.mt-4 Se define la ruta /pqrs del método POST y se toda el contenido del body de la solicitud (req.body) como el json que se insertará en la colección. Entonces (then)  retornará el resultado el mensaje creado como json de respuesta. 

          .row.justify-content-center.align-items-center
            .col-12 
              h5 PUT: editar o responder una PQRS
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img51.svg', alt='') 
              p.mt-4 Se define la turta /pqrs/:id del método PUT donde id es el asunto de la PQRS que se desea editar. Posteriormente, se emplea el atributo, estado y respuesta del body de la solicitud para actualizar el documento.     

          .row.justify-content-center.align-items-center
            .col-12 
              h5 DELETE: eliminar o borrar PQRS
              img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img51.svg', alt='') 
              p.mt-4 Finalmente, se emplea la misma ruta que el método PUT para este método (DELETE) de manera que con el asunto de la PQRS se elimine el documento o documentos que correspondan al asunto.
              p Por último, puede acceder al código fuente en el archivo adjunto crud.zip. 

    separador(data-aos="slide-left")

    #t_2_7.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.7  Pruebas unitarias 
    .row.justify-content-center.align-items-center.mt-5      
      .col-lg-5
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img53.svg', alt='')
      .col-lg-7
        p(data-aos="fade-down-right").p-3 Una prueba unitaria es una forma de comprobar el correcto funcionamiento de una unidad o porción de código. Para el caso que se viene trabajando, una función o un procedimiento es cada elemento del api correspondiente a las operaciones GRUD. Esto es útil para asegurar que cada unidad funcione correcta y eficientemente por separado y también para validar que el código hace lo que tiene que hacer y verificando que sea correcto.

        .row.justify-content-center.align-items-center.bg-p-color.p-3  
          .col-lg-8
            h5 Descargar e Instalar Postman - Probar petición GET
            h5 Conoce como se pueda realizar pruebas unitarias en un sistema Postman,            
          .col-lg-4
            a(href="https://youtu.be/4X8L_qWIeI8" target="_blank")
              img.img-t.img-a.my-3.btn-h(data-aos="zoom-in")(src='@/assets/ilustraciones/img57.svg', alt='')

    .row.justify-content-start.align-items-center.mt-5      
      .col-lg-9.bg-card-color-1.ps-5.pt-2
        .row.justify-content-start.align-items-center      
          .col-lg-6
            p #[b Pruebas unitarias]
            p Visualice los siguientes videos de #[b Instalación y preparación Postman y Pruebas unitarias de <i>software</i>], para conocer sobre el proceso de ejecución de las pruebas unitarias.                
          .col-lg-4
            a(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              img.img-t.img-a.my-3.btn-h(data-aos="zoom-in")(src='@/assets/ilustraciones/img55.svg', alt='')
            a(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")              
            img.img-t.img-a.my-3.btn-h(data-aos="zoom-in")(src='@/assets/ilustraciones/img56.svg', alt='')
    .row.justify-content-end.align-items-center.img-m-top-1      
      .col-lg-5
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img54.svg', alt='')
    separador
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
