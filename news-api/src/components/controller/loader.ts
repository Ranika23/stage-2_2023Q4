export type MyCallback<T> = (data: T) => void;
export type Endpoint = string;

class Loader {
    baseLink?: string;
    options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: Endpoint; options?: object },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(endpoint: Endpoint, options?: object) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${Object(urlOptions)[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: Endpoint, callback: MyCallback<T>, options = {}) {
        fetch(this.makeUrl(endpoint, options), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
