export function createBodyElement() {
  const bodyContainer: Element | null = document.createElement('div');
  bodyContainer.className = 'body-container';

  const body: Element | null = document.querySelector('body');
  if (body === null) throw Error('Element is Error');
  body.className = 'body';

  body.prepend(bodyContainer);

  const bodyHeader: Element | null = document.createElement('div');
  bodyHeader.className = 'header';
  const bodyMain: Element | null = document.createElement('div');
  bodyMain.className = 'main';
  const bodyFooter: Element | null = document.createElement('div');
  bodyFooter.className = 'footer';

  bodyContainer.append(bodyHeader);
  bodyContainer.append(bodyMain);
  bodyContainer.append(bodyFooter);
}
