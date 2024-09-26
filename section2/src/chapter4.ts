// 타입 별칭
type User = {
  id: number,
  name: string,
  nickname: string
}

let user: User = {
  id: 1,
  name: "홍길동",
  nickname: "onlydev7777"
}

let user2: User = {
  id: 2,
  name: "김길동",
  nickname: "onlydev7777"
}

//인덱스 시그니처
type CountryCodes = {
  [key: string] : string
};

let countryCodes: CountryCodes = {
  Korea : 'ko',
  UnitedState : "us",
  UnitedKingdom : "uk"
}

let countryNumberCodes: {
  [key:string] : number
} = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826
}