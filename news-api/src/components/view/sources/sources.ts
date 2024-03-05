import './sources.css';
import { NewsSoursesResponce } from '../../../types/index';
function Errors(): void {
    throw Error('Element is null');
}
class Sources {
    draw(data: NewsSoursesResponce[]) {
        const sourceItemChar: HTMLFormElement | null = document.querySelector('#sourceItemChar');
        const elemChar: HTMLFormElement | null = document.querySelector('.buttons-char');
        if (elemChar === null) Errors();
        else {
            for (let i = 65; i < 91; i++) {
                if (sourceItemChar === null) Errors();
                else {
                    const charsClone = sourceItemChar.content.cloneNode(true);
                    charsClone.querySelector('.source__char').textContent = String.fromCharCode(i);
                    elemChar.append(charsClone);
                }
            }
        }

        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLFormElement | null = document.querySelector('#sourceItemTemp');
        const elemSources: HTMLFormElement | null = document.querySelector('.sources');
        const elemChars = document.querySelector('.buttons-char');
        if (elemChars === null) Errors();
        else {
            elemChars.addEventListener('click', (e) => {
                if (elemSources === null) Errors();
                else elemSources.innerHTML = '';
                data.forEach((item) => {
                    if (elemSources === null) Errors();

                    if (sourceItemTemp === null) Errors();
                    else {
                        if (elemChars === null) Errors();
                        else {
                            if (elemSources === null) Errors();

                            if (elemSources !== null) {
                                if (!(e.target instanceof HTMLElement)) return;

                                const itemChar: HTMLElement = e.target;
                                if (itemChar.textContent === Object(item).name[0]) {
                                    const sourceClone = sourceItemTemp.content.cloneNode(true);
                                    sourceClone.querySelector('.source__item-name').textContent = Object(item).name;
                                    sourceClone
                                        .querySelector('.source__item')
                                        .setAttribute('data-source-id', Object(item).id);
                                    fragment.append(sourceClone);

                                    if (elemSources === null) Errors();
                                    else {
                                        elemSources.append(fragment);
                                    }
                                }
                            }
                        }
                    }
                });
            });
        }
    }
}

export default Sources;
