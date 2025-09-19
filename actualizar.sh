
# Mensaje del commit (usa el argumento si se pasa, o uno por defecto)
mensaje=${1:-"Actualización automática del proyecto"}

# Agregar todos los cambios
git add .

# Crear el commit
git commit -m "$mensaje"

# Subir a la rama main (cambia 'main' a 'master' si tu repo lo usa)
git push origin main
