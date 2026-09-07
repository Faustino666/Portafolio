# ---- Imagen de build ----
FROM node:22-alpine AS build

WORKDIR /app

# Activa pnpm (incluido con corepack en la imagen de node)
RUN corepack enable

# Instala dependencias con el lockfile para builds reproducibles
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copia el resto del código y compila
COPY . .
RUN pnpm build

# ---- Imagen de servidor ----
FROM nginx:alpine AS serve

# Copia el sitio estático generado
COPY --from=build /app/dist /usr/share/nginx/html

# Config de nginx para servir el SPA
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]