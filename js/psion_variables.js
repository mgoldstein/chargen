var armor_check_penalty=0;
var armor_attack_penalty=0;
var shield_check_penalty=0;
var ac_hp=0;
var ac_species_name="";
var ac_strength=0;
var ac_constitution=0;
var ac_dexterity=0;
var ac_intelligence=0;
var ac_wisdom=0;
var ac_charisma=0;
var ac_large=false;
var ac_small=false;
var ac_speed_string="0";
var ac_natural_armor=0;
var ac_hd=0;
var ac_bab=0;
var ac_fort=0;
var ac_reflex=0;
var ac_will=0;
var ac_skill_points=0;
var ac_feat_entitlement=0;
var ac_attacks="";
var ac_special="";
var ac_tricks=0;
var animal_companion_level=0;
var favored_for_hp=0;
var favored_for_skill=0;
var favored_for_psi=0;
var prestige_bonus_feat_entitlement=0;
var rt_cold=0;
var rt_desert=0;
var rt_forest=0;
var rt_jungle=0;
var rt_mountain=0;
var rt_plains=0;
var rt_planeabyss=0;
var rt_planeair=0;
var rt_planeaxis=0;
var rt_planeabaddon=0;
var rt_planeastral=0;
var rt_planeearth=0;
var rt_planeelysium=0;
var rt_planeethereal=0;
var rt_planefire=0;
var rt_planeheaven=0;
var rt_planehell=0;
var rt_planemaelstrom=0;
var rt_planenirvana=0;
var rt_planeshadow=0;
var rt_planewater=0;
var rt_swamp=0;
var rt_other1=0;
var rt_other2=0;
var rt_underground=0;
var rt_urban=0;
var rt_water=0;
var rf_aberration=0;
var rf_animal=0;
var rf_construct=0;
var rf_dragon=0;
var rf_humanoidothersubtype=0;
var rf_fey=0;
var rf_giant=0;
var rf_aquatic=0;
var rf_dwarf=0;
var rf_elf=0;
var rf_goblinoid=0;
var rf_gnoll=0;
var rf_gnome=0;
var rf_halfling=0;
var rf_human=0;
var rf_orc=0;
var rf_reptilian=0;
var rf_magicalbeast=0;
var rf_monstroushumanoid=0;
var rf_ooze=0;
var rf_air=0;
var rf_chaotic=0;
var rf_earth=0;
var rf_evil=0;
var rf_fire=0;
var rf_good=0;
var rf_lawful=0;
var rf_native=0;
var rf_water=0;
var rf_plant=0;
var rf_undead=0;
var rf_vermin=0;
var ranger_foe_length=0;
var ranger_terrain_length=0;
var dexterity_A_string="";
var dexterity_0_string="";
var abyssal_nativespeaker=false;
var celestial_nativespeaker=false;
var darkelfsilent_nativespeaker=false;
var infernal_nativespeaker=false;
var ignan_nativespeaker=false;
var sahuagin_nativespeaker=false;
var aklo_nativespeaker=false;
var aquan_nativespeaker=false;
var auran_nativespeaker=false;
var undercommon_nativespeaker=false;
var otherlanguage1_nativespeaker=false;
var otherlanguage2_nativespeaker=false;
var otherlanguage3_nativespeaker=false;
var otherlanguage4_nativespeaker=false;
var otherlanguage5_nativespeaker=false;
var otherlanguage6_nativespeaker=false;
var otherlanguage1_friendly=true;
var otherlanguage2_friendly=true;
var otherlanguage3_friendly=true;
var otherlanguage4_friendly=true;
var otherlanguage5_friendly=true;
var otherlanguage6_friendly=true;
var terran_nativespeaker=false;
var draconic_nativespeaker=false;
var dwarven_nativespeaker=false;
var common_nativespeaker=false;
var elven_nativespeaker=false;
var giant_nativespeaker=false;
var gith_nativespeaker=false;
var gnoll_nativespeaker=false;
var gnome_nativespeaker=false;
var goblin_nativespeaker=false;
var halfling_nativespeaker=false;
var aboleth_nativespeaker=false;
var orc_nativespeaker=false;
var sylvan_nativespeaker=false;
var thrikreen_nativespeaker=false;
var aarakocra_nativespeaker=false;
var pterran_nativespeaker=false;
var xeph_nativespeaker=false;
var maenad_nativespeaker=false;
var ophiduan_nativespeaker=false;
var every_language_friendly=false;
var abyssal_friendly=false;
var aklo_friendly=false;
var aquan_friendly=false;
var auran_friendly=false;
var celestial_friendly=false;
var draconic_friendly=false;
var dwarven_friendly=false;
var common_friendly=false;
var elven_friendly=false;
var darkelfsilent_friendly=false;
var giant_friendly=false;
var gith_friendly=false;
var gnoll_friendly=false;
var gnome_friendly=false;
var goblin_friendly=false;
var halfling_friendly=false;
var ignan_friendly=false;
var infernal_friendly=false;
var aboleth_friendly=false;
var orc_friendly=false;
var sylvan_friendly=false;
var terran_friendly=false;
var thrikreen_friendly=false;
var aarakocra_friendly=false;
var pterran_friendly=false;
var sahuagin_friendly=false;
var undercommon_friendly=false;
var xeph_friendly=false;
var maenad_friendly=false;
var ophiduan_friendly=false;
var my_character_is_done=false;
var final_speed=0;
var top_ability_score;
var prestige_class_name="Prestige Class";
var prestige_hit_point_dice=0;
var prestige_attack_bonus_progress=0;
var prestige_fortitude_save_bonus=0;
var prestige_reflex_save_bonus=0;
var prestige_will_save_bonus=0;
var prestige_skill_points_per_level=0;
var prestige_spellcasting_as=0;
var prestige_any_spell_levels=0;
var prestige_bard_spell_levels=0
var prestige_cleric_spell_levels=0;
var prestige_druid_spell_levels=0;
var prestige_paladin_spell_levels=0;
var prestige_ranger_spell_levels=0;
var prestige_sorcerer_spell_levels=0;
var prestige_wizard_spell_levels=0;
var heft=0;
var ideal_weight=0;
var wt=0;
var wizard_specialty_name="Wizard";
var psion_specialty_name="Psion";
var skillbought_bonus_languages=0;
var total_bonus_languages=0;
var racial_bonus_language_entitlement=0;
var skillbought_bonus_language_entitlement=0;
var total_bonus_language_entitlement=0;
var unarmored=false;
var no_specialist=true;
var abjuration_specialist=false;
var conjuration_specialist=false;
var divination_specialist=false;
var enchantment_specialist=false;
var evocation_specialist=false;
var illusion_specialist=false;
var necromancy_specialist=false;
var transmutation_specialist=false;
var generalist_psion=false;
var seer_psion=false;
var shaper_psion=false;
var kineticist_psion=false;
var egoist_psion=false;
var nomad_psion=false;
var telepath_psion=false;
var gave_up_abjuration=false;
var gave_up_conjuration=false;
var gave_up_divination=false;
var gave_up_enchantment=false;
var gave_up_evocation=false;
var gave_up_illusion=false;
var gave_up_necromancy=false;
var gave_up_transmutation=false;
var rangercombattrack=0;
var no_druid_domain=false;
var air_druid_domain=false;
var animal_druid_domain=false;
var earth_druid_domain=false;
var fire_druid_domain=false;
var plant_druid_domain=false;
var water_druid_domain=false;
var weather_druid_domain=false;
var no_familiar=true;
var bat_familiar=false;
var cat_familiar=false;
var hawk_familiar=false;
var lizard_familiar=false;
var monkey_familiar=false;
var rat_familiar=false;
var raven_familiar=false;
var snake_familiar=false;
var toad_familiar=false;
var weasel_familiar=false;
var already_knows_simple_weapons=false;
var already_knows_martial_weapons=false;
var already_knows_light_armor=false;
var already_knows_medium_armor=false;
var already_knows_heavy_armor=false;
var already_knows_shields=false;
var already_knows_tower_shield=false;
var FeatsAreLocked=false;
var total_fighter_feats=0;
var total_halfelf_feats=0;
var high_level_rogue_count=0;
var skill_points_spent=0;
var total_wizard_feats=0;
var total_psionic_feats=0;
var total_r1_feats=0;
var total_r2_feats=0;
var total_monk_feats=0;
var WizardSpells0="";
var WizardSpells1="";
var WizardSpells2="";
var WizardSpells3="";
var WizardSpells4="";
var WizardSpells5="";
var WizardSpells6="";
var WizardSpells7="";
var WizardSpells8="";
var WizardSpells9="";
var DruidSpells0="";
var DruidSpells1="";
var DruidSpells2="";
var DruidSpells3="";
var DruidSpells4="";
var DruidSpells5="";
var DruidSpells6="";
var DruidSpells7="";
var DruidSpells8="";
var DruidSpells9="";
var ClericSpells0="";
var ClericSpells1="";
var ClericSpells2="";
var ClericSpells3="";
var ClericSpells4="";
var ClericSpells5="";
var ClericSpells6="";
var ClericSpells7="";
var ClericSpells8="";
var ClericSpells9="";
var SorcererSpells0="";
var SorcererSpells1="";
var SorcererSpells2="";
var SorcererSpells3="";
var SorcererSpells4="";
var SorcererSpells5="";
var SorcererSpells6="";
var SorcererSpells7="";
var SorcererSpells8="";
var SorcererSpells9="";
var PaladinSpells0="";
var PaladinSpells1="";
var PaladinSpells2="";
var PaladinSpells3="";
var PaladinSpells4="";
var PaladinSpells5="";
var PaladinSpells6="";
var PaladinSpells7="";
var PaladinSpells8="";
var PaladinSpells9="";
var RangerSpells0="";
var RangerSpells1="";
var RangerSpells2="";
var RangerSpells3="";
var RangerSpells4="";
var RangerSpells5="";
var RangerSpells6="";
var RangerSpells7="";
var RangerSpells8="";
var RangerSpells9="";
var BardSpells0="";
var BardSpells1="";
var BardSpells2="";
var BardSpells3="";
var BardSpells4="";
var BardSpells5="";
var BardSpells6="";
var BardSpells7="";
var BardSpells8="";
var BardSpells9="";
var base_attack_bonus=0;
var base_fortitude_bonus=0;
var base_will_bonus=0;
var base_reflex_bonus=0;
var missile_attack_string_1="";
var finesse_attack_string_1="";
var CMB_string_1="";
var CMD_string_1="";
var ac_CMB_string_1="";
var ac_CMD_string_1="";
var handheld_attack_string_1="";
var flurry_of_blows_string_1="";
var unarmed_attack_string_1="";
var fortitude_string_1="";
var will_string_1="";
var reflex_string_1="";
var fear_save=0;
var horror_save=0;
var madness_save=0;
var fear_string_1="";
var horror_string_1="";
var madness_string_1="";
var fear_string_2="";
var horror_string_2="";
var madness_string_2="";
var initiative_string_1="";
var missile_attack_string_2="";
var finesse_attack_string_2="";
var CMB_string_2="";
var CMD_string_2="";
var ac_CMB_string_2="";
var ac_CMD_string_2="";
var handheld_attack_string_2="";
var fortitude_string_2="";
var will_string_2="";
var reflex_string_2="";
var initiative_string_2="";
var missile_attack=0;
var finesse_attack=0;
var CMB_attack=0;
var ac_CMB_attack=0;
var handheld_attack=0;
var fortitude_save=0;
var reflex_save=0;
var will_save=0;
var initiative_modifier=0;
var small=false;
var large=false;
var has_uncanny_dodge=false;
var total_hit_points=0;
var total_armor_class=0;
var touch_armor_class=0;
var dexterity_bonus_in_this_armor=0;
var armor_string="";
var speed_string="";
var shield_string="";
var armor_class_string="";
var stringy="";
var class_string=""
var genderandrace_string="";
var has_acrobatic=false;
var has_agilemaneuvers=false;
var has_alertness=false;
var has_animalaffinity=false;
var has_arcanestrike=false;
var has_armorproficiencylight=false;
var has_armorproficiencymedium=false;
var has_armorproficiencyheavy=false;
var has_athletic=false;
var has_augmentsummoning=false;
var has_blindfight=false;
var has_combatcasting=false;
var has_combatexpertise=false;
var has_improveddisarm=false;
var has_improvedfeint=false;
var has_improvedtrip=false;
var has_whirlwindattack=false;
var has_combatreflexes=false;
var has_deceitful=false;
var has_defthands=false;
var has_dodge=false;
var has_mobility=false;
var has_springattack=false;
var has_endurance=false;
var has_diehard=false;
var has_eschewmaterials=false;
var has_exoticweaponproficiency=false;
var has_extrachannel=0;
var has_extraki=0;
var has_extralayonhands=0;
var has_extramercy=0;
var has_extraperformance=0;
var has_extrarage=0;
var has_greatfortitude=false;
var has_improvedcounterspell=false;
var has_improvedcritical=0;
var has_improvedinitiative=false;
var has_improvedunarmedstrike=false;
var has_improvedgrapple=false;
var has_deflectarrows=false;
var has_snatcharrows=false;
var has_stunningfist=false;
var has_ironwill=false;
var has_leadership=false;
var has_lightningreflexes=false;
var has_magicalaptitude=false;
var has_martialweaponproficiency=false;
var has_mountedcombat=false;
var has_mountedarchery=false;
var has_ridebyattack=false;
var has_spiritedcharge=false;
var has_trample=false;
var has_naturalspell=false;
var has_persuasive=false;
var has_pointblankshot=false;
var has_farshot=false;
var has_preciseshot=false;
var has_rapidshot=false;
var has_manyshot=false;
var has_shotontherun=false;
var has_improvedpreciseshot=false;
var has_powerattack=false;
var has_cleave=false;
var has_greatcleave=false;
var has_improvedbullrush=false;
var has_improvedoverrun=false;
var has_improvedsunder=false;
var has_quickdraw=false;
var has_rapidreload=false;
var has_run=false;
var has_selfsufficient=false;
var has_shieldproficiency=false;
var has_improvedshieldbash=false;
var has_towershieldproficiency=false;
var has_simpleweaponproficiency=false;
var has_skillfocusappraise=false;
var has_skillfocusautohypnosis=false;
var has_skillfocusbluff=false;
var has_skillfocusclimb=false;
var has_skillfocusacrobatics=false;
var has_skillfocuscraft_1=false;
var has_skillfocuscraft_2=false;
var has_skillfocuscraft_3=false;
var has_skillfocusdiplomacy=false;
var has_skillfocusdisabledevice=false;
var has_skillfocusdisguise=false;
var has_skillfocusescapeartist=false;
var has_skillfocusfly=false;
var has_skillfocushandleanimal=false;
var has_skillfocusheal=false;
var has_skillfocusstealth=false;
var has_skillfocusintimidate=false;
var has_skillfocusknowledgearcana=false;
var has_skillfocusknowledgeengineering=false;
var has_skillfocusknowledgedungeoneering=false;
var has_skillfocusknowledgegeography=false;
var has_skillfocusknowledgehistory=false;
var has_skillfocusknowledgelocal=false;
var has_skillfocusknowledgenature=false;
var has_skillfocusknowledgenobility=false;
var has_skillfocusknowledgereligion=false;
var has_skillfocusknowledgeplanes=false;
var has_skillfocusknowledgepsionics=false;
var has_skillfocuslinguistics=false;
var has_skillfocusperception=false;
var has_skillfocusperform_1=false;
var has_skillfocusperform_2=false;
var has_skillfocusperform_3=false;
var has_skillfocusperform_4=false;
var has_skillfocusperform_5=false;
var has_skillfocusprofession=false;
var has_skillfocusride=false;
var has_skillfocussensemotive=false;
var has_skillfocussleightofhand=false;
var has_skillfocusspellcraft=false;
var has_skillfocussurvival=false;
var has_skillfocusswim=false;
var has_skillfocususemagicdevice=false;
var has_spellfocus=false;
var has_greaterspellfocus=false;
var has_spellfocusabjuration=false;
var has_spellfocusconjuration=false;
var has_spellfocusdivination=false;
var has_spellfocusevocation=false;
var has_spellfocusenchantment=false;
var has_spellfocusillusion=false;
var has_spellfocusnecromancy=false;
var has_spellfocustransmutation=false;
var has_greaterspellfocusabjuration=false;
var has_greaterspellfocusconjuration=false;
var has_greaterspellfocusdivination=false;
var has_greaterspellfocusevocation=false;
var has_greaterspellfocusenchantment=false;
var has_greaterspellfocusillusion=false;
var has_greaterspellfocusnecromancy=false;
var has_greaterspellfocustransmutation=false;
var has_spellmastery=0;
var has_spellpenetration=false;
var has_greaterspellpenetration=false;
var has_stealthy=false;
var has_stepup=false;
var has_strikeback=false;
var has_throwanything=false;
var has_toughness=false;
var has_twoweaponfighting=false;
var has_twoweapondefense=false;
var has_improvedtwoweaponfighting=false;
var has_greatertwoweaponfighting=false;
var has_weaponfinesse=false;
var has_otherfeat1=false;
var has_otherfeat2=false;
var has_otherfeat3=false;
var has_otherfeat4=false;
var has_otherfeat5=false;
var has_otherfeat6=false;
var has_otherfeat7=false;
var has_otherfeat8=false;
var has_otherfeat9=false;
var has_otherfeat10=false;
var has_weaponfocus=0;
var has_weaponspecialization=0;
var has_greaterweaponfocus=0;
var has_greaterweaponspecialization=0;
var has_brewpotion=false;
var has_craftmaa=false;
var has_craftrod=false;
var has_craftstaff=false;
var has_craftwand=false;
var has_craftwondrousitem=false;
var has_forgering=false;
var has_scribescroll=false;
var has_empowerspell=false;
var has_enlargespell=false;
var has_extendspell=false;
var has_heightenspell=false;
var has_maximizespell=false;
var has_quickenspell=false;
var has_silentspell=false;
var has_stillspell=false;
var has_widenspell=false;
var has_alignmentchannel=false;
var has_arcanearmortraining=false;
var has_arcanearmormastery=false;
var has_catchoffguard=false;
var has_channelsmite=false;
var has_greaterdisarm=false;
var has_greaterfeint=false;
var has_greatertrip=false;
var has_standstill=false;
var has_commandundead=false;
var has_criticalfocus=false;
var has_bleedingcritical=false;
var has_blindingcritical=false;
var has_criticalmastery=false;
var has_deafeningcritical=false;
var has_sickeningcritical=false;
var has_staggeringcritical=false;
var has_stunningcritical=false;
var has_tiringcritical=false;
var has_exhaustingcritical=false;
var has_deadlyaim=false;
var has_defensivecombattraining=false;
var has_disruptive=false;
var has_spellbreaker=false;
var has_windstance=false;
var has_lightningstance=false;
var has_elementalchannel=false;
var has_fleet=false;
var has_improvedgreatfortitude=false;
var has_improvedchannel=false;
var has_improvedfamiliar=false;
var has_greatergrapple=false;
var has_scorpionstyle=false;
var has_gorgonsfist=false;
var has_medusaswrath=false;
var has_improvisedweaponmastery=false;
var has_intimidatingprowess=false;
var has_improvedironwill=false;
var has_improvedlightningreflexes=false;
var has_lunge=false;
var has_mastercraftsman=false;
var has_unseat=false;
var has_nimblemoves=false;
var has_acrobaticsteps=false;
var has_pinpointtargeting=false;
var has_greaterbullrush=false;
var has_greateroverrun=false;
var has_greatersunder=false;
var has_selectivechanneling=false;
var has_shieldslam=false;
var has_shieldmaster=false;
var has_shieldfocus=false;
var has_greatershieldfocus=false;
var has_turnundead=false;
var has_doubleslice=false;
var has_twoweaponrend=false;
var has_vitalstrike=false;
var has_improvedvitalstrike=false;
var has_greatervitalstrike=false;
var has_dazzlingdisplay=false;
var has_shatterdefenses=false;
var has_deadlystroke=false;
var has_penetratingstrike=false;
var has_greaterpenetratingstrike=false;
var has_alignedattack=false;
var has_autonomous=false;
var has_bodyfuel=false;
var has_boostconstruct=false;
var has_burrowingpower=false;
var has_chainpower=false;
var has_cloakdance=false;
var has_combatmanifestation=false;
var has_craftcognizancecrystal=false;
var has_delaypower=false;
var has_empowerpower=false;
var has_endowedmind=false;
var has_enlargepower=false;
var has_expandedknowledge=0;
var has_extendpower=false;
var has_extendedblast=false;
var has_focusedsunder=false;
var has_ghostattack=false;
var has_inquisitor=false;
var has_mastersrefuge=false;
var has_mastersvoice=false;
var has_maximizepower=false;
var has_mentalleap=false;
var has_mindoverbody=false;
var has_openminded=false;
var has_opportunitypower=false;
var has_overchannel=false;
var has_talented=false;
var has_powerpenetration=false;
var has_greaterpowerpenetration=false;
var has_powerspecialization=false;
var has_greaterpowerspecialization=false;
var has_psicrystalaffinity=false;
var has_improvedpsicrystal=0;
var has_psicrystalcontainment=false;
var has_psionicbody=false;
var has_psionicdodge=false;
var has_psionicendowment=false;
var has_greaterpsionicendowment=false;
var has_psionicfist=false;
var has_greaterpsionicfist=false;
var has_unavoidablestrike=false;
var has_psionicmeditation=false;
var has_psionicshot=false;
var has_fellshot=false;
var has_returnshot=false;
var has_greaterpsionicshot=false;
var has_psionictalent=false;
var has_psionicweapon=false;
var has_deepimpact=false;
var has_greaterpsionicweapon=false;
var has_quickenpower=false;
var has_rapidmetabolism=false;
var has_recklessoffense=false;
var has_scribetattoo=false;
var has_sidestepcharge=false;
var has_speedofthought=false;
var has_psioniccharge=false;
var has_splitpsionicray=false;
var has_surgingaura=false;
var has_swiftshapeshifter=false;
var has_masterofallforms=false;
var has_twinpower=false;
var has_unconditionalpower=false;
var has_upthewalls=false;
var has_widenpower=false;
var has_wildtalent=false;
var has_woundingattack=false;
var has_air_domain=false
var has_animal_domain=false
var has_chaos_domain=false
var has_death_domain=false
var has_destruction_domain=false
var has_earth_domain=false
var has_evil_domain=false
var has_fire_domain=false
var has_good_domain=false
var has_healing_domain=false
var has_knowledge_domain=false
var has_law_domain=false
var has_luck_domain=false
var has_magic_domain=false
var has_plant_domain=false
var has_protection_domain=false
var has_strength_domain=false
var has_sun_domain=false
var has_travel_domain=false
var has_trickery_domain=false
var has_war_domain=false
var has_water_domain=false
var has_artifice_domain=false;
var has_charm_domain=false;
var has_community_domain=false;
var has_darkness_domain=false;
var has_glory_domain=false;
var has_liberation_domain=false;
var has_madness_domain=false;
var has_nobility_domain=false;
var has_repose_domain=false;
var has_rune_domain=false;
var has_weather_domain=false;
var channels_energy=0;
var has_aberrant_bloodline=false;
var has_abyssal_bloodline=false;
var has_arcane_bloodline=false;
var has_celestial_bloodline=false;
var has_destined_bloodline=false;
var has_draconic_bloodline=false;
var has_elemental_bloodline=false;
var has_fey_bloodline=false;
var has_infernal_bloodline=false;
var has_undead_bloodline=false;
var has_artificer_surge;
var has_free_surge;
var has_leader_surge;
var has_student_surge;
var has_warrior_surge;
var fighterfeatentitlement=0;
var wilderfeatentitlement=0;
var halfelffeatentitlement=0;
var sorcererfeatentitlement=0;
var r1featentitlement=0;
var r2featentitlement=0;
var monkfeatentitlement=0;
var wizardfeatentitlement=0;
var psionfeatentitlement=0;
var generalistfeatentitlement=0;
var psychicwarriorfeatentitlement=0;
var genericfeatentitlement=0;
var alchemist_levels=0;
var cavalier_levels=0;
var inquisitor_levels=0;
var oracle_levels=0;
var summoner_levels=0;
var witch_levels=0;
var barbarian_levels=0;
var bard_levels=0;
var cleric_levels=0;
var druid_levels=0;
var fighter_levels=0;
var monk_levels=0;
var paladin_levels=0;
var ranger_levels=0;
var rogue_levels=0;
var sorcerer_levels=0;
var wizard_levels=0;
var psion_levels=0;
var psychicwarrior_levels=0;
var soulknife_levels=0;
var wilder_levels=0;
var prestige_levels=0;
var total_skill_points=0;
var upitat00=0;
var upitat04=0;
var upitat08=0;
var upitat12=0;
var upitat16=0;
var upitat20=0;
var appraise=0;
var autohypnosis=0;
var bluff=0;
var climb=0;
var acrobatics=0;
var craft_1=0;
var craft_2=0;
var craft_3=0;
var diplomacy=0;
var disabledevice=0;
var disguise=0;
var escapeartist=0;
var fly=0;
var handleanimal=0;
var heal=0;
var stealth=0;
var intimidate=0;
var knowledgearcana=0;
var knowledgeengineering=0;
var knowledgedungeoneering=0;
var knowledgegeography=0;
var knowledgehistory=0;
var knowledgelocal=0;
var knowledgenature=0;
var knowledgenobility=0;
var knowledgereligion=0;
var knowledgeplanes=0;
var knowledgepsionics=0;
var perception=0;
var about=0;
var perform_1=0;
var perform_2=0;
var perform_3=0;
var perform_4=0;
var perform_5=0;
var profession=0;
var ride=0;
var sensemotive=0;
var sleightofhand=0;
var linguistics=0;
var spellcraft=0;
var survival=0;
var swim=0;
var usemagicdevice=0;
var otherskill1=0;
var otherskill2=0;
var otherskill3=0;
var otherskill1_class=1;
var otherskill2_class=1;
var otherskill3_class=1;
var alignment=0;
var rayce=0;
var gender=0;
var total_levels=0;
var stat1=0
var stat2=0
var stat3=0
var stat4=0
var stat5=0
var stat6=0
var class01=0;
var class02=0;
var class03=0;
var class04=0;
var class05=0;
var class06=0;
var class07=0;
var class08=0;
var class09=0;
var class10=0;
var class11=0;
var class12=0;
var class13=0;
var class14=0;
var class15=0;
var class16=0;
var class17=0;
var class18=0;
var class19=0;
var class20=0;
var strength01=0;
var strength02=0;
var strength03=0;
var strength04=0;
var strength05=0;
var strength06=0;
var strength07=0;
var strength08=0;
var strength09=0;
var strength10=0;
var strength11=0;
var strength12=0;
var strength13=0;
var strength14=0;
var strength15=0;
var strength16=0;
var strength17=0;
var strength18=0;
var strength19=0;
var strength20=0;
var newHP01=0;
var newHP02=0;
var newHP03=0;
var newHP04=0;
var newHP05=0;
var newHP06=0;
var newHP07=0;
var newHP08=0;
var newHP09=0;
var newHP10=0;
var newHP11=0;
var newHP12=0;
var newHP13=0;
var newHP14=0;
var newHP15=0;
var newHP16=0;
var newHP17=0;
var newHP18=0;
var newHP19=0;
var newHP20=0;
var intelligence01=0;
var intelligence04=0;
var intelligence08=0;
var intelligence12=0;
var intelligence16=0;
var intelligence20=0;
var SWD = "<html><head><style type='text/css'>body {font-family: Arial,sans-serif; font-size: 12pt;}</style><title>Character Sheet</title></head><body>";
var x=0;
var y=0;
var q=0;
var z=0;
var d1=0;
var d2=0;
var d3=0;
var d4=0;
var d5=0;
var strength=0;
var intelligence=0;
var wisdom=0;
var constitution=0;
var charisma=0;
var dexterity=0;
var statwentto=0;
var secondstatwentto=0;
var thirdstatwentto=0;
var fourthstatwentto=0;
var fifthstatwentto=0;
var sixthstatwentto=0;
var CharacterTypeHasBeenEstablished=false;
var AbilitiesHaveBeenEstablished=false;
var ClassesHaveBeenEstablished=false;
var AbilitiesAreProperlyAssigned=false;
var DiceHaveBeenRolled=false;
var SkillPointsAreLocked=false;
var AbilityIncreasesAreLocked=false;
var FighterFeatsEtcFrozen=false;
var total_animal_feats=0;