const lootbag_texture = "kubejs:example_item.png"

// Loot tables
const common_loot_table = [
    {
        "weight": 100,
        "min": 1,
        "max": 32,
        "item": "minecraft:coal"
    }
]

// Reward function

/**
 * Weighted random
 * @param entries an array of objects, where each object contains a number in the field weight 
 * @returns a random object based on the weights withing them
 */
const weightedRandom = function (entries) {
    let total = 0
    for (let i = 0; i < entries.length; i++) {
        total += entries[i].weight
    }
    let random = Math.random() * total
    for (let i = 0; i < entries.length; i++) {
        if (random < entries[i].weight) {
            return entries[i]
        }
        random -= entries[i].weight
    }
    return entries[entries.length - 1]
}

const giveReward = function (player, loot) {
    console.log(player)
    player.give(Item.of(loot.item, Math.floor(Math.random() * (loot.max - loot.min + 1) + loot.min)))
}

/** 
 * Gives the player a random amount of items from the provided loot table
 * @param player the player to give the loot to
 * @param loot_table the loot table to use, an array of loot entries, a loot entry should consist of a weight, a min and max, and an item, if the weight is 0, some amount is guarenteed unless not enough draws are made
 * @param draw_count the amount of draws to make
 * @param luck_modifier a number of 1 or more, the higher the number, the stronger we equalize the loot table weights
 */
const giveRewards = function (player, loot_table, draw_count, luck_modifier) {

    let processed_loot_table = JSON.parse(JSON.stringify(loot_table))
    let guarenteed_loot = []

    for (let i = 0; i < processed_loot_table.length; i++) {
        // If the weight is 0, move it to the guarenteed loot
        if (processed_loot_table[i].weight == 0) {
            processed_loot_table.queue_ticket = Math.random()
            guarenteed_loot.push(processed_loot_table[i])
            processed_loot_table.splice(i, 1)
            i--
        }
        // Set the weight to the log-x of its current value where x is the luck modifier
        processed_loot_table[i].weight = Math.log(processed_loot_table[i].weight) / Math.log(luck_modifier)
    }

    guarenteed_loot.sort((a, b) => a.queue_ticket - b.queue_ticket)

    console.log("Prepared loot tables!\nProcessed loot: " + JSON.stringify(processed_loot_table) + "\nGuarenteed loot: " + JSON.stringify(guarenteed_loot))

    for (let i = 0; i < draw_count; i++) {
        if (guarenteed_loot.length > 0) {
            giveReward(player, guarenteed_loot.pop())
            continue
        }

        giveReward(player, weightedRandom(processed_loot_table))
    }
}

const createLootBagItem = function (event, id, color, name, loot_table, draw_count) {
    event.create('lootbag_common')
        .displayName('Loot Bag (Common)')
        // Visuals
        .texture(lootbag_texture)
        .color(color)
        // Stack size
        .maxStackSize(16)
        // Use
        .useAnimation("block")
        .useDuration(itemstack => 1)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            console.log("Giving rewards to player!")
            giveRewards(entity, loot_table, draw_count, (itemstack.nbt && itemstack.nbt.contains("luck_modifier")) ? itemstack.nbt.getInt("luck_modifier") : 1)
        })
}

StartupEvents.registry('item', event => {
    // Common lootbag
    createLootBagItem(event, "lootbag_common", Color.LIGHT_GRAY_DYE, "Loot Bag (Common)", common_loot_table, 2)
});