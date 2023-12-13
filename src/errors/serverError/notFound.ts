export class NotFoundError extends Error {
  constructor(message = 'Recurso solicitado não encontrado') {
    super(message)
    this.name = 'NotFoundError'
  }
}
