import { observable, action } from 'mobx';

export default class BlatchStore {
  @observable
  patient = null;
  @observable
  isAgree = false;
  @observable
  videoBlob = null;

  @action
  setPatient = patient => {
    this.patient = patient;
  };

  @action
  agreeRecord = () => {
    this.isAgree = true;
  };

  @action
  setVideoBlob = blob => {
    this.videoBlob = blob;
  };

  @action
  initialize = () => {
    this.patient = null;
    this.isAgree = false;
    this.videoBlob = null;
  };
}
