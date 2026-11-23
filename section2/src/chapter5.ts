// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// js에는 없는 타입

enum Role {
    admin,
    user,
    guest,
};

enum Language {
    Korea = "ko",
    english = "en"
};

const user1 = {
    name : "이성연",
    role : Role.admin, // 0 <- 관리자
    language : Language.Korea
};
const user2 = {
    name : "홍길동",
    role : Role.user // 1 <- 일반 유저
};
const user3 = {
    name : "아무개",
    role : Role.guest // 2 <- 게스트
};

console.log(user1, user2, user3);
