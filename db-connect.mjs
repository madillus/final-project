import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const sql = postgres();

const beers = await sql`
SELECT * from beers;
`;

console.log(beers);

sql.end();