import { IdGenerator } from "@/core/shared/GeneratorID/IdGenerator"
import AppErros from "@/core/shared/error/AppErros"
import ErrosMessage from "@/core/shared/error/ErrosMessage"

interface ICustomer {
  name: string
  cpf: string
  email: string
  idGenerator: IdGenerator
}

export default class Customer {
  private _id: string
  private _cpf: string

  constructor(
    private _name: string,
    private _email: string,
    cpf: string,
    idGenerator: IdGenerator,
  ) {
    this._id = idGenerator.gerar()
    this._cpf = this.cpfValidate(cpf)
  }

  static factory(customer: ICustomer) {
    return new Customer(customer.name, customer.cpf, customer.email, customer.idGenerator)
  }

  //getter
  get id(): string {
    return this._id
  }

  get cpf(): string {
    return this.cpfValidate(this._cpf)
  }

  get name(): string {
    return this._name
  }
  get email(): string {
    return this._email
  }

  //setter
  set id(value: string) {
    this._id = value
  }

  set cpf(value: string) {
    this._cpf = value
  }

  set name(value: string) {
    this._name = value
  }

  set email(value: string) {
    this._email = value
  }

  //methods
  private cpfValidate(cpf: string): string {
    const strCpf = cpf.replace(/\D/g, "")
    if (strCpf.length !== 11) {
      throw new AppErros(ErrosMessage.NUMBER_OF_CPF_MUST_CONTAIN_DIGITS)
    }

    if (!strCpf.toString().trim()) {
      throw new AppErros(ErrosMessage.ENTER_VALID_NUMBER)
    }
    return strCpf.trim()
  }
}
