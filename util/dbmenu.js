import postgres from 'postgres';
import dotenv from 'dotenv';
import camelcaseKeys from 'camelcase-keys';
import extractHerokuDatabaseEnvVars from './extractHerokuDatabaseEnvVars';

extractHerokuDatabaseEnvVars();
dotenv.config();

const sql =
  process.env.NODE_ENV === 'production'
    ? postgres({ ssl: { rejectUnauthorized: false } })
    : postgres({
        idle_timeout: 5,
      });

//-----------------------------Beers-----------------

export async function getBeers() {
  const beers = await sql`
  SELECT * FROM beers;
  `;
  return beers.map((beer) => {
    return {
      id: beer.id,
      name: beer.name,
      description: beer.description,
      slug: beer.slug,
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

  const beers = await sql`
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

//--------------------------------------BBQ-----------------------------------------

export async function getBbq() {
  const bbq = await sql`
SELECT * FROM bbq;
`;
  return bbq.map(camelcaseKeys);
}
// return {
//   id: bbq.id,
//   name: bbq.name,
//   german_name: bbq.german_name,
//   description: bbq.description,
//   german_description: bbq.german_description,
//   allergens: bbq.allergens,
//   price: bbq.price
// };
// });

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
      SET name = ${bbq.name},
      german_name = ${bbq.germanName},
      description = ${bbq.description},
      german_description = ${bbq.germanDescription},
      allergens = ${bbq.allergens},
      price = ${bbq.price}
      WHERE id = ${id}
      RETURNING *;
  `;

  return bbqs.map((u) => camelcaseKeys(u))[0];
}
export async function deleteBbqById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const bbq = await sql`
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

  const bbqs = await sql`
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

//--------------------------------------Seasonal-----------------------------------------

export async function getSeasonal() {
  const seasonal = await sql`
  SELECT * FROM seasonal;
  `;
  return seasonal.map(camelcaseKeys);
}
export async function getSeasonalById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const seasonal = await sql`
      SELECT * FROM seasonal WHERE id = ${id};
    `;

  const camelcaseseasonal = seasonal.map(camelcaseKeys);
  return camelcaseseasonal[0];
}

export async function updateSeasonalById(id, seasonal) {
  if (!/^\d+$/.test(id)) return undefined;

  const seasonals = await sql`
      UPDATE seasonal
      SET name = ${seasonal.name},
      german_name = ${seasonal.germanName},
      description = ${seasonal.description},
      german_description = ${seasonal.germanDescription},
      allergens = ${seasonal.allergens},
      price = ${seasonal.price}
      WHERE id = ${id}
      RETURNING *;
  `;

  return seasonals.map((u) => camelcaseKeys(u))[0];
}
export async function deleteSeasonalById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const seasonal = await sql`
      DELETE FROM seasonal
        WHERE id = ${id}
        RETURNING *;
    `;

  return seasonal.map((u) => camelcaseKeys(u))[0];
}

export async function insertSeasonal(seasonal) {
  const requiredProperties = ['name', 'description', 'price'];
  const seasonalProperties = Object.keys(seasonal);

  if (seasonalProperties.length !== requiredProperties.length) {
    return undefined;
  }

  const difference = seasonalProperties.filter(
    (prop) => !requiredProperties.includes(prop),
  );

  if (difference.length > 0) {
    return undefined;
  }

  const seasonals = await sql`
      INSERT INTO seasonal
        ('name',
        'german_name',
        'description',
        'german_description',
        'allergens',
        'price')
      VALUES
        (${seasonal.name}, ${seasonal.germanName}, ${seasonal.description}, ${seasonal.germanDescription}, ${seasonal.allergens}, ${seasonal.price})
      RETURNING *;
    `;

  return seasonals.map((u) => camelcaseKeys(u))[0];
}

//--------------------------------------Classics-----------------------------------------

export async function getClassics() {
  const classics = await sql`
    SELECT * FROM classics;
    `;
  return classics.map(camelcaseKeys);
}
export async function getClassicsById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const classics = await sql`
        SELECT * FROM classics WHERE id = ${id};
      `;

  const camelcaseclassics = classics.map(camelcaseKeys);
  return camelcaseclassics[0];
}

export async function updateClassicsById(id, classics) {
  if (!/^\d+$/.test(id)) return undefined;

  const classic = await sql`
      UPDATE classics
      SET name = ${classics.name},
      german_name = ${classics.germanName},
      description = ${classics.description},
      german_description = ${classics.germanDescription},
      allergens = ${classics.allergens},
      price = ${classics.price}
      WHERE id = ${id}
      RETURNING *;
  `;

  return classic.map((u) => camelcaseKeys(u))[0];
}
export async function deleteClassicsById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const classics = await sql`
        DELETE FROM classics
          WHERE id = ${id}
          RETURNING *;
      `;

  return classics.map((u) => camelcaseKeys(u))[0];
}

export async function insertClassics(classics) {
  const requiredProperties = ['name', 'description', 'price'];
  const classicsProperties = Object.keys(classics);

  if (classicsProperties.length !== requiredProperties.length) {
    return undefined;
  }

  const difference = classicsProperties.filter(
    (prop) => !requiredProperties.includes(prop),
  );

  if (difference.length > 0) {
    return undefined;
  }

  const classic = await sql`
        INSERT INTO classics
          ('name',
          'german_name',
          'description',
          'german_description',
          'allergens',
          'price')
        VALUES
          (${classics.name}, ${classics.germanName}, ${classics.description}, ${classics.germanDescription}, ${classics.allergens}, ${classics.price})
        RETURNING *;
      `;

  return classic.map((u) => camelcaseKeys(u))[0];
}

//--------------------------------------Sandwiches-----------------------------------------

export async function getSandwiches() {
  const sandwiches = await sql`
      SELECT * FROM sandwiches;
      `;
  return sandwiches.map(camelcaseKeys);
}
export async function getSandwichesById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const sandwiches = await sql`
          SELECT * FROM sandwiches WHERE id = ${id};
        `;

  const camelcasesandwiches = sandwiches.map(camelcaseKeys);
  return camelcasesandwiches[0];
}

export async function updateSandwichesById(id, sandwiches) {
  if (!/^\d+$/.test(id)) return undefined;

  const sandwich = await sql`
      UPDATE sandwichs
      SET name = ${sandwichs.name},
      german_name = ${sandwichs.germanName},
      description = ${sandwichs.description},
      german_description = ${sandwichs.germanDescription},
      allergens = ${sandwichs.allergens},
      price = ${sandwichs.price}
      WHERE id = ${id}
      RETURNING *;
  `;

  return sandwich.map((u) => camelcaseKeys(u))[0];
}
export async function deleteSandwichesById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const sandwiches = await sql`
          DELETE FROM sandwiches
            WHERE id = ${id}
            RETURNING *;
        `;

  return sandwiches.map((u) => camelcaseKeys(u))[0];
}

export async function insertSandwiches(sandwiches) {
  const requiredProperties = ['name', 'description', 'price'];
  const sandwichesProperties = Object.keys(sandwiches);

  if (sandwichesProperties.length !== requiredProperties.length) {
    return undefined;
  }

  const difference = sandwichesProperties.filter(
    (prop) => !requiredProperties.includes(prop),
  );

  if (difference.length > 0) {
    return undefined;
  }

  const sandwich = await sql`
          INSERT INTO sandwiches
            ('name',
            'german_name',
            'description',
            'german_description',
            'allergens',
            'price')
          VALUES
            (${sandwiches.name}, ${sandwiches.germanName}, ${sandwiches.description}, ${sandwiches.germanDescription}, ${sandwiches.allergens}, ${sandwiches.price})
          RETURNING *;
        `;

  return sandwich.map((u) => camelcaseKeys(u))[0];
}

//--------------------------------------Salads-----------------------------------------

export async function getSalads() {
  const salads = await sql`
        SELECT * FROM salads;
        `;
  return salads.map(camelcaseKeys);
}
export async function getSaladsById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const salads = await sql`
            SELECT * FROM salads WHERE id = ${id};
          `;

  const camelcasesalads = salads.map(camelcaseKeys);
  return camelcasesalads[0];
}

export async function updateSaladsById(id, salads) {
  if (!/^\d+$/.test(id)) return undefined;

  const salad = await sql`
          UPDATE salads
          SET name = ${salads.name},
          german_name = ${salads.germanName},
          description = ${salads.description},
          german_description = ${salads.germanDescription},
          allergens = ${salads.allergens},
          price = ${salads.price}
          WHERE id = ${id}
          RETURNING *;
      `;

  return salad.map((u) => camelcaseKeys(u))[0];
}
export async function deleteSaladsById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const salads = await sql`
            DELETE FROM salads
              WHERE id = ${id}
              RETURNING *;
          `;

  return salads.map((u) => camelcaseKeys(u))[0];
}

export async function insertSalads(salads) {
  const requiredProperties = ['name', 'description', 'price'];
  const saladsProperties = Object.keys(salads);

  if (saladsProperties.length !== requiredProperties.length) {
    return undefined;
  }

  const difference = saladsProperties.filter(
    (prop) => !requiredProperties.includes(prop),
  );

  if (difference.length > 0) {
    return undefined;
  }

  const salad = await sql`
            INSERT INTO salads
              ('name',
              'german_name',
              'description',
              'german_description',
              'allergens',
              'price')
            VALUES
              (${salads.name}, ${salads.germanName}, ${salads.description}, ${salads.germanDescription}, ${salads.allergens}, ${salads.price})
            RETURNING *;
          `;

  return salad.map((u) => camelcaseKeys(u))[0];
}

//--------------------------------------Sausages-----------------------------------------

export async function getSausages() {
  const sausages = await sql`
          SELECT * FROM sausages;
          `;
  return sausages.map(camelcaseKeys);
}
export async function getSausagesById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const sausages = await sql`
              SELECT * FROM sausages WHERE id = ${id};
            `;

  const camelcasesausages = sausages.map(camelcaseKeys);
  return camelcasesausages[0];
}

export async function updateSausagesById(id, sausages) {
  if (!/^\d+$/.test(id)) return undefined;

  const sausage = await sql`
                UPDATE sausages
                SET name = ${sausages.name},
                german_name = ${sausages.germanName},
                description = ${sausages.description},
                german_description = ${sausages.germanDescription},
                allergens = ${sausages.allergens},
                price = ${sausages.price}
                WHERE id = ${id}
                RETURNING *;
  `;

  return sausage.map((u) => camelcaseKeys(u))[0];
}
export async function deleteSausagesById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const sausages = await sql`
              DELETE FROM sausages
                WHERE id = ${id}
                RETURNING *;
            `;

  return sausages.map((u) => camelcaseKeys(u))[0];
}

export async function insertSausages(sausages) {
  const requiredProperties = ['name', 'description', 'price'];
  const sausagesProperties = Object.keys(sausages);

  if (sausagesProperties.length !== requiredProperties.length) {
    return undefined;
  }

  const difference = sausagesProperties.filter(
    (prop) => !requiredProperties.includes(prop),
  );

  if (difference.length > 0) {
    return undefined;
  }

  const sausage = await sql`
              INSERT INTO sausages
                ('name',
                'german_name',
                'description',
                'german_description',
                'allergens',
                'price')
              VALUES
                (${sausages.name}, ${sausages.germanName}, ${sausages.description}, ${sausages.germanDescription}, ${sausages.allergens}, ${sausages.price})
              RETURNING *;
            `;

  return sausage.map((u) => camelcaseKeys(u))[0];
}

//--------------------------------------Soups-----------------------------------------

export async function getSoups() {
  const soups = await sql`
            SELECT * FROM soups;
            `;
  return soups.map(camelcaseKeys);
}
export async function getSoupsById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const soups = await sql`
                SELECT * FROM soups WHERE id = ${id};
              `;

  const camelcasesoups = soups.map(camelcaseKeys);
  return camelcasesoups[0];
}

export async function updateSoupsById(id, soups) {
  if (!/^\d+$/.test(id)) return undefined;

  const soup = await sql`
      UPDATE soups
      SET name = ${soups.name},
      german_name = ${soups.germanName},
      description = ${soups.description},
      german_description = ${soups.germanDescription},
      allergens = ${soups.allergens},
      price = ${soups.price}
      WHERE id = ${id}
      RETURNING *;
  `;

  return soup.map((u) => camelcaseKeys(u))[0];
}
export async function deleteSoupsById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const soups = await sql`
                DELETE FROM soups
                  WHERE id = ${id}
                  RETURNING *;
              `;

  return soups.map((u) => camelcaseKeys(u))[0];
}

export async function insertSoups(soups) {
  const requiredProperties = ['name', 'description', 'price'];
  const soupsProperties = Object.keys(soups);

  if (soupsProperties.length !== requiredProperties.length) {
    return undefined;
  }

  const difference = soupsProperties.filter(
    (prop) => !requiredProperties.includes(prop),
  );

  if (difference.length > 0) {
    return undefined;
  }

  const soup = await sql`
                INSERT INTO soups
                  ('name',
                  'german_name',
                  'description',
                  'german_description',
                  'allergens',
                  'price')
                VALUES
                  (${soups.name}, ${soups.germanName}, ${soups.description}, ${soups.germanDescription}, ${soups.allergens}, ${soups.price})
                RETURNING *;
              `;

  return soup.map((u) => camelcaseKeys(u))[0];
}

//--------------------------------------Snacks-----------------------------------------

export async function getSnacks() {
  const snacks = await sql`
              SELECT * FROM snacks;
              `;
  return snacks.map(camelcaseKeys);
}
export async function getSnacksById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const snacks = await sql`
                  SELECT * FROM snacks WHERE id = ${id};
                `;

  const camelcasesnacks = snacks.map(camelcaseKeys);
  return camelcasesnacks[0];
}

export async function updateSnacksById(id, snacks) {
  if (!/^\d+$/.test(id)) return undefined;

  const snack = await sql`
      UPDATE snacks
      SET name = ${snacks.name},
      german_name = ${snacks.germanName},
      description = ${snacks.description},
      german_description = ${snacks.germanDescription},
      allergens = ${snacks.allergens},
      price = ${snacks.price}
      WHERE id = ${id}
      RETURNING *;
  `;

  return snack.map((u) => camelcaseKeys(u))[0];
}
export async function deleteSnacksById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const snacks = await sql`
                  DELETE FROM snacks
                    WHERE id = ${id}
                    RETURNING *;
                `;

  return snacks.map((u) => camelcaseKeys(u))[0];
}

export async function insertSnacks(snacks) {
  const requiredProperties = ['name', 'description', 'price'];
  const snacksProperties = Object.keys(snacks);

  if (snacksProperties.length !== requiredProperties.length) {
    return undefined;
  }

  const difference = snacksProperties.filter(
    (prop) => !requiredProperties.includes(prop),
  );

  if (difference.length > 0) {
    return undefined;
  }

  const snack = await sql`
                  INSERT INTO snacks
                    ('name',
                    'german_name',
                    'description',
                    'german_description',
                    'allergens',
                    'price')
                  VALUES
                    (${snacks.name}, ${snacks.germanName}, ${snacks.description}, ${snacks.germanDescription}, ${snacks.allergens}, ${snacks.price})
                  RETURNING *;
                `;

  return snack.map((u) => camelcaseKeys(u))[0];
}

//--------------------------------------Sides-----------------------------------------

export async function getSides() {
  const sides = await sql`
                SELECT * FROM sides;
                `;
  return sides.map(camelcaseKeys);
}
export async function getSidesById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const sides = await sql`
                    SELECT * FROM sides WHERE id = ${id};
                  `;

  const camelcasesides = sides.map(camelcaseKeys);
  return camelcasesides[0];
}

export async function updateSidesById(id, sides) {
  if (!/^\d+$/.test(id)) return undefined;

  const side = await sql`
      UPDATE sides
      SET name = ${sides.name},
      german_name = ${sides.germanName},
      description = ${sides.description},
      german_description = ${sides.germanDescription},
      allergens = ${sides.allergens},
      price = ${sides.price}
      WHERE id = ${id}
      RETURNING *;
  `;

  return side.map((u) => camelcaseKeys(u))[0];
}
export async function deleteSidesById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const sides = await sql`
                    DELETE FROM sides
                      WHERE id = ${id}
                      RETURNING *;
                  `;

  return sides.map((u) => camelcaseKeys(u))[0];
}

export async function insertSides(sides) {
  const requiredProperties = ['name', 'description', 'price'];
  const sidesProperties = Object.keys(sides);

  if (sidesProperties.length !== requiredProperties.length) {
    return undefined;
  }

  const difference = sidesProperties.filter(
    (prop) => !requiredProperties.includes(prop),
  );

  if (difference.length > 0) {
    return undefined;
  }

  const side = await sql`
                    INSERT INTO sides
                      ('name',
                      'german_name',
                      'description',
                      'german_description',
                      'allergens',
                      'price')
                    VALUES
                      (${sides.name}, ${sides.germanName}, ${sides.description}, ${sides.germanDescription}, ${sides.allergens}, ${sides.price})
                    RETURNING *;
                  `;

  return side.map((u) => camelcaseKeys(u))[0];
}

//--------------------------------------Desserts-----------------------------------------

export async function getDesserts() {
  const desserts = await sql`
                  SELECT * FROM desserts;
                  `;
  return desserts.map(camelcaseKeys);
}
export async function getDessertsById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const desserts = await sql`
                      SELECT * FROM desserts WHERE id = ${id};
                    `;

  const camelcasedesserts = desserts.map(camelcaseKeys);
  return camelcasedesserts[0];
}

export async function updateDessertsById(id, desserts) {
  if (!/^\d+$/.test(id)) return undefined;

  const dessert = await sql`
      UPDATE desserts
      SET name = ${desserts.name},
      german_name = ${desserts.germanName},
      description = ${desserts.description},
      german_description = ${desserts.germanDescription},
      allergens = ${desserts.allergens},
      price = ${desserts.price}
      WHERE id = ${id}
      RETURNING *;
  `;

  return dessert.map((u) => camelcaseKeys(u))[0];
}
export async function deleteDessertsById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const desserts = await sql`
                      DELETE FROM desserts
                        WHERE id = ${id}
                        RETURNING *;
                    `;

  return desserts.map((u) => camelcaseKeys(u))[0];
}

export async function insertDesserts(desserts) {
  const requiredProperties = ['name', 'description', 'price'];
  const dessertsProperties = Object.keys(desserts);

  if (dessertsProperties.length !== requiredProperties.length) {
    return undefined;
  }

  const difference = dessertsProperties.filter(
    (prop) => !requiredProperties.includes(prop),
  );

  if (difference.length > 0) {
    return undefined;
  }

  const dessert = await sql`
                      INSERT INTO desserts
                        ('name',
                        'german_name',
                        'description',
                        'german_description',
                        'allergens',
                        'price')
                      VALUES
                        (${desserts.name}, ${desserts.germanName}, ${desserts.description}, ${desserts.germanDescription}, ${desserts.allergens}, ${desserts.price})
                      RETURNING *;
                    `;

  return dessert.map((u) => camelcaseKeys(u))[0];
}
