# AMDI: Página oficial

- Por: Kevin Alejandro Leal Torres.
- Documentación creada el: 2 de junio de 2024
- Última revisión del documento: 16 de octubre de 2024


## Resumen:

Esta página fue creada con Astro ya que su enfoque es en ser estatico, rapido y facil de mantener para los proximos programadores.

## Tecnologías usadas:

1. npm
2. pnpm
3. TypeScript

## Dependencias:

1. TailwindCSS
2. Storyblok
3. Vercel
4. BasicSSL
5. (todas las dependencias en ```/astro.config.mjs```)

## Cómo configurar:

1. Hacer el git clone a tu local (```git clone https://github.com/Selectivo-AMDI/amdi.github.io.git```)
2. Ejecutar ```git pull origin main``` para no tener conflictos con nuevos cambios (esto igual hacerlo con la rama server-mode, canary y dev)
3. Ejecutar ```npm i``` para instalar las dependencias correspondientes
4. Ejecutar ```pnpm i``` para instalar las dependencias correspondientes
5. Revisar y descomentar los comandos en el archivo ```/https_start.sh``` para ejecutarlo posteriormente
6. Ejecutar ```npm run astro dev``` para correr el proyecto
7. En ```https://localhost:4321``` se verá la previsualización

## Scripts

Para automatizar mejor el tema de la conexión a Storyblok, creé el script ```/https_start.sh```. El archivo
funciona para sistemas UNIX, si tienes Windows, busca su equivalente

Para ejecutar el archivo, primero usa algún editor de texto y descomenta los comandos para instalar y configurar
los archivos PEM. Después de que los descomentaste, ejecuta en la terminal: ```chmod +x https_start.sh; ./https_start.sh```. Y listo. ¿Por qué es necesario? Storyblok pide forzosamente conexión HTTPS.

## Ramas:

**main**: Es la rama para desplegar a producción, es la versión más estable y revisada

**dev**: Son los cambios que van a ser probados y puestos a revisión

~~**canary**~~: (deprecated: ya que esta rama pertenecía para lanzar previews a GH Pages. Actualmente se trabaja con Vercel y se cambió a la rama **server-mode**) Son los hotfix o cualquier cambio hecho en el proyecto, esté probado o no, para ir guardando en el origin cualquier cambio hecho y después mandarlo a ```dev``` para su revisión

**server-mode**: Rama que soporta SSR por medio de un conector a Vercel. Con la misma misión de la rama canary, en este se programan las nuevas funcionalidades experimentales y hotfix para ser probados en dev.

Los cambios deberían de ser: 

server-mode -> dev -> main

## Despliegue
Actualmente las previews se hacen con Vercel (GH queda _deprecated_ por no soportar SSR), la cual apunta a la rama **server-mode**.

