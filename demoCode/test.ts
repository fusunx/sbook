interface IHelper {
    a: number;
    errorCode: (code: number) => string;
}

function success<T>(this: IHelper, data: T | T[] | null = null, code = 200) {
    const message = this.errorCode(code);
}

const demo: IHelper = {
    a: 1,
    errorCode(code: number): string {
        return 'test';
    },
};

// success<number>(1, 200)
// success(demo, 1, 300);
