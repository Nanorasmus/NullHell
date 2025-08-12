//shaped recipes
ServerEvents.recipes(event => {
  event.shapeless('terramity:dr_binty', [
      'minecraft:glass_bottle',
      'minecraft:sugar',
      'terramity:fairy_dust'
    ])

    event.shapeless('terramity:empty_spell_tome', [
      'minecraft:book',
      '8x terramity:fairy_dust'	
    ])

    event.shaped('8x alexscaves:ferrouslime_ball', [
      'ABA', 
      'ACA', 
      'AAA'  
    ], {
      A: 'minecraft:slime_ball', 
      B: 'minecraft:iron_ingot',  
      C: 'alexscaves:ferrouslime_ball'
    })
    event.shaped('terramity:flintlock_pistol', [
      ' AA', 
      'AB ', 
      'C  '  
    ], {
      A: 'create:iron_sheet', 
      B: 'mowziesmobs:naga_fang',  
      C: 'warriorsofpastepoch:thickened_skin'
    })

    event.shaped('cataclysm:mechanical_fusion_anvil', [
      'AAA', 
      'CBC', 
      'ACA'  
    ], {
      A: 'cataclysm:witherite_ingot', 
      B: 'irons_spellbooks:arcane_anvil',  
      C: 'terramity:conductite'
    })
    event.shaped('celestisynth:starlit_factory', [
      'BAB', 
      'DCD', 
      'BAB'  
    ], {
      A: 'celestisynth:celestial_netherite_ingot', 
      B: 'cataclysm:witherite_ingot',  
      C: 'cataclysm:mechanical_fusion_anvil',
      D: 'minecraft:obsidian'
    })

    event.shaped('terramity:basic_rifle', [
      '  C', 
      ' AB', 
      'CBB'  
    ], {
      A: 'terramity:flintlock_pistol', 
      B: 'warriorsofpastepoch:thickened_skin',  
      C: 'warriorsofpastepoch:forgotten_steel_nugget'
    })

    event.shaped('mowziesmobs:wrought_axe', [
      ' AA', 
      ' BA', 
      ' B '  
    ], {
      A: 'kubejs:infimetal', 
      B: 'minecraft:iron_ingot'
    })
    event.shaped('mowziesmobs:wrought_helmet', [
      'AAA', 
      'B B' 
    ], {
      A: 'kubejs:infimetal', 
      B: 'minecraft:iron_ingot'
    })
    event.shaped('terramity:railgun', [
      'ABC', 
      'DDD', 
      'EEF'  
    ], {
      A: 'create:sturdy_sheet', 
      B: 'minecraft:spyglass',  
      C: 'alexscaves:scarlet_neodymium_ingot',
      D: 'terramity:conductite',
      E: 'terramity:circuit_board',
      F: 'alexscaves:azure_neodymium_ingot'
    })

    event.shaped('enchantinginfuser:enchanting_infuser', [
      ' A ', 
      'BCB', 
      'DED'  
    ], {
      A: 'minecraft:book', 
      B: 'minecraft:amethyst_shard',  
      C: 'bosses_of_mass_destruction:obsidian_heart',
      D: 'minecraft:crying_obsidian',
      E: 'minecraft:enchanting_table',
    })

    event.shaped('terramity:advanced_gun_parts', [
      ' A ', 
      'BCB', 
      ' D '  
    ], {
      A: 'alexscaves:ferrouslime_ball', 
      B: 'create:sturdy_sheet',  
      C: 'create:precision_mechanism',
      D: 'create:iron_sheet'
    })


    event.shaped('terramity:overclocked_microwave', [
      'AAA', 
      'BCB', 
      'ADA'  
    ], {
      A: 'minecraft:iron_ingot', 
      B: 'terramity:daemonium_glass',  
      C: 'alexscaves:fissile_core',
      D: 'terramity:circuit_board'
    })

    event.shaped('alexscaves:heavyweight', [
      'ABA', 
      'ACA', 
      'ADA'  
    ], {
      A: 'alexscaves:scarlet_neodymium_ingot', 
      B: 'create:sturdy_sheet',  
      C: 'terramity:spectral_soul',
      D: 'alexscaves:ferrouslime_ball'
  })

  event.shaped('aquamirae:terrible_sword', [
      ' A ', 
      'BCB', 
      ' D '  
    ], {
      A: 'kubejs:infimetal', 
      B: 'terramity:spiteful_soul',  
      C: 'terramity:lucky_dice',
      D: 'minecraft:stick'
  })

  event.shaped('alexscaves:heart_of_iron', [
    'AAA', 
    'A A', 
    'AAA'  
  ], {
    A: 'spelunkery:raw_magnetite'
})

event.shaped('alexscaves:charred_remnant', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'terramity:electronic_scrap', 
  B: 'alexscaves:uranium'
})

event.shaped('spelunkery:bunny_ears', [
  'A A', 
  'ABA'  
], {
  A: 'spelunkery:dust', 
  B: 'terramity:leap_ring_plus'
})

})
  //smithing/smelting
  ServerEvents.recipes(event => {
  event.smithing(
    'terramity:advanced_pistol',  
    'terramity:advanced_gun_parts', 
    'terramity:basic_pistol',
    'minecraft:iron_ingot'    
  )
    event.smithing(
      'terramity:simmeredge',  
      'terramity:ruby', 
      'terramity:iridium_sword',
      'minecraft:gold_ingot'    
  )
  event.smithing(
    'terramity:orders_end',  
    'terramity:onyx', 
    'terramity:iridium_sword',
    'minecraft:gold_ingot'    
)
event.smithing(
  'terramity:icebrand',  
  'terramity:sapphire', 
  'terramity:iridium_sword',
  'kubejs:infimetal'    
)
event.smithing(
  'terramity:stratus_storm_ruler',  
  'terramity:topaz', 
  'terramity:iridium_sword',
  'kubejs:infimetal'    
)

event.smithing(
  'aquamirae:divider',  
  'unusualfishmod:ancient_weapon_smithing_template', 
  'aquamirae:terrible_sword',
  'aquamirae:abyssal_amethyst'    
)
event.smithing(
  'aquamirae:whisper_of_the_abyss',  
  'unusualfishmod:ancient_weapon_smithing_template', 
  'cataclysm:coral_spear',
  'aquamirae:abyssal_amethyst'    
)

event.smithing(
  'kubejs:hell_key',  
  'terramity:hellspec_upgrade_smithing_template', 
  'terramity:spire_key',
  'terramity:hellspec_alloy'    
)

event.smithing(
  'terramity:advanced_burst_rifle',  
  'terramity:advanced_gun_parts', 
  'terramity:basic_rifle',
  'create:precision_mechanism'    
)
event.smithing(
  'terramity:advanced_automatic_rifle',  
  'terramity:advanced_gun_parts', 
  'terramity:basic_rifle',
  'kubejs:complex_gun_mechanism'    
)
event.smithing(
  'terramity:requiem',  
  'terramity:dimlite_upgrade_smithing_template', 
  'terramity:advanced_pistol',
  'terramity:dimlite_ingot'   
)
event.smithing(
  'terramity:vulcan',  
  'terramity:antiprism', 
  'terramity:advanced_pistol',
  'terramity:nyxium'   
)
event.smithing(
  'terramity:sawed_off_shotgun',  
  'minecraft:netherite_upgrade_smithing_template', 
  'terramity:blunderbuss',
  'minecraft:netherite_ingot'   
)
event.smithing(
  'terramity:pump_action_shotgun',  
  'minecraft:netherite_upgrade_smithing_template', 
  'terramity:sawed_off_shotgun',
  'terramity:advanced_gun_parts'   
)
event.smithing(
  'terramity:hellfire_flurry',  
  'terramity:hellspec_upgrade_smithing_template', 
  'terramity:pump_action_shotgun',
  'alexscaves:tectonic_shard'   
)
event.smithing(
  'terramity:plaguebringer',  
  'terramity:virentium_upgrade_smithing_template', 
  'terramity:pump_action_shotgun',
  'alexscaves:toxic_paste'   
)
event.smithing(
  'terramity:onyx_storm',  
  'terramity:dimlite_upgrade_smithing_template', 
  'terramity:blunderbuss',
  'terramity:dimlite_ingot'   
)
event.smithing(
  'terramity:cosmic_storm',  
  'terramity:cosmilite_upgrade_smithing_template', 
  'terramity:onyx_storm',
  'alexscaves:pure_darkness'   
)
event.smithing(
  'terramity:asphodel',  
  'kubejs:complex_gun_mechanism', 
  'terramity:hellfire_flurry',
  'terramity:antiprism'   
)
event.smithing(
  'terramity:anti_material_rifle',  
  'terramity:dimlite_upgrade_smithing_template', 
  'terramity:elite_rifle',
  'kubejs:complex_gun_mechanism'   
)
event.smithing(
  'terramity:planet_buster',  
  'terramity:void_upgrade_smithing_template', 
  'terramity:railgun',
  'bosses_of_mass_destruction:obsidian_heart'
)

event.smithing(
  'warriorsofpastepoch:plague_doctor_armor_chestplate',  
  'terramity:iridescent_shard', 
  'minecraft:iron_chestplate',
  'warriorsofpastepoch:sterile_tissue'   
)

event.smithing(
  'warriorsofpastepoch:plague_doctor_armor_leggings',  
  'terramity:iridescent_shard', 
  'minecraft:iron_leggings',
  'warriorsofpastepoch:sterile_tissue'   
)

event.smithing(
  'warriorsofpastepoch:plague_doctor_armor_boots',  
  'terramity:iridescent_shard', 
  'minecraft:iron_boots',
  'warriorsofpastepoch:sterile_tissue'   
)

-
event.smithing(
  'terramity:tome_of_ascension',  
  'terramity:warp_whistle', 
  'terramity:empty_spell_tome',
  'terramity:onyx' 
)

event.smithing(
  'terramity:galebounce_tome',  
  'terramity:hurricane_belt', 
  'terramity:empty_spell_tome',
  'terramity:sapphire'   
)

event.smithing(
  'terramity:tome_of_commotion',  
  'minecraft:jukebox', 
  'terramity:empty_spell_tome',
  'terramity:topaz'   
)

event.smithing(
  'terramity:guardian_grimoire',  
  'terramity:guardians_hand', 
  'terramity:empty_spell_tome',
  'terramity:angel_feather'  
)
-

event.smithing(
  'warriorsofpastepoch:muketers_armor_chestplate',  
  'terramity:iridescent_shard', 
  'minecraft:iron_chestplate',
  'warriorsofpastepoch:azure_fabric'   
)

event.smithing(
  'warriorsofpastepoch:muketers_armor_leggings',  
  'terramity:iridescent_shard', 
  'minecraft:iron_leggings',
  'warriorsofpastepoch:azure_fabric'   
)

event.smithing(
  'warriorsofpastepoch:muketers_armor_boots',  
  'terramity:iridescent_shard', 
  'minecraft:iron_boots',
  'warriorsofpastepoch:azure_fabric'   
)
event.smithing(
  'celestisynth:supernal_netherite_ingot',  
  'terramity:void_upgrade_smithing_template', 
  'terramity:reverium',
  'minecraft:netherite_ingot'  
)
    event.smelting('caverns_and_chasms:silver_ingot', 'create:crushed_raw_silver')
    event.blasting('caverns_and_chasms:silver_ingot', 'create:crushed_raw_silver')

    event.blasting('3x kubejs:infimetal', 'mowziesmobs:wrought_axe')
    event.blasting('3x kubejs:infimetal', 'mowziesmobs:wrought_helmet')

  })
  
  //recipe removing
  ServerEvents.recipes(event => {
  event.remove({ output: 'celestisynth:starlit_factory'  })
  event.remove({ output: 'cataclysm:mechanical_fusion_anvil' })
  event.remove({ output: 'oreganized:silver_nugget' })
  event.remove({ output: 'oreganized:silver_ingot' })
  event.remove({ output: 'celestisynth:supernal_netherite_ingot' })
  event.remove({ output: 'terramity:advanced_gun_parts' })
  event.remove({ output: 'terramity:overclocked_microwave' })
  event.remove({ output: 'terramity:railgun' })
  event.remove({ output: 'terramity:icebrand' })
  event.remove({ output: 'terramity:simmeredge' })
  event.remove({ output: 'terramity:orders_end' })
  event.remove({ output: 'terramity:stratus_storm_ruler' })
  event.remove({ output: 'terramity:dimlite_round' })
  event.remove({ output: 'terramity:iridium_round' })
  event.remove({ output: 'terramity:gold_round' })
  event.remove({ output: 'terramity:copper_round' })
  event.remove({ output: 'terramity:antimatter_round' })
  event.remove({ output: 'terramity:advanced_automatic_rifle' })
  event.remove({ output: 'terramity:advanced_burst_rifle' })
  event.remove({ output: 'terramity:flintlock_pistol' })
  event.remove({ output: 'terramity:vulcan' })
  event.remove({ output: 'terramity:basic_pistol' })
  event.remove({ output: 'terramity:sawed_off_shotgun' })
  event.remove({ output: 'terramity:pump_action_shotgun' })
  event.remove({ output: 'terramity:advanced_pistol' })
  event.remove({ output: 'terramity:hellfire_flurry' })
  event.remove({ output: 'terramity:plaguebringer' })
  event.remove({ output: 'terramity:onyx_storm' })
  event.remove({ output: 'terramity:cosmic_storm' })
  event.remove({ output: 'terramity:asphodel' })
  event.remove({ output: 'terramity:anti_material_rifle' })
  event.remove({ output: 'terramity:planet_buster' })
  event.remove({ output: 'enchantinginfuser:enchanting_infuser' })
  event.remove({ output: 'warriorsofpastepoch:ammo_bag' })
  event.remove({ output: 'warriorsofpastepoch:musket_ammo' })
  event.remove({ output: 'warriorsofpastepoch:musket' })
  event.remove({ output: 'warriorsofpastepoch:pistol' })
  event.remove({ output: 'warriorsofpastepoch:plague_doctor_armor_chestplate' })
  event.remove({ output: 'warriorsofpastepoch:plague_doctor_armor_leggings' })
  event.remove({ output: 'warriorsofpastepoch:plague_doctor_armor_boots' })
  event.remove({ output: 'warriorsofpastepoch:muketers_armor_chestplate' })
  event.remove({ output: 'warriorsofpastepoch:muketers_armor_leggings' })
  event.remove({ output: 'warriorsofpastepoch:muketers_armor_boots' })
  event.remove({ output: 'terramity:basic_rifle' })
  event.remove({ output: 'aquamirae:divider' })
  event.remove({ output: 'aquamirae:whisper_of_the_abyss' })
  event.remove({ output: 'aquamirae:terrible_sword' })

})

//tags
ServerEvents.tags('item', event => {
event.add('forge:dead', 'warriorsofpastepoch:rat_carcass','warriorsofpastepoch:batwing','alexscaves:vesper_wing')
event.add('forge:blood','warriorsofpastepoch:crystal_blood','minecraft:nether_wart','call_of_yucutan:chili_pepper')
event.add('forge:slimy','minecraft:slime_ball','minecraft:pufferfish')
event.add('forge:heart_attack','minecraft:wither_rose','rainbowreef:raw_boxfish','rainbowreef:boxfish_bread','architects_palette:withered_bone','minecraft:wither_skeleton_skull')
event.add('forge:rotten','minecraft:rotten_flesh','alexscaves:toxic_paste')

event.add('forge:sulfur','spelunkery:sulfur','alexscaves:sulfur_dust')
event.add('frycooks_delight:has_fish_slice','tide:mackerel','tide:glowfish','tide:anglerfish','tide:leafback','tide:fluttergill','tide:pine_perch','tide:voidseeker','alexscaves:lanternfish','alexscaves:tripodfish',
'tide:abyss_angler','unusualfishmod:raw_beaked_herring','tide:sailfish','tide:catfish','tide:pike','tide:bass','tide:tuna','tide:yellow_perch','tide:ocean_perch','tide:bluegill','unusualfishmod:raw_snowflake','unusualfishmod:raw_circus_fish',
'unusualfishmod:raw_drooping_gourami','tide:mint_carp','tide:clayfish','tide:hardened_clayfish','tide:trout','tide:angelfish','tide:barracuda','unusualfishmod:raw_spindlefish','unusualfishmod:raw_rhino_tetra','unusualfishmod:raw_sailor_barb',
'unusualfishmod:raw_bark_angelfish','unusualfishmod:raw_picklefish','unusualfishmod:raw_amber_goby','unusualfishmod:raw_triple_twirl_pleco'
)

})
