import { LightningElement } from 'lwc';

export default class AddNumbers extends LightningElement {
    first = 0;
    second = 0;
    result = 0;

    handleFirst(event) {
        this.first = parseFloat(event.target.value) || 0;
    }

    handleSecond(event) {
        this.second = parseFloat(event.target.value) || 0;
    }

    addNumbers() {
        this.result = this.first + this.second;
    }
    
}
