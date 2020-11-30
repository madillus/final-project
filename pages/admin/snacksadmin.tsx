import Sidebar from '../../components/SideBar2';
import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getUserBySessionToken } from '../../util/dbmenu';
import { Snacks } from '../../util/types';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { isSessionTokenValid } from '../../util/auth';

type Props = {
  snacks: Snacks[];
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

export default function snacksAdmin(props: Props) {
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

  if (!props.snacks) {
    return (
      <Layout>
        <Head>
          <title>Snacks not found</title>
        </Head>
        Snacks not found.
      </Layout>
    );
  }

  return (
    <StyledAdmin>
      <Sidebar />
      <Head>
        <title>Snacks</title>
      </Head>

      <br />

      <div>
        <ul>
          {props.snacks.map((snacks) => {
            return (
              <StyledGrid key={snacks.id}>
                <StyledButton
                  onClick={() => {
                    setEditingId(snacks.id);
                  }}
                >
                  edit
                </StyledButton>
                {editingId !== snacks.id ? (
                  <>
                    <StyledItem>{snacks.name} |</StyledItem>
                    <StyledItem> € {snacks.price}0</StyledItem>
                    <div></div>
                    <StyledItem>{snacks.germanName}</StyledItem>
                    <StyledItem>{snacks.allergens}</StyledItem>
                    <div></div>

                    <StyledDescription>{snacks.description} </StyledDescription>
                    <div></div>
                    <div></div>
                    <StyledDescription>
                      {snacks.germanDescription}
                    </StyledDescription>
                    <div></div>
                    <div></div>

                    <div></div>
                  </>
                ) : (
                  <>
                    <StyledInputItem
                      type="text"
                      value={snacks.name}
                      placeholder="Name"
                      onChange={(event) => setName(event.currentTarget.value)}
                    ></StyledInputItem>
                    <StyledInputItem
                      name="Price"
                      type="text"
                      value={snacks.price}
                      onChange={(event) => setPrice(event.currentTarget.value)}
                    ></StyledInputItem>
                    <StyledButton
                      onClick={async () => {
                        await fetch(`/api/menu/snacks/${[snacks.id]}`, {
                          method: 'PATCH',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            snacks: {
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
                      value={snacks.germanName}
                      onChange={(event) =>
                        setGermanName(event.currentTarget.value)
                      }
                    />
                    <StyledInputItem
                      name="allergens"
                      type="text"
                      value={snacks.allergens}
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
                      value={snacks.description}
                      onChange={(event) =>
                        setDescription(event.currentTarget.value)
                      }
                    />
                    <div></div>
                    <div></div>
                    <StyledInputItem
                      name="allergens"
                      type="text"
                      value={snacks.germanDescription}
                      onChange={(event) =>
                        setGermanDescription(event.currentTarget.value)
                      }
                    />
                    <StyledButton
                      onClick={async () => {
                        const answer = window.confirm(`Really delete item?`);

                        if (answer === true) {
                          const id = snacks.id;

                          const response = await fetch(
                            `/api/menu/snacks/${id}`,
                            {
                              method: 'DELETE',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                snacksId: snacks.id,
                              }),
                            },
                          );
                          const { success } = await response.json();
                          if (success) router.push('/admin/snacksadmin');
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
  const { getSnacks } = await import('../../util/dbmenu');
  const snacks = await getSnacks();
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
  // if (snacks) props.snacks = snacks;

  return {
    props: { snacks, user: user, loggedIn: loggedIn },
  };
}
