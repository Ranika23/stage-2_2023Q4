import './sources.css';
import { NewsSoursesResponce } from '../../../types/index';
function Errors(): void {
    throw Error('Element is null');
}
class Sources {
    draw(data: NewsSoursesResponce[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLFormElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp === null) Errors();
            else {
                const sourceClone = sourceItemTemp.content.cloneNode(true);
                sourceClone.querySelector('.source__item-name').textContent = Object(item).name;
                sourceClone.querySelector('.source__item').setAttribute('data-source-id', Object(item).id);

                fragment.append(sourceClone);
            }
        });

        const elemSources: HTMLFormElement | null = document.querySelector('.sources');
        if (elemSources === null) Errors();
        else {
            elemSources.append(fragment);
        }

        const sourceItemChar: HTMLFormElement | null = document.querySelector('#sourceItemChar');
        const elemChar: HTMLFormElement | null = document.querySelector('.buttons-char');
        if (elemChar === null) Errors();
        else {
            for (let i = 65; i < 91; i++) {
                if (sourceItemChar === null) Errors();
                else {
                    const charsClone = sourceItemChar.content.cloneNode(true);
                    charsClone.querySelector('.source__char-item').textContent = String.fromCharCode(i);
                    elemChar.append(charsClone);
                }
            }
        }
    }
}

export default Sources;
