import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Head from 'next/head';
import landingImage from '../images/landingImage.jpg';
import singleBeer from '../images/singleBeer.png';

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
    font-size: 1rem;
    color: ghostwhite;
  }
  button {
    background: #c00c1a;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 15rem;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;

const StyledInput = styled.input`
  align-content: center;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 15rem;
  box-sizing: border-box;
`;

type Props = { token: string };

export default function Register(props: { token: string }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <FirstSection>
        <StyledLogin>
          <h2>REGISTER!</h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  username: username,
                  password: password,
                  token: props.token,
                }),
              });
              const { success } = await response.json();

              if (success) {
                router.push('/');
              } else {
                if (response.status === 409) {
                  setErrorMessage('User already exists!');
                } else {
                  setErrorMessage('Failed!');
                }
              }
            }}
          >
            <StyledInput
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />

            <StyledInput
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />

            <button>Register</button>
          </form>

          <Link href="/login">
            <a>Login</a>
          </Link>
          <p style={{ color: 'red' }}>{errorMessage}</p>
        </StyledLogin>
        <FirstSectionImage src={landingImage} alt="logo" id="landingImage" />
        <FirstSectionMobileImage src={singleBeer} alt="logo" id="singleBeer" />
      </FirstSection>
    </Layout>
  );
}
export async function getServerSideProps() {
  const tokens = new (await import('csrf')).default();
  const secret = process.env.CSRF_TOKEN_SECRET;

  if (typeof secret === 'undefined') {
    throw new Error('CSRF_TOKEN_SECRET environment variable not configured!');
  }

  const token = tokens.create(secret);
  return { props: { token } };
}
