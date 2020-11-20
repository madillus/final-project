const salads = [
  {name: 'Styrian Chicken Salad',
  german_name: 'Steirischer Backhendlsalat',
  description:'Chicken strips deep-fried in pumpkinseed batter, on potato salad with pumpkinseed oil',
  german_description: 'Hühnerstreifen in der Kürbiskernpanade auf Erdäpfelsalat mit Kernöldressing',
  allergens: '(A,C,G,H,L,M,O)',
  price: '12.90'},

  {name: '1516 Caesar’s Salad',
  german_name: '1516 Caesar’s Salat',
  description:'with crispy bacon, croutons, Parmesan shavings & 1516 Caesar´s Vinaigrette',
  german_description: 'mit knusprigen Speckkrusteln, Croutons, Parmesanhobeln & 1516 Caesar´s Vinaigrette',
  allergens: '(A,C,D,G,O)',
  price: '10.20'},

  {name: 'Chico Chicken Salad',
  german_name: 'Chico Hühnersalat',
  description:'Grilled chicken strips in a creamy Chico dressing with Parmesan & avocado on leaf salad',
  german_description: 'Gegrillte Hühnerstreifen in Chico Dressing mit Parmesan & Avocado auf Blattsalaten',
  allergens: '(A,G,M,O)',
  price: '12.90'},



]

exports.up = async  (sql) => {
  await sql`
  INSERT INTO salads ${sql(salads,
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
      DELETE FROM salads;
		`;
	};