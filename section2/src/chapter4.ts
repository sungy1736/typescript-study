// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
};

let user: User = {
    id: 1,
    name: "이성연",
    nickname: "lee",
    birth: "1991.01.20",    
};

let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "hong",
    birth: "1991.01.20",    
};

// 인덱스 시그니처
type countryCodes = {
    [key : string] : string;
};

let countryCodes: countryCodes = {
    Korea: "ko",
    UnitedState: "us"
};

type countryNumberCodes = {
    [key : string] : number;
    Korea: number;
};

let countryNumberCodes: countryNumberCodes = {
    Korea: 410,    
}