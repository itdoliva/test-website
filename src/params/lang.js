import { SUPPORTED_LOCALES } from "@utils/constants";

export function match(param) {
  return /^\w{2}-\w{2}$/g.test(param) && SUPPORTED_LOCALES.includes(param)
}