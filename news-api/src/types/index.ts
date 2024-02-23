export interface NewsSoursesResponce {
    status: string;
    sources: {
        id: string;
        name: string;
        description: string;
        url: string;
        category: string;
        language: string;
        country: string;
    };
}
export interface NewEverything {
    status: string;
    totalResults: string;
    articles: [
        {
            sourse: {
                id: string;
                name: string;
            };
            author: string;
            title: string;
            description: string;
            url: string;
            urlToImage: string;
            publishedAt: string;
            content: string;
        },
    ];
}
