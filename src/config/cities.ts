/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'port-angeles',
    name: 'Port Angeles',
    state: 'WA',
    intro:
      'Port Angeles is the seat of Clallam County and the biggest town on the north Olympic Peninsula, strung along the Strait of Juan de Fuca under the shadow of the Olympics with Ediz Hook curling out to shelter the harbor. It is the gateway to Hurricane Ridge and the Elwha, the ferry port to Victoria, and the hub the whole west end of the peninsula drives into. Inside the city most homes are on sewer, but push out to the surrounding county — up the Elwha and Little River valleys, out toward Deer Park and Gales Addition, and along the bluffs east and west of town — and nearly everything runs on its own septic tank and drain field. We pump, clean, repair, and inspect residential systems throughout the Port Angeles area. The pattern here is bluff and valley: homes on the marine bluffs over the Strait where shoreline setbacks and high groundwater shape the system, and properties up the river valleys on glacial till that drains slowly. Many are older homes and long-held family land with undersized tanks and no service records, and the steady real-estate turnover keeps inspections in demand. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Elwha Valley', 'Deer Park', 'Gales Addition', 'Little River', 'Mount Angeles', 'Dry Creek'],
    landmarks: ['Ediz Hook', 'Hurricane Ridge', 'Elwha River', 'Strait of Juan de Fuca'],
    issues: [
      {
        title: 'Marine-bluff lots and shoreline rules',
        body: 'Homes on the bluffs over the Strait of Juan de Fuca sit near marine water, where county setbacks and high groundwater shape what a septic system can do and where a drain field can go. Those systems are more sensitive to overload and are watched more closely, so keeping the tank pumped and the field protected matters more here than on an inland lot.',
      },
      {
        title: 'Slow glacial till up the valleys',
        body: 'Out the Elwha and Little River valleys and around Deer Park, a lot of ground is dense glacial till that drains slowly, which is hard on a gravity drain field — especially through our long wet season. Pumping on schedule so solids never reach the field is the best protection for a field working in tight soil.',
      },
      {
        title: 'Older homes with no service records',
        body: 'Much of the county land around Port Angeles is long-held family property with septic tanks decades old and often undersized, many with no record of the last service. Regular pumping and an honest look at the tank and baffles keep these older systems from washing solids into the drain field.',
      },
    ],
    nearby: ['sequim', 'port-townsend', 'forks'],
    faqs: [
      {
        q: 'Do you cover Port Angeles and the surrounding Clallam County areas?',
        a: 'Yes. We cover Port Angeles and the surrounding communities — the Elwha and Little River valleys, Deer Park, Gales Addition, Dry Creek, and the bluffs east and west of town. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'My home is on a bluff over the Strait — does that affect my septic?',
        a: 'It can. Shoreline lots sit near marine water and often over higher groundwater, which affects where a drain field can go and how sensitive it is to overload, and county rules watch these systems more closely. Pumping on schedule and keeping runoff off the field is the best way to protect it.',
      },
      {
        q: 'There are no records for my older Port Angeles home’s septic — can you find the tank?',
        a: 'Yes. Unmarked, buried tanks are the norm on these older properties. We locate the tank from the plumbing, the layout, and probing, dig down to the lid, and can map the spot so the next service is quick.',
      },
    ],
  },
  {
    slug: 'sequim',
    name: 'Sequim',
    state: 'WA',
    intro:
      'Sequim sits in the rain shadow of the Olympics on the Dungeness Valley, and that one fact — the "Blue Hole" of dry weather that makes it the sunniest spot on the coast — shapes the whole town. It draws retirees, lavender farms, and the crowds who come for the Dungeness Spit and the irrigation-ditch history, and it has grown fast. Inside the city core there is sewer, but the valley floor, the Dungeness and Carlsborg areas, the bluffs above the bay, and the foothills toward Blyn and Gardiner are almost all on septic. We pump, clean, repair, and inspect residential systems throughout the Sequim area. The pattern here is its own: a wave of newer homes on lots subdivided from old farm ground, a large population of retirees on fixed budgets who want honest work and no upsell, and waterfront and bluff lots along Sequim Bay and Dungeness where shoreline rules apply. The rain shadow keeps fields drier than the rest of the peninsula, but the valley’s farm soils and high water table near the river still stress a system, and the busy resale market keeps inspections in steady demand. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Dungeness', 'Carlsborg', 'Blyn', 'Gardiner', 'Happy Valley', 'Sunland'],
    landmarks: ['Dungeness Spit', 'Sequim Bay', 'Dungeness River', 'lavender farms'],
    issues: [
      {
        title: 'New homes on old farm ground',
        body: 'A lot of Sequim’s growth is newer homes on lots carved from old Dungeness Valley farm land, where the drain field had to fit whatever soil and grade the lot offered. Knowing exactly where the tank and field are, and pumping on schedule, protects a field that may be working in heavy valley soil.',
      },
      {
        title: 'Retiree households and honest service',
        body: 'Sequim has one of the highest retiree populations on the coast, and a lot of our calls are from owners on a fixed budget who have been oversold before. We tell you what your system actually needs — if the tank has another year in it, we say so — and quote it up front, no scare tactics.',
      },
      {
        title: 'Bay and river lots with shoreline setbacks',
        body: 'Homes along Sequim Bay and near the Dungeness River sit close to water, where higher groundwater and county setbacks shape the system and make a drain field more sensitive to overload. Keeping the tank pumped and runoff diverted off the field is especially important on these lots.',
      },
    ],
    nearby: ['port-angeles', 'port-townsend', 'forks'],
    faqs: [
      {
        q: 'Do you serve Sequim and the Dungeness Valley?',
        a: 'Yes. We cover Sequim and the surrounding communities — Dungeness, Carlsborg, Blyn, Gardiner, Happy Valley, and Sunland. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'I’m a retiree on a fixed budget — will you tell me straight what I actually need?',
        a: 'That is exactly how we work. We show you what we find with the lid off and quote it up front. If your tank only needs a routine pump, that is all we will recommend — no upsells and no scare tactics.',
      },
      {
        q: 'The rain shadow keeps Sequim dry — does my drain field still need attention?',
        a: 'Yes. The drier weather helps a field, but the valley’s farm soils and the higher water table near the Dungeness still stress a system, and a tank that is not pumped will clog a field regardless of rainfall. A pump every few years is still the best protection.',
      },
    ],
  },
  {
    slug: 'port-townsend',
    name: 'Port Townsend',
    state: 'WA',
    intro:
      'Port Townsend is the seat of Jefferson County, a Victorian seaport out at the tip of the Quimper Peninsula where Admiralty Inlet meets the Strait, famous for its preserved 1890s downtown, the wooden-boat scene, and Fort Worden above town. The historic core is on sewer, but the rest of the Quimper Peninsula — Cape George, Kala Point, the bluffs toward Chimacum and Hadlock, and the beach communities out toward Marrowstone and Discovery Bay — runs on septic. We pump, clean, repair, and inspect residential systems throughout the Port Townsend area. The pattern here is old town and water on three sides: some of the oldest septic systems on the peninsula under historic homes, waterfront and bluff lots where marine setbacks and high groundwater govern the drain field, and a design-conscious community that keeps a lot of properties turning over and being inspected at sale. Many older systems predate any records and were never sized for today’s households, and the salt air, high water table, and long wet season are hard on tanks and fields alike. We know the Quimper Peninsula and how its shoreline lots and old systems behave. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Cape George', 'Kala Point', 'Hadlock', 'Chimacum', 'Marrowstone', 'Discovery Bay'],
    landmarks: ['Fort Worden', 'Point Wilson', 'Admiralty Inlet', 'historic downtown'],
    issues: [
      {
        title: 'Very old systems under historic homes',
        body: 'Port Townsend has some of the oldest housing stock on the peninsula, and the septic systems under those homes can be just as old — undersized, decades past any record, and never built for a modern household. Regular pumping and an honest look at the tank keep an aging system from washing solids into the field.',
      },
      {
        title: 'Waterfront and bluff lots on three sides',
        body: 'The Quimper Peninsula is nearly surrounded by water, so many homes at Cape George, Kala Point, and out toward Marrowstone sit on waterfront or bluff lots where marine setbacks and high groundwater govern where a drain field can go and how sensitive it is. These systems are watched closely and need the tank kept pumped and the field protected.',
      },
      {
        title: 'Steady resale and inspections at sale',
        body: 'Port Townsend’s housing market turns over steadily, and Washington requires a septic inspection at the time of sale. Buyers and sellers here need a real inspection — tank, components, and drain field — and an honest written summary, not a quick look, so the septic does not derail the deal.',
      },
    ],
    nearby: ['sequim', 'port-angeles', 'poulsbo'],
    faqs: [
      {
        q: 'Do you cover Port Townsend and the Quimper Peninsula?',
        a: 'Yes. We cover Port Townsend and the surrounding Jefferson County communities — Cape George, Kala Point, Hadlock, Chimacum, Marrowstone, and out toward Discovery Bay. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'I’m selling my Port Townsend home — do I need a septic inspection?',
        a: 'In Washington a septic inspection is generally required at the time of sale, so yes. We inspect the tank, components, and drain field and give you a clear written summary — real proof to hand a buyer and a way to catch anything before it holds up the closing.',
      },
      {
        q: 'My home is old — how do I know how old the septic is?',
        a: 'Often there are no records, which is common on the historic homes here. We locate and open the tank, check its condition and the baffles, and can tell you a lot about the system’s age and type once we see it — then give you an honest read on how much life it has left.',
      },
    ],
  },
  {
    slug: 'forks',
    name: 'Forks',
    state: 'WA',
    intro:
      'Forks sits out on the West End of Clallam County between the Sol Duc, Calawah, and Bogachiel rivers, a timber town on the road to the Hoh Rain Forest and the wild Pacific beaches at La Push and Rialto. It is one of the rainiest inhabited places in the lower 48 — well over a hundred inches a year — and that single fact drives our septic work here more than anything else. Almost nothing out here is on sewer; the homes in town, the river properties, the logging land, and the places strung out toward La Push and the Hoh all run on their own septic. We pump, clean, repair, and inspect residential systems throughout the Forks area. The pattern here is water, water, and more water: drain fields that never fully dry out, high water tables in the river bottoms, and saturated ground that leaves a field little dry soil to work with for much of the year. Many are older working-family homes and river cabins with undersized tanks and no records, and the remoteness means owners want a crew that will actually make the drive. We know the West End and how its rain and river soils punish a septic system. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['La Push', 'Beaver', 'Sappho', 'Bogachiel', 'Hoh', 'Sol Duc'],
    landmarks: ['Hoh Rain Forest', 'Rialto Beach', 'Sol Duc River', 'Bogachiel River'],
    issues: [
      {
        title: 'The rainiest fields on the peninsula',
        body: 'Forks gets well over a hundred inches of rain a year, and a drain field that never dries out has little capacity left to absorb effluent for much of the winter. Keeping the tank pumped so solids never reach the field, and diverting every bit of roof and surface runoff away from it, is critical where the ground stays saturated for months.',
      },
      {
        title: 'River-bottom lots and high water tables',
        body: 'Homes along the Sol Duc, Calawah, and Bogachiel sit on low ground where the water table runs high, leaving a drain field less dry soil to work with. Those fields are sensitive to overload, so pumping on schedule and keeping extra water off the field matters even more here than elsewhere.',
      },
      {
        title: 'Remote properties that need a crew that shows up',
        body: 'The West End is a long way out, and a lot of companies will not make the drive to Beaver, Sappho, La Push, or the Hoh. We cover it. Tell us about the road and where the tank is and we come prepared with the hose length and equipment to service a remote property in one trip.',
      },
    ],
    nearby: ['port-angeles', 'sequim', 'port-townsend'],
    faqs: [
      {
        q: 'Do you really drive out to Forks and the West End?',
        a: 'Yes. We cover Forks and the surrounding West End communities — La Push, Beaver, Sappho, Bogachiel, the Hoh, and the Sol Duc. Tell us where the property is and about the access road and we will come prepared to service it in one trip.',
      },
      {
        q: 'It rains constantly here — does that hurt my septic system?',
        a: 'It can. Months of heavy rain keep a drain field saturated, which leaves it little capacity to absorb effluent and makes it more likely to back up or surface. Pumping the tank on schedule and keeping roof and surface runoff off the field are the best protection in a place this wet.',
      },
      {
        q: 'My drains are slow and the yard is soggy every winter — is that the septic?',
        a: 'It often is out here. When the ground is already saturated, a field that is full or aging struggles to absorb any more water and that shows up as slow drains and soggy spots. We check whether it is a full tank, a line, or the field itself and tell you straight what it needs.',
      },
    ],
  },
  {
    slug: 'poulsbo',
    name: 'Poulsbo',
    state: 'WA',
    intro:
      'Poulsbo sits at the head of Liberty Bay on the Kitsap Peninsula, "Little Norway" with its Scandinavian downtown, and it has grown from a fishing village into a commuter and retirement town within reach of the Bainbridge and Kingston ferries. The compact downtown is on sewer, but the surrounding North Kitsap countryside — the shores of Liberty Bay and Hood Canal, the woods toward Lofall and Big Valley, and out toward Kingston and Indianola — is largely on septic. We pump, clean, repair, and inspect residential systems throughout the Poulsbo area. The pattern here is Puget Sound waterfront and forested lots: homes on the bay and canal where shoreline setbacks, high groundwater, and Kitsap Public Health’s operation-and-maintenance rules govern the system, and inland properties on glacial till that drains slowly. Kitsap County requires regular inspections and pumping records for many systems — especially near marine water — because failing septics are tied to Hood Canal’s water quality and the shellfish beds. Many older homes have undersized tanks with no records, and the steady turnover keeps inspections in demand. We know North Kitsap and its shoreline rules. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Liberty Bay', 'Lofall', 'Big Valley', 'Kingston', 'Indianola', 'Suquamish'],
    landmarks: ['Liberty Bay', 'Hood Canal', 'Front Street', 'Fjord Drive'],
    issues: [
      {
        title: 'Shoreline O&M rules on the bay and canal',
        body: 'Homes on Liberty Bay and Hood Canal sit near marine water, where Kitsap Public Health requires regular inspections and pumping records to protect water quality and shellfish. We service these systems to the county’s operation-and-maintenance expectations and keep the paperwork you need.',
      },
      {
        title: 'Glacial till on the inland lots',
        body: 'Away from the water, much of North Kitsap is dense glacial till that drains slowly, which is hard on a gravity drain field through the long wet season. Many of these homes use mounds or pressure distribution to compensate, and all of them do better when the tank is pumped on schedule.',
      },
      {
        title: 'Older tanks with no records',
        body: 'A lot of Poulsbo-area homes have septic tanks decades old and often undersized, many with no record of the last service. Regular pumping and an honest look at the tank and baffles keep these older systems from washing solids into the drain field.',
      },
    ],
    nearby: ['silverdale', 'bremerton', 'port-townsend'],
    faqs: [
      {
        q: 'Do you cover Poulsbo and North Kitsap?',
        a: 'Yes. We cover Poulsbo and the surrounding communities — Liberty Bay, Lofall, Big Valley, Kingston, Indianola, and Suquamish. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'Kitsap County requires septic inspections near the water — can you handle that?',
        a: 'Yes. We service shoreline systems on Liberty Bay and Hood Canal to the county’s operation-and-maintenance expectations, inspect the tank and components, and provide the records Kitsap Public Health wants for systems near marine water.',
      },
      {
        q: 'How often should a waterfront home near Hood Canal be pumped?',
        a: 'Generally every three to five years, but shoreline systems are watched more closely and heavy or seasonal use can shorten that. Because failing septics affect the canal and its shellfish, staying ahead with regular pumping is both the rule and the right thing. We will set a realistic schedule for your system.',
      },
    ],
  },
  {
    slug: 'silverdale',
    name: 'Silverdale',
    state: 'WA',
    intro:
      'Silverdale sits at the head of Dyes Inlet in the middle of the Kitsap Peninsula, an unincorporated commercial hub that grew up around the retail on the highway and the huge naval presence at Bangor and Keyport just up the road. It is where central Kitsap does its shopping, but behind the strip the homes spread out around Dyes Inlet, up toward Seabeck and Hood Canal, and through the wooded neighborhoods of Central Kitsap — and outside the sewered pockets, a lot of it is on septic. We pump, clean, repair, and inspect residential systems throughout the Silverdale area. The pattern here is inlet and forest: waterfront and bluff homes around Dyes Inlet and out toward Seabeck on Hood Canal where shoreline setbacks and Kitsap Public Health’s O&M rules apply, and inland lots on glacial till that drains slowly. There is a steady mix of naval-family turnover and long-held homes, so tanks range from newer pressure and mound systems to older undersized tanks with no records, and the resale market keeps inspections busy. We know Central Kitsap and its shoreline rules. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Dyes Inlet', 'Seabeck', 'Chico', 'Tracyton', 'Central Kitsap', 'Island Lake'],
    landmarks: ['Dyes Inlet', 'Hood Canal', 'Clear Creek', 'Naval Base Kitsap'],
    issues: [
      {
        title: 'Shoreline systems on Dyes Inlet and Hood Canal',
        body: 'Homes on Dyes Inlet and out toward Seabeck on Hood Canal sit near marine water, where county setbacks, high groundwater, and Kitsap Public Health’s operation-and-maintenance rules govern the system. We service these to the county’s expectations and keep the pumping and inspection records they require.',
      },
      {
        title: 'Naval-family turnover and unknown histories',
        body: 'With Bangor and Keyport nearby, a lot of Central Kitsap homes change hands often as families rotate through, frequently with no record of the last septic service. A pump and inspection at the sale — or right after — gives everyone a clear, honest picture instead of an expensive surprise later.',
      },
      {
        title: 'Slow glacial till inland',
        body: 'Behind the water, much of the Silverdale area is dense glacial till that drains slowly, which is hard on a gravity drain field through our wet season. Many homes here run mounds or pressure distribution, and all of them last longer when the tank is pumped on schedule.',
      },
    ],
    nearby: ['poulsbo', 'bremerton', 'port-orchard'],
    faqs: [
      {
        q: 'Do you serve Silverdale and Central Kitsap?',
        a: 'Yes. We cover Silverdale and the surrounding communities — Dyes Inlet, Seabeck, Chico, Tracyton, and Island Lake. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'I just bought a home near Naval Base Kitsap with no septic records — where do I start?',
        a: 'Start with a pump and inspection. Homes here change hands often without a service history, and starting from a known baseline — a look at the tank, baffles, and drain field — catches problems early and sets you up on a realistic schedule.',
      },
      {
        q: 'My home is on Dyes Inlet — are there special septic rules?',
        a: 'Yes. Systems near marine water fall under Kitsap Public Health’s operation-and-maintenance program, which expects regular inspections and pumping records to protect water quality. We service your system to those expectations and keep the paperwork you need.',
      },
    ],
  },
  {
    slug: 'bremerton',
    name: 'Bremerton',
    state: 'WA',
    intro:
      'Bremerton is the largest city in Kitsap County, wrapped around Sinclair Inlet and built around the Puget Sound Naval Shipyard, with the fast ferry running straight to downtown Seattle. The city itself is largely on sewer, but the surrounding county — East and West Bremerton’s edges, the homes around Kitsap Lake and Gorst, out toward Chico and Sunnyslope, and the shorelines of Sinclair and Dyes inlets — runs on septic. We pump, clean, repair, and inspect residential systems throughout the Bremerton area. The pattern here is a working-town mix: modest older homes on long-held lots with undersized tanks and no records, a steady flow of naval and shipyard families moving in and out, and waterfront and lakefront lots around Kitsap Lake and the inlets where shoreline setbacks and Kitsap Public Health’s O&M rules apply. Much of the ground is glacial till that drains slowly, and the long wet season keeps drain fields under pressure. The resale market stays busy, and Washington’s time-of-sale inspection rule keeps that work steady. We know the Bremerton area and how its lots and soils handle a system. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Kitsap Lake', 'Gorst', 'Chico', 'Sunnyslope', 'Rocky Point', 'Erlands Point'],
    landmarks: ['Sinclair Inlet', 'Kitsap Lake', 'Puget Sound Naval Shipyard', 'Dyes Inlet'],
    issues: [
      {
        title: 'Older working-town homes with no records',
        body: 'A lot of the Bremerton area is modest, long-held homes with septic tanks decades old and often undersized for today’s households, many with no record of the last service. Regular pumping and a look at the tank and baffles keep these older systems from washing solids into the drain field.',
      },
      {
        title: 'Shipyard turnover and busy resale',
        body: 'With the naval shipyard right in town, homes change hands often as families rotate through, and Washington requires a septic inspection at the time of sale. A real inspection — tank, components, and field — protects buyers and sellers and keeps the septic from holding up a closing.',
      },
      {
        title: 'Lake and inlet lots with shoreline rules',
        body: 'Homes around Kitsap Lake and on Sinclair and Dyes inlets sit near water, where setbacks, high groundwater, and Kitsap Public Health’s operation-and-maintenance rules govern the system. Keeping the tank pumped and the field protected is both the rule and the best way to avoid a costly failure.',
      },
    ],
    nearby: ['silverdale', 'port-orchard', 'poulsbo'],
    faqs: [
      {
        q: 'Do you cover Bremerton and the surrounding area?',
        a: 'Yes. We cover Bremerton and the nearby communities — Kitsap Lake, Gorst, Chico, Sunnyslope, Rocky Point, and Erlands Point. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'I’m selling my Bremerton home — do I need a septic inspection?',
        a: 'If it is on septic, yes — Washington generally requires an inspection at the time of sale. We inspect the tank, components, and drain field and give you a clear written summary, so the septic does not become a surprise that derails the deal.',
      },
      {
        q: 'How often should my tank be pumped?',
        a: 'Generally every three to five years, but older and undersized tanks common on the long-held lots here often need it sooner, and shoreline systems are watched more closely. If you cannot remember the last pump, it is overdue — we will look at the tank and set a realistic schedule.',
      },
    ],
  },
  {
    slug: 'port-orchard',
    name: 'Port Orchard',
    state: 'WA',
    intro:
      'Port Orchard is the seat of Kitsap County, spread along the south shore of Sinclair Inlet across the water from the Bremerton shipyard, with the little foot ferry crossing the inlet and the waterfront downtown looking north to the Olympics. The older core has sewer, but South Kitsap is one of the most septic-heavy parts of the county — the neighborhoods spreading south and west toward Manchester, Southworth, Olalla, and Long Lake, and the shorelines of Sinclair Inlet and Yukon Harbor, are largely on their own tanks and drain fields. We pump, clean, repair, and inspect residential systems throughout the Port Orchard area. The pattern here is fast-growing South Kitsap on tough soil: a wave of newer subdivisions on lots carved from woods and old farm ground, mixed with older homes on undersized tanks with no records, and waterfront lots on the inlet and harbor where shoreline setbacks and Kitsap Public Health’s O&M rules apply. Much of the ground is glacial till and hardpan that drains slowly, so mounds and pressure systems are common, and the busy resale market keeps inspections in demand. We know South Kitsap and its soils and rules. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Manchester', 'Southworth', 'Olalla', 'Long Lake', 'Yukon Harbor', 'South Kitsap'],
    landmarks: ['Sinclair Inlet', 'Yukon Harbor', 'Long Lake', 'Manchester State Park'],
    issues: [
      {
        title: 'Fast-growing subdivisions on tough soil',
        body: 'A lot of South Kitsap’s growth is newer subdivisions on lots carved from woods and old farm ground, where glacial till and hardpan drain slowly and mounds or pressure distribution are often required. Knowing where the tank and field are, and pumping on schedule, protects a field built to work in difficult soil.',
      },
      {
        title: 'Older homes with unknown histories',
        body: 'Between the new subdivisions sit plenty of older Port Orchard homes with undersized, decades-old tanks and no service record. A pump and inspection gives you a known baseline and catches a worn baffle or struggling field before it becomes an emergency.',
      },
      {
        title: 'Waterfront lots on the inlet and harbor',
        body: 'Homes on Sinclair Inlet and Yukon Harbor sit near marine water, where county setbacks, high groundwater, and Kitsap Public Health’s operation-and-maintenance rules govern the system. Keeping the tank pumped and the field protected is both the rule and the best defense against a costly shoreline failure.',
      },
    ],
    nearby: ['bremerton', 'silverdale', 'belfair'],
    faqs: [
      {
        q: 'Do you serve Port Orchard and South Kitsap?',
        a: 'Yes. We cover Port Orchard and the surrounding communities — Manchester, Southworth, Olalla, Long Lake, and Yukon Harbor. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'I have a mound or pressure system — can you service it?',
        a: 'Yes. Mounds, sand filters, and pressure-distribution systems are common on South Kitsap’s tight glacial soils, and they rely on a pump and floats that need regular service. We pump the tank, test the pump and controls, and keep the whole system working the way it was designed to.',
      },
      {
        q: 'My drains are slow after a wet stretch — is that the drain field?',
        a: 'It can be. In the hardpan and till soils common here, a field that is full or aging struggles to absorb water when the ground is already saturated, and that shows up as slow drains. We will check whether it is a full tank, a line, a pump, or the field itself and tell you straight what it needs.',
      },
    ],
  },
  {
    slug: 'belfair',
    name: 'Belfair',
    state: 'WA',
    intro:
      'Belfair sits at the very head of Hood Canal in Mason County, at the hook of the "Great Bend" where the canal turns east, and it is the gateway to the North Shore road and the string of waterfront homes and cabins that line the canal from there. This is Hood Canal country at its most sensitive, and the water shapes the septic work more than anything else. Almost nothing out here is on sewer — the homes and cabins along the North Shore and Tahuya, the properties around Belfair itself and out toward Allyn, all run on septic. We pump, clean, repair, and inspect residential systems throughout the Belfair area. Hood Canal has long struggled with low-oxygen "dead zone" events, and failing septic systems along the shore are part of the story, so Mason County and the state watch these systems closely — regular inspections and pumping records are expected for shoreline systems, and there are shellfish beds to protect. The pattern is waterfront and seasonal: canal cabins that sit empty midweek then fill with a full house for a summer weekend, high water tables right on the shore, and older undersized tanks with no records. We know Hood Canal and the rules that come with it. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['North Shore', 'Tahuya', 'Allyn', 'Belfair', 'Sunset Beach', 'Mission Lake'],
    landmarks: ['Hood Canal', 'Great Bend', 'Theler Wetlands', 'Belfair State Park'],
    issues: [
      {
        title: 'Hood Canal water quality and close oversight',
        body: 'Hood Canal has suffered low-oxygen "dead zone" events, and failing shoreline septics are part of the cause, so Mason County and the state watch these systems closely and expect regular inspections and pumping records. Keeping a canal-side system pumped and sound is both the rule and a real contribution to the water and the shellfish beds.',
      },
      {
        title: 'Seasonal cabins that fill fast',
        body: 'Many North Shore and Tahuya properties are canal cabins that sit quiet midweek then host a full house for a summer weekend. That bursty, heavy use fills a tank far faster than a normal home, and an overlooked cabin tank becomes a backup during a guest’s stay, so a schedule matched to real use pays off here.',
      },
      {
        title: 'High water tables right on the shore',
        body: 'Waterfront lots at the head of the canal sit over high groundwater with little room between the drain field and the water table, which leaves a field less dry soil to work with and makes it sensitive to overload. Pumping on schedule and keeping runoff off the field is critical this close to the water.',
      },
    ],
    nearby: ['port-orchard', 'shelton', 'bremerton'],
    faqs: [
      {
        q: 'Do you cover Belfair, the North Shore, and Tahuya?',
        a: 'Yes. We cover Belfair and the surrounding Hood Canal communities — the North Shore, Tahuya, Allyn, Sunset Beach, and Mission Lake. Tell us where the cabin or home is and how the access looks and we will come prepared.',
      },
      {
        q: 'I have a canal cabin I only use in summer — how often should I pump?',
        a: 'It depends on how heavily it is used when occupied, but seasonal cabins are easy to neglect and a full house on a summer weekend fills a tank fast. Many need pumping more often than an owner expects. We can set a schedule to the cabin’s size and use so you are not facing a backup during a stay — and keep the records Mason County expects near the canal.',
      },
      {
        q: 'Are there special septic rules on Hood Canal?',
        a: 'Yes. Because failing septics affect the canal’s water quality and its shellfish, shoreline systems here are watched closely and regular inspections and pumping records are expected. We service your system to those expectations and keep the paperwork you need.',
      },
    ],
  },
  {
    slug: 'shelton',
    name: 'Shelton',
    state: 'WA',
    intro:
      'Shelton is the seat of Mason County and the only incorporated city in it, a working timber and shellfish town at the head of Oakland Bay on the southern edge of the Olympic Peninsula. The city has sewer, but Mason County around it is deeply rural and almost entirely on septic — the homes around Oakland Bay and Hammersley Inlet, the lake communities at Lake Limerick, Isabella, and Mason Lake, and the properties spread through the woods toward Matlock and Skokomish. We pump, clean, repair, and inspect residential systems throughout the Shelton area. The pattern here is bay, lake, and forest: Oakland Bay is prime shellfish-growing water, so shoreline septics are watched closely and inspections and pumping records are expected near marine water; the many lake-community homes bring their own seasonal and waterfront demands; and the rural woods hold older homes on undersized tanks with no records. Much of the ground is glacial till and forest soil that drains slowly, and the long wet season keeps drain fields under pressure. The steady resale market and Washington’s time-of-sale inspection rule keep that work busy. We know Mason County and its bays, lakes, and soils. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Oakland Bay', 'Lake Limerick', 'Agate', 'Matlock', 'Skokomish', 'Mason Lake'],
    landmarks: ['Oakland Bay', 'Hammersley Inlet', 'Lake Isabella', 'Goldsborough Creek'],
    issues: [
      {
        title: 'Shellfish waters and close oversight',
        body: 'Oakland Bay and Hammersley Inlet are prime shellfish-growing waters, so shoreline septic systems around Shelton are watched closely and regular inspections and pumping records are expected near marine water. Keeping a bayside system pumped and sound protects both your property and the shellfish beds downstream.',
      },
      {
        title: 'Lake-community homes, seasonal and waterfront',
        body: 'Mason County is full of lake communities — Limerick, Isabella, Mason Lake — where homes sit close to the water on higher water tables and many see seasonal use. Those systems are sensitive to overload and easy to neglect between visits, so a pumping schedule matched to real use protects the field and the lake.',
      },
      {
        title: 'Rural homes on slow forest soils',
        body: 'Out toward Matlock and Skokomish, a lot of homes sit on long-held rural land with undersized, decades-old tanks and no records, working in glacial till and forest soil that drains slowly. Regular pumping and an honest look at the tank keep these older systems from washing solids into a field that already drains slowly.',
      },
    ],
    nearby: ['belfair', 'port-orchard', 'silverdale'],
    faqs: [
      {
        q: 'Do you serve Shelton and rural Mason County?',
        a: 'Yes. We cover Shelton and the surrounding communities — Oakland Bay, Lake Limerick, Agate, Matlock, Skokomish, and Mason Lake. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'My home is on Oakland Bay near shellfish beds — are there special rules?',
        a: 'Yes. Shellfish-growing waters are protected closely, so shoreline systems here are expected to be inspected and pumped on a regular basis with records kept. We service your system to those expectations and provide the paperwork the county wants.',
      },
      {
        q: 'I have a cabin on Mason Lake — how often should I pump?',
        a: 'It depends on how heavily it is used, but lake cabins are easy to neglect and sit close to water on higher water tables. We can set a schedule matched to your actual use and check the system before a busy stretch, so you protect both the field and the lake.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
