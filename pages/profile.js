import nextCookies from 'next-cookies';
import React from 'react';
import Head from 'next/head';
import { isSessionTokenValid } from '../util/auth';
import { getUserBySessionToken } from '../util/user';

export default function Profile(props) {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div loggedIn={props.loggedIn} />
      <h1>Profile</h1>
      <h2>Username</h2>
      <p>{props.user.userName}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { session: token } = nextCookies(context);
  const loggedIn = await isSessionTokenValid(token);

  if (!(await isSessionTokenValid(token))) {
    return {
      redirect: {
        destination: '/admin/bbqadmin',
        permanent: false,
      },
    };
  }

  const user = await getUserBySessionToken(token);

  return { props: { user: user, loggedIn: loggedIn } };
}