const classics = [
  {name: '1516 Weissbier Braised “Beuscherl” Calf Innards with Dumpling',
  german_name: '1516 Weissbier Kalbsbeuscherl mit Knöderl',
  description: '',
  german_description:'',
  allergens: '(A,C,G,L,M,O)',
  price: '10.90'},

  {name: 'Wiener Schnitzel',
  german_name: 'Schweinswiener',
  description: 'Breaded pan-fried pork served with Viennese potato salad',
  german_description:'Wiener Schnitzel vom Schwein mit Erdäpfelsalat',
  allergens: '(A,C,G,L,M,O)',
  price: '12.90'},

  {name: '1516 Alpine Cheese Spaetzle',
  german_name: '1516 Käsespätzle',
  description: 'Homemade Spaetzle, melted Alpine cheese of alpine dairy, French onions, side salad',
  german_description:'Hausgemachte Spätzle, geschmolzener Bergkäse, Röstzwiebel, Salat',
  allergens: '(A,C,G,L)',
  price: '10.90'},

  {name: '1516 Brewer‘s 100% Beef Goulash',
  german_name: '1516 Brauer Rindsgulasch',
  description: 'braised with 1516 craft beer, served with homemade Spaetzle, pickle',
  german_description:'mit 1516 Bier gekocht, hausgemachte Spätzle, Essiggurkerl',
  allergens: '(A,C,G,L,M,O)',
  price: '11.60 '}

]

exports.up = async  (sql) => {
  await sql`
  INSERT INTO classics ${sql(classics,
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
      DELETE FROM classics;
		`;
	};