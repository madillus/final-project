import styled from 'styled-components';
import Layout from '../components/Layout';
import landingImage from '../images/landingImage.jpg'
import singleBeer from '../images/singleBeer.png'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import nextCookies from 'next-cookies';

import Head from 'next/head';
import { isSessionTokenValid } from '../util/auth';

const FirstSection = styled.div`
height: auto;
width: auto;
display: flex;
justify-content: flex-end;
`;

const FirstSectionImage = styled.img`
padding: none;
width: 100%;
@media (max-width: 768px) {
  display: none;
}
`;

const FirstSectionMobileImage = styled.img`
padding: none;
width: 100%;
@media (min-width: 768px) {
  display: none;
}
`;

const StyledLogin = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-flow: column;
  flex-direction: column;
  width: 25rem;
  height: 13rem;
  border: 2px solid #000;
  border-radius: 1rem;
  z-index: 8;
  opacity: 90%;
  margin-top: 15rem;
  margin-right: 15rem;
  background-color: #2e2d26;
  margin-bottom: 10rem;
    @media (max-width: 768px) {
  width: 70%;
  margin-left: auto;
  margin-top: 9rem;
  margin-right: 15%;
  align-items: center;
  opacity: 90%;
  font-size: 1rem;
}


  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: ghostwhite;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

`;
const StyledButton = styled.button`
text-align: center;
background: #c00c1a;
color: #fff;
padding: 10px;
margin: 5px;
margin-bottom: 4rem;
width: 15rem;
border: none;
border-radius: 10px;
box-sizing: border-box;
`

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 15rem;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

return (
  <Layout loggedIn={props.loggedIn}>
    <Head>
      <title>Login</title>
    </Head>
    <FirstSection>

  <StyledLogin>
    <h2>Login</h2>
    <form
onSubmit={async (e) => {
  e.preventDefault();

  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const { success } = await response.json();

  if (!success) {
    setErrorMessage('Login failed!');
  } else {
    setErrorMessage('');
    router.push(props.redirectDestination);
  }
}}
>
<StyledInput
  value={username}
  placeholder='username'
  onChange={(e) => setUsername(e.currentTarget.value)}
/>
<StyledInput
  placeholder='password'
  value={password}
  type="password"
  onChange={(e) => setPassword(e.currentTarget.value)}
/>
<StyledButton>Log in</StyledButton>
</form>

<p style={{ color: 'red' }}>{errorMessage}</p>

<Link href="/register">
<a>Register</a>
</Link>

  </StyledLogin>
  <FirstSectionImage src={landingImage} alt='logo' id='landingImage' />
      <FirstSectionMobileImage src={singleBeer} alt='logo' id='singleBeer' />

  </FirstSection>
  </Layout>
);
}


export async function getServerSideProps(context) {
  const { session: token } = nextCookies(context);

  const redirectDestination = context?.query?.returnTo ?? '/admin/bbqadmin';

  if (await isSessionTokenValid(token)) {
    return {
      redirect: {
        destination: '/admin/bbqadmin',
        permanent: false,
      },
    };
  }

  return {
    props: { loggedIn: false, redirectDestination: redirectDestination },
  };
}

{/* <StyledInput type="text" placeholder="email" />
    <StyledInput type="password" placeholder="password" />
    <button>Login</button> */}