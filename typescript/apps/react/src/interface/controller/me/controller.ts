import { Email } from "~/domain/shared"
import { Password } from "~/domain/shared"
import { MeUseCaseInput } from "~/usecase/me/input"

export class MeController {
  constructor(private readonly useCase: MeUseCaseInput) {}

  async login(email: string, password: string): Promise<null | Error> {
    const emailObj = Email.create(email)
    if (emailObj.isErr) {
      return emailObj.error
    }
    const passwordObj = Password.create(password)
    if (passwordObj.isErr) {
      return passwordObj.error
    }
    return await this.useCase.login(emailObj.value, passwordObj.value)
  }

  async signOut(): Promise<null | Error> {
    return await this.useCase.signOut()
  }
}