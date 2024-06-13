# AMDI: Página oficial

- Por: Kevin Alejandro Leal Torres.


## Resumen:

Esta página fue creada con Astro ya que su enfoque es en ser estatico, rapido y facil de mantener para los proximos programadores. 

## Requerimientos:

1. npm

## Dependencias

1. Tailwind CSS
2. Astro

## Cómo configurar:

1. Hacer obviamente el git clone a tu local (```git clone https://github.com/Selectivo-AMDI/amdi.github.io.git```)
2. Ejecutar ```git pull origin main``` para no tener conflictos con nuevos cambios
3. Ejecutar ```npm i``` para instalar las dependencias correspondientes
4. Ejecutar ```npm run dev``` para correr el proyecto
5. En ```localhost:4321``` se verá la previsualización

## Scripts

Para automatizar mejor el tema de las páginas, he creado este script:
```npm run page -- el nombre de la pagina que quieras crear```
Lo que hará esto es crearte una nueva page con un template.

### Ramas:

**main**: Es la rama para desplegar a producción, es la versión más estable y revisada
**dev**: Son los cambios que van a ser probados y puestos a revisión
**canary**: Son los hotfix o cualquier cambio hecho en el proyecto, esté probado o no, para ir guardando en el origin cualquier cambio hecho y después mandarlo a ```dev``` para su revisión

Los cambios deberían de ser: 

canary -> dev -> main