//Static data array of objects for outputs used as a simulated JSON response 
const locationsArr = [
  {
    name: 'Cork',
    coord: [51.8986, -8.4705],
    summary: 'Cork is the second largest city in Ireland.  The city center is an island positioned between two channels of the river Lee.  Cork Harbor is one of the largest natural harbors in the world.',
    drilldown: [{
      poiName: 'National Monument',
      poiCoord: [51.8960, -8.4745],
      poiSummary: 'Early Irish Gothic national monument commemorating the rebellions, unveiled in 1906.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Crawford Gallery Cafe',
      poiCoord: [51.8998, -8.4734],
      poiSummary: 'A cafe for lunch in Cork city. Open Tuesday to Saturday from 9.00am to 4.00pm.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'FitzGerald Park',
      poiCoord: [51.8955, -8.4933],
      poiSummary: 'Popular green space with a museum, fountain, sculptures, walking paths & manicured landscaping.  Includes the Cork Public Museum and a bike hire location.',
      poiType: 'Outdoors'
    },
    {
      poiName: 'The English Market',
      poiCoord: [51.8976, -8.4743],
      poiSummary: 'Traders selling organic and locally produced food in an 18th-century covered market.',
      poiType: 'Restaurant/Pub'
    }]
  },
  {
    name: 'Galway',
    coord: [53.2841, -9.0378],
    summary: 'Galway is a city in the west of Ireland, chartered in 1484, and is the sixth largest city in the country.  The city is known for hosting many festivals, celebrations and events including the Galway Arts Festival.',
    drilldown: [{
      poiName: "The King's Head",
      poiCoord: [53.2721, -9.0532],
      poiSummary: 'Relaxed bistro and pub hung with chic modern art, serving locally-sourced dishes with a global twist.  The building it is housed in is over 800 years old, from the 13th century.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'The Spanish Arch',
      poiCoord: [53.2697, -9.0539],
      poiSummary: 'Added to the 16th-century walls in the 18th century, this archway provides access to Spanish Parade.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Browne Doorway',
      poiCoord: [53.2747, -9.0496],
      poiSummary: 'Originally located on Lower Abbeygate Street but now standing at the north end of Eyre Square, was the doorway to the townhouse of the Browne family, one of the fourteen Tribes of Galway.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Eyre Square',
      poiCoord: [53.2744, -9.0493],
      poiSummary: 'Popular square in the heart of the city featuring grassy areas, trees, sculptures & a playground.',
      poiType: 'Outdoors'
    }]
  },
  {
    name: 'Dublin',
    coord: [53.3497, -6.2602],
    summary: 'Dublin is the capital and the largest city in Ireland.  It was likely first settled by the Gaels during or before the 7th century and later by the Vikings.',
    drilldown: [{
      poiName: 'James Toner',
      poiCoord: [53.3377, -6.2524],
      poiSummary: 'Long-established, traditional pub with a dark wooden bar, picture-framed snug and popular beer yard.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Merrion Square Park',
      poiCoord: [53.3396, -6.2491],
      poiSummary: 'Leafy park with floral and heather gardens, playground and notable Oscar Wilde statue.',
      poiType: 'Outdoors'
    },
    {
      poiName: "St. Stephen's Green",
      poiCoord: [53.3379, -6.2590],
      poiSummary: "City centre park with ornamental lake, waterfall, sculptures and a children's playground.",
      poiType: 'Outdoors'
    },
    {
      poiName: 'Spire of Dublin',
      poiCoord: [53.3498, -6.2602],
      poiSummary: 'Also called the "Monument of Light", it is a large, stainless steel, pin like monument that is 120 meters (390ft) tall located in North Dublin.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Molly Malone',
      poiCoord: [53.3437, -6.2609],
      poiSummary: 'Bronze statue of a fictional fishmonger named Molly Malone, the star of a well-known Irish song.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Keohes Pub',
      poiCoord: [53.3411, -6.2594],
      poiSummary: 'Classic pub scattered with original features such as mahogany doors and wood partitioned snug areas.',
      poiType: 'Restaurant/Pub'
    }]
  },
  {
    name: 'Belfast',
    coord: [54.5964, -5.9302],
    summary: 'Belfast is the capital and largest city of Northern Ireland.  Belfast was a major port city in by the early 19th century playing an important role in the industrial revolution, and was briefly the largest linen producer in the world.',
    drilldown: [{
      poiName: 'Titanic Museum',
      poiCoord: [54.6080, -5.9100],
      poiSummary: 'Museum at the location where the Titanic was built.  Hands-on displays, including dark ride, underwater exploration theatre and re-created decks/cabins.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Belfast City Hall',
      poiCoord: [54.5964, -5.9294],
      poiSummary: 'Historic city hall and surrounding garden.  In addition to city offices, this ornate 1906 building has a cafe, public art & a Titanic garden.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'The Fountain Bar',
      poiCoord: [54.5986, -5.9314],
      poiSummary: 'Casual bar with exposed ceiling beams, banquettes and upstairs grill restaurant, plus outside space.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Botaic Gardens',
      poiCoord: [54.5806, -5.9303],
      poiSummary: 'Elaborate public garden dating to 1828, featuring tropical species & an elegant domed conservatory.',
      poiType: 'Outdoors'
    }]
  },
  {
    name: 'Killarney',
    coord: [52.0595, -9.5053],
    summary: "Killarney is a town in County Kerry in southwest Ireland. It's natural heritage, history and location on the Ring of Kerry make Killarney a popular tourist destination.",
    drilldown: [{
      poiName: 'Killarney House',
      poiCoord: [52.0556, -9.5116],
      poiSummary: 'Historic, restored house and gardens in Killarney National Park, which serves as the visitor center for Killarney National Park.',
      poiType: 'Outdoors'
    },
    {
      poiName: 'Murphy Brownes',
      poiCoord: [52.0598, -9.5093],
      poiSummary: 'A restaurant on High Street in Killarney town, that offers "the best of local home grown produce from certified suppliers in a straightforward yet eclectic menu and relaxed setting.".',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: "Murphy's Ice Cream",
      poiCoord: [52.0590, -9.5091],
      poiSummary: "Local ice cream shop offering premium ice cream.  Founded in Dingle in 2000, Murphy's uses the best local ingredients including Kerry cow milk to make their ice cream.",
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Muckross House',
      poiCoord: [52.0173, -9.5010],
      poiSummary: 'Furnished 19th-century mansion set among mountains and woodland, with shop, cafe and working farms.',
      poiType: 'Historic/Monument'
    }]
  },
  {
    name: 'Kilkenny',
    coord: [52.6510, -7.2484],
    summary: 'Kilkenny began with an early sixth-century ecclesiastical foundation within the Kingdom of Ossory. Following the Norman invasion of Ireland, Kilkenny Castle and a series of walls were built to protect the burghers of what became a Norman merchant town.',
    drilldown: [{
      poiName: 'Kilkenny Castle',
      poiCoord: [52.6502, -7.2495],
      poiSummary: 'Built in 1195 to control a fording-point of the River Nore and the junction of several routeways. It was a symbol of Norman occupation and in its original thirteenth-century condition it would have formed an important element of the defences of the town with four large circular corner towers and a massive ditch, part of which can still be seen today on the Parade.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Left Bank',
      poiCoord: [52.6504, -7.2514],
      poiSummary: 'Huge banking hall with polished Victorian-style decor, a host of bar areas and regular live bands..',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'Rothe House & Garden',
      poiCoord: [52.6542, -7.2547],
      poiSummary: 'Restored 1594 house, garden and museum with a notable timber ceiling, home to a genealogy centre.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'River Nore Linear Park',
      poiCoord: [52.6669, -7.2587],
      poiSummary: 'Riverside walk following the River Nore for 6 kilometers through Kilkenny town.',
      poiType: 'Outdoors'
    }]
  },
  {
    name: 'Donegal',
    coord: [54.6543, -8.1098],
    summary: 'A town in County Donegal which means "fort of the foreigners" in Irish.  From the 15th to 17th century it was the "capital" of Tyrconnell, a Gaelic kingdom.',
    drilldown: [{
      poiName: 'The Diamond',
      poiCoord: [54.6538, -8.1106],
      poiSummary: 'Historic center of Donegal town, a hub for music, poetic and cultural gatherings.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'Donegal Castle',
      poiCoord: [54.6550, -8.1106],
      poiSummary: 'Restored castle built during the 15th & 17th centuries, with guided tours of its furnished rooms.',
      poiType: 'Historic/Monument'
    },
    {
      poiName: 'The Forge',
      poiCoord: [54.6554, -8.1124],
      poiSummary: 'A pub in Donegal town.',
      poiType: 'Restaurant/Pub'
    },
    {
      poiName: 'The River Bank Walk',
      poiCoord: [54.6548, -8.1128],
      poiSummary: 'A walking trail along the river Eske through Donegal town.',
      poiType: 'Outdoors'
    }]
  }
];

//Array of objects providing mapping between point of interest type and it's corresponding Font Awesome icon to be displayed in results.
const fontMapper = [
  {
    poiType: "Historic/Monument",
    iconType: `<i class="fas fa-landmark"> </i>`
  },
  {
    poiType: "Restaurant/Pub",
    iconType: `<i class="fas fa-utensils"> </i>`
  },
  {
    poiType: "Outdoors",
    iconType: `<i class="fas fa-cloud-sun"> </i>`
  }
];
