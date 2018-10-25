import React from 'react';

import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import PasswordInput from 'grommet/components/PasswordInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';

const Login = ({
  handleChange,
  handleImport,
  handleLogin,
  walletFile,
  keystoreMsg,
  walletPw
}) => {
  return (
    <Form onSubmit={handleLogin} pad="medium">
      <FormFields>
        <Box align="center">
          <Heading strong>Klaytn Boilerplate</Heading>
        </Box>
        <fieldset>
          <FormField label="지갑 파일">
            <input
              type="file"
              name="walletFile"
              value={walletFile}
              onChange={handleImport}
            />
          </FormField>
          <FormField label="지갑 비밀번호" error={keystoreMsg}>
            <PasswordInput
              name="walletPw"
              value={walletPw}
              onChange={handleChange}
            />
          </FormField>
        </fieldset>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }}>
        <Button label="로그인" type="submit" primary fill />
      </Footer>
      <Box align="center">
        <Anchor path="/wallet" label="회원가입" />
      </Box>
    </Form>
  );
};

export default Login;
