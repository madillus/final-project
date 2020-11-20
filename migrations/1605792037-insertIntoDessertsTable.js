const desserts = [
  {name: 'Chocolate Lava Cake Tonka IceCream',
  german_name: 'Schoko-Lava- Cake. Tonka-Eis',
  description: '',
  german_description:'',
  allergens: '(A,C,G,O)',
  price: '8.00'},

  {name: 'Hungarian Sponge Cake, Creamy Vanilla, Chocolate Sauce,  Walnut Ice Cream ',
  german_name: 'Somlauer Nockerl, Vanillecreme, Schokosauce, Walnusseis ',
  description: '',
  german_description:'',
  allergens: '(A,C,G,H)',
  price: '6.00'},

  {name: 'Brownie with Berry Mix & Homemade Chocolate Ice Cream',
  german_name: 'Brownie mit Beerenröster & hausgemachtem Schokoeis',
  description: '',
  german_description:'',
  allergens: '(A,C,F,G,H)',
  price: '9.00'},

  {name: 'Old Viennese Apple Strudel with Creamy Cinnamon ',
  german_name: 'Alt-Wiener Apfelstrudel mit Zimtrahm ',
  description: '',
  german_description:'',
  allergens: '(A,C,G,E.H)',
  price: '6.00 '}

]

exports.up = async  (sql) => {
  await sql`
  INSERT INTO desserts ${sql(desserts,
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
      DELETE FROM desserts;
		`;
	};