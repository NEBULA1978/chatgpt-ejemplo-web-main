#!/bin/bash

# Para ver nombres desde la carpeta principal:
# Vemos el contenido de imágenes que no contengan la palabra "bicicleta"

nombres_imagenes=$(lsd img -i | grep -v "bicicleta" | awk '{print $2}')

# Nombre del archivo donde se guardarán los nombres
archivo_nombres="nombres_imagenes.txt"

# Guardamos los nombres en el archivo
echo "$nombres_imagenes" > "$archivo_nombres"

echo "Nombres de imágenes guardados en $archivo_nombres"

# Resultado por consola:
# 6502_100_1_1.jpg
# 6550_96_1_1.jpg
# 6554_98_1_1.jpg
# 6627_48_1_1.jpg
# 6681_07_1_1.jpg
# 6683_126_1_1.jpg
# 6690_01_1_1.jpg
# 6696_98_1_1.jpg
# 6698_264_1_1.jpg
# atomic.jpg