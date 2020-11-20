import postgres from 'postgres';
import dotenv from 'dotenv';
import camelcaseKeys from 'camelcase-keys';

dotenv.config();

const sql = postgres();

export async function getBeers() {
const beers = await sql`
SELECT * FROM beers;
`;
return beers.map((beer) => {
    return {
      id: beer.id,
      name: beer.name,
      description: beer.description,
      slug: beer.slug
    };
  });
}

export async function getBeerById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const beers = await sql`
    SELECT * FROM beers WHERE id = ${id};
  `;

  const camelcaseBeers = beers.map(camelcaseKeys);
  return camelcaseBeers[0];
}

export async function updateBeerById(id, beer) {
  if (!/^\d+$/.test(id)) return undefined;

  const beers = await sql`
    UPDATE beers
      SET first_name = ${beer.name}
      WHERE id = ${id}
      RETURNING *;
  `;

  const camelcaseBeers = beers.map(camelcaseKeys);
  return camelcaseBeers[0];
}

export async function deleteBeerById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const beers = await sql(id)`
    DELETE FROM beers
      WHERE id = ${id}
      RETURNING *;
  `;

  return beers.map((u) => camelcaseKeys(u))[0];
}








// sql.end();

export async function getSessionByToken(token) {
  const sessions = await sql`
    SELECT * FROM sessions WHERE token = ${token};
  `;

  return sessions.map((s) => camelcaseKeys(s))[0];
}


// export const beers = [
//   { id: '1', name: '1516 Lager', size: '0.4', price: '3.7' },
//   { id: '2', name: '1516 Black and Tan', size: '0.4', price: '3.7' },
//   { id: '3', name: '1516 Radler', size: '0.4', price: '4.2' },
//   { id: '4', name: 'Victory Hop Devil IPA', size: '0.4', price: '4.8' },
//   { id: '5', name: '1516 Weisse', size: '0.4', price: '3.7' },
//   { id: '6', name: '1516 Shades of Earl Grey', size: '0.4', price: '4.8' },
//   { id: '7', name: 'Kimber Ale', size: '0.4', price: '3.7' },
//   { id: '8', name: 'Dirty Dozen West Coast IPA', size: '0.4', price: '4.8' },
//   { id: '9', name: 'Tonka Bean Vanilla Spiced Milk Stout', size: '0.4', price: '4.8' },
//   { id: '10', name: 'Slipper Pale Ale', size: '0.4', price: '3.7' }
// ];
