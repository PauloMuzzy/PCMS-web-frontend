export class ServerError extends Error {
  constructor(message = 'Erro no servidor') {
    super(message)
    this.name = 'ServerError'
  }
}
