import Sidebar from '../../components/SideBar2';
import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getUserBySessionToken } from '../../util/dbmenu';
import { Bbq } from '../../util/types';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { isSessionTokenValid } from '../../util/auth';

type Props = {
  bbq: Bbq[];
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

export default function BbqAdmin(props: Props) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  // const bbq = props.bbq;
  const [editingId, setEditingId] = useState<number>();
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [name, setName] = useState<string>();
  const [germanName, setGermanName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [germanDescription, setGermanDescription] = useState<string>();
  const [allergens, setAllergens] = useState<string>();
  const [price, setPrice] = useState<string | number>();

  // const [bbq, setBbq] = useState();

  // const handleChange = (event) => {
  //   setBbq({
  //     ...bbq,
  //     [event.target.name]: event.target.value,
  //   });
  // };

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
    <StyledAdmin>
      <Sidebar />
      <Head>
        <title>Bbq</title>
      </Head>

      <br />

      <div>
        <ul>
          {props.bbq.map((bbq) => {
            return (
              <StyledGrid key={bbq.id}>
                <StyledButton
                  onClick={() => {
                    setEditingId(bbq.id);
                    setName(bbq.name);
                    setGermanName(bbq.germanName);
                    setDescription(bbq.description);
                    setGermanDescription(bbq.germanDescription);
                    setAllergens(bbq.allergens);
                    setPrice(bbq.price);
                  }}
                >
                  edit
                </StyledButton>
                {editingId !== bbq.id ? (
                  <>
                    <StyledItem>{bbq.name} |</StyledItem>
                    <StyledItem> € {bbq.price}0</StyledItem>
                    <div></div>
                    <StyledItem>{bbq.germanName}</StyledItem>
                    <StyledItem>{bbq.allergens}</StyledItem>
                    <div></div>

                    <StyledDescription>{bbq.description} </StyledDescription>
                    <div></div>
                    <div></div>
                    <StyledDescription>
                      {bbq.germanDescription}
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
                      onChange={(event) => setPrice(event.target.value)}
                    ></StyledInputItem>
                    <StyledButton
                      onClick={async () => {
                        await fetch(`/api/menu/${bbq.id}`, {
                          method: 'PATCH',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            bbq: {
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
                          const id = bbq.id;

                          const response = await fetch(`/api/menu/${bbq.id}`, {
                            method: 'DELETE',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              bbqId: bbq.id,
                            }),
                          });
                          const { success } = await response.json();
                          if (success) router.push('/admin/bbqadmin');
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
  const { getBbq } = await import('../../util/dbmenu');
  const bbq = await getBbq();
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
  // if (bbq) props.bbq = bbq;

  return {
    props: { bbq: bbq, user: user, loggedIn: loggedIn },
  };
}
