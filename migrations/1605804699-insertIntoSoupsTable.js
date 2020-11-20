const soups = [
  {name: 'Savory Crepes in Beef Consomme',
  german_name: 'Rindsupperl mit Frittaten',
  description: '',
  german_description:'',
  allergens: '(A,C,G,L)',
  price: '5.90'},

  {name: 'Soup of Hearty Beef Goulash with Smoked Sausage & Bread ',
  german_name: 'Gulaschsupperl mit Debreziner & Brot',
  description: '',
  german_description:'',
  allergens: '(A,G,L,M,O)',
  price: '6.90'}

]


exports.up = async  (sql) => {
  await sql`
  INSERT INTO soups ${sql(soups,
		'name',
		'german_name',
		'description',
		'german_description',
		'allergens',
		'price'
    )}
  `;
};

exports.down = async (sql) => {
    await sql`
      DELETE FROM soups;
		`;
	};
