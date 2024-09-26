// any
// 특정 변수의 타입을 모를 때

let anyVar: any = 10;
anyVar = "hello";

let num: number = anyVar

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number"){
  num = unknownVar;
}

