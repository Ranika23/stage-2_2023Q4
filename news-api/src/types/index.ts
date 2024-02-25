interface NewsSourse {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface NewsSoursesResponce {
    status: string;
    sources: NewsSourse[];
}
interface Src {
    id: string | null;
    name: string;
}
interface everythingArticles {
    source: Src;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface NewsEverything {
    status: string;
    totalResults: string;
    articles: everythingArticles;
}

export interface Errors {
    status: string;
    code: string;
    message: string;
}
