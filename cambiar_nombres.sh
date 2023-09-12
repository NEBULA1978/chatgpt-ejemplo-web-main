#!/bin/bash

# Ruta al archivo JSON original
archivo_json="data.json"

# Ruta al archivo nombres_imagenes.txt
archivo_nombres="nombres_imagenes.txt"

# Nombre del archivo de salida
archivo_salida="data_json.txt"

# Verificar si el archivo nombres_imagenes.txt existe
if [ ! -f "$archivo_nombres" ]; then
    echo "El archivo $archivo_nombres no existe."
    exit 1
fi

# Leer el contenido de nombres_imagenes.txt en un array
mapfile -t nombres_imagenes < "$archivo_nombres"

# Crear la estructura JSON modificada
json_modificado="{\"bicicletas\": ["
for nombre_imagen in "${nombres_imagenes[@]}"; do
    json_modificado+="{
        \"nombre\": \"$nombre_imagen\",
        \"modelo\": \"Bicicleta de montaña\",
        \"img\": \"img/$nombre_imagen\",
        \"precio\": 5
    }, "
done
# Eliminar la última coma y espacio en blanco
json_modificado="${json_modificado%, }"
json_modificado+="]}"

# Reemplazar el contenido del archivo de salida con el JSON modificado
echo "$json_modificado" > "$archivo_salida"

echo "Contenido de $archivo_salida actualizado con el JSON modificado."
