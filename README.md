# MAR-IA Landing Page

Una landing page moderna y elegante para MAR-IA, diseñada para impulsar ventas con inteligencia artificial.

## 🚀 Características

- **Diseño moderno y responsivo** con efectos glassmorphism
- **Optimizada para conversiones** con secciones estratégicamente organizadas
- **Componentes de UI modernos** utilizando Radix UI y Tailwind CSS
- **Integración con IA** para mejora automática de contenido
- **Formularios de contacto** con validación
- **Secciones completas**: Hero, Beneficios, Cómo funciona, Demo, FAQ, y más

## 🛠️ Tecnologías

- **Next.js 15.3.3** - Framework React para aplicaciones web
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Radix UI** - Componentes primitivos accesibles
- **Genkit AI** - Integración con Google AI
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd LANDING-PAGE-MAR-IA
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
```

## 🔧 Desarrollo

### Comandos disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint

# Verificación de tipos
npm run typecheck

# Desarrollo con Genkit AI
npm run genkit:dev
```

### Estructura del proyecto

```
src/
├── app/                  # App Router de Next.js
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globales
├── components/          # Componentes reutilizables
│   ├── landing/         # Componentes de la landing page
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── DemoSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── LeadFormSection.tsx
│   │   └── Footer.tsx
│   └── ui/              # Componentes de UI base
├── ai/                  # Integración con IA
│   ├── genkit.ts        # Configuración de Genkit
│   └── flows/           # Flujos de IA
├── hooks/               # Hooks personalizados
└── lib/                 # Utilidades y configuraciones
```

## 🎨 Componentes de la Landing Page

### Header
- Navegación principal
- Logo de MAR-IA
- Diseño responsivo

### Hero Section
- Título principal atractivo
- Subtítulo explicativo
- Call-to-action prominente
- Elementos visuales glassmorphism

### Benefits Section
- Beneficios clave del producto
- Iconos y descripciones
- Grid responsivo

### How It Works Section
- Explicación paso a paso
- Proceso visual
- Elementos interactivos

### Demo Section
- Demostración del producto
- Casos de uso
- Testimonios

### FAQ Section
- Preguntas frecuentes
- Acordeón interactivo
- Respuestas detalladas

### Lead Form Section
- Formulario de contacto
- Validación en tiempo real
- Integración con backend

## 🤖 Integración con IA

El proyecto incluye integración con Google AI a través de Genkit para:

- Mejora automática de contenido
- Optimización de copy
- Generación de texto

### Configuración de IA

1. Configura tu API key de Google AI en las variables de entorno
2. Los flujos de IA están en `src/ai/flows/`
3. Utiliza `npm run genkit:dev` para desarrollo con IA

## 📱 Diseño Responsivo

La landing page está optimizada para:
- **Desktop**: Experiencia completa con todos los elementos
- **Tablet**: Diseño adaptado para pantallas medianas
- **Mobile**: Experiencia móvil optimizada

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npx vercel
```

### Build local
```bash
npm run build
npm run start
```

## 🔒 Seguridad

- Validación de formularios con Zod
- Sanitización de inputs
- Headers de seguridad configurados
- Dependencias actualizadas

## 📊 Performance

- Optimización de imágenes con Next.js
- Lazy loading de componentes
- Fuentes optimizadas
- Bundle analysis disponible

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Para soporte y preguntas:
- Crea un issue en el repositorio
- Contacta al equipo de desarrollo

---

Desarrollado con ❤️ para MAR-IA
