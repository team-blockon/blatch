import { observable, action } from 'mobx';
import caver from 'lib/caver';

export default class WalletStore {
  @observable
  walletInstance = null;

  // privateKey로 지갑 인스턴스를 얻고, 지갑에 추가
  @action
  integrateWallet = privateKey => {
    const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey);
    caver.klay.accounts.wallet.add(walletInstance);
    sessionStorage.setItem('walletInstance', JSON.stringify(walletInstance));
    this.walletInstance = walletInstance;
  };

  @action
  loadWallet = walletInstance => {
    caver.klay.accounts.wallet.add(walletInstance);
    this.walletInstance = walletInstance;
  };

  @action
  removeWallet = () => {
    sessionStorage.removeItem('walletInstance');
    this.walletInstance = null;
  };
}
