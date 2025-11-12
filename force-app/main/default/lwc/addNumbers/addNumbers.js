import { LightningElement, track } from 'lwc';

export default class AddNumbers extends LightningElement {
  @track number1 = 0;
  @track number2 = 0;
  @track result = 0;

  handleChange(event) {
    const label = event.target.label;
    if (label === "Number 1") this.number1 = Number(event.target.value);
    if (label === "Number 2") this.number2 = Number(event.target.value);
  }

  addNumbers() {
    this.result = this.number1 + this.number2;
  }
}
