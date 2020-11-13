const beerMenu = [
	{
		name: '1516 Lager',
		german_name: '',
		description: 'Blond Lager / distinctively hopped',
		german_description: 'Helles Vollbier / kräftig gehopft',
		allergens: '(A)',
		price_taster: '2.10',
		price_small: '2.90',
		price_normal: '3.70',
		price_pitcher: '12.40',
	},

	{
		name: '1516 Black and Tan',
		german_name: '1516 Schnitt',
		description: 'Mix of dark and blonde beer',
		german_description: 'Dunkles and helles gemischt',
		allergens: '(A)',
		price_taster: '2.10',
		price_small: '2.90',
		price_normal: '3.70',
		price_pitcher: '12.40',
	},

	{
		name: '1516 Shandy',
		german_name: '1516 Radler',
		description: 'Lager & Lemonade',
		german_description: 'Helles & Limo',
		allergens: '(A)',
		price_taster: '2.10',
		price_small: '3.40',
		price_normal: '4.20',
		price_pitcher: '12.90',
	},

	{
		name: 'Victory Hop Devil',
		german_name: '',
		description: '(From PA to Vienna) Whole Leaf Hopped',
		german_description: 'Doldenhopfen gehopft',
		allergens: '(A)',
		price_taster: '2.10',
		price_small: '3.70',
		price_normal: '4.80',
		price_pitcher: '15.90',
	},

	{
		name: '1516 Weisse',
		german_name: '',
		description: 'Cascade hopped Wheat Ale',
		german_description: 'Weissbier mit Cascade Hopfen gehopft',
		allergens: '(A)',
		price_taster: '2.10',
		price_small: '2.90',
		price_normal: '3.70',
		price_pitcher: '12.40',
	},

	{
		name: '1516 Shades of Earl Grey. Teabagged IPA',
		german_name: '',
		description: 'India Pale Ale, spiced with Earl Grey tea, added during the boil. Don`t worry, teabagged with only Earl Grey. And nothing else',
		german_description: '',
		allergens: '(A)',
		price_taster: '2.10',
		price_small: '3.70',
		price_normal: '4.80',
		price_pitcher: '15.90',
	},

	{
		name: 'Kimber Ale',
		german_name: '',
		description: 'Amber Ale fermented with Alt yeast from Düsseldorf, Hopped with Spalter Spalt & Spalter Select',
		german_description: '',
		allergens: '(A)',
		price_taster: '2.10',
		price_small: '2.90',
		price_normal: '3.70',
		price_pitcher: '12.40',
	},

	{
		name: 'Dirty Dozen West Coast IPA',
		german_name: '',
		description: 'West Coast IPA, hopped with 12 different hops',
		german_description: '',
		allergens: '(A)',
		price_taster: '2.10',
		price_small: '3.70',
		price_normal: '4.80',
		price_pitcher: '15.90',
	},

	{
		name: 'Tonka Bean Vanilla Spices Milk Stout',
		german_name: '',
		description: 'Well, Milk Stout spiced with Tonka Beans and Vanilla',
		german_description: '',
		allergens: '(A)',
		price_taster: '2.10',
		price_small: '3.70',
		price_normal: '4.80',
		price_pitcher: '15.90',
	},

	{
		name: 'Slipper Pale Ale',
		german_name: '',
		description: 'Slipper session ale will transport you on the hoppy side of the tracks. You will love the packed punch by Citra hops hunted down with passion fruit aromas by Galaxy hops and the lemon spikes by Sorachi Ace. The malt back bone is Vienna Malt and 2-row – to keep us focused on the green cones. We kept the alcohol content at 5.2.',
		german_description: '',
		allergens: '(A)',
		price_taster: '2.10',
		price_small: '2.90',
		price_normal: '3.70',
		price_pitcher: '12.40',
	}
	]


exports.up = async  (sql) => {
  await sql`
  INSERT INTO beer_menu ${sql(beerMenu,
		'name',
		'german_name',
		'description',
		'german_description',
		'allergens',
		'price_taster',
		'price_small',
		'price_normal',
		'price_pitcher'
    )}
  `;
};

exports.down = async (sql) => {
  for (const beer in beerMenu) {
    await sql`
      DELETE FROM beer_menu WHERE
        name = ${beer.name}
		`;
	};
  }