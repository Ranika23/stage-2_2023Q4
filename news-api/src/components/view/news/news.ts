import './news.css';
import { NewsEverything } from '../../../types/index';

function Errors(): void {
    throw Error('Element is null');
}

class News {
    draw(data: NewsEverything[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLFormElement | null = document.querySelector('#newsItemTemp');
        news.forEach((item, idx) => {
            if (newsItemTemp === null) throw Error('Element is null');
            const newsClone = newsItemTemp.content.cloneNode(true);

            if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');
            if (Object(item).urlToImage === undefined) Errors();

            newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
                Object(item).urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsClone.querySelector('.news__meta-author').textContent = Object(item).author || Object(item).source.name;
            newsClone.querySelector('.news__meta-date').textContent = Object(item)
                .publishedAt.slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title').textContent = Object(item).title;
            newsClone.querySelector('.news__description-source').textContent = Object(item).source.name;
            newsClone.querySelector('.news__description-content').textContent = Object(item).description;
            newsClone.querySelector('.news__read-more a').setAttribute('href', Object(item).url);

            fragment.append(newsClone);
        });
        const elemNews: HTMLFormElement | null = document.querySelector('.news');
        if (elemNews === null) Errors();
        else {
            elemNews.innerHTML = '';
            elemNews.appendChild(fragment);
        }
    }
}

export default News;
