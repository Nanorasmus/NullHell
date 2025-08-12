ServerEvents.recipes(e => {

  e.recipes.create.crushing(['kubejs:magnetic_powder', Item.of('kubejs:infimetal').withChance(0.25)], 'kubejs:infimetal').processingTime(1000)
})

ServerEvents.recipes(e => {
e.recipes.create.mixing('alexscaves:ferrouslime_ball', ['kubejs:magnetic_powder','3x minecraft:iron_nugget','minecraft:slime_ball']).heated()
})
ServerEvents.recipes(e => {
e.recipes.create.sequenced_assembly([
  Item.of('16x terramity:copper_round').withChance(100.0)
], 'create:copper_sheet', [
  e.recipes.createCutting('kubejs:incomplete_copper_round', ['kubejs:incomplete_copper_round']),
  e.recipes.createDeploying('kubejs:incomplete_copper_round', ['kubejs:incomplete_copper_round', 'minecraft:gunpowder']),
      e.recipes.createDeploying('kubejs:incomplete_copper_round', ['kubejs:incomplete_copper_round', 'minecraft:iron_nugget']),
      e.recipes.createPressing('kubejs:incomplete_copper_round', ['kubejs:incomplete_copper_round'])
  ]).transitionalItem('kubejs:incomplete_copper_round').loops(1)
  
  
  e.recipes.create.sequenced_assembly([
  Item.of('16x terramity:gold_round').withChance(100.0)
], 'create:golden_sheet', [
  e.recipes.createCutting('kubejs:incomplete_gold_round', ['kubejs:incomplete_gold_round']),
  e.recipes.createDeploying('kubejs:incomplete_gold_round', ['kubejs:incomplete_gold_round', 'minecraft:gunpowder']),
      e.recipes.createDeploying('kubejs:incomplete_gold_round', ['kubejs:incomplete_gold_round', '#forge:nuggets/copper']),
      e.recipes.createPressing('kubejs:incomplete_gold_round', ['kubejs:incomplete_gold_round'])
  ]).transitionalItem('kubejs:incomplete_gold_round').loops(1)

  e.recipes.create.sequenced_assembly([
    Item.of('48x terramity:dimlite_round').withChance(100.0)
  ], 'terramity:dimlite_ingot', [
    e.recipes.createCutting('kubejs:incomplete_dimlite_round', ['kubejs:incomplete_dimlite_round']),
    e.recipes.createDeploying('kubejs:incomplete_dimlite_round', ['kubejs:incomplete_dimlite_round', 'minecraft:gunpowder']),
        e.recipes.createDeploying('kubejs:incomplete_dimlite_round', ['kubejs:incomplete_dimlite_round', 'minecraft:iron_nugget']),
        e.recipes.createPressing('kubejs:incomplete_dimlite_round', ['kubejs:incomplete_dimlite_round']),
        e.recipes.createPressing('kubejs:incomplete_dimlite_round', ['kubejs:incomplete_dimlite_round'])
    ]).transitionalItem('kubejs:incomplete_dimlite_round').loops(1)

    e.recipes.create.sequenced_assembly([
      Item.of('16x terramity:iridium_round').withChance(100.0)
    ], 'terramity:iridium_chunk', [
      e.recipes.createCutting('kubejs:incomplete_iridium_round', ['kubejs:incomplete_iridium_round']),
      e.recipes.createDeploying('kubejs:incomplete_iridium_round', ['kubejs:incomplete_iridium_round', 'minecraft:gunpowder']),
          e.recipes.createDeploying('kubejs:incomplete_iridium_round', ['kubejs:incomplete_iridium_round', 'minecraft:iron_nugget']),
          e.recipes.createPressing('kubejs:incomplete_iridium_round', ['kubejs:incomplete_iridium_round']),
          e.recipes.createPressing('kubejs:incomplete_iridium_round', ['kubejs:incomplete_iridium_round'])
      ]).transitionalItem('kubejs:incomplete_iridium_round').loops(1)
   
      e.recipes.create.sequenced_assembly([
        Item.of('16x terramity:antimatter_round').withChance(100.0)
      ], 'terramity:void_alloy', [
        e.recipes.createCutting('kubejs:incomplete_antimatter_round', ['kubejs:incomplete_antimatter_round']),
        e.recipes.createDeploying('kubejs:incomplete_antimatter_round', ['kubejs:incomplete_antimatter_round', 'minecraft:gunpowder']),
            e.recipes.createDeploying('kubejs:incomplete_antimatter_round', ['kubejs:incomplete_antimatter_round', 'minecraft:iron_nugget']),
            e.recipes.createPressing('kubejs:incomplete_antimatter_round', ['kubejs:incomplete_antimatter_round']),
            e.recipes.createPressing('kubejs:incomplete_antimatter_round', ['kubejs:incomplete_antimatter_round'])
        ]).transitionalItem('kubejs:incomplete_antimatter_round').loops(1)
        

        e.recipes.create.sequenced_assembly([
          Item.of('kubejs:complex_gun_mechanism').withChance(100.0)
        ], 'terramity:advanced_gun_parts', [
          e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:netherite_scrap']),
              e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'terramity:daemonium']),
              e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:golden_sheet']),
              e.recipes.createPressing('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism']),
          ]).transitionalItem('create:incomplete_precision_mechanism').loops(2)


  e.recipes.create.sequenced_assembly([
  Item.of('alexscaves:notor_gizmo').withChance(100.0)
], 'create:sturdy_sheet', [
  e.recipes.createDeploying('alexscaves:game_controller', ['alexscaves:game_controller', 'alexscaves:raw_azure_neodymium']),
      e.recipes.createDeploying('alexscaves:game_controller', ['alexscaves:game_controller', 'alexscaves:raw_scarlet_neodymium']),
      e.recipes.createDeploying('alexscaves:game_controller', ['alexscaves:game_controller', 'minecraft:glass']),
      e.recipes.createPressing('alexscaves:game_controller', ['alexscaves:game_controller'])
  ]).transitionalItem('alexscaves:game_controller').loops(1)          

e.recipes.create.sequenced_assembly([
  Item.of('terramity:spire_key').withChance(100.0)
], 'terramity:dimlite_upgrade_smithing_template', [
  e.recipes.createDeploying('alexscaves:game_controller', ['alexscaves:game_controller', 'minecraft:diamond']),
      e.recipes.createDeploying('alexscaves:game_controller', ['alexscaves:game_controller', 'minecraft:diamond']),
      e.recipes.createPressing('alexscaves:game_controller', ['alexscaves:game_controller'])
  ]).transitionalItem('alexscaves:game_controller').loops(2)          

e.recipes.create.sequenced_assembly([
  Item.of('terramity:spire_key').withChance(100.0)
], 'terramity:virentium_upgrade_smithing_template', [
  e.recipes.createDeploying('alexscaves:game_controller', ['alexscaves:game_controller', 'minecraft:diamond']),
      e.recipes.createDeploying('alexscaves:game_controller', ['alexscaves:game_controller', 'minecraft:diamond']),
      e.recipes.createPressing('alexscaves:game_controller', ['alexscaves:game_controller'])
  ]).transitionalItem('alexscaves:game_controller').loops(2)     

})
ServerEvents.recipes(e => {
e.recipes.create.sequenced_assembly([
Item.of('terramity:basic_pistol').withChance(80.0),
Item.of('create:iron_sheet').withChance(10.0),
Item.of('8x minecraft:iron_nugget').withChance(10.0)
], 'terramity:flintlock_pistol', [
e.recipes.createDeploying('terramity:flintlock_pistol', ['terramity:flintlock_pistol', 'create:iron_sheet']),
    e.recipes.createDeploying('terramity:flintlock_pistol', ['terramity:flintlock_pistol', 'create:sturdy_sheet']),
    e.recipes.createPressing('terramity:flintlock_pistol', ['terramity:flintlock_pistol'])
]).transitionalItem('terramity:flintlock_pistol').loops(2)
})
ServerEvents.recipes(e => {
  e.recipes.create.splashing('9x caverns_and_chasms:silver_nugget', 'create:crushed_raw_silver')
})

ServerEvents.recipes(e => {
e.recipes.create.splashing([Item.of('alexscaves:pewen_branch').withChance(0.05), Item.of('alexscaves:ancient_sapling').withChance(0.05),
  Item.of('alexscaves:flytrap').withChance(0.05), Item.of('alexscaves:curly_fern').withChance(0.05), Item.of('alexscaves:cycad').withChance(0.05),
  Item.of('alexscaves:pewen_sapling').withChance(0.05),Item.of('alexscaves:pewen_pines').withChance(0.05), Item.of('alexscaves:archaic_vine').withChance(0.05),
  Item.of('alexscaves:pine_nuts').withChance(0.05)], 'minecraft:rooted_dirt')

  e.recipes.create.compacting('alexscaves:pewen_sap', '3x alexscaves:stripped_pewen_log')

  e.recipes.create.filling(Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:primordial_caves"}'), [Fluid.of('alexscaves:acid',(250)), 'alexscaves:amber_curiosity'])

  e.recipes.create.filling(Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:abyssal_chasm"}'), [Fluid.of('alexscaves:acid',(250)), 'minecraft:nautilus_shell'])

  e.recipes.create.filling(Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:forlorn_hollows"}'), [Fluid.of('alexscaves:acid',(250)), 'alexscaves:guano_block'])

  e.recipes.create.filling(Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:toxic_caves"}'), [Fluid.of('alexscaves:acid',(250)), 'alexscaves:uranium'])

  e.recipes.create.filling(Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:magnetic_caves"}'), [Fluid.of('alexscaves:acid',(250)), 'alexscaves:raw_scarlet_neodymium'])
  e.recipes.create.filling(Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:magnetic_caves"}'), [Fluid.of('alexscaves:acid',(250)), 'alexscaves:raw_azure_neodymium'])
  
  e.recipes.create.haunting('warriorsofpastepoch:moldy_cheese', 'terramity:moonstone_rock')

  e.recipes.create.haunting([Item.of('alexscaves:vallumraptor_egg').withChance(0.005), Item.of('alexscaves:subterranodon_egg').withChance(0.005),
    Item.of('alexscaves:grottoceratops_egg').withChance(0.005), Item.of('alexscaves:relicheirus_egg').withChance(0.005), Item.of('alexscaves:tremorsaurus_egg').withChance(0.005),
    Item.of('alexscaves:atlatitan_egg').withChance(0.005)],'alexscaves:amber_curiosity')

    e.recipes.create.mixing(['8x alexscaves:sulfur_dust'],[Fluid.water(250), '8x spelunkery:rough_cinnabar']).heated()

   
      e.recipes.create.emptying([Fluid.of('alexscaves:acid',(1000)), 'alexscaves:metal_barrel'], 'alexscaves:waste_drum')

      e.recipes.create.emptying([Fluid.of('terramity:stygian_blood',(1000)), 'minecraft:bucket'], 'terramity:stygian_blood_bucket')
      e.recipes.create.emptying([Fluid.of('kubejs:morbidity_concentrate',(250)), 'minecraft:glass_bottle'], 'warriorsofpastepoch:morbidity_concentrate')
      e.recipes.create.emptying([Fluid.of('kubejs:serum_pestilence',(250)), 'minecraft:glass_bottle'], 'warriorsofpastepoch:plague_serum_pestilence')
      e.recipes.create.emptying([Fluid.of('kubejs:bacteria_serum',(250)), 'minecraft:glass_bottle'], 'warriorsofpastepoch:plague_serum_bacterial_splash')
      e.recipes.create.emptying([Fluid.of('kubejs:serum_decay',(250)), 'minecraft:glass_bottle'], 'warriorsofpastepoch:plague_serum_decay')
      e.recipes.create.emptying([Fluid.of('kubejs:black_death',(250)), 'minecraft:glass_bottle'], 'warriorsofpastepoch:plague_serum_black_death')

      e.recipes.create.filling('warriorsofpastepoch:morbidity_concentrate',[Fluid.of('kubejs:morbidity_concentrate',(250)), 'minecraft:glass_bottle'])
      e.recipes.create.filling('warriorsofpastepoch:plague_serum_pestilence',[Fluid.of('kubejs:serum_pestilence',(250)), 'minecraft:glass_bottle'])
      e.recipes.create.filling('warriorsofpastepoch:plague_serum_bacterial_splash',[Fluid.of('kubejs:bacteria_serum',(250)), 'minecraft:glass_bottle'])
      e.recipes.create.filling('warriorsofpastepoch:plague_serum_decay',[Fluid.of('kubejs:serum_decay',(250)), 'minecraft:glass_bottle'])
      e.recipes.create.filling('warriorsofpastepoch:plague_serum_black_death',[Fluid.of('kubejs:black_death',(250)), 'minecraft:glass_bottle'])

      e.recipes.create.mixing([Fluid.of('kubejs:morbidity_concentrate',(1000))], ([Fluid.water(1000), '#forge:dead'])).heated()
      e.recipes.create.mixing([Fluid.of('kubejs:serum_pestilence',(1000))], ([Fluid.water(1000), '#forge:blood'])).heated()
      e.recipes.create.mixing([Fluid.of('kubejs:bacteria_serum',(1000))], ([Fluid.water(1000), '#forge:slimy'])).heated()
      e.recipes.create.mixing([Fluid.of('kubejs:black_death',(1000))], ([Fluid.water(1000), '#forge:heart_attack'])).heated()
      e.recipes.create.mixing([Fluid.of('kubejs:serum_decay',(1000))], ([Fluid.water(1000), '#forge:rotten'])).heated()

  e.recipes.create.compacting(['alexscaves:uranium', Item.of('alexscaves:uranium').withChance(0.5)], [Fluid.of('alexscaves:acid',(1000))]).superheated()
  
e.recipes.create.crushing([Item.of('alexscaves:raw_scarlet_neodymium').withChance(0.25), Item.of('alexscaves:raw_azure_neodymium').withChance(0.25), Item.of('4x spelunkery:raw_magnetite_nugget').withChance(0.15)], 'spelunkery:raw_magnetite').processingTime(1000)

  e.recipes.create.mechanical_crafting('alexscaves:telecore', [
    ' A B ',
    'ACCCB',
    'ACDCB',
    'ACCCB',
    ' A B '
  ], {
    A:'alexscaves:scarlet_neodymium_ingot',
    B:'alexscaves:azure_neodymium_ingot',
    C:'architects_palette:unobtanium',
    D:'terramity:prismatic_jewel'
  })
})



