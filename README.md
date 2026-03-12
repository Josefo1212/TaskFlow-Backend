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

## Levantar los servicios con Docker Compose

Docker Compose ahora reutiliza los `.env` existentes de cada microservicio y aplica overrides Docker desde archivos `*.env.docker`, evitando dejar variables sensibles inline en `docker-compose.yml`.

Archivos usados por Compose:

- `db/.env.docker`
- `auth-service/.env` + `auth-service/.env.docker`
- `gateway-api/.env` + `gateway-api/.env.docker` + `gateway-api/.env.prod.docker`
- `user-service/.env` + `user-service/.env.docker`

El `docker-compose.yml` principal ahora representa la topología con Nginx público:

- `proxy` usa la imagen oficial de Nginx y toma su configuración desde `proxy/nginx/nginx.conf`
- `frontend` representa la imagen Docker del front y queda detrás del proxy público
- `gateway-api` queda detrás de Nginx y despacha hacia los microservicios internos
- `auth-service`, `user-service`, `db` y `redis` quedan internos sin puertos publicados al host

El proxy enruta por host:

- `taskflowcenter.online` y `www.taskflowcenter.online` hacia `frontend`
- `api.taskflowcenter.online` hacia `gateway-api`

Para levantar toda la arquitectura:

```
docker compose up
```

La imagen del frontend puede sustituirse definiendo la variable `FRONTEND_IMAGE` antes de levantar el compose o editando el servicio `frontend`.

El override `gateway-api/.env.prod.docker` ya está preparado para dominio real con `CORS_ORIGIN=https://taskflowcenter.online` y `REFRESH_COOKIE_SECURE=true`.

## Dominio y Certbot

El proxy público usa virtual hosts por dominio:

- `taskflowcenter.online` y `www.taskflowcenter.online` hacia `frontend`
- `api.taskflowcenter.online` hacia `gateway-api`

Archivos Nginx:

- `proxy/nginx/nginx.conf`: bootstrap por HTTP para emitir los certificados
- `proxy/nginx/nginx.tls.conf`: configuración final con redirección a HTTPS y bloques TLS

Secuencia recomendada:

1. Levanta el stack con `docker compose up -d proxy frontend gateway-api auth-service user-service db redis`.
2. Verifica que `http://taskflowcenter.online/.well-known/acme-challenge/test` y `http://api.taskflowcenter.online/.well-known/acme-challenge/test` lleguen al proxy antes de pedir el certificado.
3. Emite el certificado:

```sh
docker compose run --rm certbot certonly --webroot -w /var/www/certbot -d taskflowcenter.online -d www.taskflowcenter.online -d api.taskflowcenter.online --email TU_CORREO --agree-tos --no-eff-email
```

4. Copia `proxy/nginx/nginx.tls.conf` sobre `proxy/nginx/nginx.conf` y recarga Nginx:

```sh
copy proxy\nginx\nginx.tls.conf proxy\nginx\nginx.conf
docker compose restart proxy
```

La renovación automática queda a cargo del servicio `certbot`, que ejecuta `certbot renew` cada 12 horas. El contenedor `proxy` recarga su configuración cada 6 horas para tomar certificados renovados.

## Detener los servicios

```
docker compose down
```
