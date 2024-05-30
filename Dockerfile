# Etapa 1: Construcción de la aplicación Angular
FROM node:22-alpine3.19 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación Angular
RUN npm run build -- --output-path=dist

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copia el archivo de configuración de Nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Copia los archivos construidos desde la etapa 1
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para correr Nginx
CMD ["nginx", "-g", "daemon off;"]

