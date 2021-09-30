import axios from 'axios';

class ApiService {
    constructor() {

    }

    get(url) {
        return axios.get(url);
    }
}

export default new ApiService();