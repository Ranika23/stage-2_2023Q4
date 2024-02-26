import AppLoader from './appLoader';
export type MyCallback<T> = (data?: T) => void;

class AppController extends AppLoader {
    getSources<T>(callback: MyCallback<T>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T>(e: Event, callback: MyCallback<T>) {
        let target = e.target as Element | null;
        const newsContainer = e.currentTarget as HTMLInputElement;

        while (target !== newsContainer) {
            if (target === null) throw Error('Element is Error');
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId === null) throw Error('Element is Error');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target === null) throw Error('Element is Error');
            target = target.parentElement;
        }
    }
}

export default AppController;
