// void -> 공허 -> 아무것도 없다.

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("func2");
}

function func3(): never {
  while (true) {

  }
}

function func4(): never {
  throw new Error();
}


