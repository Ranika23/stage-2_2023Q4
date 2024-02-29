import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller;
    private view;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const ElemSources = document.querySelector('.sources');
        if (ElemSources === null) throw Error('Element is Error');
        ElemSources.addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => Object(this).view.drawNews(data))
        );
        this.controller.getSources((data) => Object(this).view.drawSources(data));
    }
}

export default App;
