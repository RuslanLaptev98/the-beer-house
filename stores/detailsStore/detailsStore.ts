import { runInAction, makeAutoObservable } from 'mobx';
import detailsStoreService from './detailsStore.service';
import { Beer } from '../../types/Beer';

class DetailsStore {
  beer: Beer | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setBeer = async (id: string) => {
    const beer: Beer = await detailsStoreService.fetchBeer(id);
    runInAction(() => {
      this.beer = beer;
    });
  };

  clearBeer = () => {
    this.beer = null;
  };
}

export default new DetailsStore();
