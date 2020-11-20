const seasonal = [
  {name: 'Asparagus Soup with Croutons & Extra Virgin Olive Oil',
  german_name: 'Spargelsupperl mit Croutons & Olivenöl ()',
  description:'',
  german_description: '',
  allergens: '(A,G,L)',
  price: '6.90'},

  {name: 'Bohemian Cabbage Soup with Smoked Sausage & Bread  ',
  german_name: 'Böhmische Krautsuppe mit Räucherwurst & Brot',
  description:'',
  german_description: '',
  allergens: '(A,G)',
  price: '6.90'},

  {name: 'Kushari: Pasta, Rice, Lentils, Chickpeas,Tomato Sauce-Reg. or Spicy Vegan',
  german_name: 'Pasta, Reis, Linsen, Kichererbsen, Paradeisersauce. Würzig od. scharf',
  description:'',
  german_description: '',
  allergens: '()',
  price: '12.90'},

  {name: 'Braised Paprika Vegetables with Bread Vegan',
  german_name: 'Gesch,ortes Paprikagemüse mit Brot ',
  description:'',
  german_description: '',
  allergens: '(A)',
  price: '11.90'},

  {name: 'Cheese Pierogi with Asparagus Sauce',
  german_name: 'Hausgemachte Brimsen Pierogi mit Spargelsauce',
  description:'',
  german_description: '',
  allergens: '(A,C,G,H)',
  price: '12.90'},

  {name: 'Spicy Red Chicken Curry. Wok Veg. Rice',
  german_name: 'Scharfes Red Hühnercurry. Wok Gemüse. Reis',
  description:'',
  german_description: '',
  allergens: '(B,C,D,H,N))',
  price: '12.90'},

  {name: '1/2 Pound of Wild Caught Black Tiger Prawns from Huelva',
  german_name: 'Halbes Pfund Wildfang-Gambas von Huelva ',
  description:'',
  german_description: '',
  allergens: '(A,B,C,M,L)',
  price: '23.90'},

  {name: 'Feta, Asparaugus, Chickpea Salad with Curry-Vinaigrette & Bread',
  german_name: 'Feta-Spargel-Kichererbsensalat mit Curry-Vinaigrette & Brot',
  description:'',
  german_description: '',
  allergens: '(A,G)',
  price: '11.90'},

  {name: 'Asaparagus in Panko Batter with Sauce Tartar & Leaf Salads',
  german_name: 'Spargel in Panko-Panade mit Sauce Tartar & Blattsalat',
  description:'',
  german_description: '',
  allergens: '(A,C,G,M,L,O)',
  price: '16.90'},

  {name: 'Woodquarter Cheese Black Pudding in Panko Batter. Cabbage Salad. Mustard',
  german_name: 'Gebackene Käseblunzn. Krautsalat. Senf',
  description:'',
  german_description: '',
  allergens: '(A,C,G,M,L,O)',
  price: '8.90'},

  {name: 'Yoghurt Marinated BBQ Chicken. Paprika Veg. Rice',
  german_name: 'Joghurt mariniertes BBQ Hendl. Paprikagemüse. Rice ',
  description:'',
  german_description: '',
  allergens: '(G,L,O)',
  price: '14.90'},

  {name: 'apx. 300g Woodquarter Entrecote. Rosemary Jus. Café de Paris Butter. Wedges',
  german_name: 'ca. 300g Waldviertler Entrecote. Rosmarin Jus. Café de Paris Butter. Wedges ',
  description:'',
  german_description: '',
  allergens: '(G)',
  price: '24.90'},

  {name: '+300g Filet of Woodquarter Black Angus Beef. CdP Butter. Jus. Wedges',
  german_name: '+300g Filet vom Waldviertler Black Angus Beef. Jus. Café de Paris Butter Wedges',
  description:'',
  german_description: '',
  allergens: '(G)',
  price: '32.90'},

]

exports.up = async  (sql) => {
  await sql`
  INSERT INTO seasonal ${sql(seasonal,
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
      DELETE FROM seasonal;
		`;
	};