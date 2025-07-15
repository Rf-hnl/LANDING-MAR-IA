Estoy creando una landing page para una plataforma de IA llamada MAR-IA, disponible en inglés y español. Ya tengo el frontend listo y conectado a Firebase. Ahora necesito que crees en Firebase Firestore las colecciones necesarias para administrar todo el contenido desde un CMS en /admin. El objetivo es poder editar desde el CMS los textos que se muestran en la web, por idioma, por sección, y por campo.

Por favor crea:
1. La estructura de Firestore con las colecciones y documentos necesarios para guardar todos los textos y contenidos en español e inglés.
2. Cada sección debe estar identificada por un ID único (por ejemplo, `home`, `benefits`, `features`, etc.).
3. Cada campo dentro de una sección debe tener:
   - `key`: un identificador único para el campo
   - `en`: contenido en inglés
   - `es`: contenido en español
4. Las secciones que se deben incluir son:
   - `home`
   - `benefits`
   - `features`
   - `how_it_works`
   - `pricing`
   - `testimonials`
   - `faq`
   - `contact`
5. También quiero que prepares una interfaz de `/admin` protegida por login de administrador, donde pueda:
   - Ver todas las secciones
   - Editar los textos en inglés y español
   - Guardar cambios automáticamente en Firestore

Además, el CMS debe usar Firebase Auth para proteger el acceso y solo permitir login con un email autorizado que definiré manualmente desde Firebase.

Por último, si algún campo no existe aún en Firestore, quiero que lo cree automáticamente cuando se edite por primera vez desde el CMS.
