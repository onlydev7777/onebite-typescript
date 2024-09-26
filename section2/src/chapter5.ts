// enum 타입
// 여러기자 값들에 각각 이름을 부여해 열거

enum Role {
  ADMIN,
  USER,
  GUEST
}

enum Language {
  korean = "ko",
  english = "en"
}

const user1 = {
  name: "이정환",
  role : Role.ADMIN,
  language: Language.korean
}

const user2 = {
  name: "김길동",
  role : Role.USER,
  language: Language.korean
}

const user3 = {
  name: "홍길동",
  role : Role.GUEST,
  language: Language.english
}

console.log(user1, user2, user3)