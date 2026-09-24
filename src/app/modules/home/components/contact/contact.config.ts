// TODO(i18n): reemplazar textos por claves de traducción.
export const CONTACT_CONTENT = {
  heading: {
    title: 'Contacto',
    subtitle: '¿Tienes una idea o un proyecto en mente? Escríbeme y conversemos.',
  },
  fields: {
    email: { label: 'Correo electrónico', placeholder: 'tu@correo.com' },
    message: { label: 'Mensaje', placeholder: 'Cuéntame sobre tu proyecto…' },
  },
  /** Longitud máxima del mensaje (se muestra contador). */
  messageMaxLength: 2000,
  errors: {
    emailRequired: 'Ingresa tu correo.',
    emailInvalid: 'Ingresa un correo válido.',
    messageRequired: 'Escribe tu mensaje.',
    messageTooLong: 'El mensaje es demasiado largo.',
  },
  submit: { idle: 'Enviar mensaje', sending: 'Enviando…' },
  success: '¡Gracias! Tu mensaje fue enviado, te responderé pronto.',
} as const;
