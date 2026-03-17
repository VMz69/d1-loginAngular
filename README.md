# 🔐 Angular Auth Demo (JWT Simulado)

Proyecto desarrollado en Angular (standalone components) que implementa un sistema básico de autenticación utilizando JWT simulado, protección de rutas con guards y una interfaz construida con Angular Material.

---

## 🚀 Descripción

Este proyecto simula un flujo real de autenticación en frontend:

- Login con validación de credenciales
- Generación de un JWT falso
- Almacenamiento del token en localStorage
- Protección de rutas con AuthGuard
- Lectura del payload del token en el dashboard

El objetivo principal es comprender cómo funciona internamente la autenticación basada en JWT sin depender de un backend real.

---

## 🧱 Arquitectura

El proyecto sigue una estructura moderna basada en **Standalone Components** (Angular 17+):

### 🔹 Componentes
- `Login`: Maneja el formulario de autenticación
- `Dashboard`: Muestra información del usuario autenticado

### 🔹 Servicios
- `Auth`: Contiene toda la lógica de autenticación
  - login
  - logout
  - manejo de token
  - decodificación de JWT

### 🔹 Guards
- `authGuard`: Protege rutas privadas verificando la existencia del token

### 🔹 Routing
- Rutas públicas y privadas configuradas con protección mediante guard

---

## 🧠 Conceptos clave implementados

### ✅ JWT (JSON Web Token)
- Estructura simulada: header.payload.signature
- Payload contiene:
  - email
  - rol
- Decodificación manual usando `atob()` (sin librerías externas)

---

### ✅ AuthGuard
- Verifica si existe token en `localStorage`
- Permite o bloquea navegación
- Redirige automáticamente al login si no hay sesión

---

### ✅ Standalone Components
- No se utilizan NgModules personalizados
- Cada componente declara sus propias dependencias

---

### ✅ Angular Material
- UI moderna y consistente
- Componentes utilizados:
  - mat-card
  - mat-form-field
  - mat-input
  - mat-button

---

## ⚠️ Consideraciones técnicas importantes

### SSR (Server-Side Rendering)

Durante el desarrollo se consideró el uso de SSR:

- `localStorage` no está disponible en el servidor
- Se utiliza `isPlatformBrowser()` para evitar errores
- La validación de autenticación se realiza solo en el navegador

---

## 🧪 Credenciales de prueba

```
Email: admin@test.com
Password: 1234
```

---

## ▶️ Cómo ejecutar el proyecto

```bash
# instalar dependencias
npm install

# ejecutar proyecto
ng serve
```

Luego abrir:

```
http://localhost:4200
```

---

## 📂 Estructura del proyecto (simplificada)

```
src/
│
├── app/
│   ├── pages/
│   │   ├── login/
│   │   └── dashboard/
│   │
│   ├── services/
│   │   └── auth.ts
│   │
│   ├── guards/
│   │   └── auth-guard.ts
│   │
│   ├── utils/
│   │   └── fakeJWT-Gen.ts
│   │
│   └── app.routes.ts
```

---

## 🔮 Posibles mejoras

- Integración con backend real (Node, Java, etc.)
- Manejo de expiración de token
- Refresh tokens
- Interceptors HTTP
- Persistencia segura (cookies httpOnly)
- Roles y permisos avanzados
- UI más completa

---

## 💡 Aprendizajes clave

- Funcionamiento interno de JWT
- Protección de rutas en Angular
- Uso de guards modernos (`CanActivateFn`)
- Diferencia entre componentes, servicios y guards
- Manejo de estado de autenticación en frontend
- Uso de Angular Material

---

## 📌 Nota final

Este proyecto está enfocado en aprendizaje y simulación.  
En un entorno real, la generación y validación del JWT debe realizarse en un backend seguro.

---

## 👨‍💻 Autor

Proyecto desarrollado como práctica para reforzar conceptos modernos de Angular y autenticación.