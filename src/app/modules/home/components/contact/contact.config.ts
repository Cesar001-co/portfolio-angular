/** Textos: claves i18n (public/assets/i18n/*.json → contact.*). */
export const CONTACT_CONTENT = {
  heading: { title: 'contact.title', subtitle: 'contact.subtitle' },
  fields: {
    email: { label: 'contact.fields.email.label', placeholder: 'contact.fields.email.placeholder' },
    message: { label: 'contact.fields.message.label', placeholder: 'contact.fields.message.placeholder' },
  },
  /** Longitud máxima del mensaje (se muestra contador). */
  messageMaxLength: 2000,
  errors: {
    emailRequired: 'contact.errors.emailRequired',
    emailInvalid: 'contact.errors.emailInvalid',
    messageRequired: 'contact.errors.messageRequired',
    messageTooLong: 'contact.errors.messageTooLong',
  },
  submit: { idle: 'contact.submit.idle', sending: 'contact.submit.sending' },
  success: 'contact.success',
} as const;
