#!/bin/bash

# Ruta al archivo data_json.txt (el archivo donde deseas realizar los cambios)
data_json="data_json.txt"

# Ruta al archivo nombres_imagenes.txt
nombres_imagenes="nombres_imagenes.txt"

# Leer el contenido de nombres_imagenes.txt en un array
mapfile -t nombres < "$nombres_imagenes"

# Crear un nuevo archivo para el resultado
resultado="data_json_modificado.txt"

# Contador para recorrer el array de nombres de imágenes
contador=0

# Leer el archivo data_json.txt línea por línea
while IFS= read -r linea; do
    # Verificar si la línea contiene "\"img\":"
    if [[ $linea =~ "\"img\":" ]]; then
        # Reemplazar la parte de la línea correspondiente a la imagen
        nueva_linea="            \"img\": \"img/${nombres[$contador]}\","
        contador=$((contador + 1))
        echo "$nueva_linea"
    else
        # Mantener la línea sin cambios
        echo "$linea"
    fi
done < "$data_json" > "$resultado"

# Agregar una llave de cierre "}" al final del archivo
echo "}" >> "$resultado"

echo "Se han cambiado los nombres de las imágenes en $resultado."
