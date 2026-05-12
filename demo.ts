export function formattedAddition(a: number, b: number): string {
  return `${a} + ${b} = ${a + b}`;
}

console.log(formattedAddition(3, 2));

export function rolldice(): number {
  return Math.floor(Math.random() * 6) + 1;
}
export function calculatedice(): number {
  return rolldice() + rolldice();
}