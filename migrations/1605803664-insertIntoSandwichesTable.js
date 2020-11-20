const sandwiches = [
  {name: 'Toasted Rye Bread with a Spicy Turkey-Beer Spread',
  german_name: 'Getoastetes Schwarzbrot mit pikantem Truthahn-Bier-Aufstrich',
  description:'',
  german_description: '',
  allergens: '(A,C,G,M,O)',
  price: '5.90'},

  {name: 'Toasted Rye Bread with Fior di Latte Mozzarella, Tomato & Pesto',
  german_name: 'Getoastetes Schwarzbrot mit Fior di Latte Mozzarella, Paradeisern & Pesto',
  description:'',
  german_description: '',
  allergens: '(A,G,H)',
  price: '5.90'},

  {name: 'Veggie Burger with Cheese, Wedges & Aioli',
  german_name: 'Veggie Burger mit Wedges, Käse & Aioli',
  description:'',
  german_description: '',
  allergens: '(A,C,G,L,0)',
  price: '12.90'},

  {name: '1516 All the Works Smashburger: (No Doness!!) Double Beef Patty',
  german_name: '',
  description:'Double beef patty. Bun. Cheese. Secret Sauce. Onions. Tomato. Wedges',
  german_description: 'Doppel-Beef Patty. Burger Brot. Käse. Secret Sauce. Zwiebel. Paradeiser. Wedges. Keine Garstufe ',
  allergens: '(A,B,C,G,M,N,O,R)',
  price: '14.90'},

  {name: 'Louisiana Fried Chicken Burger with Bacon, Mozzarella & Fries',
  german_name: 'Louisiana Fried Chicken Burger mit Speck, Mozzarella & Pommes',
  description:'',
  german_description: '',
  allergens: '(A,C,G,M,N,O,P)',
  price: '15.20'},

  {name: 'add an extra beef patty or chicken',
  german_name: 'extra Beef Patty od. Hendl',
  description:'',
  german_description: '',
  allergens: '()',
  price: '4.50'},

]

exports.up = async  (sql) => {
  await sql`
  INSERT INTO sandwiches ${sql(sandwiches,
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
      DELETE FROM sandwiches;
		`;
	};