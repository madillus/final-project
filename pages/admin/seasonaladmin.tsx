import Sidebar from '../../components/SideBar2';
import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getUserBySessionToken } from '../../util/dbmenu';
import { Seasonal } from '../../util/types';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { isSessionTokenValid } from '../../util/auth';

type Props = {
  seasonal: Seasonal[];
};

const StyledAdmin = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
`;

const StyledItem = styled.p`
  display: flex;
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

const StyledGrid = styled.div`
  display: grid;
  align-self: flex-start;

  grid-template-columns: 0.2fr 1.1fr 0.9fr;
  grid-template-rows: 0.3fr 0.3fr 0.3fr 0.3fr 0.4fr;

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

export default function seasonalAdmin(props: Props) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [editingId, setEditingId] = useState<number>();
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [name, setName] = useState<string>();
  const [germanName, setGermanName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [germanDescription, setGermanDescription] = useState<string>();
  const [allergens, setAllergens] = useState<string>();
  const [price, setPrice] = useState<string | number>();

  if (!props.seasonal) {
    return (
      <Layout>
        <Head>
          <title>seasonal not found</title>
        </Head>
        seasonal not found.
      </Layout>
    );
  }

  return (
    <StyledAdmin>
      <Sidebar />
      <Head>
        <title>Seasonal</title>
      </Head>

      <br />

      <div>
        <ul>
          {props.seasonal.map((seasonal) => {
            return (
              <StyledGrid key={seasonal.id}>
                <StyledButton
                  onClick={() => {
                    setEditingId(seasonal.id);
                    setName(seasonal.name);
                    setGermanName(seasonal.germanName);
                    setDescription(seasonal.description);
                    setGermanDescription(seasonal.germanDescription);
                    setAllergens(seasonal.allergens);
                    setPrice(seasonal.price);
                  }}
                >
                  edit
                </StyledButton>
                {editingId !== seasonal.id ? (
                  <>
                    <StyledItem>{seasonal.name} |</StyledItem>
                    <StyledItem> € {seasonal.price}0</StyledItem>
                    <div></div>
                    <StyledItem>{seasonal.germanName}</StyledItem>
                    <StyledItem>{seasonal.allergens}</StyledItem>
                    <div></div>

                    <StyledDescription>
                      {seasonal.description}{' '}
                    </StyledDescription>
                    <div></div>
                    <div></div>
                    <StyledDescription>
                      {seasonal.germanDescription}
                    </StyledDescription>
                    <div></div>
                    <div></div>

                    <div></div>
                  </>
                ) : (
                  <>
                    <StyledInputItem
                      name="Name"
                      type="text"
                      value={name}
                      placeholder="Name"
                      onChange={(event) => setName(event.target.value)}
                    ></StyledInputItem>
                    <StyledInputItem
                      name="Price"
                      type="text"
                      value={price}
                      placeholder="Price"
                      onChange={(event) => setPrice(event.currentTarget.value)}
                    ></StyledInputItem>
                    <StyledButton
                      onClick={async () => {
                        await fetch(`/api/menu/seasonal/${seasonal.id}`, {
                          method: 'PATCH',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            seasonal: {
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
                      name="germanname"
                      type="text"
                      value={germanName}
                      placeholder="German Name"
                      onChange={(event) =>
                        setGermanName(event.currentTarget.value)
                      }
                    />
                    <StyledInputItem
                      name="allergens"
                      type="text"
                      value={allergens}
                      placeholder="Allergens"
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
                      value={description}
                      placeholder="Description"
                      onChange={(event) =>
                        setDescription(event.currentTarget.value)
                      }
                    />
                    <div></div>
                    <div></div>
                    <StyledInputItem
                      name="allergens"
                      type="text"
                      value={germanDescription}
                      placeholder="German Description"
                      onChange={(event) =>
                        setGermanDescription(event.currentTarget.value)
                      }
                    />
                    <StyledButton
                      onClick={async () => {
                        const answer = window.confirm(`Really delete item?`);

                        if (answer === true) {
                          const id = seasonal.id;

                          const response = await fetch(
                            `/api/menu/seasonal/${seasonal.id}`,
                            {
                              method: 'DELETE',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                seasonalId: seasonal.id,
                              }),
                            },
                          );
                          const { success } = await response.json();
                          if (success) router.push('/admin/seasonaladmin');
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
  const { getSeasonal } = await import('../../util/dbmenu');
  const seasonal = await getSeasonal();
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
  // if (seasonal) props.seasonal = seasonal;

  return {
    props: { seasonal: seasonal, user: user, loggedIn: loggedIn },
  };
}
