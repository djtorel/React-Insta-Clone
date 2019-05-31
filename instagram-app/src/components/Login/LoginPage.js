import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section.attrs({
  className: `w-11/12 max-w-xl my-auto bg-gray-800 p-2 rounded-lg shadow-md`,
})``;

const LogoContainer = styled.div.attrs({
  className: `flex justify-center items-center pb-2`,
})``;

const CompanyLogo = styled.div.attrs({
  className: `jam jam-camera-alt text-gray-200 text-6xl`,
})``;

const Divider = styled.div.attrs({
  className: `bg-gray-200 h-16 border-l border-gray-400 mx-4`,
})``;

const CompanyName = styled.div.attrs({
  className: `text-gray-200 text-3xl`,
})`
  font-family: Pacifico;
`;

const FormWrapper = styled.div.attrs({
  className: `bg-gray-500 pt-2 rounded`,
})``;

const LoginForm = styled.form.attrs({
  className: `w-full h-full`,
})``;

const InputWrapper = styled.div.attrs({
  className: `rounded p-2`,
})``;

const InputLabel = styled.label.attrs({
  className: `block text-gray-800 mb-2 tracking-wider`,
})`
  font-family: Roboto;
  font-weight: 600;
`;

const Input = styled.input.attrs({
  className: `
    appearance-none border border-gray-700 shadow w-full rounded py-3
    px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline
    bg-gray-400 shadow
  `,
})``;

const LoginButton = styled.button.attrs({
  className: `
    w-full bg-gray-700 text-gray-400 py-2 self-stretch text-2xl rounded-b mt-4
    focus:outline-none
  `,
})`
  font-family: Roboto;
`;

const LoginPage = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = func => event => func(event.target.value);
  const handleLogin = e => {
    e.preventDefault();
    if (username.length > 0 && password.length > 0) {
      localStorage.setItem('user', username);
      setLoggedIn(true);
    }
  };

  return (
    <Container>
      <LogoContainer>
        <CompanyLogo />
        <Divider />
        <CompanyName>Vanigram</CompanyName>
      </LogoContainer>
      <FormWrapper>
        <LoginForm onSubmit={handleLogin}>
          <InputWrapper>
            <InputLabel>Login</InputLabel>
            <Input
              type="text"
              name="login"
              value={username}
              placeholder="Username..."
              onChange={handleInput(setUsername)}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Password..."
              onChange={handleInput(setPassword)}
            />
          </InputWrapper>
          <LoginButton type="submit" onClick={handleLogin}>
            Log In
          </LoginButton>
        </LoginForm>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;
