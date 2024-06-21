#!/bin/bash

# Directorio donde se encuentran las imágenes
DIRECTORY=$1

# Verificar si se pasó un directorio como argumento
if [ -z "$DIRECTORY" ]; then
  echo "Uso: $0 <directorio>"
  exit 1
fi

# Verificar si el directorio existe
if [ ! -d "$DIRECTORY" ]; then
  echo "El directorio $DIRECTORY no existe."
  exit 1
fi

# Listar las imágenes y sus dimensiones
for IMAGE in "$DIRECTORY"/*.{jpg,jpeg,png}; do
  if [ -f "$IMAGE" ]; then
    DIMENSIONS=$(identify -format "%wx%h" "$IMAGE")
    echo "$IMAGE: $DIMENSIONS"
  fi
done

