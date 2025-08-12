ServerEvents.recipes(event => {
	event.recipes.farmersdelight.cutting(
        "netherexp:hogham",
        "#forge:tools/knives", // tool
        [ // results
            "2x mynethersdelight:hoglin_loin",
            Item.of("mynethersdelight:hoglin_loin")
                .withChance(0.1)
        ],
        // "" // sound
	);
})