import { observable, action } from 'mobx';

export default class LoadingStore {
  @observable
  isLoading = false;

  @action
  startLoading = () => {
    this.isLoading = true;
  };

  @action
  stopLoading = () => {
    this.isLoading = false;
  };
}
