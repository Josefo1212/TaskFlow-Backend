# TaskFlow Backend

## Actualizar y subir imagen de auth-service a Docker Hub

Cada vez que cambies el código de `auth-service`, sigue estos pasos:

1. Construye la imagen:
   ```
   docker build -t josefo1212/auth-service:latest -f auth-service/dockerfile ./auth-service
   ```

2. Sube la imagen a Docker Hub:
   ```
   docker push josefo1212/auth-service:latest
   ```

## Actualizar y subir imagen de gateway-api a Docker Hub

Cada vez que cambies el código de `gateway-api`, sigue estos pasos:

1. Construye la imagen:
   ```
   docker build -t josefo1212/gateway-api:latest -f gateway-api/dockerfile ./gateway-api
   ```

2. Sube la imagen a Docker Hub:
   ```
   docker push josefo1212/gateway-api:latest
   ```

## Actualizar y subir imagen de user-service a Docker Hub

Cada vez que cambies el código de `user-service`, sigue estos pasos:

1. Construye la imagen:
    ```
    docker build -t josefo1212/user-service:latest -f user-service/dockerfile ./user-service
    ```

2. Sube la imagen a Docker Hub:
    ```
    docker push josefo1212/user-service:latest
    ```

## TaskService: Build & Push Docker Image

1. Construir la imagen:

```
docker build -t josefo1212/task-service:latest -f task-service/dockerfile ./task-service
```

2. Subir la imagen a Docker Hub:

```
docker push josefo1212/task-service:latest
```

Reemplaza `<usuario_dockerhub>` por tu usuario real de Docker Hub.

## Levantar los servicios con Docker Compose

Docker Compose ahora reutiliza los `.env` existentes de cada microservicio y aplica overrides Docker desde archivos `*.env.docker`, evitando dejar variables sensibles inline en `docker-compose.yml`.

Archivos usados por Compose:

- `db/.env.docker`
- `auth-service/.env` + `auth-service/.env.docker`
- `gateway-api/.env` + `gateway-api/.env.docker` + `gateway-api/.env.prod.docker`
- `user-service/.env` + `user-service/.env.docker`

El `docker-compose.yml` principal ahora representa la topología con Nginx público (detrás de Cloudflare Tunnel):

- `proxy` usa la imagen oficial de Nginx y toma su configuración desde `proxy/nginx/nginx.conf`
- `frontend` (cuando exista) quedará detrás del proxy público
- `gateway-api` queda detrás de Nginx y despacha hacia los microservicios internos
- `auth-service`, `user-service`, `db` y `redis` quedan internos sin puertos publicados al host

El proxy enruta por host:

- `tasksflowcenter.online` y `www.tasksflowcenter.online` (placeholder 200 por ahora)
- `api.tasksflowcenter.online` hacia `gateway-api`

Para levantar toda la arquitectura:

```
docker compose up
```

La imagen del frontend puede sustituirse definiendo la variable `FRONTEND_IMAGE` antes de levantar el compose o editando el servicio `frontend`.

El override `gateway-api/.env.prod.docker` ya está preparado para dominio real con `CORS_ORIGIN=https://tasksflowcenter.online` y `REFRESH_COOKIE_SECURE=true`.

## Dominio y Cloudflare Tunnel

En este despliegue, Cloudflare termina TLS (HTTPS) y reenvía el tráfico al proxy por HTTP (puerto 80). Por eso:

- El proxy solo expone `80:80`.
- No se usa Certbot ni certificados locales.
- Solo existe un archivo de configuración Nginx: `proxy/nginx/nginx.conf`.

## Detener los servicios

```
docker compose down
```
