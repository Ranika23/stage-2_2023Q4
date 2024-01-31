export function addContainWatch(bodyContainer) {
  const containerWatch = document.createElement('div');
  containerWatch.className = 'container-watch';
  bodyContainer.append(containerWatch);

  containerWatch.innerText = `00 : 00`;
}


export function cleanWatch() {
  if (document.querySelector('.container-watch') !== null) document.querySelector('.container-watch').remove();
}

export function resetTime() {
  document.querySelector('.container-watch').innerText = `00 : 00`;
}
