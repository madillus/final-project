exports.up = async function (sql) {
  await sql`
  CREATE TABLE user_roles (
  id SERIAL PRIMARY KEY,
  user_role VARCHAR(10)
);
  `;
};

exports.down = async function (sql) {
  await sql`
    DROP TABLE IF EXISTS user_roles;
  `;
};