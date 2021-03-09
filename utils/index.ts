export function changeNumToString(num: number, digit?: number) {
  let str = num.toString();
  if (digit && str.length < digit) {
    for (let i = digit - str.length; i > 0; i--) {
      str = "0" + str;
    }
  }
  return str;
}
