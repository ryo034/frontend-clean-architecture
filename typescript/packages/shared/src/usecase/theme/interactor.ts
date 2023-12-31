import { ThemeDriver } from "../../driver"
import { ThemeUseCaseInput } from "./input"
import { ThemeUseCaseOutput } from "./output"

export class ThemeInteractor implements ThemeUseCaseInput {
  constructor(private readonly driver: ThemeDriver, private readonly presenter: ThemeUseCaseOutput) {}

  toggle(isDark: boolean): null {
    this.driver.set(isDark)
    this.presenter.set(isDark)
    return null
  }

  get(): void {
    const isDark = this.driver.get()
    this.presenter.set(isDark)
  }
}
