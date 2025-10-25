# Plan de Entregables

A continuación se listan los artefactos documentados y entregables generados durante la práctica:

1. **Código fuente de la aplicación**
   - Carpeta `src/` con toda la lógica de la aplicación Node.js.

2. **Configuración de contenedores**
   - `Dockerfile` para la construcción de la imagen de la aplicación.
   - `docker-compose.yml` para orquestar la aplicación y la base de datos PostgreSQL.
   - `.env.example` para definir variables de entorno seguras.

3. **Base de datos**
   - `init.sql` para crear la base de datos y usuario con privilegios seguros.

4. **Pipeline de CI/CD**
   - `.github/workflows/ci-cd.yml` con pasos de pruebas, escaneo de vulnerabilidades, build y despliegue.

5. **Documentación técnica**
   - `NOTAS_PREPARACION.md`: resumen técnico de mejores prácticas de seguridad.
   - `ARCHITECTURA_DECISIONES.md`: justificación de herramientas y enfoque CI/CD.
   - `PLAN_ENTREGABLES.md`: listado de artefactos entregables.
   - `INFORME_FINAL.md`: informe de resultados y reflexión de la práctica.
