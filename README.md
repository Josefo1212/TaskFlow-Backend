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

## Actualizar y subir imagen de task-service a Docker Hub

Cada vez que cambies el código de `task-service`, sigue estos pasos:

1. Construye la imagen:
      ```
      docker build -t josefo1212/task-service:latest -f task-service/dockerfile ./task-service
      ```

2. Sube la imagen a Docker Hub:
      ```
      docker push josefo1212/task-service:latest
      ```

## Actualizar y subir imagen de project-service a Docker Hub

Cada vez que cambies el código de `project-service`, sigue estos pasos:

1. Construye la imagen:
      ```
      docker build -t josefo1212/project-service:latest -f project-service/dockerfile ./project-service
      ```

2. Sube la imagen a Docker Hub:
      ```
      docker push josefo1212/project-service:latest
      ```

## Actualizar y subir imagen de tag-service a Docker Hub

Cada vez que cambies el código de `tag-service`, sigue estos pasos:

1. Construye la imagen:
      ```
      docker build -t josefo1212/tag-service:latest -f tag-service/dockerfile ./tag-service
      ```

2. Sube la imagen a Docker Hub:
      ```
      docker push josefo1212/tag-service:latest
      ```

Reemplaza `<usuario_dockerhub>` por tu usuario real de Docker Hub.
