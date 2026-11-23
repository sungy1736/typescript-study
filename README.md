<div align="center">

# 📘 TypeScript Study

**TypeScript를 기초부터 차근차근 학습하며 정리하는 저장소**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/status-studying-brightgreen?style=for-the-badge)

</div>

---

## 📚 학습 목차

| 섹션 | 주제 | 내용 |
| :---: | :--- | :--- |
| [Section 1](./section1) | 🛠️ 개발 환경 설정 | TypeScript 프로젝트 초기 세팅 (`tsconfig`, `package.json`) |
| [Section 2](./section2) | 🧩 기본 타입 | 원시 타입, 배열, 객체, enum, any, void, never 등 |
| [Section 3](./section3) | 🌳 타입 계층과 호환성 | 타입 계층도, unknown, never, void, any |

---

## 🗂️ Section 2 · 기본 타입

| 챕터 | 주제 | 키워드 |
| :---: | :--- | :--- |
| [Chapter 1](./section2/src/chapter1.ts) | 원시 타입 | `number` `string` `boolean` `null` `undefined` 리터럴 타입 |
| [Chapter 2](./section2/src/chapter2.ts) | 배열과 튜플 | 제네릭 배열, 유니온, 다차원 배열, 튜플 |
| [Chapter 3](./section2/src/chapter3.ts) | 객체 타입 | 객체 리터럴 타입, 선택적 프로퍼티(`?`), `readonly` |
| [Chapter 4](./section2/src/chapter4.ts) | 타입 별칭 | `type`, 인덱스 시그니처 |
| [Chapter 5](./section2/src/chapter5.ts) | 열거형 | `enum` (숫자형 / 문자열형) |
| [Chapter 6](./section2/src/chapter6.ts) | any와 unknown | `any`, `unknown` |
| [Chapter 7](./section2/src/chapter7.ts) | void와 never | `void`, `never` |

## 🌳 Section 3 · 타입 계층과 호환성

| 챕터 | 주제 | 키워드 |
| :---: | :--- | :--- |
| [Chapter 2](./section3/src/chapter2.ts) | 특수 타입 정리 | `unknown` `never` `void` `any`, 업캐스팅 / 다운캐스팅 |

<div align="center">

<img src="./section3/%ED%83%80%EC%9E%85%EA%B3%84%EC%B8%B5%EB%8F%84.png" alt="타입 계층도" width="600" />

*타입 계층도*

</div>

---

## 📁 프로젝트 구조

```text
typescript-study
├── section1          # 개발 환경 설정
│   └── src
├── section2          # 기본 타입
│   └── src
│       ├── chapter1.ts ~ chapter7.ts
├── section3          # 타입 계층과 호환성
│   ├── src
│   │   └── chapter2.ts
│   └── 타입계층도.png
└── README.md
```

각 섹션은 독립된 Node 프로젝트로, 섹션별로 `package.json`과 `tsconfig.json`을 가지고 있습니다.

---

## ⚙️ 사용한 설정

- **언어:** TypeScript (`strict` 모드)
- **모듈:** ESM (`"type": "module"`)
- **빌드:** `src` → `dist` (`target`: `esnext`)

---

<div align="center">

📝 학습이 진행되는 대로 계속 업데이트됩니다.

</div>
