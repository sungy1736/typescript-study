// 객체 리터럴타입
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "이성연"
};

// 선언후에 바꾸지 않을 값은 readonly 처리
let config: {
    readonly apiKey: string;
} = {
    apiKey: 'key'
};

