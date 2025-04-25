Practico5

API REST - Gestión de Productos

Características REST

- Los endpoints siguen convenciones REST:
  - GET /productos
  - POST /productos
- Usa métodos HTTP correctos para cada acción.
- Maneja datos en formato JSON.
- Recurso principal: "productos".

Diferencias con la arquitectura anterior

La arquitectura anterior tenía rutas como /agregar y /listar directamente en el archivo principal (app.js) y mezclaba la lógica del negocio con el manejo de las rutas, lo que dificultaba su mantenimiento y escalabilidad. Además, no seguía los principios REST, ya que no usaba endpoints estandarizados ni separaba recursos correctamente.

En cambio, la nueva arquitectura basada en API REST mantiene la separación en tres capas: rutas, controladores y servicios. Cada parte tiene una responsabilidad clara. También sigue las convenciones REST: se utilizan endpoints como GET /productos y POST /productos, lo que la hace más ordenada, fácil de escalar y más mantenible en el tiempo.           

Lucas Martin Luna


Como correrlo:
npm install
node app.js
