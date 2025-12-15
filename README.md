# Reto de Automatización QA – FrontEnd (Sauce Demo)

## 1. Descripción

Este proyecto automatiza el flujo de compra de la aplicación web **Sauce Demo**  
https://www.saucedemo.com/

La automatización se implementa usando:

- **Playwright** como framework de automatización de UI
- **Cucumber** para BDD
- **Gherkin** para describir los escenarios
- **Page Object Model (POM)** como patrón de diseño

### Historia de Usuario

> Como un cliente de Sauce Demo,  
> Quiero poder iniciar sesión, agregar productos al carrito y completar una compra,  
> Para poder adquirir los productos que necesito.

### Criterios de Aceptación cubiertos

1. El usuario puede iniciar sesión con credenciales válidas (`standard_user / secret_sauce`).
2. El usuario no puede iniciar sesión con credenciales inválidas o usuario bloqueado (`locked_out_user`).
3. El usuario puede agregar un producto al carrito desde la página de productos.
4. El usuario puede ver los productos agregados en el carrito de compras.
5. El usuario puede completar el proceso de compra hasta la confirmación.

---

## 2. Tecnologías utilizadas

- Node.js
- Playwright
- Cucumber (cucumber-js)
- Gherkin
- Page Object Model (POM)

---

## 3. Requisitos previos

- **Node.js** (LTS) instalado  
  Verificar con:
  ```bash
  node -v
  npm -v
