export default class AppErros {
  errorCode: number
  message: string
  constructor(errorCode: number = 400, message: string) {
    this.errorCode = errorCode
    this.message = message
  }
}
