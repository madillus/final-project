
const snacks = [
  {name: '1516 Beef Jerky',
  german_name: '',
  description: '',
  german_description:'',
  allergens: '(F)',
  price: '3.90'},

  {name: 'Soft Pretzel. Baumann‘s Mustard ',
  german_name: 'Laugenbrezel. Baumann’s Hausmachersenf ',
  description: '',
  german_description:'',
  allergens: '(A,G,M,N,O,P)',
  price: '3.90'},

  {name: 'Alpine Cheese with Quince Mustard',
  german_name: 'Bergkäse mit Quittensenf',
  description: '',
  german_description:'',
  allergens: '(G, O)',
  price: '6.90'},

  {name: 'Geitzenauer Cocktail Franks in Gravy with Bread',
  german_name: 'Geitzenauer Cocktail-Frankfurter mit Saft & Brot ',
  description: '',
  german_description:'',
  allergens: '(A.L,M,O)',
  price: '4.90'},

  {name: 'Potato Wedges. Dips',
  german_name: 'gebackene Erdäpfelspalten',
  description: '',
  german_description:'',
  allergens: '(C,G,M,O)',
  price: '5.90'},

  {name: 'Potato Wedges au gratin. Aioli. Cheddar  ',
  german_name: 'Erdäpfelspalten mit Aioli und Cheddar überbacken',
  description: '',
  german_description:'',
  allergens: '(C,G,M,O)',
  price: '7.90'},

  {name: 'Add BBQ Pulled Pork for a greasy heaven',
  german_name: '',
  description: '',
  german_description:'',
  allergens: '(F)',
  price: '4.50'},

  {name: '1516 Hummus, Olives. Bread  Vegan',
  german_name: '',
  description: '',
  german_description:'',
  allergens: '(A,N,L)',
  price: '10.20'},

  {name: 'Habanero Suicide Hot Wings - please pay beforehand ☺ (For survivors: tap water for free, glass of milk not included)',
  german_name: 'Hühnerflügel in hausgemachter scharfer Habanerosauce mit Blue Cheese Dip',
  description: 'Chicken wings coated in homemade Habanero hot sauce served with blue cheese dip',
  german_description:'',
  allergens: '(C,G,M,O)',
  price: '7.10'},

  {name: 'Spicy Chipotle Popcorn Chicken with Chili Dip ',
  german_name: 'Würziges Chipotle Popcorn Chicken mit Chilidip',
  description: '',
  german_description:'',
  allergens: '(A,C,G,O)',
  price: '7.20'},

]

exports.up = async  (sql) => {
  await sql`
  INSERT INTO snacks ${sql(snacks,
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
      DELETE FROM snacks;
		`;
	};
