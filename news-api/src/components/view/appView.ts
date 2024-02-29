import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: object;
    private sources: object;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: News[]) {
        const values = Object(data)?.articles ? Object(data)?.articles : [];
        Object(this).news.draw(values);
    }

    drawSources(data: Sources[]) {
        const values = Object(data)?.sources ? Object(data)?.sources : [];
        Object(this).sources.draw(values);
    }
}

export default AppView;
