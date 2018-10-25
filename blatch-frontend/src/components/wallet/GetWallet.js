import React from 'react';
import Button from 'grommet/components/Button';

const GetWallet = ({ getWalletJson }) => {
  return (
    <Button
      label="지갑 다운로드"
      href={`data:text/json;charset=utf-8,${encodeURIComponent(
        getWalletJson()
      )}`}
      download="wallet.json"
      primary
    />
  );
};

export default GetWallet;
