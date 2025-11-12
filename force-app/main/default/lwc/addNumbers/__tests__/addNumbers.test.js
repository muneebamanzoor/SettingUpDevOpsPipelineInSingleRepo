import { createElement } from 'lwc';
import AddNumbers from 'c/addNumbers';

describe('c-add-numbers', () => {
  it('adds two numbers correctly', () => {
    const element = createElement('c-add-numbers', { is: AddNumbers });
    document.body.appendChild(element);

    const inputs = element.shadowRoot.querySelectorAll('lightning-input');
    inputs[0].value = 5;
    inputs[1].value = 10;
    inputs[0].dispatchEvent(new CustomEvent('change'));
    inputs[1].dispatchEvent(new CustomEvent('change'));

    const button = element.shadowRoot.querySelector('lightning-button');
    button.click();

    return Promise.resolve().then(() => {
      const result = element.shadowRoot.querySelector('p');
      expect(result.textContent).toBe('Result: 15');
    });
  });
});
