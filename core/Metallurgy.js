/*
Metallurgy Mod v4.2 Official Release
Made by ShadowMine
[0.14.2] ONLY with BL v1.12.5 or higher!
Ported from the Metallurgy 4 PC mod made by The Metallurgy Team!

Special Thanks to {
	kingbudderjr aka MattPocketGaming for giving me his permission rights
	sliceofcode for inspiring the loops to initiate all the items and info
	MRAndyMC for tremendous help on TNT
	TaQuIto_988 for Ore Generation and Tool API
}

[Copying will not be tolerated]

*/
var rnd = Math.ceil(Math.random() * 4);

var moddedId = {
	overworld: 225,
	nether: 226,
	misc: 227,
	oBlock: 228,
	nBlock: 229,
	mBlock: 230,
	fBlock: 231,
	oBrick: 232,
	nBrick: 233,
	mBrick: 234,
	fBrick: 235,
	tnt: 236
};

var overworldOre = moddedId.overworld;
var netherOre = moddedId.nether;
var miscOre = moddedId.misc;
var overworldblock = moddedId.oBlock;
var netherblock = moddedId.nBlock;
var miscblock = moddedId.mBlock;
var fanBlock = moddedId.fBlock;
var overworldBrick = moddedId.oBrick;
var netherBrick = moddedId.nBlock;
var miscBrick = moddedId.mBrick;
var fanBrick = moddedId.fBrick;
var tntID = moddedId.tnt;

var metals = {};
metals.overworld = {};
metals.fantasy = {};
metals.precious = {};
metals.util = {};
metals.nether = {};
metals.vanilla = {};

/*
metals.vanilla.iron = {
	name: "Iron",
	blockLvl: 1,
	rssId: [265, 2940],
	fValue: 175
};

metals.vanilla.gold = {
	name: "Gold",
	blockLvl: 1, 
	rssId: [266, 2941],
	fValue: 180
};
*/
metals.overworld.copper = {
	bId: overworldOre,
	name: "Copper",
	type: "Ore",
	blockMeta: 0,
	blockLvl: 1,
	hasTool: true,			
	dugeonLoot: [80, 6],
	rssId: [2400, 2401],
	toolsId: [2500, 2501, 2502, 2503, 2504],
	armorId: [2800, 2801, 2802, 2803],
	generation: [12, 128, 100],
	dimensions: "Overworld",
	hardness: 1,
	durability: {
		tool: 180,
		armor: 550
	},
	speed: 5,
	dmg: 1,
	prot: 2,
	blockId: 3100,
	bD: 0,
	enchant: 5,
	metalBlock: overworldblock,
	brickBlock: overworldBrick,
	fValue: 150
};

metals.overworld.tin = {
	bId: overworldOre,
	name: "Tin", 
	type: "Ore", 
	blockMeta: 2,
	hasTool: false,
	blockLvl: 1, 
	generation: [10, 128, 100],
	dugeonLoot: [100, 4], 
	dimensions: "Overworld",
	rssId: [2402, 2403],
	hardness: 1,
	blockId: 3101,
	bD: 2,
	metalBlock: overworldblock,
	brickBlock: overworldBrick,
	fValue: 175
};

metals.overworld.manganese ={
	bId: overworldOre,
	name: "Manganese", 
	type: "Ore", 
	blockMeta: 1,
	hasTool: false, 
	blockLvl: 2, 
	generation: [5, 128, 100],
	dugeonLoot: [45, 2], 
	dimensions: "Overworld",
	rssId: [2404, 2405],
	hardness: 2,
	blockId: 3102,
	bD: 1,
	metalBlock: overworldblock,
	brickBlock: overworldBrick,
	fValue: 175
};

metals.overworld.bronze = {
	name: "Bronze", 
	type: "Alloy", 
	hasTool: true,
	blockMeta: 4, 
	blockLvl: 2, 
	alloyRecipe: [metals.overworld.copper.rssId[1], metals.overworld.tin.rssId[1]], 
	dugeonLoot: [80, 3],
	toolsId: [2505, 2506, 2507, 2508, 2509],
	armorId: [2804, 2805, 2806, 2807],
	rssId: [2406, 2407],
	durability: {
		tool: 250,
		armor: 715
	},
	speed: 6,
	dmg: 1, 
	prot: 3,
	enchant: 9,
	metalBlock: overworldblock,
	brickBlock: overworldBrick,
	fValue: 300
};

metals.overworld.hepatizon = {
	name: "Hepatizon", 
	type: "Alloy", 
	hasTool: true,
	blockMeta: 7, 
	blockLvl: 2, 
	toolsId: [2510, 2511, 2512, 2513, 2514],
	armorId: [2808, 2809, 2810, 2811],
	alloyRecipe: [metals.overworld.bronze.rssId[1] , 266], 
	dugeonLoot: [80, 3],
	rssId: [2408, 2409],
	durability: {
		tool: 300,
		armor: 770
	},
	speed: 8,
	dmg: 1,
	prot: 2,
	enchant: 22,
	metalBlock: overworldblock,
	brickBlock: overworldBrick,
	fValue: 325
};

metals.overworld.damascus_steel ={
	name: "Damascus Steel", 
	type: "Alloy", 
	hasTool: true,
	blockMeta: 6, 
	blockLvl: 2, 
	alloyRecipe: [265, metals.overworld.bronze.rssId[1]], 
	dugeonLoot: [60, 2],
	toolsId: [2515, 2516, 2517, 2518, 2519],
	armorId: [2812, 2813, 2814, 2815],
	rssId: [2410, 2411],
	durability: {
		tool: 500,
		armor: 1100
	},
	speed: 6,
	dmg: 2,
	prot: 3,
	enchant: 18,
	metalBlock: overworldblock,
	brickBlock: overworldBrick,
	fValue: 330
};

metals.overworld.angmallen = {
	name: "Angmallen", 
	type: "Alloy", 
	blockMeta: 5, 
	hasTool: true,
	blockLvl: 2, 
	alloyRecipe: [265, 266], 
	dugeonLoot: [55, 2],
	toolsId: [2520, 2521, 2522, 2523, 2524],
	armorId: [2816, 2817, 2818, 2819],
	rssId: [2412, 2413],
	durability: {
		tool: 300,
		armor: 990
	},
	speed: 8,
	dmg: 2,
	prot: 3,
	enchant: 30,
	metalBlock: overworldblock,
	brickBlock: overworldBrick,
	fValue: 350
};

metals.overworld.steel = {
	name: "Steel", 
	type: "Alloy", 
	blockMeta: 3, 
	blockLvl: 2, 
	hasTool: true,
	alloyRecipe: [265, metals.overworld.manganese.rssId[1]], 
	dugeonLoot: [45, 2],
	rssId: [2414, 2415], 
	toolsId: [2525, 2526, 2527, 2528, 2529],
	armorId: [2820, 2821, 2822, 2823],
	durability: {
		tool: 750,
		armor: 1210
	},
	speed: 8,
	dmg: 3,
	prot: 3,
	enchant: 18,
	metalBlock: overworldblock,
	brickBlock: overworldBrick,
	fValue: 350
};

metals.precious.zinc = {
	bId: miscOre,
	name: "Zinc", 
	type: "Ore", 
	blockMeta: 0, 
	blockLvl: 0, 
	dugeonLoot: [40, 4], 
	generation: [6, 128, 100], 
	dimensions: "Overworld",
	hasTool: false,
	rssId: [2448, 2449],
	blockId: 3113,
	metalBlock: miscblock,
	brickBlock: miscBrick,
	fValue: 50
}; 

metals.precious.silver = {
	bId: miscOre,
	name: "Silver", 
	type: "Ore", 
	bD: 1, 
	blockMeta: 1,
	blockLvl: 1, 
	dugeonLoot: [18, 3], 
	generation: [5, 128, 100], 
	dimensions: "Overworld",
	hasTool: true,
	rssId: [2450, 2451],
	toolsId: [2600, 2601, 2602, 2603, 2604],
	armorId: [2824, 2825, 2826, 2827],
	durability: {
		tool: 25,
		armor: 275
	},
	speed: 14,
	dmg: 1,
	prot: 2,
	blockId: 3114,
	enchant: 20,
	metalBlock: miscblock,
	brickBlock: miscBrick,
	fValue: 200
}; 

metals.precious.platinum = {
	bId: miscOre,
	name: "Platinum", 
	type: "Ore", 
	blockMeta: 2,
	bD: 2, 
	hasTool: true,
	blockLvl: 2, 
	dugeonLoot: [4, 1], 
	generation: [3, 128, 100], 
	dimensions: "Overworld",
	rssId: [2452, 2453],
	toolsId: [2605, 2606, 2607, 2608, 2609],
	armorId: [2828, 2829, 2830, 2831],
	durability: {
		tool: 100,
		armor: 605
	},
	speed: 16,
	dmg: 1,
	prot: 3,
	blockId: 3115,
	enchant: 50,
	metalBlock: miscblock,
	brickBlock: miscBrick,
	fValue: 340
}; 

metals.precious.brass = {
	name: "Brass", 
	type: "Alloy", 
	hasTool: true,
	blockLvl: 0, 
	blockMeta: 3,
	alloyRecipe: [metals.overworld.copper.rssId[1], metals.precious.zinc.rssId[1]], 
	dugeonLoot: [25, 3],
	rssId: [2454, 2455],
	toolsId: [2610, 2611, 2612, 2613, 2614],
	armorId: [2832, 2833, 2834, 2835],
	durability: {
		tool: 15,
		armor: 165
	},
	speed: 10,
	dmg: 1,
	prot: 2,
	enchant: 20,
	metalBlock: miscblock,
	brickBlock: miscBrick,
	fValue: 130
}; 

metals.precious.electrum = {
	name: "Electrum", 
	type: "Alloy", 
	hasTool: true,
	blockLvl: 1, 
	blockMeta: 4,
	alloyRecipe: [266, metals.precious.silver.rssId[1]], 
	dugeonLoot: [10, 2],
	rssId: [2456, 2457],
	toolsId: [2615, 2616, 2617, 2618, 2619],
	armorId: [2836, 2837, 2838, 2839],
	durability: {
		tool: 50,
		armor: 495
	},
	speed: 14,
	dmg: 1,
	prot: 2,
	enchant: 30,
	metalBlock: miscblock,
	brickBlock: miscBrick,
	fValue: 175
};

metals.fantasy.prometheum = {
	bId: overworldOre,
	name: "Prometheum", 
	type: "Ore", 
	blockMeta: 9, 
	hasTool: true,
	blockLvl: 1, 		
	toolsId: [2530, 2531, 2532, 2533, 2534], 
	armorId: [2840, 2841, 2842, 2843],
	rssId: [2416, 2417],
	dugeonLoot: [0, 0], 
	generation: [5, 128, 100], 
	dimensions: "Overworld",
	durability: {
		tool: 200,
		armor: 495
	},
	speed: 4,
	dmg: 1,
	prot: 2,
	blockId: 3103,
	bD: 12,
	enchant: 16,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 240
};

metals.fantasy.deep_iron = {
	bId: overworldOre,
	name: "Deep Iron", 
	type: "Ore", 
	blockMeta: 4,
	hasTool: true,
	blockLvl: 1, 
	dugeonLoot: [0, 0], 
	generation: [5, 128, 100], 
	dimensions: "Overworld",
	rssId: [2418, 2419],
	toolsId: [2535, 2536, 2537, 2538, 2539],
	armorId: [2844, 2845, 2846, 2847],
	durability: {
		tool: 250,
		armor: 770
	},
	speed: 6,
	dmg: 2,
	prot: 2,
	blockId: 3104,
	bD: 7,
	enchant: 14,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 270
};

metals.fantasy.infuscolium = {
	bId: overworldOre,
	name: "Infuscolium", 
	type: "Ore", 
	blockMeta: 5, 
	hasTool: false,
	blockLvl: 1, 		
	dugeonLoot: [0, 0], 
	generation: [5, 128, 100], 
	dimensions: "Overworld",
	rssId: [2420, 2421],
	blockId: 3105,
	bD: 8,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 280
};

metals.fantasy.black_steel = {
	name: "Black Steel", 
	type: "Alloy", 
	blockMeta: 11, 
	hasTool: true,
	blockLvl: 1, 
	alloyRecipe: [metals.fantasy.infuscolium.rssId[1], metals.fantasy.deep_iron.rssId[1]], 
	dugeonLoot: [0, 0],
	rssId: [2422, 2423],
	toolsId: [2540, 2541, 2542, 2543, 2544],
	armorId: [2848, 2849, 2850, 2851],
	durability: {
		tool: 500,
		armor: 1210
	},
	speed: 8,
	dmg: 2,
	prot: 3,
	enchant: 17,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 250
};

metals.fantasy.oureclase = {
	bId: overworldOre,
	name: "Oureclase", 
	type: "Ore", 
	blockMeta: 8, 
	hasTool: true,
	blockLvl: 2, 
	dugeonLoot: [0, 0], 
	generation: [4, 128, 100], 
	dimensions: "Overworld",
	rssId: [2424, 2425],
	toolsId: [2545, 2546, 2547, 2548, 2549],
	armorId: [2852, 2853, 2854, 2855],
	durability: {
		tool: 750,
		armor: 1100
	},
	speed: 8,
	dmg: 2,
	prot: 3,
	blockId: 3106,
	bD: 11,
	enchant: 18,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 340
};

metals.fantasy.astral_silver = {
	bId: overworldOre,
	name: "Astral Silver", 
	type: "Ore", 
	hasTool: true,
	blockMeta: 1, 
	blockLvl: 3, 
	dugeonLoot: [0, 0], 
	generation: [4, 128, 100], 
	dimensions: "Overworld",
	rssId: [2426, 2427],
	toolsId: [2550, 2551, 2552, 2553, 2554],
	armorId: [2856, 2857, 2858, 2859],
	durability: {
		tool: 35,
		armor: 500
	},
	speed: 12,
	dmg: 1,
	prot: 2,
	blockId: 3107,
	bD: 4,
	enchant: 30,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 400
};

metals.fantasy.carmot = {
	bId: overworldOre,
	name: "Carmot", 
	type: "Ore", 
	blockMeta: 3, 
	blockLvl: 3, 
	hasTool: true,
	dugeonLoot: [0, 0], 
	generation: [3, 128, 100], 
	dimensions: "Overworld",
	rssId: [2428, 2429],
	toolsId: [2555, 2556, 2557, 2558, 2559],
	armorId: [2860, 2861, 2862, 2863],
	durability: {
		tool: 50,
		armor: 660
	},
	speed: 12,
	dmg: 1,
	prot: 3,
	blockId: 3108,
	bD: 6,
	enchant: 40,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 400
};

metals.fantasy.mithril = {
	bId: overworldOre,
	name: "Mithril", 
	type: "Ore", 
	blockMeta: 6, 
	blockLvl: 3, 
	hasTool: true,
	dugeonLoot: [0, 0], 
	generation: [3, 128, 100], 
	dimensions: "Overworld",
	rssId: [2430, 2431],
	toolsId: [2560, 2561, 2562, 2563, 2564],
	armorId: [2864, 2865, 2866, 2867],
	durability: {
		tool: 1000,
		armor: 1540
	},
	speed: 9,
	dmg: 3,
	prot: 4,
	blockId: 3109,
	bD: 9,
	enchant: 18,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 450
};

metals.fantasy.rubracium = {
	bId: overworldOre,
	name: "Rubracium", 
	type: "Ore", 
	blockMeta: 10, 
	hasTool: false,
	generation: [3, 90, 60],
	blockLvl: 3, 
	dugeonLoot: [0, 0], 
	dimensions: "Overworld",
	blockId: 3110,
	bD: 13,
	rssId: [2432, 2433],
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 450
};

metals.fantasy.quicksilver = {
	name: "Quicksilver", 
	type: "Alloy", 
	blockMeta: 14, 
	blockLvl: 3, 
	alloyRecipe: [metals.fantasy.mithril.rssId[1], metals.precious.silver.rssId[1]],
	dugeonLoot: [0, 0],
	hasTool: true,
	rssId: [2434, 2435],
	toolsId: [2565, 2566, 2567, 2568, 2569],
	armorId: [2868, 2869, 2870, 2871],
	durability: {
		tool: 1100,
		armor: 1650
	},
	speed: 14,
	dmg: 3,
	prot: 4,
	enchant: 20,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 450
};

metals.fantasy.haderoth = {
	name: "Haderoth", 
	type: "Alloy", 
	blockMeta: 13, 
	blockLvl: 3, 
	alloyRecipe: [metals.fantasy.mithril.rssId[1], metals.fantasy.rubracium.rssId[1]], 
	dugeonLoot: [0, 0],
	hasTool: true,
	rssId: [2436, 2437],
	toolsId: [2570, 2571, 2572, 2573, 2574],
	armorId: [2872, 2873, 2874, 2875],
	durability: {
		tool: 1250,
		armor: 1760
	},
	speed: 12,
	dmg: 3,
	prot: 4,
	enchant: 19,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 500
};

metals.fantasy.orichalcum = {
	bId: overworldOre,
	name: "Orichalcum", 
	type: "Ore", 
	blockMeta: 7, 
	blockLvl: 4, 
	dugeonLoot: [0, 0], 
	generation: [2, 128, 100], 
	dimensions: "Overworld",
	hasTool: true,
	rssId: [2438, 2439],
	toolsId: [2575, 2576, 2577, 2578, 2579],
	armorId: [2876, 2877, 2878, 2879],
	durability: {
		tool: 1350,
		armor: 1870
	},
	speed: 9,
	dmg: 3,
	prot: 4,
	blockId: 3110,
	bD: 10,
	enchant: 20,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 500
};

metals.fantasy.celenegil = {
	bId: overworldOre,
	name: "Celenegil", 
	type: "Alloy", 
	blockMeta: 12, 
	blockLvl: 4, 
	alloyRecipe: [metals.fantasy.orichalcum.rssId[1], metals.precious.platinum.rssId[1]],
	dugeonLoot: [0, 0],
	hasTool: true,
	rssId: [2440, 2441],
	toolsId: [2580, 2581, 2582, 2583, 2584],
	armorId: [2880, 2881, 2882, 2883],
	durability: {
		tool: 1600,
		armor: 1980
	},
	speed: 14,
	dmg: 3,
	prot: 5,
	enchant: 50,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 550
};

metals.fantasy.adamantine = {
	bId: overworldOre,
	name: "Adamantine", 
	type: "Ore", 
	blockMeta: 0, 
	blockLvl: 5, 
	dugeonLoot: [0, 0], 
	generation: [2, 128, 100], 
	dimensions: "Overworld",
	hasTool: true,
	rssId: [2442, 2443],
	toolsId: [2585, 2586, 2587, 2588, 2589],
	armorId: [2884, 2885, 2886, 2887],
	durability: {
		tool: 1550,
		armor: 2090
	},
	speed: 14,
	dmg: 5,
	bD: 3,
	blockId: 3111,
	prot: 5,
	enchant: 22,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 650
};

metals.fantasy.atlarus = {
	bId: overworldOre,
	name: "Atlarus", 
	type: "Ore", 
	blockMeta: 2, 
	blockLvl: 5, 
	dugeonLoot: [0, 0], 
	generation: [2, 128, 100], 
	dimensions: "Overworld",
	hasTool: true,
	rssId: [2444, 2445],
	toolsId: [2590, 2591, 2592, 2593, 2594],
	armorId: [2888, 2889, 2890, 2891],
	durability: {
		tool: 1750,
		armor: 2200
	},
	speed: 10,
	dmg: 4,
	bD: 5,
	blockId: 3112,
	prot: 5,
	enchant: 22,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 700
};

metals.fantasy.tartarite = {
	name: "Tartarite", 
	type: "Alloy", 
	blockMeta: 15, 
	blockLvl: 6, 
	alloyRecipe: [metals.fantasy.adamantine.rssId[1], metals.fantasy.atlarus.rssId[1]], 
	dugeonLoot: [0, 0],
	hasTool: true,
	rssId: [2446, 2447],
	toolsId: [2595, 2596, 2597, 2598, 2599],
	armorId: [2892, 2893, 2894, 2895],
	durability: {
		tool: 3000,
		armor: 2310
	},
	speed: 14,
	dmg: 5,
	prot: 5,
	enchant: 25,
	metalBlock: fanBlock,
	brickBlock: fanBrick,
	fValue: 850
};

metals.util.sulfur = {
	name: "Sulfur", 
	type: "Drop", 
	blockMeta: 10, 
	blockLvl: 1, 
	rssId: 2458,
	generation: [4, 128, 100], 
	dimensions: "Overworld",
	metalBlock: miscblock
};

metals.util.phosphorus = {
	name: "Phosphorus", 
	type: "Drop", 
	blockMeta: 7, 
	blockLvl: 1, 
	rssId: 2459,
	generation: [4, 128, 100], 
	dimensions: "Overworld",
	metalBlock: miscblock
};

metals.util.saltpeter = {
	name: "Saltpeter", 
	type: "Drop", 
	blockMeta: 9, 
	blockLvl: 1, 
	rssId: 2460,
	generation: [4, 128, 100], 
	dimensions: "Overworld",
	metalBlock: miscblock
};

metals.util.magnesium = {
	name: "Magnesium", 
	type: "Drop", 
	blockMeta: 6, 
	rssId: 2461,
	blockLvl: 1, 
	generation: [4, 128, 100], 
	dimensions: "Overworld",
	metalBlock: miscblock
};

metals.util.bitumen = {
	name: "Bitumen", 
	type: "Drop", 
	blockMeta: 5, 
	blockLvl: 1, 
	rssId: 2462,
	generation: [4, 128, 100], 
	dimensions: "Overworld",
	metalBlock: miscblock
};

metals.util.potash = {
	name: "Potash", 
	type: "Drop", 
	blockMeta: 8, 
	blockLvl: 6, 
	rssId: 2463,
	generation: [4, 128, 100], 
	dimensions: "Overworld",
	metalBlock: miscblock
};

metals.nether.ignatius = {
	name: "Ignatius", 
	type: "Ore", 
	blockMeta: 2,
	blockLvl: 1, 
	dugeonLoot: [0, 0], 
	generation: [9, 128, 100], 
	dimensions: "Nether",
	bId: netherOre,
	bD: 2,
	hasTool: true,
	rssId: [2464, 2465],
	toolsId: [2620, 2621, 2622, 2623, 2624],
	armorId: [2896, 2897, 2898, 2899],
	durability: {
		tool: 200,
		armor: 825
	},
	speed: 4,
	dmg: 2,
	prot: 2,
	blockId: 3115,
	enchant: 20,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 200
};

metals.nether.shadow_iron = {
	name: "Shadow Iron", 
	type: "Ore", 
	blockMeta: 7,
	blockLvl: 1, 
	dugeonLoot: [0, 0], 
	generation: [7, 128, 100], 
	dimensions: "Nether",
	bId: netherOre,
	hasTool: true,
	bD: 7,
	rssId: [2466, 2467],
	toolsId: [2625, 2626, 2627, 2628, 2629],
	armorId: [2900, 2901, 2902, 2903],
	durability: {
		tool: 300,
		armor: 880
	},
	speed: 5,
	dmg: 2,
	prot: 3,
	blockId: 3116,
	enchant: 3,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 230
};

metals.nether.lemurite = {
	name: "Lemurite", 
	type: "Ore", 
	blockLvl: 1, 
	blockMeta: 4,
	dugeonLoot: [0, 0], 
	generation: [6, 128, 100], 
	dimensions: "Nether",
	bId: netherOre,
	hasTool: false,
	bD: 4,
	rssId: [2468, 2469],
	blockId: 3117,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 175
};

metals.nether.midasium = {
	name: "Midasium", 
	type: "Ore", 
	blockLvl: 2, 
	blockMeta: 5,
	dugeonLoot: [0, 0], 
	generation: [5, 128, 100], 
	dimensions: "Nether",
	bId: netherOre,
	hasTool: true,
	bD: 5,
	rssId: [2470, 2471],
	toolsId: [2630, 2631, 2632, 2633, 2634],
	armorId: [2904, 2905, 2906, 2907],
	durability: {
		tool: 100,
		armor: 440,
	},
	speed: 10,
	dmg: 3,
	prot: 2,
	blockId: 3118,
	enchant: 35,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 240
};

metals.nether.vyroxeres = {
	name: "Vyroxeres", 
	type: "Ore", 
	blockLvl: 2, 
	blockMeta: 9,
	dugeonLoot: [0, 0], 
	generation: [4, 128, 100], 
	dimensions: "Nether",
	bId: netherOre,
	bD: 9,
	hasTool: true,
	rssId: [2472, 2473],
	toolsId: [2635, 2636, 2637, 2638, 2639],
	armorId: [2908, 2909, 2910, 2911],
	durability: {
		tool: 300,
		armor: 1265
	},
	speed: 7,
	dmg: 3,
	prot: 3,
	blockId: 3119,
	enchant: 16,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 275
};

metals.nether.ceruclase = {
	name: "Ceruclase", 
	type: "Ore", 
	blockLvl: 2,
	blockMeta: 1,
	dugeonLoot: [0, 0], 
	generation: [4, 128, 100], 
	dimensions: "Nether",
	bId: netherOre,
	bD: 1,
	hasTool: true,
	rssId: [2474, 2475],
	toolsId: [2640, 2641, 2642, 2643, 2644],
	armorId: [2912, 2913, 2914, 2915],
	durability: {
		tool: 500,
		armor: 1375
	},
	speed: 7,
	dmg: 3,
	prot: 3,
	blockId: 3120,
	enchant: 18,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 280
};

metals.nether.alduorite = {
	name: "Alduorite", 
	type: "Ore", 
	blockMeta: 0, 
	blockLvl: 2, 
	dugeonLoot: [0, 0], 
	generation: [3, 128, 100], 
	dimensions: "Nether",
	bId: netherOre,
	bD: 0,
	hasTool: false,
	rssId: [2476, 2477],
	blockId: 3121,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 300
};

metals.nether.kalendrite = {
	name: "Kalendrite", 
	type: "Ore", 
	blockLvl: 3, 
	blockMeta: 3,
	dugeonLoot: [0, 0], 
	generation: [3, 128, 100], 
	dimensions: "Nether",
	bId: netherOre,
	bD: 3,
	hasTool: true,
	rssId: [2478, 2479],
	toolsId: [2645, 2646, 2647, 2648, 2649],
	armorId: [2916, 2917, 2918, 2919],
	durability: {
		tool: 1000,
		armor: 1540
	},
	speed: 8,
	dmg: 3,
	prot: 4,
	blockId: 3122,
	enchant: 20,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 400
};

metals.nether.vulcanite = {
	name: "Vulcanite", 
	type: "Ore", 
	blockLvl: 4, 
	blockMeta: 8, 
	dugeonLoot: [0, 0], 
	generation: [2, 128, 100], 
	dimensions: "Nether",
	hasTool: true,
	bId: netherOre,
	bD: 8,
	rssId: [2480, 2481],
	toolsId: [2650, 2651, 2652, 2653, 2654],
	armorId: [2920, 2921, 2922, 2923],
	durability: {
		tool: 1500,
		armor: 1870
	},
	speed: 10,
	dmg: 3,
	prot: 4,
	blockId: 3123,
	enchant: 20,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 550
};

metals.nether.sanguinite = {
	name: "Sanguinite", 
	type: "Ore",
	blockLvl: 5, 
	blockMeta: 6,
	dugeonLoot: [0, 0], 
	generation: [2, 128, 100], 
	dimensions: "Nether",
	hasTool: true,
	bId: netherOre,
	bD: 6,
	rssId: [2482, 2483],
	toolsId: [2655, 2656, 2657, 2658, 2659],
	armorId: [2924, 2925, 2926, 2927],
	durability: {
		tool: 1750,
		armor: 1980
	},
	speed: 12,
	dmg: 4,
	prot: 5,
	blockId: 3124,
	enchant: 25,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 750
};

metals.nether.shadow_steel = {
	name: "Shadow Steel", 
	type: "Alloy", 
	blockLvl: 1, 
	blockMeta: 12, 
	alloyRecipe: [metals.nether.shadow_iron.rssId[1], metals.nether.lemurite.rssId[1]], 
	dugeonLoot: [0, 0],
	hasTool: true,
	rssId: [2484, 2485],
	toolsId: [2660, 2661, 2662, 2663, 2664],
	armorId: [2928, 2929, 2930, 2931],
	durability: {
		tool: 400,
		armor: 1100,
	},
	speed: 6,
	dmg: 3,
	prot: 3,
	enchant: 5,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 150
};

metals.nether.inolashite = {
	name: "Inolashite", 
	type: "Alloy", 
	blockLvl: 3, 
	blockMeta: 11,
	alloyRecipe: [metals.nether.alduorite.rssId[1], metals.nether.ceruclase.rssId[1]], 
	dugeonLoot: [0, 0],
	hasTool: true,
	rssId: [2486, 2487],
	toolsId: [2665, 2666, 2667, 2668, 2669],
	armorId: [2932, 2933, 2934, 2935],
	durability: {
		tool: 900,
		armor: 1650
	},
	speed: 8,
	dmg: 3,
	prot: 4,
	enchant: 25,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 350
};

metals.nether.amordrine = {
	name: "Amordrine", 
	type: "Alloy", 
	blockLvl: 3, 
	blockMeta: 10,
	alloyRecipe: [metals.nether.kalendrite.rssId[1], metals.precious.platinum.rssId[1]], 
	dugeonLoot: [0, 0],
	hasTool: true,
	rssId: [2488, 2489],
	toolsId: [2670, 2671, 2672, 2673, 2674],
	armorId: [2936, 2937, 2938, 2939],
	durability: {
		tool: 500,
		armor: 1760
	},
	speed: 14,
	dmg: 2,
	prot: 4,
	enchant: 50,
	metalBlock: netherblock,
	brickBlock: netherBrick,
	fValue: 325
};

var customItems = {
	fertilizer: {
		name: "Fertilizer",
		id: 2945,
		recipeType: 'crafting',
		count: 3,
		recipeOrder: ["pm ", "h  ", "   "],
		recipe: ["p", metals.util.potash.rssId, 0, "m", metals.util.magnesium.rssId, 0, "h", metals.util.phosphorus.rssId, 0]
	},
	tar: {
		name: "Tar",
		id: 2946,
		recipeType: 'smelting',
		recipe: [metals.util.bitumen.rssId, 0]
	}
};

var blockItems = [];
var toolSet = [];
var armorSet = [];
var rss = [];
var blocks = [];
var interactiveBlocks = [54, 58, 61, 62, 64, 69, 77, 78, 92, 96, 116, 117, 143, 145, 146, 193, 194, 195, 196, 197];
var unfullBlock = [51, 106, 175];
var tnt = [];
var metalBlocks = [];
var brickBlocks = [];
var nameData = [];

function isInteractive(id){
	for(var i in interactiveBlocks){
		if(id == interactiveBlocks[i]){
			return true;
		} else {
			return false;
		}
	}
}

function isOpaqueBlock(id){
	for(var i in unfullBlock){
		if(id == unfullBlock[i]){
			return true;
		} else {
			return false;
		}
	}
}

function newLevel(){
	var scripts = net.zhuoweizhang.mcpelauncher.ScriptManager.scripts;
	for(var i = 0; i < scripts.size(); i++){
		var script = scripts.get(i);
		if(script.name == "NerdCraft2"){
			ModPE.setItem(368, "ender_pearl", 0, "Ender Pearl", 16);
			Item.setCategory(368, ItemCategory.TOOL);
			Player.addItemCreativeInv(368, 5, 0);
		}
	}
}

function modTick(){
	OreGen.modTick();
	mod.modTick();
	Sword.modTick();
	Pickaxe.modTick();
	Shovel.modTick();
	Axe.modTick();
}
function destroyBlock(x, y, z, s){
	mod.destroyBlock(x, y, z, s);
	if (Item.isSword(Player.getCarriedItem()) === true){
		Sword.destroyBlock(x, y, z, s);
	}
	else if (Item.isPickaxe(Player.getCarriedItem()) === true){
		Pickaxe.destroyBlock(x, y, z, s);
	}
	else if (Item.isShovel(Player.getCarriedItem()) === true){
		Shovel.destroyBlock(x, y, z, s);
	}
	else if (Item.isAxe(Player.getCarriedItem()) === true){
		Axe.destroyBlock(x, y, z, s);
	}
}
function attackHook(a, v){
	mod.attackHook(a, v);
	if (Item.isSword(Player.getCarriedItem()) === true){
		Sword.attackHook(a, v);
	}
	else if (Item.isPickaxe(Player.getCarriedItem()) === true){
		Pickaxe.attackHook(a, v);
	}
	else if (Item.isShovel(Player.getCarriedItem()) === true){
		Shovel.attackHook(a, v);
	}
	else if (Item.isAxe(Player.getCarriedItem()) === true){
		Axe.attackHook(a, v);
	}
}
function useItem(x, y, z, i, b, s, iD, bD){
	mod.useOn(x, y, z, i, b, s, iD, bD);
	if (Item.isShovel(i) === true){
		Shovel.useItem(x, y, z, i, b, s, iD, bD);
	}
	else if (Item.isHoe(i) === true){
		Hoe.useItem(x, y, z, i, b, s, iD, bD);
	}
}

function startDestroyBlock(x, y, z, s){
	if(Item.isPickaxe(Player.getCarriedItem()) === false){
		for(var i in Pickaxe.customData){
			if(Level.getTile(x, y, z) == Pickaxe.customData[i].id && Level.getData(x, y, z) == Pickaxe.customData[i].dat){
				Block.setDestroyTime(Pickaxe.customData[i].id, Pickaxe.customData[i].dTime);
			}
		}
	} else {
		Pickaxe.startDestroy(x, y, z);
	}
}

function deathHook(m, v){
	mod.death(m, v);
}

Item.setDamage = function(id, maxDamage, damageAmount){
	if (id === Player.getCarriedItem() && maxDamage > Player.getCarriedItemData() && Level.getGameMode() === 0){
		Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
	}
	else if (id === Player.getCarriedItem() && maxDamage <= Player.getCarriedItemData() && Level.getGameMode() === 0){
		Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
		Level.playSoundEnt(Player.getEntity(), "random.break", 16);
	}
};


///# Swords System #///
var Sword = {
	itemsData:{itemId:[],durability:[],damage:[]},
	currentData:{itemId:null,durability:null,damage:null},	
	setDestroyTimes:function(){
		Block.setDestroyTime(18,0.2/1.5);Block.setDestroyTime(30,4/3.3/15);Block.setDestroyTime(86,1/1.5);Block.setDestroyTime(91,1/1.5);Block.setDestroyTime(103,1/1.5);Block.setDestroyTime(106,0.2/1.5);Block.setDestroyTime(127,0.2/1.5);
	},
	resetDestroyTimes:function(){
		Block.setDestroyTime(18,0.2);Block.setDestroyTime(30,4);Block.setDestroyTime(86,1);Block.setDestroyTime(91,1);Block.setDestroyTime(103,1);Block.setDestroyTime(106,0.2);Block.setDestroyTime(127,0.2);
	},
	modTick:function(){
		if(Item.isSword(Player.getCarriedItem())===true&&this.currentData.itemId!==Player.getCarriedItem()){
			this.currentData.itemId = Player.getCarriedItem();
			this.currentData.durability = this.getDurability(Player.getCarriedItem());
			this.currentData.damage = this.getDamage(Player.getCarriedItem());
			this.setDestroyTimes();
		}
		else if(Item.isSword(Player.getCarriedItem())===false&&this.currentData.itemId!==null){
			this.currentData.itemId = null;
			this.currentData.durability = null;
			this.currentData.damage = null;
			this.resetDestroyTimes();
		}			
	},
	destroyBlock:function(x,y,z,s){
		Item.setDamage(this.currentData.itemId,this.currentData.durability);
		switch(getTile(x,y,z)){
			case 30:Level.dropItem(x+0.5,y,z+0.5,0,287,1,0);break;
			case 127:Level.dropItem(x+0.5,y,z+0.5,0,351,3,3);break;
		}
	},
	attackHook:function(a,v){
		if(Entity.getHealth(v)>this.currentData.damage&&Entity.getHealth(v)>0){
			Entity.setHealth(v,Entity.getHealth(v)-this.currentData.damage);
			Item.setDamage(this.currentData.itemId,this.currentData.durability);
		}
		else if(Entity.getHealth(v)<=this.currentData.damage&&Entity.getHealth(v)>0){
			Entity.setHealth(v,1);
			Item.setDamage(this.currentData.itemId,this.currentData.durability);
		}
	},	
	getDurability:function(id){
		return this.itemsData.durability[this.itemsData.itemId.indexOf(id)];
	},
	getDamage:function(id){
		return this.itemsData.damage[this.itemsData.itemId.indexOf(id)];
	}
};

Item.defineSword = function(id,texture,textureData,name,durability,damage,val){
	ModPE.setItem(id,texture,textureData,name,1);
	Item.setCategory(id,ItemCategory.TOOL);
	Item.setMaxDamage(id,durability);
	Item.setHandEquipped(id,true);
	Item.setEnchantType(id, EnchantType.weapon, val);
	Sword.itemsData.itemId.push(id);
	Sword.itemsData.durability.push(durability);
	Sword.itemsData.damage.push(damage-2);
};

Item.isSword = function(id){
	if(Sword.itemsData.itemId.indexOf(id)!==-1){
		return true;
	}
	else{
		return false;
	}
};

///# Pickaxes System #///
var Pickaxe = {
	oresData: [{id: 14, dTime: 3, mLevel: 2, drop: [14, 1, -1]}, {id: 15, dTime: 3, mLevel: 1, drop: [15, 1, 0]}, 
		{id: 21, dTime: 3, mLevel: 2, drop: [351, rnd, 0]}, {id: 56, dTime: 3, mLevel: 2, drop: [264, 1, 0]}, 
		{id: 73, dTime: 3, mLevel: 2, drop: [331, rnd, 0]}, {id: 73, dTime: 3, mLevel: 2, drop: [331, rnd, 0]}, 
		{id: 129, dTime: 3, mLevel: 2, drop: [388, 1, 0]}, {id: 153, dTime: 3, mLevel: 2, drop: [408, rnd, 0]}],
	customData: [],//{id, dat, dTime, mLevel}
	blocksData: [{id: 1, dTime: 2, mLevel: 0, drop: [1, 1, -1]}, {id: 4, dTime: 1.5, mLevel: 0, drop: [4, 1, 0]}, 
		{id: 7, dTime: -1, mLevel: 10000, drop: [0, 0, 0]}, {id: 19, dTime: 1, mLevel: 0, drop: [19, 1, 0]}, {id: 22, dTime: 3, mLevel: 1, drop: [22, 1, 0]}, 
		{id: 24, dTime: 1, mLevel: 0, drop: [24, 1, -1]}, {id: 25, dTime: 1, mLevel: 0, drop: [25, 1, 0]}, {id: 26, dTime: .05, mLevel: 0, drop: [355, 1, 0]},
		{id: 27, dTime: 1, mLevel: 1, drop: [27, 1, 0]}, {id: 28, dTime: 1, mLevel: 1, drop: [28, 1, 0]}, {id: 41, dTime: 3, mLevel: 1, drop: [41, 1, 0]},
		{id: 41, dTime: 3, mLevel: 1, drop: [41, 1, 0]}, {id: 43, dTime: 2, mLevel: 0, drop: [43, 1, -1]}, {id: 44, dTime: 2, mLevel: 0, drop: [44, 1, -1]}, 
		{id: 45, dTime: 2, mLevel: 0, drop: [45, 1, 0]}, {id: 48, dTime: 2, mLevel: 0, drop: [48, 1, 0]}, {id: 49, dTime: 18, mLevel: 1, drop: [49, 1, 0]}, 
		{id: 52, dTime: 5, mLevel: 1, drop: [0, 0, 0]}, {id: 57, dTime: 5, mLevel: 1, drop: [57, 1, 0]}, {id: 61, dTime: 4, mLevel: 0, drop: [61, 1, 0]},
		{id: 62, dTime: 4, mLevel: 0, drop: [61, 1, 0]}, {id: 64, dTime: 3, mLevel: 0, drop: [324, 1, 0]}, {id: 66, dTime: 1, mLevel: 0, drop: [66, 1, 0]}, 
		{id: 67, dTime: 2, mLevel: 0, drop: [67, 1, 0]}, {id: 71, dTime: 5, mLevel: 1, drop: [330, 1, 0]}, {id: 97, dTime: 1, mLevel: 0, drop: [97, 1, -1]}, 
		{id: 98, dTime: 1, mLevel: 0, drop: [98, 1, -1]}, {id: 101, dTime: 5, mLevel: 0, drop: [101, 1, 0]}, {id: 108, dTime: 2, mLevel: 0, drop: [108, 1, 0]}, 
		{id: 109, dTime: 2, mLevel: 0, drop: [109, 1, 0]}, {id: 116, dTime: 5, mLevel: 0, drop: [116, 1, 0]}, {id: 128, dTime: 1, mLevel: 0, drop: [128, 1, 0]}, 
		{id: 133, dTime: 5, mLevel: 2, drop: [133, 1, 0]}, {id: 139, dTime: 10, mLevel: 2, drop: [139, 1, 0]}, {id: 145, dTime: 5, mLevel: 2, drop: [145, 1, 0]}, 
		{id: 152, dTime: 5, mLevel: 2, drop: [152, 1, 0]}, {id: 155, dTime: 1, mLevel: 0, drop: [155, 1, -1]}, {id: 167, dTime: 5, mLevel: 2, drop: [167, 1, 0]},
		{id: 245, dTime: 3, mLevel: 1, drop: [245, 1, 0]}, {id: 246, dTime: 10, mLevel: 2, drop: [49, 1, 0]}],
	itemsData:{
		itemId:[],
		durability:[],
		damage:[],
		mSpeed:[],
		mLevel:[]
	},
	currentData:{itemId:null,durability:null,damage:null,mSpeed:null,mLevel:null},
	setDestroyTimes:function(){
		for(var a in this.blocksData){
			if(this.currentData.mLevel >= this.blocksData[a].mLevel){
				Block.setDestroyTime(this.blocksData[a].id, Math.abs((this.blocksData[a].dTime / this.currentData.mSpeed - .25)));
			}
		}
		for(var i in this.oresData){
			if(this.currentData.mLevel >= this.oresData[i].mLevel){
				Block.setDestroyTime(this.oresData[i].id, Math.round((this.oresData[i].dTime / this.currentData.mSpeed * .2)));
			} else {
				Block.setDestroyTime(this.oresData[i].id, -1);
			}
		}
		Block.setDestroyTime(overworldOre, Math.round((5 / this.currentData.mSpeed * .2)));
		Block.setDestroyTime(miscOre, Math.round((5 / this.currentData.mSpeed * .2)));
	},
	resetDestroyTimes:function(){
		for(var b in this.blocksData){
			Block.setDestroyTime(this.blocksData[b].id, this.blocksData[b].dTime);
		}
		Block.setDestroyTime(overworldOre, 5);
		Block.setDestroyTime(miscOre, 3);
	},
	startDestroy: function(){
		for(var i in this.customData){
			if(Level.getTile(x, y, z) == this.customData[i].id && Level.getData(x, y, z) == this.customData[i].dat){
				Block.setDestroyTime(this.customData[i].id, this.customData[i].dTime / this.currentData.mSpeed);
			}
		}
	},
	modTick:function(){
		if(Item.isPickaxe(Player.getCarriedItem())===true&&this.currentData.itemId!==Player.getCarriedItem()){
			this.currentData.itemId = Player.getCarriedItem();
			this.currentData.durability = this.getDurability(Player.getCarriedItem());
			this.currentData.damage = this.getDamage(Player.getCarriedItem());
			this.currentData.mSpeed = this.getMiningSpeed(Player.getCarriedItem());
			this.currentData.mLevel = this.getMiningLevel(Player.getCarriedItem());
			this.setDestroyTimes();
		}
		else if(Item.isPickaxe(Player.getCarriedItem())===false&&this.currentData.itemId!==null){
			this.currentData.itemId = null;
			this.currentData.durability = null;
			this.currentData.damage = null;
			this.currentData.mSpeed = null;
			this.currentData.mLevel = null;
			this.resetDestroyTimes();
		}			
	},
	destroyBlock:function(x,y,z,s){
		for(var c in this.blocksData){			
			if(this.blocksData[c].id===getTile(x,y,z)&&this.blocksData[c].drop[2]<0){
				Level.dropItem(x+0.5,y,z+0.5,0,this.blocksData[c].drop[0],this.blocksData[c].drop[1],Level.getData(x,y,z));
				Item.setDamage(this.currentData.itemId,this.currentData.durability);
			}			
			else if(this.blocksData[c].id===getTile(x,y,z)&&this.blocksData[c].drop[2]>=0){
				Level.dropItem(x+0.5,y,z+0.5,0,this.blocksData[c].drop[0],this.blocksData[c].drop[1],this.blocksData[c].drop[2]);
				Item.setDamage(this.currentData.itemId,this.currentData.durability);
			}
		}
	},
	attackHook:function(a,v){
		if(Entity.getHealth(v)>this.currentData.damage&&Entity.getHealth(v)>0){
			Entity.setHealth(v,Entity.getHealth(v)-this.currentData.damage);
			Item.setDamage(this.currentData.itemId,this.currentData.durability);
		}
		else if(Entity.getHealth(v)<=this.currentData.damage&&Entity.getHealth(v)>0){
			Entity.setHealth(v,1);
			Item.setDamage(this.currentData.itemId,this.currentData.durability);
		}
	},	
	getDurability:function(id){
		return this.itemsData.durability[this.itemsData.itemId.indexOf(id)];
	},
	getDamage:function(id){
		return this.itemsData.damage[this.itemsData.itemId.indexOf(id)];
	},
	getMiningSpeed:function(id){
		return this.itemsData.mSpeed[this.itemsData.itemId.indexOf(id)];
	},
	getMiningLevel:function(id){
		return this.itemsData.mLevel[this.itemsData.itemId.indexOf(id)];
	}	
};
Item.definePickaxe = function(id,texture,textureData,name,durability,damage,mSpeed,mLevel,val){
	ModPE.setItem(id,texture,textureData,name,1);
	Item.setCategory(id,ItemCategory.TOOL);
	Item.setMaxDamage(id,durability);
	Item.setHandEquipped(id,true);
	Item.setEnchantType(id, EnchantType.pickaxe, val);
	Pickaxe.itemsData.itemId.push(id);
	Pickaxe.itemsData.durability.push(durability);
	Pickaxe.itemsData.damage.push(damage-2);
	Pickaxe.itemsData.mSpeed.push(mSpeed);
	Pickaxe.itemsData.mLevel.push(mLevel);
};

Item.isPickaxe = function(id){
	if(Pickaxe.itemsData.itemId.indexOf(id)!==-1){
		return true;
	}
	else{
		return false;
	}
};


///# Shovels System #///
var Shovel = {
	blocksData:[{id:2,dTime:0.6},{id:3,dTime:0.5},{id:12,dTime:0.5},{id:13,dTime:0.6},{id:60,dTime:0.6},{id:78,dTime:0.1},{id:80,dTime:0.2},{id:82,dTime:0.6},{id:88,dTime:0.5},{id:110,dTime:0.6},{id:198,dTime:0.6},{id:243,dTime:0.6}],	
	itemsData:{itemId:[],durability:[],damage:[],dSpeed:[]},
	currentData:{itemId:null,durability:null,damage:null,dSpeed:null},
	setDestroyTimes:function(){
		for(var a in this.blocksData){
			Block.setDestroyTime(this.blocksData[a].id,this.blocksData[a].dTime / this.currentData.dSpeed);
		}
	},
	resetDestroyTimes:function(){
		for(var b in this.blocksData){
			Block.setDestroyTime(this.blocksData[b].id,this.blocksData[b].dTime);
		}
	},
	modTick:function(){
		if(Item.isShovel(Player.getCarriedItem())===true&&this.currentData.itemId!==Player.getCarriedItem()){
			this.currentData.itemId = Player.getCarriedItem();
			this.currentData.durability = this.getDurability(Player.getCarriedItem());
			this.currentData.damage = this.getDamage(Player.getCarriedItem());
			this.currentData.dSpeed = this.getDiggingSpeed(Player.getCarriedItem());
			this.setDestroyTimes();
		}
		else if(Item.isShovel(Player.getCarriedItem())===false&&this.currentData.itemId!==null){
			this.currentData.itemId = null;
			this.currentData.durability = null;
			this.currentData.damage = null;
			this.currentData.dSpeed = null;
			this.resetDestroyTimes();
		}			
	},
	destroyBlock:function(x,y,z,s){
		Item.setDamage(this.currentData.itemId,this.currentData.durability);
		switch(getTile(x,y,z)){
			case 78:Level.dropItem(x+0.5,y,z+0.5,0,332,1,0);break;
			case 80:Level.dropItem(x+0.5,y,z+0.5,0,332,4,0);break;
		}
	},
	useItem:function(x,y,z,i,b,s,iD,bD){
		if(b===2){
			Item.setDamage(this.currentData.itemId,this.currentData.durability);
			Level.playSound(x,y,z,"step.grass",16);
			setTile(x,y,z,198,0);
		}
	},
	attackHook:function(a,v){
		if(Entity.getHealth(v)>this.currentData.damage&&Entity.getHealth(v)>0){
			Entity.setHealth(v,Entity.getHealth(v)-this.currentData.damage);
			Item.setDamage(this.currentData.itemId,this.currentData.durability);
		}
		else if(Entity.getHealth(v)<=this.currentData.damage&&Entity.getHealth(v)>0){
			Entity.setHealth(v,1);
			Item.setDamage(this.currentData.itemId,this.currentData.durability);
		}
	},	
	getDurability:function(id){
		return this.itemsData.durability[this.itemsData.itemId.indexOf(id)];
	},
	getDamage:function(id){
		return this.itemsData.damage[this.itemsData.itemId.indexOf(id)];
	},
	getDiggingSpeed:function(id){
		return this.itemsData.dSpeed[this.itemsData.itemId.indexOf(id)];
	},
};
Item.defineShovel = function(id,texture,textureData,name,durability,damage,dSpeed,val){
	ModPE.setItem(id,texture,textureData,name,1);
	Item.setCategory(id,ItemCategory.TOOL);
	Item.setMaxDamage(id,durability);
	Item.setHandEquipped(id,true);
	Item.setEnchantType(id, EnchantType.shovel, val);
	Shovel.itemsData.itemId.push(id);
	Shovel.itemsData.durability.push(durability);
	Shovel.itemsData.damage.push(damage-2);
	Shovel.itemsData.dSpeed.push(dSpeed);
};

Item.isShovel = function(id){
	if(Shovel.itemsData.itemId.indexOf(id)!==-1){
		return true;
	}
	else{
		return false;
	}
};


///# Axes System #///
var Axe = {
	blocksData:[{id:5,dTime:2},{id:17,dTime:2},{id:43,dTime:2},{id:44,dTime:2},{id:47,dTime:1.5},{id:53,dTime:2},{id:54,dTime:2.5},{id:58,dTime:2.5},{id:63,dTime:1},{id:64,dTime:3},{id:65,dTime:0.4},{id:68,dTime:1},{id:85,dTime:2},{id:96,dTime:3},{id:107,dTime:2},{id:134,dTime:2},{id:135,dTime:2},{id:136,dTime:2},{id:157,dTime:2},{id:158,dTime:2},{id:162,dTime:2},{id:163,dTime:2},{id:164,dTime:2},{id:183,dTime:2},{id:184,dTime:2},{id:185,dTime:2},{id:186,dTime:2},{id:187,dTime:2}],
	itemsData:{itemId:[],durability:[],damage:[],cSpeed:[]},
	currentData:{itemId:null,durability:null,damage:null,cSpeed:null},
	setDestroyTimes:function(){
		for(var a in this.blocksData){
			Block.setDestroyTime(this.blocksData[a].id,this.blocksData[a].dTime / this.currentData.cSpeed);
		}
	},
	resetDestroyTimes:function(){
		for(var b in this.blocksData){
			Block.setDestroyTime(this.blocksData[b].id,this.blocksData[b].dTime);
		}
	},
	modTick:function(){
		if(Item.isAxe(Player.getCarriedItem())===true&&this.currentData.itemId!==Player.getCarriedItem()){
			this.currentData.itemId = Player.getCarriedItem();
			this.currentData.durability = this.getDurability(Player.getCarriedItem());
			this.currentData.damage = this.getDamage(Player.getCarriedItem());
			this.currentData.cSpeed = this.getChoppingSpeed(Player.getCarriedItem());
			this.setDestroyTimes();
		}
		else if(Item.isAxe(Player.getCarriedItem())===false&&this.currentData.itemId!==null){
			this.currentData.itemId = null;
			this.currentData.durability = null;
			this.currentData.damage = null;
			this.currentData.cSpeed = null;
			this.resetDestroyTimes();
		}			
	},
	destroyBlock:function(x,y,z,s){
		Item.setDamage(this.currentData.itemId,this.currentData.durability);
	},
	attackHook:function(a,v){
		if(Entity.getHealth(v)>this.currentData.damage&&Entity.getHealth(v)>0){
			Entity.setHealth(v,Entity.getHealth(v)-this.currentData.damage);
			Item.setDamage(this.currentData.itemId,this.currentData.durability);
		}
		else if(Entity.getHealth(v)<=this.currentData.damage&&Entity.getHealth(v)>0){
			Entity.setHealth(v,1);
			Item.setDamage(this.currentData.itemId,this.currentData.durability);
		}
	},	
	getDurability:function(id){
		return this.itemsData.durability[this.itemsData.itemId.indexOf(id)];
	},
	getDamage:function(id){
		return this.itemsData.damage[this.itemsData.itemId.indexOf(id)];
	},
	getChoppingSpeed:function(id){
		return this.itemsData.cSpeed[this.itemsData.itemId.indexOf(id)];
	},
};
Item.defineAxe = function(id,texture,textureData,name,durability,damage,cSpeed,val){
	ModPE.setItem(id,texture,textureData,name,1);
	Item.setCategory(id,ItemCategory.TOOL);
	Item.setMaxDamage(id,durability);
	Item.setHandEquipped(id,true);
	Item.setEnchantType(id, EnchantType.axe, val);
	Axe.itemsData.itemId.push(id);
	Axe.itemsData.durability.push(durability);
	Axe.itemsData.damage.push(damage-2);
	Axe.itemsData.cSpeed.push(cSpeed);
};

Item.isAxe = function(id){
	if(Axe.itemsData.itemId.indexOf(id)!==-1){
		return true;
	}
	else{
		return false;
	}
};


///# Hoes System #///
var Hoe = {
	itemsData:{itemId:[],durability:[]},	
	useItem:function(x,y,z,i,b,s,iD,bD){
		var SeedDrop = Math.round(Math.random());
		if((b===2||b===3||b===198)&&SeedDrop===0){
			Item.setDamage(i,this.getDurability(i));
			Level.playSound(x,y,z,"step.gravel",16);
			setTile(x,y,z,60,0);
		}
		else if((b===2||b===3||b===198)&&SeedDrop===1){
			Item.setDamage(i,this.getDurability(i));
			Level.playSound(x,y,z,"step.gravel",16);
			Level.dropItem(x+0.5,y+1,z+0.5,0,295,1,0);
			setTile(x,y,z,60,0);
		}
	},		
	getDurability:function(id){
		return this.itemsData.durability[this.itemsData.itemId.indexOf(id)];
	},
};
Item.defineHoe = function(id,texture,textureData,name,durability,val){
	ModPE.setItem(id,texture,textureData,name,1);
	Item.setCategory(id,ItemCategory.TOOL);
	Item.setMaxDamage(id,durability);
	Item.setHandEquipped(id,true);
	Item.setEnchantType(id, EnchantType.hoe, val);
	Hoe.itemsData.itemId.push(id);
	Hoe.itemsData.durability.push(durability);
};

Item.isHoe = function(id){
	if(Hoe.itemsData.itemId.indexOf(id)!==-1){
		return true;
	}
	else{
		return false;
	}
};

Player.giveEffect = function(effect, duration, amplifier){
	Entity.addEffect(getPlayerEnt(), effect, amplifier, duration * 20, false, false);
};

Item.getSwordType = function(id){
	for(var i in toolSet){
		if(toolSet[i].tools.sword == id){
			return toolSet[i].type;
		}
	}
};

Item.getArmorType = function(one, two, three, four){
	for(var a in armorSet){
		var i = armorSet[a];
		var armor = i.armor;
		if(armor.helmet == one && armor.chestplate == two && armor.legs == three && armor.boots == four){
			return i.type;
		}
	}
};

ModPE.getScriptNames = function(){
	var scripts = net.zhuoweizhang.mcpelauncher.ScriptManager.scripts;
	for(var i = 0; i < scripts.size(); i++){
		var script = scripts.get(i);
		return script.name;
	}
};

Item.setNameData = function(id, data, name){
	nameData.push({id: id, data: data, name: name});
};

Item.getNameData = function(id, data){
	for(var i in nameData){
		if(id == nameData[i].id && data == nameData[i].data){
			return nameData[i].name;
		}
	}
};

var OreGen = {
	chunkSize:32,
		oresData:[],	
		modTick:function(){
				/*switch(Player.getDimension()){
						case DimensionId.NORMAL:if(getTile(Player.getChunkX(this.chunkSize)*this.chunkSize,1,Player.getChunkZ(this.chunkSize)*this.chunkSize)!==247)this.generateChunk(Player.getChunkX(this.chunkSize)*this.chunkSize,Player.getChunkZ(this.chunkSize)*this.chunkSize,DimensionId.NORMAL,1);break;
						case DimensionId.NETHER:if(getTile(Player.getChunkX(this.chunkSize)*this.chunkSize,1,Player.getChunkZ(this.chunkSize)*this.chunkSize)!==247)this.generateChunk(Player.getChunkX(this.chunkSize)*this.chunkSize,Player.getChunkZ(this.chunkSize)*this.chunkSize,DimensionId.NETHER,87);break;
				}
		},
		generateChunk:function(x,z,dimension,source){
				setTile(x,1,z,247,0);
				for(var a in this.oresData){
						for(var b=0;Math.round(Math.random()*b<this.oresData[a].rarity);b++){
								if(this.oresData[a].dimension===dimension)
										this.generateVein(Math.round(x+(this.chunkSize/2)*this.chunkSize),this.oresData[a].minY+Math.round(Math.random()*(this.oresData[a].maxY-this.oresData[a].minY)),Math.round(z+(this.chunkSize/2)*this.chunkSize),this.oresData[a].id[0],this.oresData[a].id[1],source);				
						}
				}
		},
		generateVein:function(x,y,z,id,dmg,source){
			if(getTile(x,y,z)===source&&Math.round(Math.random())===1)
				setTile(x,y,z,id,dmg);*/
			
		}
};

Player.getChunkX = function(size){Math.round(Math.floor(Player.getX())/size);};
Player.getChunkZ = function(size){Math.round(Math.floor(Player.getZ())/size);};
Block.createOre = function(id,dmg,minY,maxY,rarity,dimension){
		OreGen.oresData.push({"id":[id,dmg],"minY":minY,"maxY":maxY,"rarity":rarity/2,"dimension":dimension});
};

Block.setBlock = function(id, name, texture, mat, render, dataCount, creativeinv){
	Block.defineBlock(id, name, texture, mat, false, render);
	Block.setLightOpacity(id, .000001);
	Block.setRenderLayer(id, .000001);
	if(creativeinv === true){
		Item.setCategory(id, ItemCategory.DECORATION);
		for(var i = 0; i <= dataCount; i++){
			Player.addItemCreativeInv(id, 1, i);
		}
	}
};

Item.createSet = function(id, ida, idb, idc, idd, type, baseDmg, baseSpeed, durability, tier, src, enchant){
	var t = type.replace(/\s/g, "_");
	var txt = t.toLowerCase();
	Item.definePickaxe(id, txt + "_pick", 0, type + " Pickaxe", durability, baseDmg + 1, baseSpeed, tier, src, enchant);
	Item.defineAxe(ida, txt + "_axe", 0, type + " Axe", durability, baseDmg + 2, baseSpeed, src, enchant);
	Item.defineSword(idb, txt + "_sword", 0, type + " Sword", durability, baseDmg + 5, src, enchant);
	Item.defineShovel(idc, txt + "_shovel", 0, type + " Shovel", durability, baseDmg, src, enchant);
	Item.defineHoe(idd, txt + "_hoe", 0, type + " Hoe", durability, src, enchant);
	toolSet.push({
					 type: type, tools: {
						 pickaxe: id, 
						 axe: ida, 
						 sword: idb, 
						 shovel: idc, 
						 hoe: idd
					 }
				 });
	for (var i = id; i <= idd; i++){
		Item.setCategory(i, ItemCategory.TOOL);
		Player.addItemCreativeInv(i, 5, 0);
	}
};

Item.setArmorSet =  function(ida, idb, idc, idd, type, prot, dmg){
	var t = type.replace(/\s/g, "_");
	var txt = t.toLowerCase();
	Item.defineArmor(ida, txt + "_helmet", 0, type + " Helmet", "mob/" + txt + "_layer_1.png", prot, dmg, 0);
	Item.defineArmor(idb, txt + "_chest", 0, type + " Chestplate", "mob/" + txt + "_layer_1.png", Math.round(prot * 2.75), dmg, ArmorType.chestplate);
	Item.defineArmor(idc, txt + "_legs", 0, type + " Leggings", "mob/" + txt + "_layer_2.png", Math.round(prot * 2), dmg, ArmorType.leggings);
	Item.defineArmor(idd, txt + "_boots", 0, type + " Boots", "mob/" + txt + "_layer_1.png", Math.round(prot * 1.5), dmg, ArmorType.boots);
	armorSet.push({
					  type: type, armor: {
						  helmet: ida,
						  chestplate: idb,
						  legs: idc,
						  boots: idd
					  }
				  });
	var Id = [ida, idb, idc, idd];
	for(var ii in Id){
		var i = Id[ii];
		Player.addItemCreativeInv(i, 5, 0);
	}
};

Item.setBlockItem = function(id, bId, bD, type, src){
	var t = type.replace(/\s/g, "_");
	var txt = t.toLowerCase();
	ModPE.setItem(id, txt, 0, type);
	blockItems.push({id: id, block: bId, bData: bD, src: src, type: type});
	Item.setCategory(id, ItemCategory.MATERIAL);
	Player.addItemCreativeInv(id, 5, 0);
};

ModPE.createRss = function(id, ida, type){
	var t = type.replace(/\s/g, "_");
	var txt = t.toLowerCase();
	ModPE.setItem(id, txt + "_ingot", 0, type + " Ingot");
	ModPE.setItem(ida, txt + "_dust", 0, type + " Dust");
	Item.addFurnaceRecipe(id, ida, 0);
	Item.addFurnaceRecipe(ida, id, 0);
	Item.setCategory(id, ItemCategory.TOOL);
	Item.setCategory(ida, ItemCategory.TOOL);
	Player.addItemCreativeInv(id, 5, 0);
	Player.addItemCreativeInv(ida, 5, 0);
};

Block.setTnt = function(id, texture, typeArray, explosionRatioArray, FUCKINGTNTAMOUNT){
	Block.defineBlock(id, "TNT", texture, 2, false, 0);
	Block.setDestroyTime(id, .5);
	Item.setCategory(id, ItemCategory.TOOL);
	for(var i = 0; i <= FUCKINGTNTAMOUNT; i++){
		Player.addItemCreativeInv(id, 1, i);
		tnt.push({blockId: id, dataValue: i, explosionRatio: explosionRatioArray[i], type: typeArray[i]});
	}
};

var mod = {
	netherPos: [],
	blocks: [],
	names: [],
	tnt: [],
	destroyBlock: function(x, y, z){
		var blockId = Level.getTile(x, y, z);
		var blockDat = Level.getData(x, y, z);
		for(var i in blocks){
			if(Level.getTile(x, y, z) == blocks[i].id && Level.getData(x, y, z) == blocks[i].dat){
				preventDefault();
				Level.destroyBlock(x, y, z, false);
				Level.dropItem(x, y + .025, z, 1, blocks[i].id, blocks[i].dat);
			}
		}
		for(var i in blockItems){
			if(blockId == blockItems[i].block && blockDat == blockItems[i].bData){
				Level.dropItem(x, y + .05, z, .025, blockItems[i].id, 1, 0);
			}
		}
		if(Item.isPickaxe(Player.getCarriedItem())){
			Item.setDamage(Pickaxe.currentData.itemId, Pickaxe.currentData.durability);
			switch(blockId){
				case 1:
					if(blockDat == 0){
						preventDefault();
						Level.setTile(x, y, z, 0);
						Level.playSoundEnt(getPlayerEnt(), "step.stone1", 100, 15);
						Level.dropItem(x, y + .025, z, .025, 4, 1, 0);
					}
					break;
			}
		}
		if(blockId == miscOre){
			for(var ia in metals.util){
				var i = metals.util[ia];
				if(blockDat == i.meta){
					var ran = Math.ceil(Math.random() * 3);
					preventDefault();
					Level.dropItem(x, y, z, .5, i.rssId, ran, 0);
					Level.setTile(x, y, z, 0);
				}
			}
		}
		switch(Level.getTile(x, y, z)){
			case overworldblock:
			case netherblock:
			case miscblock:
			case fanBlock:
			case overworldBrick:
			case netherBrick:
			case fanBrick:
			case tntID:
				var dropId = Level.getTile(x, y, z);
				var dropData = Level.getData(x, y, z);
				preventDefault();
				Level.setTile(x, y, z, 0);
				Level.dropItem(x, y, z, .25, dropId, 1, dropData);
		}
	},
	save: function(){
		str = "";
		for(var i in this.netherPos){
			var ore = netherPos[i];
			var pos = [ore.x, ore.y, ore.z];
			str += pos.join(",") + ";";
		}
		ModPE.saveFile("NetherOrePos.dat", str);
	},
	load: function(){
		var content = ModPE.loadFile("NetherOrePos.dat");
		var lines = content.splice(";");
		for(var i = 0; i <= lines.legnth; i++){
			var param = lines[i].splice(",");
			var x = parseInt(param[0]);
			var y = parseInt(param[1]);
			var z = parseInt(param[2]);
			if(x != NaN && y != NaN && z != NaN){
				this.netherPos.push({x: x, y: y, z: z});
			}
		}
	},
	useOn: function(x , y, z, itemId, blockId, side, itemDat, blockDat){
		var sides = [[x, y - 1, z], [x, y + 1, z], [x, y, z - 1], [x, y, z + 1], [x - 1, y, z], [x + 1, y, z]];
		if(blockId == tntID && metallurgy_tnt.isTntBlock(blockDat) && itemId == 259) {
			var blockTnt = metallurgy_tnt.getBlockByData(blockDat);
			blockTnt.spawnTNT(x, y, z);
			preventDefault();
		}
		switch(itemId){
			case customItems.fertilizer.id:
				switch(blockId){
					case 59:
					case 141:
					case 142:
					case 244:
						if(blockDat < 7){
							Level.setTile(x, y, z, blockId, blockDat + 1);
							Player.addItemInventory(customItems.fertilizer.id, -1, 0);
						}
						break;
				}
				break;
		}
		this.blockItems(x, y, z, itemId, itemDat, side, blockId);
	},
	blockItems: function(x, y, z, itemId, itemDat, side, blockId){
		var sides = [[x, y - 1, z], [x, y + 1, z], [x, y, z - 1], [x, y, z + 1], [x - 1, y, z], [x + 1, y, z]];
		for(var i in blockItems){
			if(isInteractive(blockId) === false && isOpaqueBlock(blockId) === false){
				if(blockItems[i].id == itemId){
					Level.setTile(sides[side][0], sides[side][1], sides[side][2], blockItems[i].block, blockItems[i].bData);
					Player.addItemInventory(itemId, -1, 0);
					Level.playSoundEnt(getPlayerEnt(), "step.stone1", 100, 15);
				}
			}
			else if(isOpaqueBlock(blockId) === true){
				if(blockItems[i].id == itemId){
					Level.setTile(x, y, z, blockItems[i].block, blockItems[i].bData);
					Player.addItemInventory(itemId, -1, 0);
					Level.playSoundEnt(getPlayerEnt(), "step.stone1", 100, 15);
				}
			}
		}
	},
	modTick: function(){
		metallurgy_tnt.tick();
		this.renameTick();
		if(armorSet){
			if(Player.getArmorSlot(0) == metals.fantasy.quicksilver.armorId[0] && Player.getArmorSlot(1) == metals.fantasy.quicksilver.armorId[1] && Player.getArmorSlot(2) == metals.fantasy.quicksilver.armorId[2] && Player.getArmorSlot(3) == metals.fantasy.quicksilver.armorId[3]){
				Player.giveEffect(MobEffect.movementSpeed, 1, 1);
			}
			else if(Player.getArmorSlot(0) == metals.fantasy.orichalcum.armorId[0] && Player.getArmorSlot(1) == metals.fantasy.orichalcum.armorId[1] && Player.getArmorSlot(2) == metals.fantasy.orichalcum.armorId[2] && Player.getArmorSlot(3) == metals.fantasy.orichalcum.armorId[3]){
				for(var time = 0; time <= 200; time++){
					if(time == 200){
						Player.setExhaustion(Player.getExhaustion() - 2);
					}
				}
			}
			else if(Player.getArmorSlot(0) == metals.fantasy.celenegil.armorId[0] && Player.getArmorSlot(1) == metals.fantasy.celenegil.armorId[1] && Player.getArmorSlot(2) == metals.fantasy.celenegil.armorId[2] && Player.getArmorSlot(3) == metals.fantasy.celenegil.armorId[3]){
				Entity.setMaxHealth(getPlayerEnt(), Entity.getMaxHealth(getPlayerEnt()) + 2);
			}
		}
	},
	renameTick: function(){
		switch(Player.getCarriedItem()){
			case overworldblock:
			case fanBlock:
			case netherblock:
			case miscblock:
			case overworldBrick:
			case fanBrick:
			case netherBrick:
			case miscBrick:
				for(var i in metals){
					for(var ii in metals[i]){
						var m = metals[i][ii];
						if(m.blockMeta == Player.getCarriedItemData()){
							if(m.metalBlock == Player.getCarriedItem()){
								ModPE.langEdit("tile.block.name", "Block of " + m.name);
							}
							else if(m.brickBlock == Player.getCarriedItem()){
								ModPE.langEdit("tile.brick.name", "Brick of " + m.name);
							}
						}
					}
				}
				break;
			case tntID:
				for(var i in tnt){
					if(i == Player.getCarriedItemData()){
						ModPE.langEdit("tile.TNT.name", tnt[i].type);
					}
				}
				break;
			default:
				ModPE.langEdit("tile.block.name", "Block of Metal");
		}
	},
	attackHook: function(m, v){
		var x = Entity.getX(v), y = Entity.getY(v), z = Entity.getZ(v);
		this.armorHook(m, v);
		var chance = Math.ceil(Math.random() * 4);
		if(getPlayerEnt() == m){
			var itemId = Player.getCarriedItem();
			if(Item.isSword(itemId) === true){
				switch(Item.getSwordType(itemId)){
					case "Quicksilver":
						if(chance == 1){
							Player.giveEffect(MobEffect.movementSpeed, 1, 5);
						}
						break;
					case "Haderoth":
						if(chance == 1){
							Entity.setVelX(v, -5);
							Entity.setVelZ(v, -5);
						}
						break;
					case "Orichalcum":
						if(chance == 1){
							Entity.addEffect(v, MobEffect.confusion, 1, 5, false, true);
						}
						break;
					case "Adamantine":
						if(chance == 1){
							Entity.setCarriedItem(getPlayerEnt(), Player.getCarriedItem(), 1, Player.getCarriedItemData() - 1);
						}
						break;
					case "Atlarus":
						if(chance == 1){
							Entity.setHealth(v, Entity.getHealth(v) - (Sword.getDamage(itemId) / 4));
						}
						break;
					case "Tartarite":
						if(chance == 1){
							Entity.setFireTicks(v, 8 * 20);
							Entity.addEffect(v, MobEffect.weakness, 4, 5 * 20, false, true);
						}
						break;
				}
			}
		}
		else if(Entity.getEntityTypeId(m) != EntityType.FIREBALL && getPlayerEnt() == v){
			var armor = Item.getArmorType(Player.getArmorSlot(0), Player.getArmorSlot(1), Player.getArmorSlot(2), Player.getArmorSlot(3));
			if(Item.isSword(Player.getCarriedItem()) === true){
				switch(Item.getSwordType(Player.getCarriedItem())){
					case "Oureclase":
						if(chance == 1){
							Entity.setHealth(getPlayerEnt(), Entity.getHealth(getPlayerEnt()) + (Sword.getDamage(Player.getCarriedItem()) / 4));
						}
						break;
				}
			}
			if(chance == 1){
				switch(armor){
					case "Oureclase":
						Entity.setHealth(v, Entity.getHealth(v) + (metals.overworld.oureclase.prot / 4));
						break;
					case "Adamantine":
						var arm = Math.floor(Math.random() * 3);
						if(Player.getArmorSlotDamage(arm) != 0){
							Player.setArmorSlot(arm, Player.getArmorSlot(arm), Player.getArmorSlotDamage(arm) - 1);
						}
						break;
					case "Tartarite":
						Entity.setFireTicks(m, 5 * 20);
						Entity.addEffect(m, MobEffect.weakness, 5, 10 * 20, false, false);
						break;
				}
			}
		}
	},
	death: function(m, v){
		var x = Entity.getX(v), y = Entity.getY(v), z = Entity.getZ(v);
		if(getPlayerEnt() == m){
			if(Item.isSword(Player.getCarriedItem()) === true){
				switch(Item.getSwordType(Player.getCarriedItem())){
					case "Astral Silver":
						Looting(x, y, z, Entity.getEntityTypeId(v));
						break;
					case "Carmot":
						Level.spawnMob(x, y, z, EntityType.EXPERIENCE_POTION);
						break;
				}
			}
		}
	},
	armorHook: function(m, v){
		var chance = Math.ceil(Math.random() * 4);
		var armor = Item.getArmorType(Player.getArmorSlot(0), Player.getArmorSlot(1), Player.getArmorSlot(2), Player.getArmorSlot(3));
		if(chance == 1){
			if(getPlayerEnt() == m){
				switch(armor){
					case "Atlarus":
						Entity.setHealth(v, Math.round((Entity.getHealth(v) - (Sword.getDamage(Player.getCarriedItem()) / 4))));
						break;
				}
			}
		}
	}
};

function BlockTNT(data, name, tickLength, type) {
	this.id = data;
	this.name = name;
	this.tick = tickLength;
	this.type = type;
	
	this.getFormattedName = function() {
		var sName = this.name;
		if(sName.indexOf("Â§") != -1)
			sName = sName.slice(2);
		if(sName.indexOf(" ") != -1)
			sName = sName.replace(" ", "");
		return sName;
	};
	
	this.formattedName = this.getFormattedName();
	
	this.explode = function(x, y, z) {};
	
	this.spawnTNT = function(x, y, z) {
		setTile(x, y, z, 0);
		Level.playSound(x, y, z, "random.fuse", 30, 1);
		metallurgy_tnt.activeTNTs.push(new PrimedTNTEntity(x + 0.5, y, z + 0.5, this));
	};
	
	this.getSpawnTex = function() {
		return "mob/tnt/" + this.formattedName + ".png";
	};
	
	metallurgy_tnt.blockIds.push(this.id);
	metallurgy_tnt.blocks[this.id] = this;
	metallurgy_tnt[this.formattedName] = this;
}


//  --PrimedTNTEntity Class--

function PrimedTNTEntity(x, y, z, block) {
	this.startX = x;
	this.startY = y;
	this.startZ = z;
	this.x = x;
	this.y = y;
	this.z = z;
	this.block = block;
	this.floating = block.type == metallurgy_tnt.TntType.Floating;
	this.disappearing = block.type == metallurgy_tnt.TntType.Disappearing;
	this.finalTick = block.tick;
	this.currentTick = 0;
	this.velX = 0;
	this.velY = 0;
	this.velZ = 0;
	this.arrayId = 0;
	
	this.spawnInWorld = function(tex) {
		this.tntEntity = Level.spawnMob(this.x, this.y, this.z, 15, tex);
		Entity.setRenderType(this.tntEntity, metallurgy_tnt.TntRenderer.renderType);
	};
	
	this.finalize = function() {
		this.remove();
		if(this.floating)
			this.y = this.startY;
		this.savePos(Math.round(this.x), Math.round(this.y), Math.round(this.z));
		metallurgy_tnt.checkTNT(this.x, this.y, this.z, 3);
		this.block.explode(this.x, this.y, this.z);
	};
	
	this.setVelocity = function(x, y, z) {
		Entity.setVelX(this.tntEntity, x);
		Entity.setVelY(this.tntEntity, y);
		Entity.setVelZ(this.tntEntity, z);
	};
	
	this.setAndSaveVelocity = function(x, y, z) {
		this.setVelocity(x, y, z);
		this.saveVelocity(x, y, z);
	};
	
	this.saveVelocity = function(x, y, z) {
		this.velX = x;
		this.velY = y;
		this.velZ = z;
	};
	
	this.saveVelocitiesFromGame = function() {
		this.saveVelocity(Entity.getVelX(this.tntEntity), Entity.getVelY(this.tntEntity), Entity.getVelZ(this.tntEntity));
	};
	
	this.setVelocitiesFromSave = function() {
		this.setVelocity(this.velX, this.velY, this.velZ);	
	};
	
	this.setPos = function(x, y, z) {
		Entity.setPosition(this.tntEntity, x, y, z);
	};
	
	this.setAndSavePos = function(x, y, z) {
		this.setPos(x, y, z);
		this.savePos(x, y, z);
	};
	
	this.savePos = function(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;		
	};
	
	this.savePosFromGame = function() {
		this.savePos(Entity.getX(this.tntEntity), Entity.getY(this.tntEntity), Entity.getZ(this.tntEntity));
	};
	
	this.setPosFromSave = function() {
		this.setPos(this.x, this.y, this.z);
	};
	
	this.saveYFromGame = function() {
		this.saveVelocity(0, Entity.getVelY(this.tntEntity), 0);
		this.savePos(this.x, Entity.getY(this.tntEntity), this.z);
	};
	
	this.setStandardProperties = function() {
		Entity.setRot(this.tntEntity, 0, 0);
		Entity.setHealth(this.tntEntity, 30000);
	};
	
	this.remove = function() {
		if(!this.disappearing)
			Entity.remove(this.tntEntity);
		metallurgy_tnt.activeTNTs.splice(this.arrayId, 1);
	};
	
	this.disappearingTick = function() {
		if (this.currentTick >= 30) {
			this.x -= 0.07;
			this.z -= 0.07;
			Level.addParticle(3, this.x, this.y + 1, this.z, 0, 0, 0, 100);
		}
	}

	this.normalTick = function() {
		Level.addParticle(3, this.x, this.y + 1, this.z, 0, 0, 0, 100);
		if(!this.floating) {
			if(this.currentTick < 10) {
				this.saveVelocitiesFromGame();
				this.savePosFromGame();
			}
			else {
				this.saveYFromGame();
			}
		}
		else { // if floating
			this.saveVelocity(0, 0.15, 0);
		}
		this.setStandardProperties();
		this.setVelocitiesFromSave();
		if(this.currentTick > 0) {
			if (this.currentTick % 10 == 0) {
				Entity.remove(this.tntEntity);
				this.spawnInWorld("mob/Flash.png");
				this.setVelocitiesFromSave();
			} else if (this.currentTick % 5 == 0) {
				Entity.remove(this.tntEntity);
				this.spawnInWorld(this.block.getSpawnTex());
				this.setVelocitiesFromSave();
			}
		}
	};
	
	this.tick = function(arrayId) {
		this.id = arrayId; // save the current array id
		
		if(this.currentTick == this.finalTick) { // if time to explode
			this.finalize();
		} 
		
		else { // do the normal tick
			if(this.disappearing) {
				this.disappearingTick();
			}
			else {
				this.normalTick();
			}
			this.currentTick++;
		}
	};
	
	if(!this.disappearing) {
		this.spawnInWorld(this.block.getSpawnTex());
		this.setAndSaveVelocity((Math.random() * 0.2) - 0.1, 0.2, (Math.random() * 0.2) - 0.1);
	}
}


// --metallurgy_tnt Class--
 
var metallurgy_tnt = {
	blockIds: [],
	blocks: [],
	activeTNTs: [],
	
	TntType: {
		Regular: 0,
		Floating: 1,
		Disappearing: 2
	},
	
	init: function() {
		this.initBlocks();
		this.initRenderer();
	},
	
	initBlocks: function() {
		new BlockTNT(0, "death", 100, this.TntType.Regular);
		new BlockTNT(1, "high", 100, this.TntType.Regular);
		new BlockTNT(2, "light", 100, this.TntType.Regular);
		new BlockTNT(3, "miners", 100, this.TntType.Regular);
		new BlockTNT(4, "precision", 100, this.TntType.Regular);
	},
	
	initRenderer: function() {
		this.TntRenderer = Renderer.createHumanoidRenderer();
		var model = this.TntRenderer.getModel();
		var head = model.getPart("head");
		var body = model.getPart("body");
		var rArm = model.getPart("rightArm");
		var lArm = model.getPart("leftArm");
		var rLeg = model.getPart("rightLeg");
		var lLeg = model.getPart("leftLeg");
		head.clear();
		body.clear();
		body.setTextureOffset(0, 0);
		body.addBox(-8, 8, -8, 16, 16, 16);
		rArm.clear();
		lArm.clear();
		rLeg.clear();
		lLeg.clear();
	},
	
	tick: function() {
		if(this.isActive) {
			for(var t = 0; t < this.activeTNTs.length; t++) {
				this.activeTNTs[t].tick(t);
			}
		}	
	},
	
	isTntBlock: function(data) {
		return this.blockIds.indexOf(data) != -1;
	},
	getBlockByData: function(id) {
		return this.blocks[id];
	},
	
	isActive: function() {
		return this.activeTNTs.length != 0;
	},
	
	checkTNT: function (x, y, z, r) {
		for (var a = -r; a < r; a++) {
			for (var b = -r; b < r; b++) {
				for (var c = -r; c < r; c++) {
					if(Level.getTile(x + a, y + b, z+ c) == tntID && this.isTntBlock(Level.getData(x + a, y + b, z + c))) {
						var blockTnt = this.getBlockById(getTile(x + a, y + b, z + c));
						blockTnt.spawnTNT(x + a, y + b, z + c);
					}
				}
			}
		}
	},
	
	getLowY: function(x, z) {
		for (var y = 120; y > 0; y--) {
			if ((getTile(x, y, z) != 0) && (getTile(x, y, z) != 31)) {
				return y;
				break;
			}
		}
	},
	
	baseExplode: function(x, y, z, radius) {
		this.explode(x, y, z, radius, radius, radius, 8, 4);
	},
	
	explode: function(x, y, z, radiusX, radiusY, radiusZ, baseRadius, interval) {
		for (var m = -radiusX; m < radiusX; m += interval) {
			for (var n = -radiusY; n < radiusY; n += interval) {
				for (var o = -radiusZ; o < radiusZ; o += interval) {
					if ((m * m) + (n * n) + (o * o) <= (radiusX * radiusZ)) {
						explode(x + m, y + n, z + o, baseRadius);
					}
				}
			}
		}
	}
};


//  --init--

metallurgy_tnt.init();

metallurgy_tnt.death.explode = function(x, y, z){
	explode(x, y, z, 5);
};

metallurgy_tnt.high.explode = function(x, y, z){
	metallurgy_tnt.baseExplode(x, y, z, 7);
};

metallurgy_tnt.light.explode = function(x, y, z){
	explode(x, y, z, 3);
};

metallurgy_tnt.miners.explode = function(x, y, z){
	explode(x, y - 1, z, 4);
};

metallurgy_tnt.precision.explode = function(x, y, z){
	explode(x, y + 2, z, 3);
	explode(x, y - 2, z, 3);
};

function Looting(x, y, z, ent){
	switch(ent){
		case EntityType.BLAZE:
			Level.dropItem(x, y, z, 1, 369, 1, 0);
			break;
		case EntityType.CAVE_SPIDER:
			Level.dropItem(x, y, z, 1, 375, 1, 0);
			Level.dropItem(x, y, z, 1, 287, 1, 0);
			break;
		case EntityType.CHICKEN:
			Level.dropItem(x, y, z, 1, 365, 1, 0);
			Level.dropItem(x, y, z, 1, 288, 1, 0);
			break;
		case EntityType.COW:
			Level.dropItem(x, y, z, 1, 363, 1, 0);
			Level.dropItem(x, y, z, 1, 334, 1, 0);
			break;
		case EntityType.CREEPER:
			Level.dropItem(x, y, z, 1, 289, 1, 0);
			break;
		case EntityType.ENDERMAN:
			if(ModPE.getScriptNames() == "NerdCraft2"){
				Level.dropItem(x, y, z, 1, 368, 1, 0);
			}
			break;
		case EntityType.GHAST:
			Level.dropItem(x, y, z, 1, 370, 1, 0);
			Level.dropItem(x, y, z, 1, 289, 1, 0);
			break;
		case EntityType.IRON_GOLEM:
			Level.dropItem(x, y, z, 1, 265, 1, 0);
			Level.dropItem(x, y, z, 1, 38, 1, 0);
			break;
		case EntityType.LAVA_SLIME:
			Level.dropItem(x, y, z, 1, 378, 1, 0);
			break;
		case EntityType.MUSHROOM_COW:
			Level.dropItem(x, y, z, 1, 40, 1, 0);
			Level.dropItem(x, y, z, 1, 363, 1, 0);
			Level.dropItem(x, y, z, 1, 334, 1, 0);
			break;
		case EntityType.PIG:
			Level.dropItem(x, y, z, 1, 319, 1, 0);
			break;
		case EntityType.PIG_ZOMBIE:
			Level.dropItem(x, y, z, 1, 371, 2, 0);
			break;
		case EntityType.RABBIT:
			Level.dropItem(x, y, z, 1, 441, 1, 0);
			Level.dropItem(x, y, z, 1, 414, 1, 0);
			Level.dropItem(x, y, z, 1, 415, 1, 0);
			break;
		case EntityType.SHEEP:
			Level.dropItem(x, y, z, 1, 35, 1, 0);
			break;
		case EntityType.SKELETON:
			Level.dropItem(x, y, z, 1, 352, 1, 0);
			Level.dropItem(x, y, z, 1, 262, 1, 0);
			break;
		case EntityType.SLIME:
			Level.dropItem(x, y, z, 1, 341, 1, 0);
			break;
		case EntityType.SNOW_GOLEM:
			Level.dropItem(x, y, z, 1, 332, 1, 0);
			break;
		case EntityType.SPIDER:
			Level.dropItem(x, y, z, 1, 375, 1, 0);
			Level.dropItem(x, y, z, 1, 287, 1, 0);
			break;
		case EntityType.SQUID:
			Level.dropItem(x, y, z, 1, 351, 2, 0);
			break;
		case EntityType.ZOMBIE:
			Level.dropItem(x, y, z, 1, 288, 1, 0);
			Level.dropItem(x, y, z, 1, 367, 1, 0);
			break;
		case EntityType.ZOMBIE_VILLAGER:
			Level.dropItem(x, y, z, 1, 367, 1, 0);
			break;
	}
}

Block.setBlock(overworldOre, "ore", [
	["copper_ore", 0], ["copper_ore", 0], ["copper_ore", 0], ["copper_ore", 0], ["copper_ore", 0], ["copper_ore", 0],
	["manganese_ore", 0], ["manganese_ore", 0], ["manganese_ore", 0], ["manganese_ore", 0], ["manganese_ore", 0], ["manganese_ore", 0], 
	["tin_ore", 0], ["tin_ore", 0], ["tin_ore", 0], ["tin_ore", 0], ["tin_ore", 0], ["tin_ore", 0],
	["adamantine_ore", 0], ["adamantine_ore", 0], ["adamantine_ore", 0], ["adamantine_ore", 0], ["adamantine_ore", 0], ["adamantine_ore", 0], 
	["astral_silver_ore", 0], ["astral_silver_ore", 0], ["astral_silver_ore", 0], ["astral_silver_ore", 0], ["astral_silver_ore", 0], ["astral_silver_ore", 0], 
	["atlarus_ore", 0], ["atlarus_ore", 0], ["atlarus_ore", 0], ["atlarus_ore", 0], ["atlarus_ore", 0], ["atlarus_ore", 0], 
	["carmot_ore", 0], ["carmot_ore", 0], ["carmot_ore", 0], ["carmot_ore", 0], ["carmot_ore", 0], ["carmot_ore", 0], 
	["deep_iron_ore", 0], ["deep_iron_ore", 0], ["deep_iron_ore", 0], ["deep_iron_ore", 0], ["deep_iron_ore", 0], ["deep_iron_ore", 0], 
	["infuscolium_ore", 0], ["infuscolium_ore", 0], ["infuscolium_ore", 0], ["infuscolium_ore", 0], ["infuscolium_ore", 0], ["infuscolium_ore", 0], 
	["mithril_ore", 0], ["mithril_ore", 0], ["mithril_ore", 0], ["mithril_ore", 0], ["mithril_ore", 0], ["mithril_ore", 0], 
	["orichalcum_ore", 0], ["orichalcum_ore", 0], ["orichalcum_ore", 0], ["orichalcum_ore", 0], ["orichalcum_ore", 0], ["orichalcum_ore", 0], 
	["oureclase_ore", 0], ["oureclase_ore", 0], ["oureclase_ore", 0], ["oureclase_ore", 0], ["oureclase_ore", 0], ["oureclase_ore", 0], 
	["prometheum_ore", 0], ["prometheum_ore", 0], ["prometheum_ore", 0], ["prometheum_ore", 0], ["prometheum_ore", 0], ["prometheum_ore", 0], 
	["rubracium_ore", 0], ["rubracium_ore", 0], ["rubracium_ore", 0], ["rubracium_ore", 0], ["rubracium_ore", 0], ["rubracium_ore", 0]
], 1, 0);
Block.setDestroyTime(overworldOre, 3);

Block.setBlock(miscOre, "ore", [
	["zinc_ore", 0], ["zinc_ore", 0], ["zinc_ore", 0], ["zinc_ore", 0], ["zinc_ore", 0], ["zinc_ore", 0], 
	["silver_ore", 0], ["silver_ore", 0], ["silver_ore", 0], ["silver_ore", 0], ["silver_ore", 0], ["silver_ore", 0], 
	["platinum_ore", 0], ["platinum_ore", 0], ["platinum_ore", 0], ["platinum_ore", 0], ["platinum_ore", 0], ["platinum_ore", 0],
	["bitumen_ore", 0], ["bitumen_ore", 0], ["bitumen_ore", 0], ["bitumen_ore", 0], ["bitumen_ore", 0], ["bitumen_ore", 0],
	["magnesium_ore", 0], ["magnesium_ore", 0], ["magnesium_ore", 0], ["magnesium_ore", 0], ["magnesium_ore", 0], ["magnesium_ore", 0], 
	["phosphorite_ore", 0], ["phosphorite_ore", 0], ["phosphorite_ore", 0], ["phosphorite_ore", 0], ["phosphorite_ore", 0], ["phosphorite_ore", 0], 
	["potash_ore", 0], ["potash_ore", 0], ["potash_ore", 0], ["potash_ore", 0], ["potash_ore", 0], ["potash_ore", 0], 
	["saltpeter_ore", 0], ["saltpeter_ore", 0], ["saltpeter_ore", 0], ["saltpeter_ore", 0], ["saltpeter_ore", 0], ["saltpeter_ore", 0], 
	["sulfur_ore", 0], ["sulfur_ore", 0], ["sulfur_ore", 0], ["sulfur_ore", 0], ["sulfur_ore", 0], ["sulfur_ore", 0]
], 1, 0);
Block.setDestroyTime(miscOre, 3);

Block.setBlock(netherOre, "ore", [
	["alduorite_ore", 0], ["alduorite_ore", 0], ["alduorite_ore", 0], ["alduorite_ore", 0], ["alduorite_ore", 0], ["alduorite_ore", 0], 
	["ceruclase_ore", 0], ["ceruclase_ore", 0], ["ceruclase_ore", 0], ["ceruclase_ore", 0], ["ceruclase_ore", 0], ["ceruclase_ore", 0], 
	["ignatius_ore", 0], ["ignatius_ore", 0], ["ignatius_ore", 0], ["ignatius_ore", 0], ["ignatius_ore", 0], ["ignatius_ore", 0], 
	["kalendrite_ore", 0], ["kalendrite_ore", 0], ["kalendrite_ore", 0], ["kalendrite_ore", 0], ["kalendrite_ore", 0], ["kalendrite_ore", 0], 
	["lemurite_ore", 0], ["lemurite_ore", 0], ["lemurite_ore", 0], ["lemurite_ore", 0], ["lemurite_ore", 0], ["lemurite_ore", 0], 
	["midasium_ore", 0], ["midasium_ore", 0], ["midasium_ore", 0], ["midasium_ore", 0], ["midasium_ore", 0], ["midasium_ore", 0], 
	["sanguinite_ore", 0], ["sanguinite_ore", 0], ["sanguinite_ore", 0], ["sanguinite_ore", 0], ["sanguinite_ore", 0], ["sanguinite_ore", 0], 
	["shadow_iron_ore", 0], ["shadow_iron_ore", 0], ["shadow_iron_ore", 0], ["shadow_iron_ore", 0], ["shadow_iron_ore", 0], ["shadow_iron_ore", 0], 
	["vulcanite_ore", 0], ["vulcanite_ore", 0], ["vulcanite_ore", 0], ["vulcanite_ore", 0], ["vulcanite_ore", 0], ["vulcanite_ore", 0], 
	["vyroxeres_ore", 0], ["vyroxeres_ore", 0], ["vyroxeres_ore", 0], ["vyroxeres_ore", 0], ["vyroxeres_ore", 0], ["vyroxeres_ore", 0]
], 1, 0);
Block.setDestroyTime(netherOre, 3);
			
Block.setBlock(overworldblock, "block", [
	["copper_block", 0], ["copper_block", 0], ["copper_block", 0], ["copper_block", 0], ["copper_block", 0], ["copper_block", 0],
	["manganese_block", 0], ["manganese_block", 0], ["manganese_block", 0], ["manganese_block", 0], ["manganese_block", 0], ["manganese_block", 0], 
	["tin_block", 0], ["tin_block", 0], ["tin_block", 0], ["tin_block", 0], ["tin_block", 0], ["tin_block", 0],
	["steel_block", 0], ["steel_block", 0], ["steel_block", 0], ["steel_block", 0], ["steel_block", 0], ["steel_block", 0], 
	["bronze_block", 0], ["bronze_block", 0], ["bronze_block", 0], ["bronze_block", 0], ["bronze_block", 0], ["bronze_block", 0], 
	["angmallen_block", 0], ["angmallen_block", 0], ["angmallen_block", 0], ["angmallen_block", 0], ["angmallen_block", 0], ["angmallen_block", 0], 
	["damascus_steel_block", 0], ["damascus_steel_block", 0], ["damascus_steel_block", 0], ["damascus_steel_block", 0], ["damascus_steel_block", 0], ["damascus_steel_block", 0], 
	["hepatizon_block", 0], ["hepatizon_block", 0], ["hepatizon_block", 0], ["hepatizon_block", 0], ["hepatizon_block", 0], ["hepatizon_block", 0]
], 1, 0, 7, true);
Block.setDestroyTime(overworldblock, 3);

Block.setBlock(fanBlock, "block", [
	["adamantine_block", 0], ["adamantine_block", 0], ["adamantine_block", 0], ["adamantine_block", 0], ["adamantine_block", 0], ["adamantine_block", 0], 
	["astral_silver_block", 0], ["astral_silver_block", 0], ["astral_silver_block", 0], ["astral_silver_block", 0], ["astral_silver_block", 0], ["astral_silver_block", 0], 
	["atlarus_block", 0], ["atlarus_block", 0], ["atlarus_block", 0], ["atlarus_block", 0], ["atlarus_block", 0], ["atlarus_block", 0], 
	["carmot_block", 0], ["carmot_block", 0], ["carmot_block", 0], ["carmot_block", 0], ["carmot_block", 0], ["carmot_block", 0], 
	["deep_iron_block", 0], ["deep_iron_block", 0], ["deep_iron_block", 0], ["deep_iron_block", 0], ["deep_iron_block", 0], ["deep_iron_block", 0], 
	["infuscolium_block", 0], ["infuscolium_block", 0], ["infuscolium_block", 0], ["infuscolium_block", 0], ["infuscolium_block", 0], ["infuscolium_block", 0], 
	["mithril_block", 0], ["mithril_block", 0], ["mithril_block", 0], ["mithril_block", 0], ["mithril_block", 0], ["mithril_block", 0], 
	["orichalcum_block", 0], ["orichalcum_block", 0], ["orichalcum_block", 0], ["orichalcum_block", 0], ["orichalcum_block", 0], ["orichalcum_block", 0], 
	["oureclase_block", 0], ["oureclase_block", 0], ["oureclase_block", 0], ["oureclase_block", 0], ["oureclase_block", 0], ["oureclase_block", 0], 
	["prometheum_block", 0], ["prometheum_block", 0], ["prometheum_block", 0], ["prometheum_block", 0], ["prometheum_block", 0], ["prometheum_block", 0], 
	["rubracium_block", 0], ["rubracium_block", 0], ["rubracium_block", 0], ["rubracium_block", 0], ["rubracium_block", 0], ["rubracium_block", 0],
	["black_steel_block", 0], ["black_steel_block", 0], ["black_steel_block", 0], ["black_steel_block", 0], ["black_steel_block", 0], ["black_steel_block", 0], 
	["celenegil_block", 0], ["celenegil_block", 0], ["celenegil_block", 0], ["celenegil_block", 0], ["celenegil_block", 0], ["celenegil_block", 0], 
	["haderoth_block", 0], ["haderoth_block", 0], ["haderoth_block", 0], ["haderoth_block", 0], ["haderoth_block", 0], ["haderoth_block", 0], 
	["quicksilver_block", 0], ["quicksilver_block", 0], ["quicksilver_block", 0], ["quicksilver_block", 0], ["quicksilver_block", 0], ["quicksilver_block", 0],
	["tartarite_block", 0], ["tartarite_block", 0], ["tartarite_block", 0], ["tartarite_block", 0], ["tartarite_block", 0], ["tartarite_block", 0]
], 1, 0, 15, true);
Block.setDestroyTime(fanBlock, 3);

Block.setBlock(miscblock, "block", [
	["zinc_block", 0], ["zinc_block", 0], ["zinc_block", 0], ["zinc_block", 0], ["zinc_block", 0], ["zinc_block", 0], 
	["silver_block", 0], ["silver_block", 0], ["silver_block", 0], ["silver_block", 0], ["silver_block", 0], ["silver_block", 0], 
	["platinum_block", 0], ["platinum_block", 0], ["platinum_block", 0], ["platinum_block", 0], ["platinum_block", 0], ["platinum_block", 0],
	["brass_block", 0], ["brass_block", 0], ["brass_block", 0], ["brass_block", 0], ["brass_block", 0], ["brass_block", 0], 
	["electrum_block", 0], ["electrum_block", 0], ["electrum_block", 0], ["electrum_block", 0], ["electrum_block", 0], ["electrum_block", 0], 
	["bitumen_block", 0], ["bitumen_block", 0], ["bitumen_block", 0], ["bitumen_block", 0], ["bitumen_block", 0], ["bitumen_block", 0],
	["magnesium_block", 0], ["magnesium_block", 0], ["magnesium_block", 0], ["magnesium_block", 0], ["magnesium_block", 0], ["magnesium_block", 0], 
	["phosphorite_block", 0], ["phosphorite_block", 0], ["phosphorite_block", 0], ["phosphorite_block", 0], ["phosphorite_block", 0], ["phosphorite_block", 0], 
	["potash_block", 0], ["potash_block", 0], ["potash_block", 0], ["potash_block", 0], ["potash_block", 0], ["potash_block", 0], 
	["saltpeter_block", 0], ["saltpeter_block", 0], ["saltpeter_block", 0], ["saltpeter_block", 0], ["saltpeter_block", 0], ["saltpeter_block", 0], 
	["sulfur_block", 0], ["sulfur_block", 0], ["sulfur_block", 0], ["sulfur_block", 0], ["sulfur_block", 0], ["sulfur_block", 0]
], 1, 0, 10, true);
Block.setDestroyTime(miscblock, 3);

Block.setBlock(netherblock, "block", [
	["alduorite_block", 0], ["alduorite_block", 0], ["alduorite_block", 0], ["alduorite_block", 0], ["alduorite_block", 0], ["alduorite_block", 0], 
	["ceruclase_block", 0], ["ceruclase_block", 0], ["ceruclase_block", 0], ["ceruclase_block", 0], ["ceruclase_block", 0], ["ceruclase_block", 0], 
	["ignatius_block", 0], ["ignatius_block", 0], ["ignatius_block", 0], ["ignatius_block", 0], ["ignatius_block", 0], ["ignatius_block", 0], 
	["kalendrite_block", 0], ["kalendrite_block", 0], ["kalendrite_block", 0], ["kalendrite_block", 0], ["kalendrite_block", 0], ["kalendrite_block", 0], 
	["lemurite_block", 0], ["lemurite_block", 0], ["lemurite_block", 0], ["lemurite_block", 0], ["lemurite_block", 0], ["lemurite_block", 0], 
	["midasium_block", 0], ["midasium_block", 0], ["midasium_block", 0], ["midasium_block", 0], ["midasium_block", 0], ["midasium_block", 0], 
	["sanguinite_block", 0], ["sanguinite_block", 0], ["sanguinite_block", 0], ["sanguinite_block", 0], ["sanguinite_block", 0], ["sanguinite_block", 0], 
	["shadow_iron_block", 0], ["shadow_iron_block", 0], ["shadow_iron_block", 0], ["shadow_iron_block", 0], ["shadow_iron_block", 0], ["shadow_iron_block", 0], 
	["vulcanite_block", 0], ["vulcanite_block", 0], ["vulcanite_block", 0], ["vulcanite_block", 0], ["vulcanite_block", 0], ["vulcanite_block", 0], 
	["vyroxeres_block", 0], ["vyroxeres_block", 0], ["vyroxeres_block", 0], ["vyroxeres_block", 0], ["vyroxeres_block", 0], ["vyroxeres_block", 0],
	["amordrine_block", 0], ["amordrine_block", 0], ["amordrine_block", 0], ["amordrine_block", 0], ["amordrine_block", 0], ["amordrine_block", 0], 
	["inolashite_block", 0], ["inolashite_block", 0], ["inolashite_block", 0], ["inolashite_block", 0], ["inolashite_block", 0], ["inolashite_block", 0],
	["shadow_steel_block", 0], ["shadow_steel_block", 0], ["shadow_steel_block", 0], ["shadow_steel_block", 0], ["shadow_steel_block", 0], ["shadow_steel_block", 0]
], 1, 0, 12, true);
Block.setDestroyTime(netherblock, 3);

Block.setBlock(overworldBrick, "brick", [
	["copper_brick", 0], ["copper_brick", 0], ["copper_brick", 0], ["copper_brick", 0], ["copper_brick", 0], ["copper_brick", 0],
	["manganese_brick", 0], ["manganese_brick", 0], ["manganese_brick", 0], ["manganese_brick", 0], ["manganese_brick", 0], ["manganese_brick", 0], 
	["tin_brick", 0], ["tin_brick", 0], ["tin_brick", 0], ["tin_brick", 0], ["tin_brick", 0], ["tin_brick", 0],
	["steel_brick", 0], ["steel_brick", 0], ["steel_brick", 0], ["steel_brick", 0], ["steel_brick", 0], ["steel_brick", 0], 
	["bronze_brick", 0], ["bronze_brick", 0], ["bronze_brick", 0], ["bronze_brick", 0], ["bronze_brick", 0], ["bronze_brick", 0], 
	["angmallen_brick", 0], ["angmallen_brick", 0], ["angmallen_brick", 0], ["angmallen_brick", 0], ["angmallen_brick", 0], ["angmallen_brick", 0], 
	["damascus_steel_brick", 0], ["damascus_steel_brick", 0], ["damascus_steel_brick", 0], ["damascus_steel_brick", 0], ["damascus_steel_brick", 0], ["damascus_steel_brick", 0], 
	["hepatizon_brick", 0], ["hepatizon_brick", 0], ["hepatizon_brick", 0], ["hepatizon_brick", 0], ["hepatizon_brick", 0], ["hepatizon_brick", 0]
], 1, 0, 7, true);
Block.setDestroyTime(overworldBrick, 3);

Block.setBlock(fanBrick, "brick", [
	["adamantine_brick", 0], ["adamantine_brick", 0], ["adamantine_brick", 0], ["adamantine_brick", 0], ["adamantine_brick", 0], ["adamantine_brick", 0], 
	["astral_silver_brick", 0], ["astral_silver_brick", 0], ["astral_silver_brick", 0], ["astral_silver_brick", 0], ["astral_silver_brick", 0], ["astral_silver_brick", 0], 
	["atlarus_brick", 0], ["atlarus_brick", 0], ["atlarus_brick", 0], ["atlarus_brick", 0], ["atlarus_brick", 0], ["atlarus_brick", 0], 
	["carmot_brick", 0], ["carmot_brick", 0], ["carmot_brick", 0], ["carmot_brick", 0], ["carmot_brick", 0], ["carmot_brick", 0], 
	["deep_iron_brick", 0], ["deep_iron_brick", 0], ["deep_iron_brick", 0], ["deep_iron_brick", 0], ["deep_iron_brick", 0], ["deep_iron_brick", 0], 
	["infuscolium_brick", 0], ["infuscolium_brick", 0], ["infuscolium_brick", 0], ["infuscolium_brick", 0], ["infuscolium_brick", 0], ["infuscolium_brick", 0], 
	["mithril_brick", 0], ["mithril_brick", 0], ["mithril_brick", 0], ["mithril_brick", 0], ["mithril_brick", 0], ["mithril_brick", 0], 
	["orichalcum_brick", 0], ["orichalcum_brick", 0], ["orichalcum_brick", 0], ["orichalcum_brick", 0], ["orichalcum_brick", 0], ["orichalcum_brick", 0], 
	["oureclase_brick", 0], ["oureclase_brick", 0], ["oureclase_brick", 0], ["oureclase_brick", 0], ["oureclase_brick", 0], ["oureclase_brick", 0], 
	["prometheum_brick", 0], ["prometheum_brick", 0], ["prometheum_brick", 0], ["prometheum_brick", 0], ["prometheum_brick", 0], ["prometheum_brick", 0], 
	["rubracium_brick", 0], ["rubracium_brick", 0], ["rubracium_brick", 0], ["rubracium_brick", 0], ["rubracium_brick", 0], ["rubracium_brick", 0],
	["black_steel_brick", 0], ["black_steel_brick", 0], ["black_steel_brick", 0], ["black_steel_brick", 0], ["black_steel_brick", 0], ["black_steel_brick", 0], 
	["celenegil_brick", 0], ["celenegil_brick", 0], ["celenegil_brick", 0], ["celenegil_brick", 0], ["celenegil_brick", 0], ["celenegil_brick", 0], 
	["haderoth_brick", 0], ["haderoth_brick", 0], ["haderoth_brick", 0], ["haderoth_brick", 0], ["haderoth_brick", 0], ["haderoth_brick", 0], 
	["quicksilver_brick", 0], ["quicksilver_brick", 0], ["quicksilver_brick", 0], ["quicksilver_brick", 0], ["quicksilver_brick", 0], ["quicksilver_brick", 0],
	["tartarite_brick", 0], ["tartarite_brick", 0], ["tartarite_brick", 0], ["tartarite_brick", 0], ["tartarite_brick", 0], ["tartarite_brick", 0]
], 1, 0, 15, true);
Block.setDestroyTime(fanBrick, 3);

Block.setBlock(miscBrick, "brick", [
	["zinc_brick", 0], ["zinc_brick", 0], ["zinc_brick", 0], ["zinc_brick", 0], ["zinc_brick", 0], ["zinc_brick", 0], 
	["silver_brick", 0], ["silver_brick", 0], ["silver_brick", 0], ["silver_brick", 0], ["silver_brick", 0], ["silver_brick", 0], 
	["platinum_brick", 0], ["platinum_brick", 0], ["platinum_brick", 0], ["platinum_brick", 0], ["platinum_brick", 0], ["platinum_brick", 0],
	["brass_brick", 0], ["brass_brick", 0], ["brass_brick", 0], ["brass_brick", 0], ["brass_brick", 0], ["brass_brick", 0], 
	["electrum_brick", 0], ["electrum_brick", 0], ["electrum_brick", 0], ["electrum_brick", 0], ["electrum_brick", 0], ["electrum_brick", 0]
], 1, 0, 4, true);
Block.setDestroyTime(miscBrick, 3);

Block.setBlock(netherBrick, "brick", [
	["alduorite_brick", 0], ["alduorite_brick", 0], ["alduorite_brick", 0], ["alduorite_brick", 0], ["alduorite_brick", 0], ["alduorite_brick", 0], 
	["ceruclase_brick", 0], ["ceruclase_brick", 0], ["ceruclase_brick", 0], ["ceruclase_brick", 0], ["ceruclase_brick", 0], ["ceruclase_brick", 0], 
	["ignatius_brick", 0], ["ignatius_brick", 0], ["ignatius_brick", 0], ["ignatius_brick", 0], ["ignatius_brick", 0], ["ignatius_brick", 0], 
	["kalendrite_brick", 0], ["kalendrite_brick", 0], ["kalendrite_brick", 0], ["kalendrite_brick", 0], ["kalendrite_brick", 0], ["kalendrite_brick", 0], 
	["lemurite_brick", 0], ["lemurite_brick", 0], ["lemurite_brick", 0], ["lemurite_brick", 0], ["lemurite_brick", 0], ["lemurite_brick", 0], 
	["midasium_brick", 0], ["midasium_brick", 0], ["midasium_brick", 0], ["midasium_brick", 0], ["midasium_brick", 0], ["midasium_brick", 0], 
	["sanguinite_brick", 0], ["sanguinite_brick", 0], ["sanguinite_brick", 0], ["sanguinite_brick", 0], ["sanguinite_brick", 0], ["sanguinite_brick", 0], 
	["shadow_iron_brick", 0], ["shadow_iron_brick", 0], ["shadow_iron_brick", 0], ["shadow_iron_brick", 0], ["shadow_iron_brick", 0], ["shadow_iron_brick", 0], 
	["vulcanite_brick", 0], ["vulcanite_brick", 0], ["vulcanite_brick", 0], ["vulcanite_brick", 0], ["vulcanite_brick", 0], ["vulcanite_brick", 0], 
	["vyroxeres_brick", 0], ["vyroxeres_brick", 0], ["vyroxeres_brick", 0], ["vyroxeres_brick", 0], ["vyroxeres_brick", 0], ["vyroxeres_brick", 0],
	["amordrine_brick", 0], ["amordrine_brick", 0], ["amordrine_brick", 0], ["amordrine_brick", 0], ["amordrine_brick", 0], ["amordrine_brick", 0], 
	["inolashite_brick", 0], ["inolashite_brick", 0], ["inolashite_brick", 0], ["inolashite_brick", 0], ["inolashite_brick", 0], ["inolashite_brick", 0],
	["shadow_steel_brick", 0], ["shadow_steel_brick", 0], ["shadow_steel_brick", 0], ["shadow_steel_brick", 0], ["shadow_steel_brick", 0], ["shadow_steel_brick", 0]
	], 1, 0);
Block.setDestroyTime(netherBrick, 3);

Block.setTnt(tntID, [
	["de_tnt_top", 0], ["de_tnt_top", 0], ["de_tnt_side", 0], ["de_tnt_side", 0], ["de_tnt_side", 0], ["de_tnt_side", 0], 
	["he_tnt_top", 0], ["he_tnt_top", 0], ["he_tnt_side", 0], ["he_tnt_side", 0], ["he_tnt_side", 0], ["he_tnt_side", 0],
	["le_tnt_top", 0], ["le_tnt_top", 0], ["le_tnt_side", 0], ["le_tnt_side", 0], ["le_tnt_side", 0], ["le_tnt_side", 0],
	["m_tnt_top", 0], ["m_tnt_top", 0], ["m_tnt_side", 0], ["m_tnt_side", 0], ["m_tnt_side", 0], ["m_tnt_side", 0],
	["pe_tnt_top", 0], ["pe_tnt_top", 0], ["pe_tnt_side", 0], ["pe_tnt_side", 0], ["pe_tnt_side", 0], ["pe_tnt_side", 0]
], ["Death Explosives", "High Explosives", "Light Explosives", "Miners' Explosives", "Precision Explosives"], [4, 12, 5, 3, 5], 4);

	
//This is where my lazy a** starts to work
//Some people actually called it efficient so... let's roll with it
function loadItems(){
	for(var i in metals){
		for(var l in metals[i]){
			var o = metals[i][l];
			if(o.type != "Drop"){
				ModPE.createRss(o.rssId[0], o.rssId[1], o.name);
				if(o.hasTool === true){
					Item.createSet(o.toolsId[0], o.toolsId[1], o.toolsId[2], o.toolsId[3], o.toolsId[4], o.name, o.dmg, o.speed, o.durability.tool, o.blockLvl, o.rssId[0], o.enchant);
					Item.addShapedRecipe(o.toolsId[0], 1, 0, ["mmm", " s ", " s "], ["m", o.rssId[0], 0, "s", 280, 0]);
					Item.addShapedRecipe(o.toolsId[1], 1, 0, ["mm ", "ms ", " s "], ["m", o.rssId[0], 0, "s", 280, 0]);
					Item.addShapedRecipe(o.toolsId[2], 1, 0, [" m ", " m ", " s "], ["m", o.rssId[0], 0, "s", 280, 0]);
					Item.addShapedRecipe(o.toolsId[3], 1, 0, [" m ", " s ", " s "], ["m", o.rssId[0], 0, "s", 280, 0]);
					Item.addShapedRecipe(o.toolsId[4], 1, 0, ["mm ", " s ", " s "], ["m", o.rssId[0], 0, "s", 280, 0]);
					/*Item.setArmorSet(o.armorId[0], o.armorId[1], o.armorId[2], o.armorId[3], o.name, o.prot, o.durability.armor);
					Item.addShapedRecipe(o.armorId[0], 1, 0, ["mmm", "m m", ""], ["m", o.rssId[0], 0]);
					Item.addShapedRecipe(o.armorId[1], 1, 0, ["m m", "mmm", "mmm"], ["m", o.rssId[0], 0]);
					Item.addShapedRecipe(o.armorId[2], 1, 0, ["mmm", "m m", "m m"], ["m", o.rssId[0], 0]);
					Item.addShapedRecipe(o.armorId[3], 1, 0, ["", "m m", "m m"], ["m", o.rssId[0], 0]);*/
				}
				if(o.type == "Ore"){
					var g = o.generation;
					if(o.dimensions == "Nether"){
						Block.createOre(o.bId, o.bD, g[2], g[1], g[0], DimensionId.NETHER);
					} 
					else if(o.dimensions == "Overworld"){
						Block.createOre(o.bId, o.bD, g[2], g[1], g[0], DimensionId.NORMAL);
					}
					Item.setBlockItem(o.blockId, o.bId, o.bD, o.name + " Ore", o.rssId[0]);
				}
			} 
			else if(o.type == "Drop"){
				for(var ii in metals.util){
					var u = metals.util[ii];
					var g = metals.util[ii].generation;
					var t = u.name.replace(/\s/g, "_");
					var txt = t.toLowerCase();
					ModPE.setItem(u.rssId, txt, 0, u.name);
					Item.setCategory(u.rssId, ItemCategory.TOOL);
					Player.addItemCreativeInv(u.rssId, 5, 0);
					Block.createOre(miscOre, u.meta, g[3], g[2], g[0], DimensionId.NORMAL);
				}
			}
		}
	}
}

function initOreRec(){
	for(var c in blockItems){
		Item.addFurnaceRecipe(blockItems[c].id, blockItems[c].src, 0);
	}
	for(var i in metals){
		for(var ii in metals[i]){
			if(metals[i][ii].type == "Alloy"){
				var o = metals[i][ii];
				Item.addShapedRecipe(o.rssId[1], 2, 0, ["", " sh", ""], ["s", o.alloyRecipe[0], 0, "h", o.alloyRecipe[1], 0]);
			}
		}
	}
}

function initMetalBlocks(){
	for(var i in metals){
		for(var ii in metals[i]){
			var o = metals[i][ii];
			if(o.type != "Drop"){
				Item.addShapedRecipe(o.brickBlock, 1, o.blockMeta, ["mm ", "mm ", "   "], ["m", o.rssId[0], 0]);
				Item.addShapedRecipe(o.rssId[0], 4, 0, ["   ", " m ", "   "], ["m", o.brickBlock, o.blockMeta]);
				Item.addShapedRecipe(o.metalBlock, 1, o.blockMeta, ["mmm", "mmm", "mmm"], ["m", o.rssId[0], 0]);
				Item.addShapedRecipe(o.rssId[0], 9, 0, ["   ", " m ", "   "], ["m", o.metalBlock, o.blockMeta]);
			} else {
				Item.addShapedRecipe(o.metalBlock, 1, o.blockMeta, ["mmm", "mmm", "mmm"], ["m", o.rssId, 0]);
				Item.addShapedRecipe(o.rssId, 9, 0, ["   ", " m ", "   "], ["m", o.metalBlock, o.blockMeta]);
			}
		}
	}
}

function initCustomNonMetalItems(){
	for(var i in customItems){
		var c = customItems[i];
		var txt = (c.name.replace(/\s/g, "_")).toLowerCase();
		ModPE.setItem(c.id, txt, 0, c.name);
		Item.setCategory(c.id, ItemCategory.DECORATION);
		Player.addItemCreativeInv(c.id, 1, 0);
		switch(c.recipeType){
			case 'crafting':
				Item.addShapedRecipe(c.id, c.count, 0, c.recipeOrder, c.recipe);
				break;
		}
	}
}

function InitAlternateSlimeRecipes(){
	Item.addShapedRecipe(378, 1, 0, ["   ", " s ", " b "], ["s", customItems.tar.id, 0, "b", 377, 0]);
}

loadItems();
initOreRec();
initMetalBlocks();
initCustomNonMetalItems();
InitAlternateSlimeRecipes();
Item.addFurnaceRecipe(metals.util.bitumen.rssId, customItems.tar.id,0);
