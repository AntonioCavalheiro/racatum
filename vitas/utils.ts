// Conteúdo do arquivo utils.ts
export function createElement(tagName: string, className?: string, textContent?: string, attributes?: { [key: string]: string }): HTMLElement {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  if (attributes) {
    for (const attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }
  return element;
}

export function createButton(text: string, onClick: () => void): HTMLButtonElement {
  const button = createElement('button', 'btn', text) as HTMLButtonElement;
  button.addEventListener('click', onClick);
  return button;
}

export function createInput(type: string, placeholder: string): HTMLInputElement {
  const input = createElement('input', 'input', '', { type, placeholder }) as HTMLInputElement;
  return input;
}

export function createDiv(text: string, className?: string): HTMLDivElement {
  const div = createElement('div', className, text) as HTMLDivElement;
  return div;
}

export function createImage(src: string, alt: string): HTMLImageElement {
  const img = createElement('img', '', '', { src, alt }) as HTMLImageElement;
  return img;
}