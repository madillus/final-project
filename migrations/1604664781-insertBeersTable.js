const beers = [
	{ name: '1516 Lager',
		description: 'Blond Lager / distinctively hopped Helles Vollbier / kräftig gehopft',
		slug: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80' },

	{ name: '1516 Black and Tan',
		description: 'Mix of dark and blond beer Dunkles und helles Bier gemischt',
		slug: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },

	{ name: '1516 Radler',
		description:'Lager & Lemonade | Helles & Limo',
		slug: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },

	{ name: 'Victory Hop Devil IPA',
	description: '(from PA to Vienna) Whole Leaf hopped Doldenhopfen gehopft' },

	{ name: '1516 Weisse',
	description: 'Cascade hopped Wheat Ale Weissbier mit Cascade Hopfen gehopft',
	slug: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },

	{ name: '1516 Shades of Earl Grey',
	description: 'Cascade hopped Wheat Ale Weissbier mit Cascade Hopfen gehopft',
	slug: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'   },

	{ name: 'Kimber Ale',
	description: 'Amber Ale fermented with Alt yeast from Düsseldorf,hopped with Spalter Spalt & Spalter Select',
	slug: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'   },

	{ name: 'Dirty Dozen West Coast IPA',
	description: 'hi',
	slug: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'  },

	{ name: 'Tonka Bean Vanilla Spiced Milk Stout',
	description: 'hi',
	slug: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'  },

	{ name: 'Slipper Pale Ale',
	description: 'Slipper session ale will transport you on the hoppy sideof the tracks. You will love the packed punch by Citrahops hunted down with passion fruit aromas by Galaxy hops and the lemon spikes by Sorachi Ace. The malt back bone is Vienna Malt and 2-row – to keep us focused on the green cones.',
	slug: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'  }
];



exports.up = async  (sql) => {
  await sql`
  INSERT INTO beers ${sql(beers,
		'name',
		'description',
		'slug',
    )}
  `;
};

exports.down = async (sql) => {
  for (const beer in beers) {
    await sql`
      DELETE FROM beers WHERE
        name = ${beer.name}
		`;
	};
  }