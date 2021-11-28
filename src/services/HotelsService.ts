import axios from 'axios';
import {Hotel} from '../models/Hotel';

const headersData = {
    headers: {
        'Content-type': 'application/json'
    }
}
class HotelsService {
    async getHotels() {
        try {
            let data;
            await axios.get<Hotel[]>(process.env.API_BASE_URL + "/5eb8fcb12d0000d088357f2a", headersData).then((res) => {
                data = JSON.parse(res.data.slice(0, -7) + ']');
            });
            return data;
        }
        catch (e: any) {
            console.log('error Happend', e);
            return [{}];
        }
    }
}
export default new HotelsService();

