import { observable, action } from 'mobx';

export default class BlatchStore {
  @observable
  patient = null;
  @observable
  isAgree = false;

  @action
  setPatient = patient => {
    this.patient = patient;
  };

  @action
  agreeRecord = () => {
    this.isAgree = true;
  };

  @action
  initialize = () => {
    this.patient = null;
    this.isAgree = false;
  };
}
