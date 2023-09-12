#!/bin/bash

# Ruta al archivo data_json.txt
archivo_data_json="data_json_modificado.txt"

# Ruta al archivo data.json
archivo_json="data.json"

# Verificar si el archivo data_json.txt existe
if [ ! -f "$archivo_data_json" ]; then
    echo "El archivo $archivo_data_json no existe."
    exit 1
fi

# Copiar el contenido de data_json.txt a data.json
cp "$archivo_data_json" "$archivo_json"

echo "Contenido de $archivo_data_json copiado y actualizado en $archivo_json."
