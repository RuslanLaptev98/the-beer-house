import axios from 'axios';

class DetailsStoreService {
  async fetchBeer(id: string) {
    return axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then((resp) => resp.data[0]);
  }
}

export default new DetailsStoreService();
