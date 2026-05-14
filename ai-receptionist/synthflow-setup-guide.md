# KCV Electric — Synthflow Setup Guide (Step-by-Step in Spanish)

> Guía rápida para configurar el contestador AI con Synthflow.

## ⏱️ Tiempo estimado: 30-45 minutos

---

## Paso 1: Crear cuenta en Synthflow (5 min)

1. Ve a 👉 **https://synthflow.ai**
2. Haz clic en **"Get Started"** o **"Sign Up"**
3. Usa tu correo: `kcv.electric@gmail.com`
4. Confirma el email (revisa tu bandeja de entrada)
5. Selecciona el plan **"Starter"** ($29/mes) o aprovecha la prueba gratis de 7 días.

---

## Paso 2: Comprar/asignar un número telefónico (5 min)

Dentro del dashboard de Synthflow:

1. Ve a la sección **"Phone Numbers"** (o "Numbers")
2. Haz clic en **"Buy Number"** o **"Add Number"**
3. Filtra por:
   - **País:** United States
   - **Estado/Area code:** California, prefijo **209** (Modesto) o **408**/**510** (Bay Area)
4. Elige un número disponible y compra (incluido en el plan)

**Anota el número aquí:** `__________________` ← este es el número AI que pondrás en la publicidad

---

## Paso 3: Crear el AI Agent (10 min)

1. Ve a **"Assistants"** o **"Agents"** → **"Create New"**
2. Nombre: **`KCV Electric Receptionist`**
3. En el campo **"System Prompt"** o **"Instructions"**:
   - Abre el archivo **`system-prompt.md`** (en la misma carpeta que esta guía)
   - **Copia TODO el contenido** y pégalo en Synthflow
4. **Voice:** elige una voz amigable y bilingüe. Recomendadas:
   - "Adam" (masculino, natural)
   - "Rachel" (femenino, profesional)
   - Cualquier voz marcada como "multilingual" o "bilingual"
5. **First Message** (Mensaje inicial):
   ```
   Thanks for calling KCV Electric, this is Alex. How can I help you today?
   ```
6. **Language Detection:** activa **Auto-detect language** o **Multilingual mode**
7. Guarda con **"Save"**

---

## Paso 4: Asignar el número al AI (2 min)

1. Vuelve a **"Phone Numbers"**
2. Selecciona el número que compraste
3. En **"Assigned Assistant"** o **"Inbound Agent"**, elige **"KCV Electric Receptionist"**
4. Guarda

---

## Paso 5: Configurar webhook/SMS para recibir resúmenes (10 min)

Para que recibas un mensaje de texto con el resumen de cada llamada:

### Opción A: SMS directo (más fácil)
1. En la configuración del agente, busca **"Post-Call Actions"** o **"Webhooks"**
2. Activa **"Send SMS Summary"**
3. Ingresa tu número: `+12097657013`
4. Activa **"Send Email Summary"** y pon: `kcv.electric@gmail.com`

### Opción B: Webhook personalizado (más avanzado, opcional)
Si Synthflow lo permite, usa un servicio gratis como **Zapier** o **Make.com** para conectar:
- Synthflow → Zap → SMS a tu teléfono + Google Calendar para agendar citas

---

## Paso 6: Probar el agente (5 min)

1. Desde otro teléfono, **llama al número AI** que compraste
2. Prueba primero en inglés: *"Hi, I need an electrician for a panel upgrade"*
3. Cuelga, espera 30 segundos
4. Llama de nuevo y prueba en español: *"Hola, necesito un electricista, no tengo luz en la cocina"*
5. Prueba una emergencia: *"There's smoke coming from my breaker box"*

Si recibes los SMS de resumen, ¡todo funciona! 🎉

---

## Paso 7: Promocionar el número AI

Una vez funcionando, podemos:

1. ✅ **Agregar el número AI al sitio web** como botón "📞 24/7 AI Line"
2. ✅ Crear una **camiseta/imán para vehículo** con ambos números:
   - `(209) 765-7013` — direct
   - `[número AI]` — 24/7
3. ✅ En tu **tarjeta de presentación** poner el número AI como principal
4. ✅ En **Google Business**, el número AI puede ser el principal

> **Dime cuando tengas el número AI listo** y yo agrego todo al sitio.

---

## 🆘 ¿Necesitas ayuda en algún paso?

Avísame en el chat:
- *"Synthflow paso X no entiendo"*
- *"No me deja comprar el número"*
- *"El AI no me contesta cuando llamo"*

Te ayudo paso por paso. 👍

---

## 💡 Tips para sacarle más provecho

- **Activa grabación de llamadas** (legal en California para ti como dueño del negocio — debes informar al cliente al inicio si quieres usarlo). Útil para revisar conversaciones.
- **Revisa el dashboard de Synthflow semanalmente** — verás cuántas llamadas perdiste y cómo las manejó el AI.
- **Ajusta el prompt** con el tiempo: si notas que el AI no maneja algo bien, edita `system-prompt.md` y vuelve a pegarlo en Synthflow.
- **Integración con Google Calendar** (si Synthflow lo permite): el AI agenda directamente las citas en tu calendario.
