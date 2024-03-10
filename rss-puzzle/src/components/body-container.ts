export function createBodyElement() {
  const bodyContainer: Element | null = document.createElement('div');
  bodyContainer.className = 'body-container';

  const body: Element | null = document.querySelector('body');
  if (body === null) throw Error('Element is Error');
  body.className = 'body';

  body.prepend(bodyContainer);
}
