export class baseRule {
    value = '';

    errMsg = '';

    constructor({ value = '', errMsg = '' } = {}) {
        this.value = value;

        this.errMsg = errMsg;
    }

    validate!: () => void;
}
