import axios from 'axios';

class CatalogStoreService {
  fetchBeers = async (page: number, search: string) => {
    return axios
      .get('https://api.punkapi.com/v2/beers', {
        params: {
          page: page,
          per_page: 12,
          ...(search === '' ? {} : { beer_name: search }),
        },
      })
      .then((res) => res.data);
  };
}

export default new CatalogStoreService();
