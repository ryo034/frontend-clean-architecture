import { Me } from "./me"
import { Email, Password } from "../shared"
import { PromiseResult } from "../../infrastructure/shared/result"

export interface MeRepository {
  login(): PromiseResult<Me, Error>
  sendEmailVerification(): PromiseResult<null, Error>
  signInWithEmailAndPassword(email: Email, password: Password): PromiseResult<null, Error>
  signOut(): PromiseResult<null, Error>
  reloadAuth(): PromiseResult<Me, Error>
  find(): PromiseResult<Me, Error>
}
