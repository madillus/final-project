const sides = [
  {name: 'Viennese Potato Salad',
  german_name: 'Wiener Erdäpfelsalat',
  description:'',
  german_description: '',
  allergens: '(L,M,O)',
  price: '3.10'},

  {name: 'Mixed Leaf Salad with Cherry Tomatoes and Balsamic Vinaigrette',
  german_name: 'Gemischte Blattsalate mit Cherry Tomaten und Balsamico Vinaigrette',
  description:'',
  german_description: '',
  allergens: '(M,O)',
  price: '3.90'},

  {name: 'Cabbage Salad Vegan' ,
  german_name: 'Krautsalat',
  description:'',
  german_description: '',
  allergens: '(O)',
  price: '3.10'},

  {name: 'Kimchi',
  german_name: '',
  description:'',
  german_description: '',
  allergens: '(B,F,O)',
  price: '3.10'},

  {name: 'Coleslaw ',
  german_name: '',
  description:'',
  german_description: '',
  allergens: '(C,G,O)',
  price: '3.10'},

  {name: 'Organic Corn on the Cob',
  german_name: 'Amerikanischer Bio-Zuckermaiskolben',
  description:'',
  german_description: '',
  allergens: '(G)',
  price: '4.60'},

  {name: 'Side of Rice',
  german_name: 'Reis',
  description:'',
  german_description: '',
  allergens: '( )',
  price: '2.80'},

  {name: 'Bread ' ,
  german_name: 'Brot',
  description:'',
  german_description: '',
  allergens: '(A,F,H,N,P)',
  price: '2.80'},

  {name: 'Fried Egg',
  german_name: 'Spiegelei',
  description:'',
  german_description: '',
  allergens: '(C)',
  price: '2.80'},

  {name: 'Homemade Nockerl Pasta',
  german_name: 'Hausgemachte Nockerl',
  description:'',
  german_description: '',
  allergens: '(A,C,G)',
  price: '2.80'},

  {name: 'Mayonnaise / Aioli / Blue Cheese /Cocktail',
  german_name: '',
  description:'',
  german_description: '',
  allergens: '(C,G,M,O)',
  price: '2.90'},

  {name: 'BBQ',
  german_name: '',
  description:'',
  german_description: '',
  allergens: '(O,F)',
  price: '2.90'},
]

exports.up = async  (sql) => {
  await sql`
  INSERT INTO sides ${sql(sides,
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
      DELETE FROM sides;
		`;
	};