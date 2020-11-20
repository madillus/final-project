import Sidebar from "../../components/SideBar2";
import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout'




export default function Bbq(props) {
  // const router = useRouter();

  // const [editingKey, setEditingKey] = useState(null);
  // const [name, setName] = useState(props.bbq?.name);
  // const [germanName, setGermanName] = useState(props.bbq?.germanName);


  if (!props.bbq) {
    return (
      <Layout>
        <Head>
          <title>bbq not found</title>
        </Head>
        bbq not found.
      </Layout>
    );
  }

  return (
    <>
      <Sidebar />
      <Head>
        <title>Bbq</title>
      </Head>
{/*
      <br />
      <h2>bbq name</h2>
      {editingKey === 'name' ? (
        <input
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />
      ) : (
        name
      )}{' '}
      {editingKey !== 'name' ? (
        <button
          onClick={() => {
            setEditingKey('name');
          }}
        >
          edit
        </button>
      ) : (
        <>
          <button
            onClick={async () => {
              await fetch(`/api/menu/bbq/${props.bbq.id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bbq: { name: name } }),
              });
              setEditingKey(null);
            }}
          >
            save
          </button>{' '}
          <button
            onClick={() => {
              setEditingKey(null);
              setName(props.bbq.name);
            }}
          >
            cancel
          </button>
        </>
      )}
      <br />
      <h2>bbq germanName</h2>
      {editingKey === 'germanName' ? (
        <input
          value={germanName}
          onChange={(event) => setGermanName(event.currentTarget.value)}
        />
      ) : (
        germanName
      )}{' '}
      {editingKey !== 'germanName' ? (
        <button
          onClick={() => {
            setEditingKey('germanName');
          }}
        >
          edit
        </button>
      ) : (
        <>
          <button
            onClick={() => {
              setEditingKey(null);

            }}
          >
            save
          </button>{' '}
          <button
            onClick={() => {
              setEditingKey(null);
              setGermanName(props.bbq.germanName);
            }}
          >
            cancel
          </button>
        </>
      )} */}
      <br />
      <br />
      <button
        onClick={async () => {
          const answer = window.confirm(
            `Really delete item ${props.bbq.name} ${props.bbq.germanName}?`,
          );

          if (answer === true) {
            await fetch(`/api/menu/bbq/${props.bbq.id}`, { method: 'DELETE' });


            router.push('/admin/bbqadmin');
          }
        }}
        style={{
          background: 'red',
          color: 'white',
          padding: '7px 6px',
          borderRadius: 4,
          border: 0,
        }}
      >
        delete bbq
      </button>
    </>
  );
}


export async function getServerSideProps(context) {
  const id = context.query.id;
  const { getBbq } = await import('../../util/dbmenu');
  const bbq = await getBbq(id);



  const props  = {};
  if (bbq) props.bbq = bbq;

  return {
    props: props,
  };
}
