import axios from 'axios';

const KEY = 'AIzaSyAoiPCVkrPKuw47hm4PrqIhGsnb4q-RL1A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});