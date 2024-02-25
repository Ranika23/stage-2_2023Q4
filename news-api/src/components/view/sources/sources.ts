import './sources.css';
import { NewsSoursesResponce } from '../../../types/index';

class Sources {
    draw(data: NewsSoursesResponce[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLFormElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp === null) throw Error('Element is error');
            else {
                const sourceClone = sourceItemTemp.content.cloneNode(true);
                sourceClone.querySelector('.source__item-name').textContent = Object(item).name;
                sourceClone.querySelector('.source__item').setAttribute('data-source-id', Object(item).id);

                fragment.append(sourceClone);
            }
        });

        const elemSources: HTMLFormElement | null = document.querySelector('.sources');
        if (elemSources === null) throw Error('Element is error');
        else {
            elemSources.append(fragment);
        }
    }
}

export default Sources;
