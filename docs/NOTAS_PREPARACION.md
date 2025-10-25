# Notas de Preparación

## Resumen Técnico de Mejores Prácticas de Seguridad

Durante la implementación de la práctica se identificaron las siguientes buenas prácticas de seguridad a considerar:

1. **Validación robusta de entradas:** Se asegura que toda información recibida por la aplicación sea filtrada y validada para prevenir inyecciones SQL, XSS y otros ataques de entrada maliciosa.
2. **Cifrado de datos sensibles:** Uso de contraseñas encriptadas, JWT para autenticación y almacenamiento seguro de secretos en variables de entorno.
3. **Control de acceso basado en roles (RBAC):** Se definieron permisos diferenciados por tipo de usuario para restringir acciones críticas.
4. **Monitoreo y logging:** Implementación de logs y monitoreo del pipeline CI/CD para detectar fallos o actividades sospechosas.
5. **Automatización segura:** Integración de pruebas automatizadas, escaneo de vulnerabilidades y despliegue seguro mediante GitHub Actions.
6. **Aislamiento de servicios:** Uso de Docker para encapsular la base de datos y la aplicación, evitando interferencias y aumentando la seguridad del entorno.
