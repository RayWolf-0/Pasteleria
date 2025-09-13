# Pastelería Mil Sabores

## Descripción 
**Pastelería Mil Sabores** es una pagina web que muestra el catálogo, pedidos y gestión de usuarios de una pastelería ficticia.  
Incluye páginas de:
- Menú (`menu.html`)  
- Carrito de compras (`carrito.html`)  
- Perfil de usuario (`perfil-usuario.html`)  
- Login y registro (`login.html`, `registro.html`)  
- Panel de administración (`administrador.html`)  

### Tecnologías utilizadas
- **HTML5** para la estructura.  
- **CSS3** y posibles librerías de estilos para darle personalidad al proyecto   
- **GitHub Actions** para validación CI/CD.
- **JavaScript** para estructuras de validación
- **BootStrap** Esqueletos de estilos para comenzar a trabajarlos

## Estrategia de ramificación

Este proyecto utiliza **GitFlow** para el control de versiones:

- **main** → Rama estable, contiene el código listo para producción.  
- **develop** → Rama de integración, donde se combinan las nuevas funcionalidades antes de llegar a `main`.  
- **feature/<nombre>** → Ramas de desarrollo de nuevas características.  
  - Ejemplo: `feature/carrito`, `feature/perfil-usuario`.  
- **hotfix/<nombre>** → Ramas para correcciones urgentes en la rama estable.  
  - Ejemplo: `hotfix/login-bug`.

    
Se eligió **GitFlow** como estrategia de ramificación porque el proyecto Pastelería Mil Sabores requiere:

Separación clara entre entornos
**main** representa la versión estable, lista para desplegar.
**develop** concentra el código en desarrollo antes de integrarse a producción.
Esto asegura que los cambios experimentales no rompan la rama estable.
Manejo organizado de nuevas funcionalidades
Las ramas **feature/...** permiten desarrollar páginas o componentes específicos (ejemplo: carrito, perfil de usuario) de manera aislada.
Facilita el trabajo colaborativo en parejas, ya que cada integrante puede avanzar en una feature distinta sin interferir.
Gestión rápida de errores críticos
Las ramas **hotfix/...** permiten corregir problemas urgentes directamente sobre main, garantizando una solución inmediata sin afectar el desarrollo paralelo.
Escalabilidad


## Instalación, configuración y ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/pasteleria-mil-sabores.git
   cd pasteleria-mil-sabores

