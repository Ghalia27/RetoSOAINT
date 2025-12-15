# Informe de Estrategia de Automatización y Patrones Utilizados
## Proyecto FrontEnd – Sauce Demo (Playwright + Cucumber)

### 1. Estrategia de automatización

1. **Enfoque BDD (Behavior-Driven Development)**  
   Los requisitos funcionales del reto se traducen a features escritos en **Gherkin** (`login.feature`, `purchase.feature`), utilizando un lenguaje cercano al negocio con pasos Given/When/Then.  
   Cada escenario cubre un criterio de aceptación concreto: login válido, login inválido, agregar producto al carrito, visualizar el carrito y completar la compra.

2. **Cobertura basada en flujos críticos**  
   La suite se centra en el **flujo crítico de negocio**:
   - Inicio de sesión en la aplicación.
   - Selección de un producto en la página de inventario.
   - Agregado del producto al carrito.
   - Proceso de checkout hasta la confirmación de la orden.  
   Adicionalmente se cubren escenarios negativos (usuario bloqueado / credenciales inválidas) para validar el manejo de errores en el login.

3. **Separación de responsabilidades (tests vs. lógica de UI)**  
   Los step definitions de Cucumber expresan únicamente acciones de alto nivel (por ejemplo, “el usuario inicia sesión”, “el usuario agrega un producto al carrito”) sin conocer los detalles de los selectores de la página.  
   La lógica de interacción con la interfaz (clicks, inputs, localización de elementos) se encapsula en los Page Objects, lo que mejora la legibilidad y el mantenimiento.

4. **Ejecución sencilla y automatizable**  
   Toda la suite se ejecuta mediante:
   ```bash
   npm test
