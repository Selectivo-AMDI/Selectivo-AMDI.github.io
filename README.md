# AMDI: Página oficial

Equipo encargado del desarrollo:

| Nombre                          | Rol                   |
| ------------------------------- | --------------------- |
| Kevin Alejandro Leal Torres     | Product Owner         |
| David Eduardo Pérez Luna        | Product Manager       |
| María de la Luz Farfán Martínez | Programadora frontend |
| Francisco Tamez Vázquez         | Programador backend   |

**Documentación creada** 16 de enero de 2025

**Última revisión del documento:** 29 de abril de 2025

## Tabla de contenidos:

1. [Resumen](#Resumen)
2. [Problema identificado](#Problema-identificado)
3. [Solución](#Solución)
4. [Tecnologías usadas](#Tecnologías-usadas)
5. [Dependencias](#Dependencias)
6. [Requerimientos](#Requerimientos)

   6.1. [Cómo configurar](#Cómo-configurar)

   6.2. [Scripts](#scripts)

7. [Dependencias](#Dependencias)
8. [Ramas](#ramas)
9. [Despliegue](#despliegue)

## Resumen:

Esta página tiene como proposito que la gente en internet conozca a la organización AMDI Jalisco. Que se vean los valores, la historia, la visión y misión, blogs y partidos jugados anteriormente.

## Problema identificado:

La institución ha visto que su problema es que no lo conoce nadie, aun son una institución pequeña. Lo que hace que el AMDI no pueda generar los suficientes recursos para seguir avanzando.

## Solución:

Para que la gente conozca a la institución sin tener que moverse, se proveerá de una página web para que todos, sin importar si se conectan en celular o PC, puedan leer todo lo reelevante e interesarse en mandar a sus hijos a entrenar con nosotros.

## Tecnologías usadas:

1. npm - manejador de paquete y runtime para JS
2. pnpm - manejador de paquetes enfocado en eficiencia
3. TypeScript - lenguaje de programación
4. Bun - runtime de JS

## Dependencias:

1. TailwindCSS - Librería de estilos de CSS
2. Storyblok - CMS headless
3. Vercel - hosting
4. BasicSSL - creador de certificados SSL para conexiones seguras (HTTPS)
5. (todas las dependencias en `/astro.config.mjs`)

## Requerimientos:

Antes de proceder con la instalación de la página, hay que instalar lo siguiente:

1. Git: [Cómo instalar GIT en Windows, MacOS y Linux](https://www.hostinger.com/mx/tutoriales/instalar-git-en-distintos-sistemas-operativos?utm_campaign=Generic-Tutorials-DSA%7CNT:Se%7CLO:MX-t3&utm_medium=ppc&gad_source=1&gad_campaignid=17999056699&gbraid=0AAAAADMy-hZ85CLGU1Oq6pkYXBYzvoi0-&gclid=Cj0KCQjw8cHABhC-ARIsAJnY12zB_6EgBUhn0MS8b7Bv2-Ly8rYtP7jkiIF43XLLKZvukeyP4r7TD7MaAj_EEALw_wcB)

2. npm: [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

3. pnpm: [Installation | pnpm](https://pnpm.io/installation)

4. bun: [Installation | Bun Docs](https://bun.sh/docs/installation)

_(No se ocupa nada para instalar TypeScript, npm y bun contienen TypeScript instalado)_

### Cómo configurar:

1. clonar el código fuente a tu computadora con este comando (`git clone https://github.com/Selectivo-AMDI/amdi.github.io.git`)
2. Ejecutar `git pull origin main` para no tener conflictos con nuevos cambios (esto igual hacerlo con la rama server-mode, canary y dev)
3. Ejecutar `npm i` para instalar las dependencias correspondientes
4. Ejecutar `pnpm i` para instalar las dependencias correspondientes
5. Revisar y descomentar los comandos en el archivo `/https_start.sh` para ejecutarlo posteriormente
6. Ejecutar `npm run astro dev` para correr el proyecto
7. En `https://localhost:4321` se verá la previsualización

### Scripts

Para automatizar mejor el tema de la conexión a Storyblok, creé el script `/https_start.sh`. El archivo
funciona para sistemas UNIX, si tienes Windows, busca su equivalente

Para ejecutar el archivo, primero usa algún editor de texto y descomenta los comandos para instalar y configurar
los archivos PEM. Después de que los descomentaste, ejecuta en la terminal: `chmod +x https_start.sh; ./https_start.sh`. Y listo. ¿Por qué es necesario? Storyblok pide forzosamente conexión HTTPS.

## Ramas:

**main**: Es la rama para desplegar a producción, es la versión más estable y revisada

**dev**: Son los cambios que van a ser probados y puestos a revisión

~~**canary**~~: (**deprecated**: ya que esta rama pertenecía para lanzar previews a GH Pages. Actualmente se trabaja con Vercel y se cambió a la rama **server-mode**) Son los hotfix o cualquier cambio hecho en el proyecto, esté probado o no, para ir guardando en el origin cualquier cambio hecho y después mandarlo a `dev` para su revisión

**server-mode**: Rama que soporta SSR por medio de un conector a Vercel. Con la misma misión de la rama canary, en este se programan las nuevas funcionalidades experimentales y hotfix para ser probados en dev.

Los cambios deberían de ser:

server-mode -> dev -> main

## Configuración

1. Tú tienes un archivo llamado `.env.example`, es un template del archivo `.env` (**el archivo `.env` no se debe exportar a GH porque contiene claves secretas**). Debes acceder a la página Storybloks e ir a la API para conseguir la llave de PREVIEW para los blogs y ponerlo en la única variable que existe.

2. Si no lo has hecho, usa los comandos `npm i` y `pnpm i` para instalar automatiecamente las dependencias.

3. si no lo has hecho, configura el certificado SSL con el archivo `./https_start.sh`. (¿Por qué? Porque Storybloks sólo acepta solicitudes HTTPS, y ninguno de los manejadores de paquetes o runtimes soporta conexiones seguras nativas)

4.

## Despliegue

Actualmente las previews se hacen con Vercel (GH queda _deprecated_ por no soportar SSR), la cual apunta a la rama **server-mode**.

## Uso

Estos pocos consejos aplican a ambos:

**¿Qué usar: bun, npm o pnpm?** bun fue un experimento como reemplazo a npm por ser más rápido, pero al ser un proyecto pequeño, la verdad la diferencia entre npm y bun es despreciable, por lo que puedes eliminar bun o npm, según tus conocimientos en alguna de estas herramientas. pnpm mantenlo, ya que hay un paquete de optimización de imagenes de Google que sólo estaba en pnpm, si ese paquete llega a npm o bun, también puedes desprenderte de pnpm.

**¿GitHub Pages o Vercel?** Vercel, ya que GitHub no soporta SSR, por lo que el modulo de blogs (storybloks) no se cargara y lo mas probable es que te de un error en el Deploy de GH Pages. Usa Vercel y listo. Utilicé GH Pages cuando ese modulo aún no existía.

### Usuario final:

Está página se caracteriza por cargarse automaticamente cada que se escribe un blog en Storybloks, es rapido y eficiente. Por lo que

### Administrador:

Astro es un framework nuevo, y a la vez inestable, por lo que siempre mantente al tanto de los nuevos cambios del framework en su página web, al igual que en storybloks porque cambian la API. La API está documentada en la carpeta `/src/types/`, pero Storybloks a veces cambia la API, así que normal que tengas que cambiarla de vez en cuando.

## Contribución

si quieres contribuir, puedes hacerlo mediante un pull request. ¿Cómo? primero selecciona bien la rama especifica, recuerda que cada rama tiene una misión distinta.

Ahora, haz los cambios pertinentes y haz los commits según las buena practicas en Git y Github. Una vez tengas todo en commit, sube la PR explicando todo lo que hiciste y una justificación de nuevos paquetes o dependencias (si aplica, claro). El tiempo de merge depende de los cambios hechos, puede ser desde 1 día hábil, a semanas.

por último, por favor, que los cambios no sean de identación o de estilo. no va a cambiar nada el cambiar las dobles comillas con comillas simples o 1 tab con 4 espacios.

## Roadmap

Al momento de esta nueva revisión, no se han pedido nuevos requerimientos por parte de AMDI, pero aún estamos abiertos a cualquier cambio o implementación.
