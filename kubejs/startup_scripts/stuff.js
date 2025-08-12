StartupEvents.registry('item', event =>{
    //items
    event.create('complex_gun_mechanism').displayName('§fComplex Gun Mechanism')
    event.create('infimetal').displayName('§fInfimetal')
    event.create('magnetic_powder').displayName('§fMagnetic Powder')
    event.create('incomplete_copper_round').displayName('§fIncomplete Copper Round')
    event.create('incomplete_gold_round').displayName('§fIncomplete Gold Round')
    event.create('incomplete_iridium_round').displayName('§fIncomplete Iridium Round')
    event.create('incomplete_dimlite_round').displayName('§fIncomplete Echo Round')
    event.create('incomplete_antimatter_round').displayName('§fIncomplete Antimatter Round')
    event.create('hell_key').displayName('§fHell Key')
})

StartupEvents.registry('fluid', event =>{
    event.create('black_death')
    .stillTexture("kubejs:block/black_death_still") 
    .flowingTexture("kubejs:block/black_death_flow")
    .noBucket()
    .noBlock()

    event.create('serum_decay')
    .stillTexture("kubejs:block/serum_decay_still") 
    .flowingTexture("kubejs:block/serum_decay_flow")
    .noBucket()
    .noBlock()

    event.create('bacteria_serum')
    .stillTexture("kubejs:block/bacteria_serum_still") 
    .flowingTexture("kubejs:block/bacteria_serum_flow")
    .noBucket()
    .noBlock()

    event.create('serum_pestilence')
    .stillTexture("kubejs:block/serum_pestilence_still") 
    .flowingTexture("kubejs:block/serum_pestilence_flow")
    .noBucket()
    .noBlock()

    event.create('morbidity_concentrate')
    .stillTexture("kubejs:block/concentrate_still") 
    .flowingTexture("kubejs:block/concentrate_flow")
    .noBucket()
    .noBlock()
})
