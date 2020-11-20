import postgres from 'postgres';
import dotenv from 'dotenv';
import camelcaseKeys from 'camelcase-keys';

import extractHerokuDatabaseEnvVars from './extractHerokuDatabaseEnvVars';

extractHerokuDatabaseEnvVars();

dotenv.config();

const sql =
  process.env.NODE_ENV === 'production'
    ? // "Unless you're using a Private or Shield Heroku Postgres database, Heroku Postgres does not currently support verifiable certificates"
      // https://help.heroku.com/3DELT3RK/why-can-t-my-third-party-utility-connect-to-heroku-postgres-with-ssl
      postgres({ ssl: { rejectUnauthorized: false } })
    : postgres({
        // Avoid the error below of using too many connection slots with
        // Next.js hot reloading:
        // Error: remaining connection slots are reserved for non-replication superuser connectionsError: remaining connection slots are reserved for non-replication superuser connections
        idle_timeout: 5,
      });


export async function getBbq() {
const bbq = await sql`
SELECT * FROM bbq;
`;
return bbq.map((bbq) => {
    return {
      id: bbq.id,
      name: bbq.name,
      german_name: bbq.german_name,
      description: bbq.description,
      german_description: bbq.german_description,
      allergens: bbq.allergens,
      price: bbq.price
    };
  });
}

export async function getBbqById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const bbq = await sql`
    SELECT * FROM bbq WHERE id = ${id};
  `;

  const camelcaseBbq = bbq.map(camelcaseKeys);
  return camelcaseBbq[0];
}

export async function updateBbqById(id, bbq) {
  if (!/^\d+$/.test(id)) return undefined;

  const bbqs = await sql`
    UPDATE bbq
      SET name = ${bbq.name}
      WHERE id = ${id}
      RETURNING *;
  `;

  const camelcaseBbq = bbqs.map(camelcaseKeys);
  return camelcaseBbq[0];
}
export async function deleteBbqById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const bbq = await sql(id)`
    DELETE FROM bbq
      WHERE id = ${id}
      RETURNING *;
  `;

  return bbq.map((u) => camelcaseKeys(u))[0];
}

export async function insertBbq(bbq) {
  const requiredProperties = ['name', 'description', 'price'];
  const bbqProperties = Object.keys(bbq);

  if (bbqProperties.length !== requiredProperties.length) {
    return undefined;
  }

  const difference = bbqProperties.filter(
    (prop) => !requiredProperties.includes(prop),
  );

  if (difference.length > 0) {
    return undefined;
  }

  const bbqs = await sql(bbq)`
    INSERT INTO bbq
      ('name',
      'german_name',
      'description',
      'german_description',
      'allergens',
      'price')
    VALUES
      (${bbq.name}, ${bbq.germanName}, ${bbq.description}, ${bbq.germanDescription}, ${bbq.allergens}, ${bbq.price})
    RETURNING *;
  `;

  return bbqs.map((u) => camelcaseKeys(u))[0];
}