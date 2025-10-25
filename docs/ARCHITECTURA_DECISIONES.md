# Decisiones de Arquitectura

## Justificación de Herramientas y Enfoque CI/CD

1. **Docker y Docker Compose**
   - Facilitan la creación de entornos reproducibles y aislados.
   - Permiten desplegar la base de datos PostgreSQL y la aplicación Node.js sin conflictos.

2. **PostgreSQL**
   - Base de datos relacional segura.
   - Se creó un usuario limitado (`securegestor_user`) con contraseña encriptada para minimizar riesgos de acceso no autorizado.
   - Uso de un script `init.sql` para la inicialización segura de la base de datos.

3. **Node.js**
   - Entorno de ejecución principal de la aplicación.
   - Compatible con pruebas unitarias y herramientas de auditoría de seguridad.

4. **GitHub Actions**
   - CI/CD automatizado que incluye:
     - Ejecución de pruebas automatizadas.
     - Escaneo de vulnerabilidades (`npm audit` y CodeQL).
     - Construcción de la aplicación y despliegue seguro en entorno de pruebas.
   - Permite integrar seguridad como parte del proceso DevSecOps.

5. **Controles de Seguridad Prioritarios**
   - Seguridad desde el diseño (Security by Design).
   - Monitoreo de logs y pipeline CI/CD.
   - Variables de entorno para secretos y contraseñas.
   - Aislamiento de servicios críticos en contenedores.
