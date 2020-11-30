import Sidebar from '../../components/SideBar2';
import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getUserBySessionToken } from '../../util/dbmenu';
import { Classics } from '../../util/types';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { isSessionTokenValid } from '../../util/auth';

type Props = {
  classics: Classics[];
};

const StyledAdmin = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
`;

const StyledItem = styled.p`
  display: grid;
  margin-top: 0;
  text-align: left;
  color: black;
  font-size: 1.25rem;
  font-style: bold;
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
`;

const StyledDescription = styled.p`
  display: flex;
  justify-content: flex-start;
  color: black;
  font-size: 1rem;
  margin-top: -1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
`;

const StyledAllergens = styled.p`
  display: flex;
  justify-content: flex-start;
  color: black;
  font-size: 0.8rem;
  margin-top: -1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
`;
const StyledPrice = styled.p`
  display: grid;
  color: black;
  font-size: 1.25rem;
  text-align: end;
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1.1fr 0.9fr;
  grid-template-rows: 0.3fr 0.3fr 0.3fr 0.3fr 0.4fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .'
    '. . .'
    '. . .'
    '. . .';
`;
const StyledButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  height: 2rem;
  width: 6rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
const StyledInputItem = styled.input`
  width: 20rem;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
`;

export default function classicsAdmin(props: Props) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [editingId, setEditingId] = useState<number | null>();
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [name, setName] = useState<string | null>();
  const [germanName, setGermanName] = useState<string | null>();
  const [description, setDescription] = useState<string | null>();
  const [germanDescription, setGermanDescription] = useState<string | null>();
  const [allergens, setAllergens] = useState<string | null>();
  const [price, setPrice] = useState<string | number>();

  if (!props.classics) {
    return (
      <Layout>
        <Head>
          <title>Classics not found</title>
        </Head>
        Classics not found.
      </Layout>
    );
  }

  return (
    <StyledAdmin>
      <Sidebar />
      <Head>
        <title>Classics</title>
      </Head>

      <br />

      <div>
        <ul>
          {props.classics.map((classics) => {
            return (
              <StyledGrid key={classics.id}>
                <StyledButton
                  onClick={() => {
                    setEditingId(classics.id);
                  }}
                >
                  edit
                </StyledButton>
                {editingId !== classics.id ? (
                  <>
                    <StyledItem>{classics.name} |</StyledItem>
                    <StyledItem> € {classics.price}0</StyledItem>
                    <div></div>
                    <StyledItem>{classics.germanName}</StyledItem>
                    <StyledItem>{classics.allergens}</StyledItem>
                    <div></div>

                    <StyledDescription>
                      {classics.description}{' '}
                    </StyledDescription>
                    <div></div>
                    <div></div>
                    <StyledDescription>
                      {classics.germanDescription}
                    </StyledDescription>
                    <div></div>
                    <div></div>

                    <div></div>
                  </>
                ) : (
                  <>
                    <StyledInputItem
                      type="text"
                      value={classics.name}
                      placeholder="Name"
                      onChange={(event) => setName(event.currentTarget.value)}
                    ></StyledInputItem>
                    <StyledInputItem
                      name="Price"
                      type="text"
                      value={classics.price}
                      onChange={(event) => setPrice(event.currentTarget.value)}
                    ></StyledInputItem>
                    <StyledButton
                      onClick={async () => {
                        await fetch(`/api/menu/classics/${[classics.id]}`, {
                          method: 'PATCH',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            classics: {
                              name: name,
                              germanName: germanName,
                              description: description,
                              germanDescription: germanDescription,
                              allergens: allergens,
                              price: price,
                            },
                          }),
                        });
                        setEditingKey(null);
                      }}
                    >
                      save
                    </StyledButton>
                    <StyledInputItem
                      name="german name"
                      type="text"
                      value={classics.germanName}
                      onChange={(event) =>
                        setGermanName(event.currentTarget.value)
                      }
                    />
                    <StyledInputItem
                      name="allergens"
                      type="text"
                      value={classics.allergens}
                      onChange={(event) =>
                        setAllergens(event.currentTarget.value)
                      }
                    />
                    <StyledButton
                      onClick={() => {
                        setEditingKey(null);
                      }}
                    >
                      cancel
                    </StyledButton>
                    <StyledInputItem
                      name="description"
                      type="text"
                      value={classics.description}
                      onChange={(event) =>
                        setDescription(event.currentTarget.value)
                      }
                    />
                    <div></div>
                    <div></div>
                    <StyledInputItem
                      name="allergens"
                      type="text"
                      value={classics.germanDescription}
                      onChange={(event) =>
                        setGermanDescription(event.currentTarget.value)
                      }
                    />
                    <StyledButton
                      onClick={async () => {
                        const answer = window.confirm(`Really delete item?`);

                        if (answer === true) {
                          const id = classics.id;

                          const response = await fetch(
                            `/api/menu/classics/${id}`,
                            {
                              method: 'DELETE',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                classicsId: classics.id,
                              }),
                            },
                          );
                          const { success } = await response.json();
                          if (success) router.push('/admin/classicsadmin');
                        } else {
                          setErrorMessage('Failed');
                        }
                      }}
                    >
                      Delete
                    </StyledButton>
                  </>
                )}
              </StyledGrid>
            );
          })}
        </ul>
      </div>
    </StyledAdmin>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { session: token } = nextCookies(context);
  const id = context.query.id;
  const { getClassics } = await import('../../util/dbmenu');
  const classics = await getClassics();
  const user = await getUserBySessionToken(token);
  const loggedIn = await isSessionTokenValid(token);

  if (!token || !user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // const props  = {};
  // if (classics) props.classics = classics;

  return {
    props: { classics, user: user, loggedIn: loggedIn },
  };
}
