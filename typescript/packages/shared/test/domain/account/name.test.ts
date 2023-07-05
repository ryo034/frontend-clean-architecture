import { describe, expect, it } from "vitest"
import { AccountName } from "../../../src/domain/account"
import { DomainError } from "../../../src/domain/shared"

describe("AccountName", () => {
  describe("create", () => {
    it("should fail to create an instance of AccountName with invalid input", () => {
      const actual = "a".repeat(AccountName.max + 1)
      const result = AccountName.create(actual)
      expect(result.isErr).toBe(true)
      result.mapErr((e) => expect(e).instanceOf(DomainError))
    })

    it.each(["一郎", "いちろう", "イチロウ", "ichiroh", "あい　う"])(
      "should create an instance of AccountName with valid input '%s'",
      (actual) => {
        const result = AccountName.create(actual)
        expect(result.isOk).toBe(true)
      }
    )

    it.each(["", " ", "  ", "メールアドレス", "&lt;&copy;&amp;", "㌶Ⅲ⑳㏾㈱髙﨑", "ヲンヰヱヴーヾ・", "ｧｰｭｿﾏﾞﾟ"])(
      "should fail to create an instance of AccountName with empty input '%s'",
      (actual) => {
        const result = AccountName.create(actual)
        expect(result.isErr).toBe(true)
        result.mapErr((e) => expect(e).instanceOf(DomainError))
      }
    )
  })
})
