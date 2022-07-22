import { runInAction, makeAutoObservable } from 'mobx';
import { Beer } from '../../types/Beer';
import catalogStoreService from './catalogStore.service';

class CatalogStore {
  beers: Beer[] = [];
  page: number = 1;
  search: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setBeers = async () => {
    const beers: Beer[] = await catalogStoreService.fetchBeers(
      this.page,
      this.search
    );
    runInAction(() => {
      this.beers = beers;
    });
  };

  incrementPage = () => {
    if (this.beers.length > 11) {
      this.page++;
    }
  };

  decrementPage = () => {
    if (this.page !== 1) {
      this.page--;
    }
  };

  setSearch = (value: string) => {
    this.search = value;
    this.page = 1;
  };
}

export default new CatalogStore();
