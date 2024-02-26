import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL, {
            apiKey: '3dd2c163ab2d4a0bb5a23bf5d3ef8d12',
        });
    }
}

export default AppLoader;
