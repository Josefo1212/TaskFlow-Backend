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

## Levantar los servicios con Docker Compose

Para levantar todos los microservicios y la base de datos:

```
docker compose up
```

## Detener los servicios

```
docker compose down
```
