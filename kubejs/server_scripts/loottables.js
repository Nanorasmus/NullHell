LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:spawner").addLoot("terramity:accursed_soul");

    event.addEntityLootModifier("corundumguardian:corundum_guardian").addLoot("terramity:five_thousand_magnum","terramity:conductite_upgrade_smithing_template").addWeightedLoot(
        [16, 64],
        [Item.of("terramity:circuit_board").withChance(25),Item.of("terramity:iridium").withChance(25),Item.of("alexscaves:fissile_core").withChance(5),
            Item.of("terramity:conductite").withChance(2)
        ]).addWeightedLoot(
            [5, 30],[Item.of("architects_palette:entrails").withChance(50)]);
        
    event.addEntityLootModifier("terramity:dungeon_effigy","terramity:dungeon_sentry").removeLoot("terramity:spire_key")

    event.addEntityLootModifier("warriorsofpastepoch:skeleton_musketeer").removeLoot("warriorsofpastepoch:musket");
    event.addEntityLootModifier("warriorsofpastepoch:skeleton_musketeer").removeLoot("warriorsofpastepoch:musket");
            
 event.addEntityLootModifier("alexsmobs:seagull","minecraft:bat").addWeightedLoot([1, 5],[Item.of("alexscaves:guano").withChance(50)])

 event.addEntityLootModifier("species:birt").addWeightedLoot([1, 2],[Item.of("terramity:electronic_scrap").withChance(50)])

 event.addEntityLootModifier("species:birt").addWeightedLoot(1, [
    Item.of("confluence:radar").withChance(5),
    Item.of("terramity:electronic_scrap").withChance(95),
 ]);
});

ItemEvents.entityInteracted(event => {
    if(event.item.id != "kubejs:hell_key") {

        return
    }
    event.item.shrink(1)
    let entityName = event.getTarget().entityType
    if(entityName == "entity.terramity.trial_guardian") {
    event.server.tell("oh...")
    let guardian = event.target.block.createEntity("corundumguardian:corundum_guardian")
    guardian.spawn()
    event.target.teleportTo(0, -10000, 0)
    event.target.kill()
    }
})