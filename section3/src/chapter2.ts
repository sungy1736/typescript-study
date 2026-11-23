/** 
 * Unknown 타입
 */

function unknownExam() {
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    let unknownVar: unknown;
    // 다운캐스팅 이므로 unknown값을 대입할 수 없음.
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/** 
 * Never 타입
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업캐스팅 이므로 대입가능
    let num: number = neverFunc();
}

/**
 * void 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined;
}

/**
 * any 타입
 * 모든 타입의 슈퍼타입 또는 서브타입으로 위치함
 * 따라서, any타입은 타입 계층도를 무시함
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;
    anyVar = unknownVar;
    undefinedVar = anyVar;

    // 유일하게 never타입으로 다운캐스팅 불가능
    // neverVar = anyVar;
}