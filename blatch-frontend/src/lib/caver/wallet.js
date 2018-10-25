import caver from 'lib/caver';

const accounts = caver.klay.accounts;
const wallet = caver.klay.accounts.wallet;

// 지갑 생성
// entropy가 옵션이라고 되어있지만, 넣어주지 않으면 생성이 안됨
export const createWallet = () => {
  return wallet.create(
    1,
    '54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534'
  );
};

// 지갑 암호화. keystore JSON 반환
export const encrypt = password => {
  return wallet.encrypt(password);
};

// 지갑 복호화
export const decrypt = (keystoreJson, password) => {
  return accounts.decrypt(keystoreJson, password);
};

// 인메모리 지갑 가져오기
export const getWallet = () => {
  return wallet;
};
