# La Casita POS - Sistema de Punto de Venta

Sistema integral de inventarios, ventas y punto de venta para La Casita.

## 🚀 Despliegue en Vercel

### Paso 1: Crear base de datos PostgreSQL

1. Ve a [neon.tech](https://neon.tech) y crea una cuenta gratis
2. Crea un nuevo proyecto llamado "lacasita"
3. Copia la **Connection string** (algo como: `postgresql://user:pass@ep-xxx.neon.tech/neondb?sslmode=require`)

### Paso 2: Configurar variables en Vercel

En tu proyecto de Vercel, ve a **Settings** → **Environment Variables** y agrega:

| Variable | Valor |
|----------|-------|
| `DATABASE_URL` | Tu URL de Neon (con `?sslmode=require`) |
| `DIRECT_DATABASE_URL` | Tu URL de Neon (sin el parámetro ssl) |

### Paso 3: Redesplegar

Después de agregar las variables, ve a **Deployments** y haz clic en **Redeploy**.

---

## 🛠 Desarrollo local

```bash
# Instalar dependencias
bun install

# Configurar base de datos
cp .env.example .env
# Edita .env con tu DATABASE_URL

# Crear tablas
bun run db:push

# Poblar con datos de ejemplo
bun run db:seed

# Iniciar servidor
bun run dev
```

---

## 📦 Estructura del proyecto

```
lacasita/
├── prisma/
│   ├── schema.prisma    # Esquema de base de datos
│   └── seed.ts          # Datos de ejemplo
├── src/
│   ├── app/             # Páginas Next.js
│   ├── components/      # Componentes UI
│   ├── lib/             # Utilidades
│   └── store/           # Estado (Zustand)
└── package.json
```

---

## 🔐 Usuarios de prueba

| Email | Contraseña | Rol |
|-------|------------|-----|
| admin@lacasita.com | admin123 | Administrador |
| cajero1@lacasita.com | cajero123 | Cajero |

---

## 📱 Funcionalidades

- ✅ Punto de Venta (POS)
- ✅ Búsqueda de productos por nombre/código
- ✅ Carrito de compras
- ✅ Múltiples métodos de pago
- ✅ Inventario por sucursal
- ✅ Cortes de caja
- ✅ Reportes de ventas
