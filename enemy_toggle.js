
const BtnClickAudio = document.getElementById('btn_press');
BtnClickAudio.volume = 0.7;
const OpenSound = document.getElementById('page_open');
OpenSound.volume = 0.6;

function PlayPageOpn() {
    OpenSound.currentTime = 0;
    OpenSound.play();
  }

function PlayBtnPress() {
    BtnClickAudio.currentTime = 0; 
    BtnClickAudio.play();
}





   

function HideAllEnemyStats() {
    const AllEnemyStats = [

        //Ruins
        BoneSoldierAppStat,BoneSoldierVetStat,BoneSoldierChampStat,
        BoneDefenderAppStat,BoneDefenderVetStat,BoneDefenderChampStat,
        BoneArbalestAppStat,BoneArbalestVetStat,BoneArbalestChampStat,
        BoneCourtierAppStat,BoneCourtierVetStat,BoneCourtierChampStat,
        BoneSpearmanVetStat,BoneSpearmanChampStat,
        BoneCaptainVetStat,BoneCaptainChampStat,
        BoneBearerChampStat,

        //Weald
        FungalScratcherAppStat,FungalScratcherVetStat,FungalScratcherChampStat,
        FungalArtilleryAppStat,FungalArtilleryVetStat,FungalArtilleryChampStat,
        RabidGnasherAppStat,RabidGnasherVetStat,RabidGnasherChampStat,
        EctoplasmAppStat,EctoplasmVetStat,EctoplasmChampStat,
        LargeEctoplasmAppStat,LargeEctoplasmVetStat,LargeEctoplasmChampStat,
        CroneVetStat,CroneChampStat,
        UncleanGiantVetStat,UncleanGiantChampStat,
        HatefulViragoChampStat,NecroticFungusChampStat,

        //Warrens
        SwineChopperAppStat, SwineChopperVetStat, SwineChopperChampStat,
        SwineWretchAppStat,SwineWretchVetStat,SwineWretchChampStat,
        SwineDrummerAppStat,SwineDrummerVetStat,SwineDrummerChampStat,
        SwineSlasherAppStat,SwineSlasherVetStat,SwineSlasherChampStat,
        CarrionEaterAppStat,CarrionEaterVetStat,CarrionEaterChampStat,
        SwinetaurVetStat,SwinetaurChampStat,
        LargeCarrionEaterVetStat,LargeCarrionEaterChampStat,
        SwineSkiverChampStat,

        //Cove
        PelagicGrouperAppStat,PelagicGrouperVetStat,PelagicGrouperChampStat,
        PelagicGuardianAppStat,PelagicGuardianVetStat,PelagicGuardianChampStat,
        PelagicShamanAppStat,PelagicShamanVetStat,PelagicShamanChampStat,
        DeepStingerAppStat,DeepStingerVetStat,DeepStingerChampStat,
        DrownedThrallAppStat,DrownedThrallVetStat,DrownedThrallChampStat,
        SeaMaggotAppStat,SeaMaggotVetStat,SeaMaggotChampStat,
        UcaCrusherVetStat,UcaCrusherChampStat,
        SquiffyGhastChampStat,

        //Shared
        BrigandCutthroatAppStat,BrigandCutthroatVetStat,BrigandCutthroatChampStat,
        BrigandBloodletterAppStat,BrigandBloodletterVetStat,BrigandBloodletterChampStat,
        BrigandFusilierAppStat,BrigandFusilierVetStat,BrigandFusilierChampStat,
        CultistBrawlerAppStat,CultistBrawlerVetStat,CultistBrawlerChampStat,
        CultistAcolyteAppStat,CultistAcolyteVetStat,CultistAcolyteChampStat,
        MadmanAppStat,MadmanVetStat,MadmanChampStat,
        WebberAppStat,WebberVetStat,WebberChampStat,
        SpitterAppStat,SpitterVetStat,SpitterChampStat,
        MaggotAppStat,MaggotVetStat,MaggotChampStat,
        BoneRabbleAppStat,BoneRabbleVetStat,BoneRabbleChampStat,
        GargoyleVetStat,GargoyleChampStat,
        GhoulVetStat,GhoulChampStat,
        BrigandRaiderDarkestStat,
        BrigandHunterDarkestStat,

        
    ]

    AllEnemyStats.forEach(enemystat => {
        enemystat.style.display = 'none'
    });
}

function HideAllEnemySkills() {
    const AllEnemySkills = [

        //Ruins
        BoneSoldierAppSkills,BoneSoldierVetSkills,BoneSoldierChampSkills,
        BoneDefenderAppSkills,BoneDefenderVetSkills,BoneDefenderChampSkills,
        BoneArbalestAppSkills,BoneArbalestVetSkills,BoneArbalestChampSkills,
        BoneCourtierAppSkills,BoneCourtierVetSkills,BoneCourtierChampSkills,
        BoneSpearmanVetSkills,BoneSpearmanChampSkills,
        BoneCaptainVetSkills,BoneCaptainChampSkills,
        BoneBearerChampSkills,

        //Weald
        FungalScratcherAppSkills,FungalScratcherVetSkills,FungalScratcherChampSkills,
        FungalArtilleryAppSkills,FungalArtilleryVetSkills,FungalArtilleryChampSkills,
        RabidGnasherAppSkills,RabidGnasherVetSkills,RabidGnasherChampSkills,
        EctoplasmAppSkills,EctoplasmVetSkills,EctoplasmChampSkills,
        LargeEctoplasmAppSkills,LargeEctoplasmVetSkills,LargeEctoplasmChampSkills,
        CroneVetSkills,CroneChampSkills,
        UncleanGiantVetSkills,UncleanGiantChampSkills,
        HatefulViragoChampSkills,NecroticFungusChampSkills,

        //Warrens
        SwineChopperAppSkills, SwineChopperVetSkills, SwineChopperChampSkills,
        SwineWretchAppSkills, SwineWretchVetSkills, SwineWretchChampSkills,
        SwineDrummerAppSkills, SwineDrummerVetSkills, SwineDrummerChampSkills,
        SwineSlasherAppSkills, SwineSlasherVetSkills, SwineSlasherChampSkills,
        CarrionEaterAppSkills, CarrionEaterVetSkills, CarrionEaterChampSkills,
        LargeCarrionEaterVetSkills, LargeCarrionEaterChampSkills,
        SwinetaurVetSkills, SwinetaurChampSkills,
        SwineSkiverChampSkills,

        //Cove
        PelagicGrouperAppSkills,PelagicGrouperVetSkills,PelagicGrouperChampSkills,
        PelagicGuardianAppSkills,PelagicGuardianVetSkills,PelagicGuardianChampSkills,
        PelagicShamanAppSkills,PelagicShamanVetSkills,PelagicShamanChampSkills,
        DeepStingerAppSkills,DeepStingerVetSkills,DeepStingerChampSkills,
        DrownedThrallAppSkills,DrownedThrallVetSkills,DrownedThrallChampSkills,
        SeaMaggotAppSkills,SeaMaggotVetSkills,SeaMaggotChampSkills,
        UcaCrusherVetSkills,UcaCrusherChampSkills,
        SquiffyGhastChampSkills,

        //Shared
        BrigandCutthroatAppSkills,BrigandCutthroatVetSkills,BrigandCutthroatChampSkills,
        BrigandBloodletterAppSkills,BrigandBloodletterVetSkills,BrigandBloodletterChampSkills,
        BrigandFusilierAppSkills,BrigandFusilierVetSkills,BrigandFusilierChampSkills,
        CultistBrawlerAppSkills,CultistBrawlerVetSkills,CultistBrawlerChampSkills,
        CultistAcolyteAppSkills,CultistAcolyteVetSkills,CultistAcolyteChampSkills,
        MadmanAppSkills,MadmanVetSkills,MadmanChampSkills,
        WebberAppSkills,WebberVetSkills,WebberChampSkills,
        SpitterAppSkills,SpitterVetSkills,SpitterChampSkills,
        MaggotAppSkills,MaggotVetSkills,MaggotChampSkills,
        BoneRabbleAppSkills,BoneRabbleVetSkills,BoneRabbleChampSkills,
        GargoyleVetSkills,GargoyleChampSkills,
        GhoulVetSkills,GhoulChampSkills,
        BrigandRaiderDarkestSkills,
        BrigandHunterDarkestSkills,
    ]

    AllEnemySkills.forEach(enemyskill => {
        enemyskill.style.display = 'none'
    });
}

function HideAllEnemyLvlToggle() {
    const AllEnemyLvlToggle = [

        //Ruins
        BoneSoldierApp ,BoneSoldierVet ,BoneSoldierChamp ,
        BoneDefenderApp ,BoneDefenderVet ,BoneDefenderChamp ,
        BoneArbalestApp ,BoneArbalestVet ,BoneArbalestChamp ,
        BoneCourtierApp ,BoneCourtierVet ,BoneCourtierChamp ,
        BoneSpearmanVet ,BoneSpearmanChamp ,
        BoneCaptainVet ,BoneCaptainChamp ,
        BoneBearerChamp ,

        //Weald
        FungalScratcherApp ,FungalScratcherVet ,FungalScratcherChamp ,
        FungalArtilleryApp ,FungalArtilleryVet ,FungalArtilleryChamp ,
        RabidGnasherApp ,RabidGnasherVet ,RabidGnasherChamp ,
        EctoplasmApp ,EctoplasmVet ,EctoplasmChamp ,
        LargeEctoplasmApp ,LargeEctoplasmVet ,LargeEctoplasmChamp ,
        CroneVet ,CroneChamp ,
        UncleanGiantVet ,UncleanGiantChamp ,
        HatefulViragoChamp ,NecroticFungusChamp ,

        //Warrens
        SwineChopperApp, SwineChopperVet, SwineChopperChamp,
        SwineWretchApp, SwineWretchVet,SwineWretchChamp,
        SwineDrummerApp,SwineDrummerVet,SwineDrummerChamp,
        SwineSlasherApp,SwineSlasherVet,SwineSlasherChamp,
        CarrionEaterApp,CarrionEaterVet,CarrionEaterChamp,
        SwinetaurVet,SwinetaurChamp,
        LargeCarrionEaterVet,LargeCarrionEaterChamp,
        SwineSkiverChamp,

        //Cove
        PelagicGrouperApp,PelagicGrouperVet,PelagicGrouperChamp,
        PelagicGuardianApp,PelagicGuardianVet,PelagicGuardianChamp,
        PelagicShamanApp,PelagicShamanVet,PelagicShamanChamp,
        DeepStingerApp,DeepStingerVet,DeepStingerChamp,
        DrownedThrallApp,DrownedThrallVet,DrownedThrallChamp,
        SeaMaggotApp,SeaMaggotVet,SeaMaggotChamp,
        UcaCrusherVet,UcaCrusherChamp,
        SquiffyGhastChamp,

        //Shared
        BrigandCutthroatApp,BrigandCutthroatVet,BrigandCutthroatChamp,
        BrigandBloodletterApp,BrigandBloodletterVet,BrigandBloodletterChamp,
        BrigandFusilierApp,BrigandFusilierVet,BrigandFusilierChamp,
        CultistBrawlerApp,CultistBrawlerVet,CultistBrawlerChamp,
        CultistAcolyteApp,CultistAcolyteVet,CultistAcolyteChamp,
        MadmanApp,MadmanVet,MadmanChamp,
        WebberApp,WebberVet,WebberChamp,
        SpitterApp,SpitterVet,SpitterChamp,
        MaggotApp,MaggotVet,MaggotChamp,
        BoneRabbleApp,BoneRabbleVet,BoneRabbleChamp,
        GargoyleVet,GargoyleChamp,
        GhoulVet,GhoulChamp,
        BrigandRaiderDarkest,
        BrigandHunterDarkest,
    ]

    AllEnemyLvlToggle.forEach(enemylvl => {
        enemylvl.style.display = 'none'
    });
}

function HideAllEnemySprites() {
    const AllEnemySprites = [

        //Ruins
        BoneSoldierSprite,BoneDefenderSprite, BoneArbalestSprite, BoneCourtierSprite,
        BoneSpearmanSprite,BoneCaptainSprite, BoneBearerSprite,

        //Weald
        FungalScratcherSprite,FungalArtillerySprite,RabidGnasherSprite,EctoplasmSprite,LargeEctoplasmSprite,
        CroneSprite,UncleanGiantSprite,HatefulViragoSprite,NecroticFungusSprite,

        //Warrens
        SwineChopperSprite,SwineWretchSprite, SwineDrummerSprite, SwineSlasherSprite,
        CarrionEaterSprite,LargeCarrionEaterSprite,SwinetaurSprite,SwineSkiverSprite,

        //Cove
        PelagicGrouperSprite,PelagicGuardianSprite,PelagicShamanSprite,DeepStingerSprite,DrownedThrallSprite,SeaMaggotSprite,
        UcaCrusherSprite,SquiffyGhastSprite,

        //Shared
        BrigandCutthroatSprite,BrigandBloodletterSprite,BrigandFusilierSprite,CultistBrawlerSprite,CultistAcolyteSprite,
        MadmanSprite,WebberSprite,SpitterSprite,MaggotSprite,BoneRabbleSprite,GargoyleSprite,GhoulSprite,
        BrigandRaiderSprite,BrigandHunterSprite,
    ]

    AllEnemySprites.forEach(enemysprite => {
        enemysprite.style.display = 'none'
    });
}

function HideAllEnemyToggleBtns() {
    const AllEnemyToggleBtns = [

        //Ruins
        BoneSoldierStatBtn,BoneDefenderStatBtn, BoneArbalestStatBtn, BoneCourtierStatBtn,
        BoneSpearmanStatBtn,BoneCaptainStatBtn, BoneBearerStatBtn,
        BoneSoldierStratBtn,BoneDefenderStratBtn, BoneArbalestStratBtn, BoneCourtierStratBtn,
        BoneSpearmanStratBtn,BoneCaptainStratBtn, BoneBearerStratBtn,

        //Weald
        FungalScratcherStatBtn,FungalArtilleryStatBtn,RabidGnasherStatBtn,EctoplasmStatBtn,LargeEctoplasmStatBtn,
        CroneStatBtn,UncleanGiantStatBtn,HatefulViragoStatBtn,NecroticFungusStatBtn,
        FungalScratcherStratBtn,FungalArtilleryStratBtn,RabidGnasherStratBtn,EctoplasmStratBtn,LargeEctoplasmStratBtn,
        CroneStratBtn,UncleanGiantStratBtn,HatefulViragoStratBtn,NecroticFungusStratBtn,

        //Warrens
        SwineChopperStatBtn,SwineChopperStratBtn,
        SwineWretchStatBtn,SwineWretchStratBtn,
        SwineDrummerStatBtn,SwineDrummerStratBtn,
        SwineSlasherStatBtn,SwineSlasherStratBtn,
        CarrionEaterStatBtn,CarrionEaterStratBtn,
        LargeCarrionEaterStatBtn,LargeCarrionEaterStratBtn,
        SwinetaurStatBtn, SwinetaurStratBtn,
        SwineSkiverStatBtn,SwineSkiverStratBtn,

        //Cove
        PelagicGrouperStatBtn,PelagicGuardianStatBtn,PelagicShamanStatBtn,DeepStingerStatBtn,DrownedThrallStatBtn,SeaMaggotStatBtn,
        UcaCrusherStatBtn,SquiffyGhastStatBtn,
        PelagicGrouperStratBtn,PelagicGuardianStratBtn,PelagicShamanStratBtn,DeepStingerStratBtn,DrownedThrallStratBtn,SeaMaggotStratBtn,
        UcaCrusherStratBtn,SquiffyGhastStratBtn,

        //Shared
        BrigandCutthroatStatBtn,BrigandBloodletterStatBtn,BrigandFusilierStatBtn,CultistBrawlerStatBtn,CultistAcolyteStatBtn,
        MadmanStatBtn,WebberStatBtn,SpitterStatBtn,MaggotStatBtn,BoneRabbleStatBtn,GargoyleStatBtn,GhoulStatBtn,
        BrigandRaiderStatBtn,BrigandHunterStatBtn,

        BrigandCutthroatStratBtn,BrigandBloodletterStratBtn,BrigandFusilierStratBtn,CultistBrawlerStratBtn,CultistAcolyteStratBtn,
        MadmanStratBtn,WebberStratBtn,SpitterStratBtn,MaggotStratBtn,BoneRabbleStratBtn,GargoyleStratBtn,GhoulStratBtn,
        BrigandRaiderStratBtn,BrigandHunterStratBtn,

    ]

    AllEnemyToggleBtns.forEach(enemytogglebtn => {
        enemytogglebtn.style.display = 'none'
    });
}

function HideAllEnemyStrats() {
    const AllEnemyStrats = [

        //Ruins
        BoneSoldierStrat,BoneDefenderStrat, BoneArbalestStrat, BoneCourtierStrat,
        BoneSpearmanStrat,BoneCaptainStrat, BoneBearerStrat,

        //Weald
        FungalScratcherStrat,FungalArtilleryStrat,RabidGnasherStrat,EctoplasmStrat,LargeEctoplasmStrat,
        CroneStrat,UncleanGiantStrat,HatefulViragoStrat,NecroticFungusStrat,

        //Warrens
        SwineChopperStrat,SwineWretchStrat, SwineDrummerStrat, SwineSlasherStrat,
        CarrionEaterStrat,LargeCarrionEaterStrat,SwinetaurStrat,SwineSkiverStrat,

        //Cove
        PelagicGrouperStrat,PelagicGuardianStrat,PelagicShamanStrat,DeepStingerStrat,DrownedThrallStrat,SeaMaggotStrat,
        UcaCrusherStrat,SquiffyGhastStrat,

        //Shared
        BrigandCutthroatStrat,BrigandBloodletterStrat,BrigandFusilierStrat,CultistBrawlerStrat,CultistAcolyteStrat,
        MadmanStrat,WebberStrat,SpitterStrat,MaggotStrat,BoneRabbleStrat,GargoyleStrat,GhoulStrat,
        BrigandRaiderStrat,BrigandHunterStrat,
    ]

    AllEnemyStrats.forEach(enemystrat => {
        enemystrat.style.display = 'none'
    });
}

const EnemyPorts = document.getElementsByClassName('enemy_port')
for (const EnemyPort of EnemyPorts) {
   EnemyPort.addEventListener('click', function() {
    PlayBtnPress();  
    HideAllEnemyStrats();     
    HideAllEnemySkills();   
    HideAllEnemySprites()
    HideAllEnemyLvlToggle()
    HideAllEnemyToggleBtns()
    HideAllEnemyStats()
})}

//Ruins Portraits

const BoneSoldierPortrait = document.getElementById('bone_soldier_nav');
const BoneDefenderPortrait = document.getElementById('bone_defender_nav');
const BoneArbalestPortrait = document.getElementById('bone_arbalest_nav');
const BoneCourtierPortrait = document.getElementById('bone_courtier_nav');
const BoneSpearmanPortrait = document.getElementById('bone_spearman_nav');
const BoneCaptainPortrait = document.getElementById('bone_captain_nav');
const BoneBearerPortrait = document.getElementById('bone_bearer_nav');


//Weald Portraits

const FungalScratcherPortrait = document.getElementById('fungal_scratcher_nav');
const FungalArtilleryPortrait = document.getElementById('fungal_artillery_nav');
const RabidGnasherPortrait = document.getElementById('rabid_gnasher_nav');
const EctoplasmPortrait = document.getElementById('ectoplasm_nav');
const LargeEctoplasmPortrait = document.getElementById('large_ectoplasm_nav');
const CronePortrait = document.getElementById('crone_nav');
const UncleanGiantPortrait = document.getElementById('unclean_giant_nav');
const HatefulViragoPortrait = document.getElementById('hateful_virago_nav');
const NecroticFungusPortrait = document.getElementById('necrotic_fungus_nav');

//Warrens Portraits

const SwineChopperPortrait = document.getElementById('swine_chopper_nav');
const SwineWretchPortrait = document.getElementById('swine_wretch_nav');
const SwineDrummerPortrait = document.getElementById('swine_drummer_nav');
const SwineSlasherPortrait = document.getElementById('swine_slasher_nav');
const CarrionEaterPortrait = document.getElementById('carrion_eater_nav');
const LargeCarrionEaterPortrait = document.getElementById('large_carrion_eater_nav');
const SwinetaurPortrait = document.getElementById('swinetaur_nav');
const SwineSkiverPortrait = document.getElementById('swine_skiver_nav');


//Cove Portraits

const PelagicGrouperPortrait = document.getElementById('pelagic_grouper_nav');
const PelagicGuardianPortrait = document.getElementById('pelagic_guardian_nav');
const PelagicShamanPortrait = document.getElementById('pelagic_shaman_nav');
const DeepStingerPortrait = document.getElementById('deep_stinger_nav');
const DrownedThrallPortrait = document.getElementById('drowned_thrall_nav');
const SeaMaggotPortrait = document.getElementById('sea_maggot_nav');
const UcaCrusherPortrait = document.getElementById('uca_crusher_nav');
const SquiffyGhastPortrait = document.getElementById('squiffy_ghast_nav');

//Shared Portraits

const BrigandCutthroatPortrait = document.getElementById('brigand_cutthroat_nav');
const BrigandBloodletterPortrait = document.getElementById('brigand_bloodletter_nav');
const BrigandFusilierPortrait = document.getElementById('brigand_fusilier_nav');
const CultistBrawlerPortrait = document.getElementById('cultist_brawler_nav');
const CultistAcolytePortrait = document.getElementById('cultist_acolyte_nav');
const MadmanPortrait = document.getElementById('madman_nav');
const WebberPortrait = document.getElementById('webber_nav');
const SpitterPortrait = document.getElementById('spitter_nav');
const MaggotPortrait = document.getElementById('maggot_nav');
const BoneRabblePortrait = document.getElementById('bone_rabble_nav');
const GargoylePortrait = document.getElementById('gargoyle_nav');
const GhoulPortrait = document.getElementById('ghoul_nav');
const BrigandRaiderPortrait = document.getElementById('brigand_raider_nav');
const BrigandHunterPortrait = document.getElementById('brigand_hunter_nav');

//Header Hiders

const HideHeadersRuins = document.getElementById('hide_headers_ruins')
const HideHeadersWeald = document.getElementById('hide_headers_weald')
const HideHeadersWarrens = document.getElementById('hide_headers_warrens')
const HideHeadersCove = document.getElementById('hide_headers_cove')
const HideHeadersShared = document.getElementById('hide_headers_shared')

//Enemy Nav Containers

const RuinsEnemies = document.getElementById('ruins_enemy_nav')
const WealdEnemies = document.getElementById('weald_enemy_nav')
const WarrensEnemies = document.getElementById('warrens_enemy_nav')
const CoveEnemies = document.getElementById('cove_enemy_nav')
const SharedEnemies = document.getElementById('shared_enemy_nav')


//Ruins Elements


//Bone Soldier
const BoneSoldierStatBtn = document.getElementById('bone_soldier_toggle1')
const BoneSoldierStratBtn = document.getElementById('bone_soldier_toggle2')
const BoneSoldierStrat = document.getElementById('bone_soldier_strat');
const BoneSoldierSprite = document.getElementById('bone_soldier_sprite')

const BoneSoldierApp = document.getElementById('bone_soldier_app')
const BoneSoldierVet = document.getElementById('bone_soldier_vet')
const BoneSoldierChamp = document.getElementById('bone_soldier_champ')

const BoneSoldierAppStat = document.getElementById('bone_soldier_app_numbers');
const BoneSoldierVetStat = document.getElementById('bone_soldier_vet_numbers');
const BoneSoldierChampStat = document.getElementById('bone_soldier_champ_numbers');

const BoneSoldierAppSkills = document.getElementById('bone_soldier_skill_app');
const BoneSoldierVetSkills = document.getElementById('bone_soldier_skill_vet');
const BoneSoldierChampSkills = document.getElementById('bone_soldier_skill_champ');

//Bone Defender
const BoneDefenderStatBtn = document.getElementById('bone_defender_toggle1')
const BoneDefenderStratBtn = document.getElementById('bone_defender_toggle2')
const BoneDefenderStrat = document.getElementById('bone_defender_strat');
const BoneDefenderSprite = document.getElementById('bone_defender_sprite')

const BoneDefenderApp = document.getElementById('bone_defender_app')
const BoneDefenderVet = document.getElementById('bone_defender_vet')
const BoneDefenderChamp = document.getElementById('bone_defender_champ')

const BoneDefenderAppStat = document.getElementById('bone_defender_app_numbers');
const BoneDefenderVetStat = document.getElementById('bone_defender_vet_numbers');
const BoneDefenderChampStat = document.getElementById('bone_defender_champ_numbers');

const BoneDefenderAppSkills = document.getElementById('bone_defender_skill_app');
const BoneDefenderVetSkills = document.getElementById('bone_defender_skill_vet');
const BoneDefenderChampSkills = document.getElementById('bone_defender_skill_champ');

//Bone Arbalest
const BoneArbalestStatBtn = document.getElementById('bone_arbalest_toggle1')
const BoneArbalestStratBtn = document.getElementById('bone_arbalest_toggle2')
const BoneArbalestStrat = document.getElementById('bone_arbalest_strat');
const BoneArbalestSprite = document.getElementById('bone_arbalest_sprite')

const BoneArbalestApp = document.getElementById('bone_arbalest_app')
const BoneArbalestVet = document.getElementById('bone_arbalest_vet')
const BoneArbalestChamp = document.getElementById('bone_arbalest_champ')

const BoneArbalestAppStat = document.getElementById('bone_arbalest_app_numbers');
const BoneArbalestVetStat = document.getElementById('bone_arbalest_vet_numbers');
const BoneArbalestChampStat = document.getElementById('bone_arbalest_champ_numbers');

const BoneArbalestAppSkills = document.getElementById('bone_arbalest_skill_app');
const BoneArbalestVetSkills = document.getElementById('bone_arbalest_skill_vet');
const BoneArbalestChampSkills = document.getElementById('bone_arbalest_skill_champ');

//Bone Courtier
const BoneCourtierStatBtn = document.getElementById('bone_courtier_toggle1')
const BoneCourtierStratBtn = document.getElementById('bone_courtier_toggle2')
const BoneCourtierStrat = document.getElementById('bone_courtier_strat');
const BoneCourtierSprite = document.getElementById('bone_courtier_sprite')

const BoneCourtierApp = document.getElementById('bone_courtier_app')
const BoneCourtierVet = document.getElementById('bone_courtier_vet')
const BoneCourtierChamp = document.getElementById('bone_courtier_champ')

const BoneCourtierAppStat = document.getElementById('bone_courtier_app_numbers');
const BoneCourtierVetStat = document.getElementById('bone_courtier_vet_numbers');
const BoneCourtierChampStat = document.getElementById('bone_courtier_champ_numbers');

const BoneCourtierAppSkills = document.getElementById('bone_courtier_skill_app');
const BoneCourtierVetSkills = document.getElementById('bone_courtier_skill_vet');
const BoneCourtierChampSkills = document.getElementById('bone_courtier_skill_champ');

//Bone Spearman
const BoneSpearmanStatBtn = document.getElementById('bone_spearman_toggle1')
const BoneSpearmanStratBtn = document.getElementById('bone_spearman_toggle2')
const BoneSpearmanStrat = document.getElementById('bone_spearman_strat');
const BoneSpearmanSprite = document.getElementById('bone_spearman_sprite')

const BoneSpearmanVet = document.getElementById('bone_spearman_vet')
const BoneSpearmanChamp = document.getElementById('bone_spearman_champ')

const BoneSpearmanVetStat = document.getElementById('bone_spearman_vet_numbers');
const BoneSpearmanChampStat = document.getElementById('bone_spearman_champ_numbers');

const BoneSpearmanVetSkills = document.getElementById('bone_spearman_skill_vet');
const BoneSpearmanChampSkills = document.getElementById('bone_spearman_skill_champ');

//Bone Captain
const BoneCaptainStatBtn = document.getElementById('bone_captain_toggle1')
const BoneCaptainStratBtn = document.getElementById('bone_captain_toggle2')
const BoneCaptainStrat = document.getElementById('bone_captain_strat');
const BoneCaptainSprite = document.getElementById('bone_captain_sprite')

const BoneCaptainVet = document.getElementById('bone_captain_vet')
const BoneCaptainChamp = document.getElementById('bone_captain_champ')

const BoneCaptainVetStat = document.getElementById('bone_captain_vet_numbers');
const BoneCaptainChampStat = document.getElementById('bone_captain_champ_numbers');

const BoneCaptainVetSkills = document.getElementById('bone_captain_skill_vet');
const BoneCaptainChampSkills = document.getElementById('bone_captain_skill_champ');

//Bone Bearer
const BoneBearerStatBtn = document.getElementById('bone_bearer_toggle1')
const BoneBearerStratBtn = document.getElementById('bone_bearer_toggle2')
const BoneBearerStrat = document.getElementById('bone_bearer_strat');
const BoneBearerSprite = document.getElementById('bone_bearer_sprite')

const BoneBearerChamp = document.getElementById('bone_bearer_champ')
const BoneBearerChampStat = document.getElementById('bone_bearer_champ_numbers');
const BoneBearerChampSkills = document.getElementById('bone_bearer_skill_champ');

//Weald Elements

//Fungal Scratcher

const FungalScratcherStatBtn = document.getElementById('fungal_scratcher_toggle1')
const FungalScratcherStratBtn = document.getElementById('fungal_scratcher_toggle2')
const FungalScratcherStrat = document.getElementById('fungal_scratcher_strat');
const FungalScratcherSprite = document.getElementById('fungal_scratcher_sprite')

const FungalScratcherApp = document.getElementById('fungal_scratcher_app')
const FungalScratcherVet = document.getElementById('fungal_scratcher_vet')
const FungalScratcherChamp = document.getElementById('fungal_scratcher_champ')

const FungalScratcherAppStat = document.getElementById('fungal_scratcher_app_numbers');
const FungalScratcherVetStat = document.getElementById('fungal_scratcher_vet_numbers');
const FungalScratcherChampStat = document.getElementById('fungal_scratcher_champ_numbers');

const FungalScratcherAppSkills = document.getElementById('fungal_scratcher_skill_app');
const FungalScratcherVetSkills = document.getElementById('fungal_scratcher_skill_vet');
const FungalScratcherChampSkills = document.getElementById('fungal_scratcher_skill_champ');

//Fungal Artillery

const FungalArtilleryStatBtn = document.getElementById('fungal_artillery_toggle1')
const FungalArtilleryStratBtn = document.getElementById('fungal_artillery_toggle2')
const FungalArtilleryStrat = document.getElementById('fungal_artillery_strat');
const FungalArtillerySprite = document.getElementById('fungal_artillery_sprite')

const FungalArtilleryApp = document.getElementById('fungal_artillery_app')
const FungalArtilleryVet = document.getElementById('fungal_artillery_vet')
const FungalArtilleryChamp = document.getElementById('fungal_artillery_champ')

const FungalArtilleryAppStat = document.getElementById('fungal_artillery_app_numbers');
const FungalArtilleryVetStat = document.getElementById('fungal_artillery_vet_numbers');
const FungalArtilleryChampStat = document.getElementById('fungal_artillery_champ_numbers');

const FungalArtilleryAppSkills = document.getElementById('fungal_artillery_skill_app');
const FungalArtilleryVetSkills = document.getElementById('fungal_artillery_skill_vet');
const FungalArtilleryChampSkills = document.getElementById('fungal_artillery_skill_champ');

//Rabid Gnasher

const RabidGnasherStatBtn = document.getElementById('rabid_gnasher_toggle1')
const RabidGnasherStratBtn = document.getElementById('rabid_gnasher_toggle2')
const RabidGnasherStrat = document.getElementById('rabid_gnasher_strat');
const RabidGnasherSprite = document.getElementById('rabid_gnasher_sprite')

const RabidGnasherApp = document.getElementById('rabid_gnasher_app')
const RabidGnasherVet = document.getElementById('rabid_gnasher_vet')
const RabidGnasherChamp = document.getElementById('rabid_gnasher_champ')

const RabidGnasherAppStat = document.getElementById('rabid_gnasher_app_numbers');
const RabidGnasherVetStat = document.getElementById('rabid_gnasher_vet_numbers');
const RabidGnasherChampStat = document.getElementById('rabid_gnasher_champ_numbers');

const RabidGnasherAppSkills = document.getElementById('rabid_gnasher_skill_app');
const RabidGnasherVetSkills = document.getElementById('rabid_gnasher_skill_vet');
const RabidGnasherChampSkills = document.getElementById('rabid_gnasher_skill_champ');

//Ectoplasm

const EctoplasmStatBtn = document.getElementById('ectoplasm_toggle1')
const EctoplasmStratBtn = document.getElementById('ectoplasm_toggle2')
const EctoplasmStrat = document.getElementById('ectoplasm_strat');
const EctoplasmSprite = document.getElementById('ectoplasm_sprite')

const EctoplasmApp = document.getElementById('ectoplasm_app')
const EctoplasmVet = document.getElementById('ectoplasm_vet')
const EctoplasmChamp = document.getElementById('ectoplasm_champ')

const EctoplasmAppStat = document.getElementById('ectoplasm_app_numbers');
const EctoplasmVetStat = document.getElementById('ectoplasm_vet_numbers');
const EctoplasmChampStat = document.getElementById('ectoplasm_champ_numbers');

const EctoplasmAppSkills = document.getElementById('ectoplasm_skill_app');
const EctoplasmVetSkills = document.getElementById('ectoplasm_skill_vet');
const EctoplasmChampSkills = document.getElementById('ectoplasm_skill_champ');

//Large Ectoplasm

const LargeEctoplasmStatBtn = document.getElementById('large_ectoplasm_toggle1')
const LargeEctoplasmStratBtn = document.getElementById('large_ectoplasm_toggle2')
const LargeEctoplasmStrat = document.getElementById('large_ectoplasm_strat');
const LargeEctoplasmSprite = document.getElementById('large_ectoplasm_sprite')

const LargeEctoplasmApp = document.getElementById('large_ectoplasm_app')
const LargeEctoplasmVet = document.getElementById('large_ectoplasm_vet')
const LargeEctoplasmChamp = document.getElementById('large_ectoplasm_champ')

const LargeEctoplasmAppStat = document.getElementById('large_ectoplasm_app_numbers');
const LargeEctoplasmVetStat = document.getElementById('large_ectoplasm_vet_numbers');
const LargeEctoplasmChampStat = document.getElementById('large_ectoplasm_champ_numbers');

const LargeEctoplasmAppSkills = document.getElementById('large_ectoplasm_skill_app');
const LargeEctoplasmVetSkills = document.getElementById('large_ectoplasm_skill_vet');
const LargeEctoplasmChampSkills = document.getElementById('large_ectoplasm_skill_champ');

//Crone

const CroneStatBtn = document.getElementById('crone_toggle1')
const CroneStratBtn = document.getElementById('crone_toggle2')
const CroneStrat = document.getElementById('crone_strat');
const CroneSprite = document.getElementById('crone_sprite')

const CroneVet = document.getElementById('crone_vet')
const CroneChamp = document.getElementById('crone_champ')

const CroneVetStat = document.getElementById('crone_vet_numbers');
const CroneChampStat = document.getElementById('crone_champ_numbers');

const CroneVetSkills = document.getElementById('crone_skill_vet');
const CroneChampSkills = document.getElementById('crone_skill_champ');

//Unclean Giant

const UncleanGiantStatBtn = document.getElementById('unclean_giant_toggle1')
const UncleanGiantStratBtn = document.getElementById('unclean_giant_toggle2')
const UncleanGiantStrat = document.getElementById('unclean_giant_strat');
const UncleanGiantSprite = document.getElementById('unclean_giant_sprite')

const UncleanGiantVet = document.getElementById('unclean_giant_vet')
const UncleanGiantChamp = document.getElementById('unclean_giant_champ')

const UncleanGiantVetStat = document.getElementById('unclean_giant_vet_numbers');
const UncleanGiantChampStat = document.getElementById('unclean_giant_champ_numbers');

const UncleanGiantVetSkills = document.getElementById('unclean_giant_skill_vet');
const UncleanGiantChampSkills = document.getElementById('unclean_giant_skill_champ');

//Hateful Virago

const HatefulViragoStatBtn = document.getElementById('hateful_virago_toggle1')
const HatefulViragoStratBtn = document.getElementById('hateful_virago_toggle2')
const HatefulViragoStrat = document.getElementById('hateful_virago_strat');
const HatefulViragoSprite = document.getElementById('hateful_virago_sprite')

const HatefulViragoChamp = document.getElementById('hateful_virago_champ')
const HatefulViragoChampStat = document.getElementById('hateful_virago_champ_numbers');
const HatefulViragoChampSkills = document.getElementById('hateful_virago_skill_champ');

//Necrotic Fungus

const NecroticFungusStatBtn = document.getElementById('necrotic_fungus_toggle1')
const NecroticFungusStratBtn = document.getElementById('necrotic_fungus_toggle2')
const NecroticFungusStrat = document.getElementById('necrotic_fungus_strat');
const NecroticFungusSprite = document.getElementById('necrotic_fungus_sprite')

const NecroticFungusChamp = document.getElementById('necrotic_fungus_champ')
const NecroticFungusChampStat = document.getElementById('necrotic_fungus_champ_numbers');
const NecroticFungusChampSkills = document.getElementById('necrotic_fungus_skill_champ');


//Warrens Elements

//Chopper
const SwineChopperStatBtn = document.getElementById('swine_chopper_toggle1')
const SwineChopperStratBtn = document.getElementById('swine_chopper_toggle2')
const SwineChopperStrat = document.getElementById('swine_chopper_strat');
const SwineChopperSprite = document.getElementById('swine_chopper_sprite')

const SwineChopperApp = document.getElementById('swine_chopper_app')
const SwineChopperVet = document.getElementById('swine_chopper_vet')
const SwineChopperChamp = document.getElementById('swine_chopper_champ')

const SwineChopperAppStat = document.getElementById('swine_chopper_app_numbers');
const SwineChopperVetStat = document.getElementById('swine_chopper_vet_numbers');
const SwineChopperChampStat = document.getElementById('swine_chopper_champ_numbers');

const SwineChopperAppSkills = document.getElementById('swine_chopper_skill_app');
const SwineChopperVetSkills = document.getElementById('swine_chopper_skill_vet');
const SwineChopperChampSkills = document.getElementById('swine_chopper_skill_champ');

//Wretch
const SwineWretchStatBtn = document.getElementById('swine_wretch_toggle1')
const SwineWretchStratBtn = document.getElementById('swine_wretch_toggle2')
const SwineWretchStrat = document.getElementById('swine_wretch_strat');
const SwineWretchSprite = document.getElementById('swine_wretch_sprite')

const SwineWretchApp = document.getElementById('swine_wretch_app')
const SwineWretchVet = document.getElementById('swine_wretch_vet')
const SwineWretchChamp = document.getElementById('swine_wretch_champ')

const SwineWretchAppStat = document.getElementById('swine_wretch_app_numbers');
const SwineWretchVetStat = document.getElementById('swine_wretch_vet_numbers');
const SwineWretchChampStat = document.getElementById('swine_wretch_champ_numbers');

const SwineWretchAppSkills = document.getElementById('swine_wretch_skill_app');
const SwineWretchVetSkills = document.getElementById('swine_wretch_skill_vet');
const SwineWretchChampSkills = document.getElementById('swine_wretch_skill_champ');

//Drummer
const SwineDrummerStatBtn = document.getElementById('swine_drummer_toggle1')
const SwineDrummerStratBtn = document.getElementById('swine_drummer_toggle2')
const SwineDrummerStrat = document.getElementById('swine_drummer_strat');
const SwineDrummerSprite = document.getElementById('swine_drummer_sprite')

const SwineDrummerApp = document.getElementById('swine_drummer_app')
const SwineDrummerVet = document.getElementById('swine_drummer_vet')
const SwineDrummerChamp = document.getElementById('swine_drummer_champ')

const SwineDrummerAppStat = document.getElementById('swine_drummer_app_numbers');
const SwineDrummerVetStat = document.getElementById('swine_drummer_vet_numbers');
const SwineDrummerChampStat = document.getElementById('swine_drummer_champ_numbers');

const SwineDrummerAppSkills = document.getElementById('swine_drummer_skill_app');
const SwineDrummerVetSkills = document.getElementById('swine_drummer_skill_vet');
const SwineDrummerChampSkills = document.getElementById('swine_drummer_skill_champ');

//Slasher
const SwineSlasherStatBtn = document.getElementById('swine_slasher_toggle1')
const SwineSlasherStratBtn = document.getElementById('swine_slasher_toggle2')
const SwineSlasherStrat = document.getElementById('swine_slasher_strat');
const SwineSlasherSprite = document.getElementById('swine_slasher_sprite')
const SwineSlasherApp = document.getElementById('swine_slasher_app')
const SwineSlasherVet = document.getElementById('swine_slasher_vet')
const SwineSlasherChamp = document.getElementById('swine_slasher_champ')

const SwineSlasherAppStat = document.getElementById('swine_slasher_app_numbers');
const SwineSlasherVetStat = document.getElementById('swine_slasher_vet_numbers');
const SwineSlasherChampStat = document.getElementById('swine_slasher_champ_numbers');

const SwineSlasherAppSkills = document.getElementById('swine_slasher_skill_app');
const SwineSlasherVetSkills = document.getElementById('swine_slasher_skill_vet');
const SwineSlasherChampSkills = document.getElementById('swine_slasher_skill_champ');

//Carrion Eater
const CarrionEaterStatBtn = document.getElementById('carrion_eater_toggle1')
const CarrionEaterStratBtn = document.getElementById('carrion_eater_toggle2')
const CarrionEaterStrat = document.getElementById('carrion_eater_strat');
const CarrionEaterSprite = document.getElementById('carrion_eater_sprite')
const CarrionEaterApp = document.getElementById('carrion_eater_app')
const CarrionEaterVet = document.getElementById('carrion_eater_vet')
const CarrionEaterChamp = document.getElementById('carrion_eater_champ')

const CarrionEaterAppStat = document.getElementById('carrion_eater_app_numbers');
const CarrionEaterVetStat = document.getElementById('carrion_eater_vet_numbers');
const CarrionEaterChampStat = document.getElementById('carrion_eater_champ_numbers');

const CarrionEaterAppSkills = document.getElementById('carrion_eater_skill_app');
const CarrionEaterVetSkills = document.getElementById('carrion_eater_skill_vet');
const CarrionEaterChampSkills = document.getElementById('carrion_eater_skill_champ');

//Large Carrion Eater
const LargeCarrionEaterStatBtn = document.getElementById('large_carrion_eater_toggle1')
const LargeCarrionEaterStratBtn = document.getElementById('large_carrion_eater_toggle2')
const LargeCarrionEaterStrat = document.getElementById('large_carrion_eater_strat');
const LargeCarrionEaterSprite = document.getElementById('large_carrion_eater_sprite')
const LargeCarrionEaterVet = document.getElementById('large_carrion_eater_vet')
const LargeCarrionEaterChamp = document.getElementById('large_carrion_eater_champ')

const LargeCarrionEaterVetStat = document.getElementById('large_carrion_eater_vet_numbers');
const LargeCarrionEaterChampStat = document.getElementById('large_carrion_eater_champ_numbers');

const LargeCarrionEaterVetSkills = document.getElementById('large_carrion_eater_skill_vet');
const LargeCarrionEaterChampSkills = document.getElementById('large_carrion_eater_skill_champ');

//Swinetaur
const SwinetaurStatBtn = document.getElementById('swinetaur_toggle1')
const SwinetaurStratBtn = document.getElementById('swinetaur_toggle2')
const SwinetaurStrat = document.getElementById('swinetaur_strat');
const SwinetaurSprite = document.getElementById('swinetaur_sprite')
const SwinetaurVet = document.getElementById('swinetaur_vet')
const SwinetaurChamp = document.getElementById('swinetaur_champ')

const SwinetaurVetStat = document.getElementById('swinetaur_vet_numbers');
const SwinetaurChampStat = document.getElementById('swinetaur_champ_numbers');

const SwinetaurVetSkills = document.getElementById('swinetaur_skill_vet');
const SwinetaurChampSkills = document.getElementById('swinetaur_skill_champ');

//Swine Skiver
const SwineSkiverStatBtn = document.getElementById('swine_skiver_toggle1')
const SwineSkiverStratBtn = document.getElementById('swine_skiver_toggle2')
const SwineSkiverStrat = document.getElementById('swine_skiver_strat');
const SwineSkiverSprite = document.getElementById('swine_skiver_sprite')

const SwineSkiverChamp = document.getElementById('swine_skiver_champ')
const SwineSkiverChampStat = document.getElementById('swine_skiver_champ_numbers')
const SwineSkiverChampSkills = document.getElementById('swine_skiver_skill_champ')


//Cove Elements

//Pelagic Grouper

const PelagicGrouperStatBtn = document.getElementById('pelagic_grouper_toggle1')
const PelagicGrouperStratBtn = document.getElementById('pelagic_grouper_toggle2')
const PelagicGrouperStrat = document.getElementById('pelagic_grouper_strat');
const PelagicGrouperSprite = document.getElementById('pelagic_grouper_sprite')

const PelagicGrouperApp = document.getElementById('pelagic_grouper_app')
const PelagicGrouperVet = document.getElementById('pelagic_grouper_vet')
const PelagicGrouperChamp = document.getElementById('pelagic_grouper_champ')

const PelagicGrouperAppStat = document.getElementById('pelagic_grouper_app_numbers');
const PelagicGrouperVetStat = document.getElementById('pelagic_grouper_vet_numbers');
const PelagicGrouperChampStat = document.getElementById('pelagic_grouper_champ_numbers');

const PelagicGrouperAppSkills = document.getElementById('pelagic_grouper_skill_app');
const PelagicGrouperVetSkills = document.getElementById('pelagic_grouper_skill_vet');
const PelagicGrouperChampSkills = document.getElementById('pelagic_grouper_skill_champ');

//Pelagic Guardian

const PelagicGuardianStatBtn = document.getElementById('pelagic_guardian_toggle1')
const PelagicGuardianStratBtn = document.getElementById('pelagic_guardian_toggle2')
const PelagicGuardianStrat = document.getElementById('pelagic_guardian_strat');
const PelagicGuardianSprite = document.getElementById('pelagic_guardian_sprite')

const PelagicGuardianApp = document.getElementById('pelagic_guardian_app')
const PelagicGuardianVet = document.getElementById('pelagic_guardian_vet')
const PelagicGuardianChamp = document.getElementById('pelagic_guardian_champ')

const PelagicGuardianAppStat = document.getElementById('pelagic_guardian_app_numbers');
const PelagicGuardianVetStat = document.getElementById('pelagic_guardian_vet_numbers');
const PelagicGuardianChampStat = document.getElementById('pelagic_guardian_champ_numbers');

const PelagicGuardianAppSkills = document.getElementById('pelagic_guardian_skill_app');
const PelagicGuardianVetSkills = document.getElementById('pelagic_guardian_skill_vet');
const PelagicGuardianChampSkills = document.getElementById('pelagic_guardian_skill_champ');

//Pelagic Shaman

const PelagicShamanStatBtn = document.getElementById('pelagic_shaman_toggle1')
const PelagicShamanStratBtn = document.getElementById('pelagic_shaman_toggle2')
const PelagicShamanStrat = document.getElementById('pelagic_shaman_strat');
const PelagicShamanSprite = document.getElementById('pelagic_shaman_sprite')

const PelagicShamanApp = document.getElementById('pelagic_shaman_app')
const PelagicShamanVet = document.getElementById('pelagic_shaman_vet')
const PelagicShamanChamp = document.getElementById('pelagic_shaman_champ')

const PelagicShamanAppStat = document.getElementById('pelagic_shaman_app_numbers');
const PelagicShamanVetStat = document.getElementById('pelagic_shaman_vet_numbers');
const PelagicShamanChampStat = document.getElementById('pelagic_shaman_champ_numbers');

const PelagicShamanAppSkills = document.getElementById('pelagic_shaman_skill_app');
const PelagicShamanVetSkills = document.getElementById('pelagic_shaman_skill_vet');
const PelagicShamanChampSkills = document.getElementById('pelagic_shaman_skill_champ');

//Deep Stinger

const DeepStingerStatBtn = document.getElementById('deep_stinger_toggle1')
const DeepStingerStratBtn = document.getElementById('deep_stinger_toggle2')
const DeepStingerStrat = document.getElementById('deep_stinger_strat');
const DeepStingerSprite = document.getElementById('deep_stinger_sprite')

const DeepStingerApp = document.getElementById('deep_stinger_app')
const DeepStingerVet = document.getElementById('deep_stinger_vet')
const DeepStingerChamp = document.getElementById('deep_stinger_champ')

const DeepStingerAppStat = document.getElementById('deep_stinger_app_numbers');
const DeepStingerVetStat = document.getElementById('deep_stinger_vet_numbers');
const DeepStingerChampStat = document.getElementById('deep_stinger_champ_numbers');

const DeepStingerAppSkills = document.getElementById('deep_stinger_skill_app');
const DeepStingerVetSkills = document.getElementById('deep_stinger_skill_vet');
const DeepStingerChampSkills = document.getElementById('deep_stinger_skill_champ');

//Drowned Thrall

const DrownedThrallStatBtn = document.getElementById('drowned_thrall_toggle1')
const DrownedThrallStratBtn = document.getElementById('drowned_thrall_toggle2')
const DrownedThrallStrat = document.getElementById('drowned_thrall_strat');
const DrownedThrallSprite = document.getElementById('drowned_thrall_sprite')

const DrownedThrallApp = document.getElementById('drowned_thrall_app')
const DrownedThrallVet = document.getElementById('drowned_thrall_vet')
const DrownedThrallChamp = document.getElementById('drowned_thrall_champ')

const DrownedThrallAppStat = document.getElementById('drowned_thrall_app_numbers');
const DrownedThrallVetStat = document.getElementById('drowned_thrall_vet_numbers');
const DrownedThrallChampStat = document.getElementById('drowned_thrall_champ_numbers');

const DrownedThrallAppSkills = document.getElementById('drowned_thrall_skill_app');
const DrownedThrallVetSkills = document.getElementById('drowned_thrall_skill_vet');
const DrownedThrallChampSkills = document.getElementById('drowned_thrall_skill_champ');

//Sea Maggot

const SeaMaggotStatBtn = document.getElementById('sea_maggot_toggle1')
const SeaMaggotStratBtn = document.getElementById('sea_maggot_toggle2')
const SeaMaggotStrat = document.getElementById('sea_maggot_strat');
const SeaMaggotSprite = document.getElementById('sea_maggot_sprite')

const SeaMaggotApp = document.getElementById('sea_maggot_app')
const SeaMaggotVet = document.getElementById('sea_maggot_vet')
const SeaMaggotChamp = document.getElementById('sea_maggot_champ')

const SeaMaggotAppStat = document.getElementById('sea_maggot_app_numbers');
const SeaMaggotVetStat = document.getElementById('sea_maggot_vet_numbers');
const SeaMaggotChampStat = document.getElementById('sea_maggot_champ_numbers');

const SeaMaggotAppSkills = document.getElementById('sea_maggot_skill_app');
const SeaMaggotVetSkills = document.getElementById('sea_maggot_skill_vet');
const SeaMaggotChampSkills = document.getElementById('sea_maggot_skill_champ');

//Uca Crusher

const UcaCrusherStatBtn = document.getElementById('uca_crusher_toggle1')
const UcaCrusherStratBtn = document.getElementById('uca_crusher_toggle2')
const UcaCrusherStrat = document.getElementById('uca_crusher_strat');
const UcaCrusherSprite = document.getElementById('uca_crusher_sprite')

const UcaCrusherVet = document.getElementById('uca_crusher_vet')
const UcaCrusherChamp = document.getElementById('uca_crusher_champ')

const UcaCrusherVetStat = document.getElementById('uca_crusher_vet_numbers');
const UcaCrusherChampStat = document.getElementById('uca_crusher_champ_numbers');

const UcaCrusherVetSkills = document.getElementById('uca_crusher_skill_vet');
const UcaCrusherChampSkills = document.getElementById('uca_crusher_skill_champ');

//Squiffy Ghast

const SquiffyGhastStatBtn = document.getElementById('squiffy_ghast_toggle1')
const SquiffyGhastStratBtn = document.getElementById('squiffy_ghast_toggle2')
const SquiffyGhastStrat = document.getElementById('squiffy_ghast_strat');
const SquiffyGhastSprite = document.getElementById('squiffy_ghast_sprite')

const SquiffyGhastChamp = document.getElementById('squiffy_ghast_champ')
const SquiffyGhastChampStat = document.getElementById('squiffy_ghast_champ_numbers');
const SquiffyGhastChampSkills = document.getElementById('squiffy_ghast_skill_champ');


//Shared Elements

//Brigand Cutthroat

const BrigandCutthroatStatBtn = document.getElementById('brigand_cutthroat_toggle1')
const BrigandCutthroatStratBtn = document.getElementById('brigand_cutthroat_toggle2')
const BrigandCutthroatStrat = document.getElementById('brigand_cutthroat_strat');
const BrigandCutthroatSprite = document.getElementById('brigand_cutthroat_sprite')

const BrigandCutthroatApp = document.getElementById('brigand_cutthroat_app')
const BrigandCutthroatVet = document.getElementById('brigand_cutthroat_vet')
const BrigandCutthroatChamp = document.getElementById('brigand_cutthroat_champ')

const BrigandCutthroatAppStat = document.getElementById('brigand_cutthroat_app_numbers');
const BrigandCutthroatVetStat = document.getElementById('brigand_cutthroat_vet_numbers');
const BrigandCutthroatChampStat = document.getElementById('brigand_cutthroat_champ_numbers');

const BrigandCutthroatAppSkills = document.getElementById('brigand_cutthroat_skill_app');
const BrigandCutthroatVetSkills = document.getElementById('brigand_cutthroat_skill_vet');
const BrigandCutthroatChampSkills = document.getElementById('brigand_cutthroat_skill_champ');

//Brigand Bloodletter

const BrigandBloodletterStatBtn = document.getElementById('brigand_bloodletter_toggle1')
const BrigandBloodletterStratBtn = document.getElementById('brigand_bloodletter_toggle2')
const BrigandBloodletterStrat = document.getElementById('brigand_bloodletter_strat');
const BrigandBloodletterSprite = document.getElementById('brigand_bloodletter_sprite')

const BrigandBloodletterApp = document.getElementById('brigand_bloodletter_app')
const BrigandBloodletterVet = document.getElementById('brigand_bloodletter_vet')
const BrigandBloodletterChamp = document.getElementById('brigand_bloodletter_champ')

const BrigandBloodletterAppStat = document.getElementById('brigand_bloodletter_app_numbers');
const BrigandBloodletterVetStat = document.getElementById('brigand_bloodletter_vet_numbers');
const BrigandBloodletterChampStat = document.getElementById('brigand_bloodletter_champ_numbers');

const BrigandBloodletterAppSkills = document.getElementById('brigand_bloodletter_skill_app');
const BrigandBloodletterVetSkills = document.getElementById('brigand_bloodletter_skill_vet');
const BrigandBloodletterChampSkills = document.getElementById('brigand_bloodletter_skill_champ');

//Brigand Fusilier

const BrigandFusilierStatBtn = document.getElementById('brigand_fusilier_toggle1')
const BrigandFusilierStratBtn = document.getElementById('brigand_fusilier_toggle2')
const BrigandFusilierStrat = document.getElementById('brigand_fusilier_strat');
const BrigandFusilierSprite = document.getElementById('brigand_fusilier_sprite')

const BrigandFusilierApp = document.getElementById('brigand_fusilier_app')
const BrigandFusilierVet = document.getElementById('brigand_fusilier_vet')
const BrigandFusilierChamp = document.getElementById('brigand_fusilier_champ')

const BrigandFusilierAppStat = document.getElementById('brigand_fusilier_app_numbers');
const BrigandFusilierVetStat = document.getElementById('brigand_fusilier_vet_numbers');
const BrigandFusilierChampStat = document.getElementById('brigand_fusilier_champ_numbers');

const BrigandFusilierAppSkills = document.getElementById('brigand_fusilier_skill_app');
const BrigandFusilierVetSkills = document.getElementById('brigand_fusilier_skill_vet');
const BrigandFusilierChampSkills = document.getElementById('brigand_fusilier_skill_champ');

//Cultist Brawler

const CultistBrawlerStatBtn = document.getElementById('cultist_brawler_toggle1')
const CultistBrawlerStratBtn = document.getElementById('cultist_brawler_toggle2')
const CultistBrawlerStrat = document.getElementById('cultist_brawler_strat');
const CultistBrawlerSprite = document.getElementById('cultist_brawler_sprite')

const CultistBrawlerApp = document.getElementById('cultist_brawler_app')
const CultistBrawlerVet = document.getElementById('cultist_brawler_vet')
const CultistBrawlerChamp = document.getElementById('cultist_brawler_champ')

const CultistBrawlerAppStat = document.getElementById('cultist_brawler_app_numbers');
const CultistBrawlerVetStat = document.getElementById('cultist_brawler_vet_numbers');
const CultistBrawlerChampStat = document.getElementById('cultist_brawler_champ_numbers');

const CultistBrawlerAppSkills = document.getElementById('cultist_brawler_skill_app');
const CultistBrawlerVetSkills = document.getElementById('cultist_brawler_skill_vet');
const CultistBrawlerChampSkills = document.getElementById('cultist_brawler_skill_champ');

//Cultist Acolyte

const CultistAcolyteStatBtn = document.getElementById('cultist_acolyte_toggle1')
const CultistAcolyteStratBtn = document.getElementById('cultist_acolyte_toggle2')
const CultistAcolyteStrat = document.getElementById('cultist_acolyte_strat');
const CultistAcolyteSprite = document.getElementById('cultist_acolyte_sprite')

const CultistAcolyteApp = document.getElementById('cultist_acolyte_app')
const CultistAcolyteVet = document.getElementById('cultist_acolyte_vet')
const CultistAcolyteChamp = document.getElementById('cultist_acolyte_champ')

const CultistAcolyteAppStat = document.getElementById('cultist_acolyte_app_numbers');
const CultistAcolyteVetStat = document.getElementById('cultist_acolyte_vet_numbers');
const CultistAcolyteChampStat = document.getElementById('cultist_acolyte_champ_numbers');

const CultistAcolyteAppSkills = document.getElementById('cultist_acolyte_skill_app');
const CultistAcolyteVetSkills = document.getElementById('cultist_acolyte_skill_vet');
const CultistAcolyteChampSkills = document.getElementById('cultist_acolyte_skill_champ');

//Madman

const MadmanStatBtn = document.getElementById('madman_toggle1')
const MadmanStratBtn = document.getElementById('madman_toggle2')
const MadmanStrat = document.getElementById('madman_strat');
const MadmanSprite = document.getElementById('madman_sprite')

const MadmanApp = document.getElementById('madman_app')
const MadmanVet = document.getElementById('madman_vet')
const MadmanChamp = document.getElementById('madman_champ')

const MadmanAppStat = document.getElementById('madman_app_numbers');
const MadmanVetStat = document.getElementById('madman_vet_numbers');
const MadmanChampStat = document.getElementById('madman_champ_numbers');

const MadmanAppSkills = document.getElementById('madman_skill_app');
const MadmanVetSkills = document.getElementById('madman_skill_vet');
const MadmanChampSkills = document.getElementById('madman_skill_champ');

//Webber

const WebberStatBtn = document.getElementById('webber_toggle1')
const WebberStratBtn = document.getElementById('webber_toggle2')
const WebberStrat = document.getElementById('webber_strat');
const WebberSprite = document.getElementById('webber_sprite')

const WebberApp = document.getElementById('webber_app')
const WebberVet = document.getElementById('webber_vet')
const WebberChamp = document.getElementById('webber_champ')

const WebberAppStat = document.getElementById('webber_app_numbers');
const WebberVetStat = document.getElementById('webber_vet_numbers');
const WebberChampStat = document.getElementById('webber_champ_numbers');

const WebberAppSkills = document.getElementById('webber_skill_app');
const WebberVetSkills = document.getElementById('webber_skill_vet');
const WebberChampSkills = document.getElementById('webber_skill_champ');

//Spitter

const SpitterStatBtn = document.getElementById('spitter_toggle1')
const SpitterStratBtn = document.getElementById('spitter_toggle2')
const SpitterStrat = document.getElementById('spitter_strat');
const SpitterSprite = document.getElementById('spitter_sprite')

const SpitterApp = document.getElementById('spitter_app')
const SpitterVet = document.getElementById('spitter_vet')
const SpitterChamp = document.getElementById('spitter_champ')

const SpitterAppStat = document.getElementById('spitter_app_numbers');
const SpitterVetStat = document.getElementById('spitter_vet_numbers');
const SpitterChampStat = document.getElementById('spitter_champ_numbers');

const SpitterAppSkills = document.getElementById('spitter_skill_app');
const SpitterVetSkills = document.getElementById('spitter_skill_vet');
const SpitterChampSkills = document.getElementById('spitter_skill_champ');

//Maggot

const MaggotStatBtn = document.getElementById('maggot_toggle1')
const MaggotStratBtn = document.getElementById('maggot_toggle2')
const MaggotStrat = document.getElementById('maggot_strat');
const MaggotSprite = document.getElementById('maggot_sprite')

const MaggotApp = document.getElementById('maggot_app')
const MaggotVet = document.getElementById('maggot_vet')
const MaggotChamp = document.getElementById('maggot_champ')

const MaggotAppStat = document.getElementById('maggot_app_numbers');
const MaggotVetStat = document.getElementById('maggot_vet_numbers');
const MaggotChampStat = document.getElementById('maggot_champ_numbers');

const MaggotAppSkills = document.getElementById('maggot_skill_app');
const MaggotVetSkills = document.getElementById('maggot_skill_vet');
const MaggotChampSkills = document.getElementById('maggot_skill_champ');

//Bone Rabble

const BoneRabbleStatBtn = document.getElementById('bone_rabble_toggle1')
const BoneRabbleStratBtn = document.getElementById('bone_rabble_toggle2')
const BoneRabbleStrat = document.getElementById('bone_rabble_strat');
const BoneRabbleSprite = document.getElementById('bone_rabble_sprite')

const BoneRabbleApp = document.getElementById('bone_rabble_app')
const BoneRabbleVet = document.getElementById('bone_rabble_vet')
const BoneRabbleChamp = document.getElementById('bone_rabble_champ')

const BoneRabbleAppStat = document.getElementById('bone_rabble_app_numbers');
const BoneRabbleVetStat = document.getElementById('bone_rabble_vet_numbers');
const BoneRabbleChampStat = document.getElementById('bone_rabble_champ_numbers');

const BoneRabbleAppSkills = document.getElementById('bone_rabble_skill_app');
const BoneRabbleVetSkills = document.getElementById('bone_rabble_skill_vet');
const BoneRabbleChampSkills = document.getElementById('bone_rabble_skill_champ');

//Gargoyle

const GargoyleStatBtn = document.getElementById('gargoyle_toggle1')
const GargoyleStratBtn = document.getElementById('gargoyle_toggle2')
const GargoyleStrat = document.getElementById('gargoyle_strat');
const GargoyleSprite = document.getElementById('gargoyle_sprite')

const GargoyleVet = document.getElementById('gargoyle_vet')
const GargoyleChamp = document.getElementById('gargoyle_champ')

const GargoyleVetStat = document.getElementById('gargoyle_vet_numbers');
const GargoyleChampStat = document.getElementById('gargoyle_champ_numbers');

const GargoyleVetSkills = document.getElementById('gargoyle_skill_vet');
const GargoyleChampSkills = document.getElementById('gargoyle_skill_champ');

//Ghoul

const GhoulStatBtn = document.getElementById('ghoul_toggle1')
const GhoulStratBtn = document.getElementById('ghoul_toggle2')
const GhoulStrat = document.getElementById('ghoul_strat');
const GhoulSprite = document.getElementById('ghoul_sprite')

const GhoulVet = document.getElementById('ghoul_vet')
const GhoulChamp = document.getElementById('ghoul_champ')

const GhoulVetStat = document.getElementById('ghoul_vet_numbers');
const GhoulChampStat = document.getElementById('ghoul_champ_numbers');

const GhoulVetSkills = document.getElementById('ghoul_skill_vet');
const GhoulChampSkills = document.getElementById('ghoul_skill_champ');

//Brigand Raider

const BrigandRaiderStatBtn = document.getElementById('brigand_raider_toggle1')
const BrigandRaiderStratBtn = document.getElementById('brigand_raider_toggle2')
const BrigandRaiderStrat = document.getElementById('brigand_raider_strat');
const BrigandRaiderSprite = document.getElementById('brigand_raider_sprite')

const BrigandRaiderDarkest = document.getElementById('brigand_raider_darkest')
const BrigandRaiderDarkestStat = document.getElementById('brigand_raider_darkest_numbers');
const BrigandRaiderDarkestSkills = document.getElementById('brigand_raider_skill_darkest');

//Brigand Hunter

const BrigandHunterStatBtn = document.getElementById('brigand_hunter_toggle1')
const BrigandHunterStratBtn = document.getElementById('brigand_hunter_toggle2')
const BrigandHunterStrat = document.getElementById('brigand_hunter_strat');
const BrigandHunterSprite = document.getElementById('brigand_hunter_sprite')

const BrigandHunterDarkest = document.getElementById('brigand_hunter_darkest')
const BrigandHunterDarkestStat = document.getElementById('brigand_hunter_darkest_numbers');
const BrigandHunterDarkestSkills = document.getElementById('brigand_hunter_skill_darkest');



//Adding Event Listeners to Portraits

//Ruins

BoneSoldierPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'
   
    BoneSoldierStrat.style.display = 'none' 
    BoneSoldierSprite.style.display = 'block'
    BoneSoldierStatBtn.style.display = 'block'
    BoneSoldierStratBtn.style.display = 'block'

    BoneSoldierApp.style.display = 'block'
    BoneSoldierVet.style.display = 'block'  
    BoneSoldierChamp.style.display = 'block' 
    BoneSoldierVetStat.style.display = 'none'
    BoneSoldierChampStat.style.display = 'none'
    BoneSoldierAppStat.style.display = 'block'
    BoneSoldierAppSkills.style.display = 'block'
    BoneSoldierVetSkills.style.display = 'none'
    BoneSoldierChampSkills.style.display = 'none' 

})

BoneDefenderPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'
   
    BoneDefenderStrat.style.display = 'none' 
    BoneDefenderSprite.style.display = 'block'
    BoneDefenderStatBtn.style.display = 'block'
    BoneDefenderStratBtn.style.display = 'block'

    BoneDefenderApp.style.display = 'block'
    BoneDefenderVet.style.display = 'block'  
    BoneDefenderChamp.style.display = 'block' 
    BoneDefenderVetStat.style.display = 'none'
    BoneDefenderChampStat.style.display = 'none'
    BoneDefenderAppStat.style.display = 'block'
    BoneDefenderAppSkills.style.display = 'block'
    BoneDefenderVetSkills.style.display = 'none'
    BoneDefenderChampSkills.style.display = 'none' 

})

BoneArbalestPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'
   
    BoneArbalestStrat.style.display = 'none' 
    BoneArbalestSprite.style.display = 'block'
    BoneArbalestStatBtn.style.display = 'block'
    BoneArbalestStratBtn.style.display = 'block'

    BoneArbalestApp.style.display = 'block'
    BoneArbalestVet.style.display = 'block'  
    BoneArbalestChamp.style.display = 'block' 
    BoneArbalestVetStat.style.display = 'none'
    BoneArbalestChampStat.style.display = 'none'
    BoneArbalestAppStat.style.display = 'block'
    BoneArbalestAppSkills.style.display = 'block'
    BoneArbalestVetSkills.style.display = 'none'
    BoneArbalestChampSkills.style.display = 'none' 

})

BoneCourtierPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'
   
    BoneCourtierStrat.style.display = 'none' 
    BoneCourtierSprite.style.display = 'block'
    BoneCourtierStatBtn.style.display = 'block'
    BoneCourtierStratBtn.style.display = 'block'

    BoneCourtierApp.style.display = 'block'
    BoneCourtierVet.style.display = 'block'  
    BoneCourtierChamp.style.display = 'block' 
    BoneCourtierVetStat.style.display = 'none'
    BoneCourtierChampStat.style.display = 'none'
    BoneCourtierAppStat.style.display = 'block'
    BoneCourtierAppSkills.style.display = 'block'
    BoneCourtierVetSkills.style.display = 'none'
    BoneCourtierChampSkills.style.display = 'none' 

})

BoneSpearmanPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'

    BoneSpearmanStrat.style.display = 'none' 
    BoneSpearmanSprite.style.display = 'block'
    BoneSpearmanStatBtn.style.display = 'block'
    BoneSpearmanStratBtn.style.display = 'block'

    BoneSpearmanVet.style.display = 'block'  
    BoneSpearmanChamp.style.display = 'block' 

    BoneSpearmanChampStat.style.display = 'none'
    BoneSpearmanVetStat.style.display = 'block'
    BoneSpearmanVetSkills.style.display = 'block'
    BoneSpearmanChampSkills.style.display = 'none' 

})

BoneCaptainPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'

    BoneCaptainStrat.style.display = 'none' 
    BoneCaptainSprite.style.display = 'block'
    BoneCaptainStatBtn.style.display = 'block'
    BoneCaptainStratBtn.style.display = 'block'

    BoneCaptainVet.style.display = 'block'  
    BoneCaptainChamp.style.display = 'block' 

    BoneCaptainChampStat.style.display = 'none'
    BoneCaptainVetStat.style.display = 'block'
    BoneCaptainVetSkills.style.display = 'block'
    BoneCaptainChampSkills.style.display = 'none' 

})

BoneBearerPortrait.addEventListener('click', function() {  
    HideHeadersRuins.style.display = 'none'
   
    BoneBearerSprite.style.display = 'block'
    BoneBearerStatBtn.style.display = 'block'
    BoneBearerStratBtn.style.display = 'block'

   
    BoneBearerChamp.style.display = 'block' 
    BoneBearerChampStat.style.display = 'block'
    BoneBearerChampSkills.style.display = 'block'
    
})


//Weald

FungalScratcherPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    FungalScratcherStrat.style.display = 'none' 
    FungalScratcherSprite.style.display = 'block'
    FungalScratcherStatBtn.style.display = 'block'
    FungalScratcherStratBtn.style.display = 'block'

    FungalScratcherApp.style.display = 'block'
    FungalScratcherVet.style.display = 'block'  
    FungalScratcherChamp.style.display = 'block' 
    FungalScratcherVetStat.style.display = 'none'
    FungalScratcherChampStat.style.display = 'none'
    FungalScratcherAppStat.style.display = 'block'
    FungalScratcherAppSkills.style.display = 'block'
    FungalScratcherVetSkills.style.display = 'none'
    FungalScratcherChampSkills.style.display = 'none' 

})

FungalArtilleryPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    FungalArtilleryStrat.style.display = 'none' 
    FungalArtillerySprite.style.display = 'block'
    FungalArtilleryStatBtn.style.display = 'block'
    FungalArtilleryStratBtn.style.display = 'block'

    FungalArtilleryApp.style.display = 'block'
    FungalArtilleryVet.style.display = 'block'  
    FungalArtilleryChamp.style.display = 'block' 
    FungalArtilleryVetStat.style.display = 'none'
    FungalArtilleryChampStat.style.display = 'none'
    FungalArtilleryAppStat.style.display = 'block'
    FungalArtilleryAppSkills.style.display = 'block'
    FungalArtilleryVetSkills.style.display = 'none'
    FungalArtilleryChampSkills.style.display = 'none' 

})

RabidGnasherPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    RabidGnasherStrat.style.display = 'none' 
    RabidGnasherSprite.style.display = 'block'
    RabidGnasherStatBtn.style.display = 'block'
    RabidGnasherStratBtn.style.display = 'block'

    RabidGnasherApp.style.display = 'block'
    RabidGnasherVet.style.display = 'block'  
    RabidGnasherChamp.style.display = 'block' 
    RabidGnasherVetStat.style.display = 'none'
    RabidGnasherChampStat.style.display = 'none'
    RabidGnasherAppStat.style.display = 'block'
    RabidGnasherAppSkills.style.display = 'block'
    RabidGnasherVetSkills.style.display = 'none'
    RabidGnasherChampSkills.style.display = 'none' 

})

EctoplasmPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    EctoplasmStrat.style.display = 'none' 
    EctoplasmSprite.style.display = 'block'
    EctoplasmStatBtn.style.display = 'block'
    EctoplasmStratBtn.style.display = 'block'

    EctoplasmApp.style.display = 'block'
    EctoplasmVet.style.display = 'block'  
    EctoplasmChamp.style.display = 'block' 
    EctoplasmVetStat.style.display = 'none'
    EctoplasmChampStat.style.display = 'none'
    EctoplasmAppStat.style.display = 'block'
    EctoplasmAppSkills.style.display = 'block'
    EctoplasmVetSkills.style.display = 'none'
    EctoplasmChampSkills.style.display = 'none' 

})

LargeEctoplasmPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    LargeEctoplasmStrat.style.display = 'none' 
    LargeEctoplasmSprite.style.display = 'block'
    LargeEctoplasmStatBtn.style.display = 'block'
    LargeEctoplasmStratBtn.style.display = 'block'

    LargeEctoplasmApp.style.display = 'block'
    LargeEctoplasmVet.style.display = 'block'  
    LargeEctoplasmChamp.style.display = 'block' 
    LargeEctoplasmVetStat.style.display = 'none'
    LargeEctoplasmChampStat.style.display = 'none'
    LargeEctoplasmAppStat.style.display = 'block'
    LargeEctoplasmAppSkills.style.display = 'block'
    LargeEctoplasmVetSkills.style.display = 'none'
    LargeEctoplasmChampSkills.style.display = 'none' 

})

CronePortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'

    CroneStrat.style.display = 'none' 
    CroneSprite.style.display = 'block'
    CroneStatBtn.style.display = 'block'
    CroneStratBtn.style.display = 'block'

    CroneVet.style.display = 'block'  
    CroneChamp.style.display = 'block' 

    CroneChampStat.style.display = 'none'
    CroneVetStat.style.display = 'block'
    CroneVetSkills.style.display = 'block'
    CroneChampSkills.style.display = 'none' 

})

UncleanGiantPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'

    UncleanGiantStrat.style.display = 'none' 
    UncleanGiantSprite.style.display = 'block'
    UncleanGiantStatBtn.style.display = 'block'
    UncleanGiantStratBtn.style.display = 'block'

    UncleanGiantVet.style.display = 'block'  
    UncleanGiantChamp.style.display = 'block' 

    UncleanGiantChampStat.style.display = 'none'
    UncleanGiantVetStat.style.display = 'block'
    UncleanGiantVetSkills.style.display = 'block'
    UncleanGiantChampSkills.style.display = 'none' 

})

HatefulViragoPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    HatefulViragoSprite.style.display = 'block'
    HatefulViragoStatBtn.style.display = 'block'
    HatefulViragoStratBtn.style.display = 'block'

   
    HatefulViragoChamp.style.display = 'block' 
    HatefulViragoChampStat.style.display = 'block'
    HatefulViragoChampSkills.style.display = 'block'
    
})

NecroticFungusPortrait.addEventListener('click', function() {  
    HideHeadersWeald.style.display = 'none'
   
    NecroticFungusSprite.style.display = 'block'
    NecroticFungusStatBtn.style.display = 'block'
    NecroticFungusStratBtn.style.display = 'block'

   
    NecroticFungusChamp.style.display = 'block' 
    NecroticFungusChampStat.style.display = 'block'
    NecroticFungusChampSkills.style.display = 'block'
    
})

//Warrens

SwineChopperPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'
   
    SwineChopperStrat.style.display = 'none' 
    SwineChopperSprite.style.display = 'block'
    SwineChopperStatBtn.style.display = 'block'
    SwineChopperStratBtn.style.display = 'block'

    SwineChopperApp.style.display = 'block'
    SwineChopperVet.style.display = 'block'  
    SwineChopperChamp.style.display = 'block' 
    SwineChopperVetStat.style.display = 'none'
    SwineChopperChampStat.style.display = 'none'
    SwineChopperAppStat.style.display = 'block'
    SwineChopperAppSkills.style.display = 'block'
    SwineChopperVetSkills.style.display = 'none'
    SwineChopperChampSkills.style.display = 'none' 

})

SwineWretchPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'
   
    SwineWretchStrat.style.display = 'none' 
    SwineWretchSprite.style.display = 'block'
    SwineWretchStatBtn.style.display = 'block'
    SwineWretchStratBtn.style.display = 'block'

    SwineWretchApp.style.display = 'block'
    SwineWretchVet.style.display = 'block'  
    SwineWretchChamp.style.display = 'block' 
    SwineWretchVetStat.style.display = 'none'
    SwineWretchChampStat.style.display = 'none'
    SwineWretchAppStat.style.display = 'block'
    SwineWretchAppSkills.style.display = 'block'
    SwineWretchVetSkills.style.display = 'none'
    SwineWretchChampSkills.style.display = 'none' 

})


SwineDrummerPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'
   
    SwineDrummerStrat.style.display = 'none' 
    SwineDrummerSprite.style.display = 'block'
    SwineDrummerStatBtn.style.display = 'block'
    SwineDrummerStratBtn.style.display = 'block'

    SwineDrummerApp.style.display = 'block'
    SwineDrummerVet.style.display = 'block'  
    SwineDrummerChamp.style.display = 'block' 
    SwineDrummerVetStat.style.display = 'none'
    SwineDrummerChampStat.style.display = 'none'
    SwineDrummerAppStat.style.display = 'block'
    SwineDrummerAppSkills.style.display = 'block'
    SwineDrummerVetSkills.style.display = 'none'
    SwineDrummerChampSkills.style.display = 'none' 

})


SwineSlasherPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'

    SwineSlasherStrat.style.display = 'none' 
    SwineSlasherSprite.style.display = 'block'
    SwineSlasherStatBtn.style.display = 'block'
    SwineSlasherStratBtn.style.display = 'block'

    SwineSlasherApp.style.display = 'block'
    SwineSlasherVet.style.display = 'block'  
    SwineSlasherChamp.style.display = 'block' 
    SwineSlasherVetStat.style.display = 'none'
    SwineSlasherChampStat.style.display = 'none'
    SwineSlasherAppStat.style.display = 'block'
    SwineSlasherAppSkills.style.display = 'block'
    SwineSlasherVetSkills.style.display = 'none'
    SwineSlasherChampSkills.style.display = 'none' 

})


CarrionEaterPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'
   
    CarrionEaterStrat.style.display = 'none' 
    CarrionEaterSprite.style.display = 'block'
    CarrionEaterStatBtn.style.display = 'block'
    CarrionEaterStratBtn.style.display = 'block'

    CarrionEaterApp.style.display = 'block'
    CarrionEaterVet.style.display = 'block'  
    CarrionEaterChamp.style.display = 'block' 
    CarrionEaterVetStat.style.display = 'none'
    CarrionEaterChampStat.style.display = 'none'
    CarrionEaterAppStat.style.display = 'block'
    CarrionEaterAppSkills.style.display = 'block'
    CarrionEaterVetSkills.style.display = 'none'
    CarrionEaterChampSkills.style.display = 'none' 

})

LargeCarrionEaterPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'

    LargeCarrionEaterStrat.style.display = 'none' 
    LargeCarrionEaterSprite.style.display = 'block'
    LargeCarrionEaterStatBtn.style.display = 'block'
    LargeCarrionEaterStratBtn.style.display = 'block'
    
    LargeCarrionEaterChampStat.style.display = 'none'
    LargeCarrionEaterVetStat.style.display = 'block'
    LargeCarrionEaterVetSkills.style.display = 'block'
    LargeCarrionEaterChampSkills.style.display = 'none' 
    LargeCarrionEaterVet.style.display = 'block'  
    LargeCarrionEaterChamp.style.display = 'block' 

})


SwinetaurPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'

    SwinetaurStrat.style.display = 'none' 
    SwinetaurSprite.style.display = 'block'
    SwinetaurStatBtn.style.display = 'block'
    SwinetaurStratBtn.style.display = 'block'

    SwinetaurVet.style.display = 'block'  
    SwinetaurChamp.style.display = 'block' 

    SwinetaurChampStat.style.display = 'none'
    SwinetaurVetStat.style.display = 'block'
    SwinetaurVetSkills.style.display = 'block'
    SwinetaurChampSkills.style.display = 'none' 

})


SwineSkiverPortrait.addEventListener('click', function() {  
    HideHeadersWarrens.style.display = 'none'
   
    SwineSkiverSprite.style.display = 'block'
    SwineSkiverStatBtn.style.display = 'block'
    SwineSkiverStratBtn.style.display = 'block'

   
    SwineSkiverChamp.style.display = 'block' 
    SwineSkiverChampStat.style.display = 'block'
    SwineSkiverChampSkills.style.display = 'block'
    
})

//Cove

PelagicGrouperPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    PelagicGrouperStrat.style.display = 'none' 
    PelagicGrouperSprite.style.display = 'block'
    PelagicGrouperStatBtn.style.display = 'block'
    PelagicGrouperStratBtn.style.display = 'block'

    PelagicGrouperApp.style.display = 'block'
    PelagicGrouperVet.style.display = 'block'  
    PelagicGrouperChamp.style.display = 'block' 
    PelagicGrouperVetStat.style.display = 'none'
    PelagicGrouperChampStat.style.display = 'none'
    PelagicGrouperAppStat.style.display = 'block'
    PelagicGrouperAppSkills.style.display = 'block'
    PelagicGrouperVetSkills.style.display = 'none'
    PelagicGrouperChampSkills.style.display = 'none' 

})

PelagicGuardianPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    PelagicGuardianStrat.style.display = 'none' 
    PelagicGuardianSprite.style.display = 'block'
    PelagicGuardianStatBtn.style.display = 'block'
    PelagicGuardianStratBtn.style.display = 'block'

    PelagicGuardianApp.style.display = 'block'
    PelagicGuardianVet.style.display = 'block'  
    PelagicGuardianChamp.style.display = 'block' 
    PelagicGuardianVetStat.style.display = 'none'
    PelagicGuardianChampStat.style.display = 'none'
    PelagicGuardianAppStat.style.display = 'block'
    PelagicGuardianAppSkills.style.display = 'block'
    PelagicGuardianVetSkills.style.display = 'none'
    PelagicGuardianChampSkills.style.display = 'none' 

})

PelagicShamanPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    PelagicShamanStrat.style.display = 'none' 
    PelagicShamanSprite.style.display = 'block'
    PelagicShamanStatBtn.style.display = 'block'
    PelagicShamanStratBtn.style.display = 'block'

    PelagicShamanApp.style.display = 'block'
    PelagicShamanVet.style.display = 'block'  
    PelagicShamanChamp.style.display = 'block' 
    PelagicShamanVetStat.style.display = 'none'
    PelagicShamanChampStat.style.display = 'none'
    PelagicShamanAppStat.style.display = 'block'
    PelagicShamanAppSkills.style.display = 'block'
    PelagicShamanVetSkills.style.display = 'none'
    PelagicShamanChampSkills.style.display = 'none' 

})

DeepStingerPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    DeepStingerStrat.style.display = 'none' 
    DeepStingerSprite.style.display = 'block'
    DeepStingerStatBtn.style.display = 'block'
    DeepStingerStratBtn.style.display = 'block'

    DeepStingerApp.style.display = 'block'
    DeepStingerVet.style.display = 'block'  
    DeepStingerChamp.style.display = 'block' 
    DeepStingerVetStat.style.display = 'none'
    DeepStingerChampStat.style.display = 'none'
    DeepStingerAppStat.style.display = 'block'
    DeepStingerAppSkills.style.display = 'block'
    DeepStingerVetSkills.style.display = 'none'
    DeepStingerChampSkills.style.display = 'none' 

})

DrownedThrallPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    DrownedThrallStrat.style.display = 'none' 
    DrownedThrallSprite.style.display = 'block'
    DrownedThrallStatBtn.style.display = 'block'
    DrownedThrallStratBtn.style.display = 'block'

    DrownedThrallApp.style.display = 'block'
    DrownedThrallVet.style.display = 'block'  
    DrownedThrallChamp.style.display = 'block' 
    DrownedThrallVetStat.style.display = 'none'
    DrownedThrallChampStat.style.display = 'none'
    DrownedThrallAppStat.style.display = 'block'
    DrownedThrallAppSkills.style.display = 'block'
    DrownedThrallVetSkills.style.display = 'none'
    DrownedThrallChampSkills.style.display = 'none' 

})

SeaMaggotPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    SeaMaggotStrat.style.display = 'none' 
    SeaMaggotSprite.style.display = 'block'
    SeaMaggotStatBtn.style.display = 'block'
    SeaMaggotStratBtn.style.display = 'block'

    SeaMaggotApp.style.display = 'block'
    SeaMaggotVet.style.display = 'block'  
    SeaMaggotChamp.style.display = 'block' 
    SeaMaggotVetStat.style.display = 'none'
    SeaMaggotChampStat.style.display = 'none'
    SeaMaggotAppStat.style.display = 'block'
    SeaMaggotAppSkills.style.display = 'block'
    SeaMaggotVetSkills.style.display = 'none'
    SeaMaggotChampSkills.style.display = 'none' 

})

UcaCrusherPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'

    UcaCrusherStrat.style.display = 'none' 
    UcaCrusherSprite.style.display = 'block'
    UcaCrusherStatBtn.style.display = 'block'
    UcaCrusherStratBtn.style.display = 'block'

    UcaCrusherVet.style.display = 'block'  
    UcaCrusherChamp.style.display = 'block' 

    UcaCrusherChampStat.style.display = 'none'
    UcaCrusherVetStat.style.display = 'block'
    UcaCrusherVetSkills.style.display = 'block'
    UcaCrusherChampSkills.style.display = 'none' 

})

SquiffyGhastPortrait.addEventListener('click', function() {  
    HideHeadersCove.style.display = 'none'
   
    SquiffyGhastSprite.style.display = 'block'
    SquiffyGhastStatBtn.style.display = 'block'
    SquiffyGhastStratBtn.style.display = 'block'

   
    SquiffyGhastChamp.style.display = 'block' 
    SquiffyGhastChampStat.style.display = 'block'
    SquiffyGhastChampSkills.style.display = 'block'
    
})


//Shared

BrigandCutthroatPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BrigandCutthroatStrat.style.display = 'none' 
    BrigandCutthroatSprite.style.display = 'block'
    BrigandCutthroatStatBtn.style.display = 'block'
    BrigandCutthroatStratBtn.style.display = 'block'

    BrigandCutthroatApp.style.display = 'block'
    BrigandCutthroatVet.style.display = 'block'  
    BrigandCutthroatChamp.style.display = 'block' 
    BrigandCutthroatVetStat.style.display = 'none'
    BrigandCutthroatChampStat.style.display = 'none'
    BrigandCutthroatAppStat.style.display = 'block'
    BrigandCutthroatAppSkills.style.display = 'block'
    BrigandCutthroatVetSkills.style.display = 'none'
    BrigandCutthroatChampSkills.style.display = 'none' 

})

BrigandBloodletterPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BrigandBloodletterStrat.style.display = 'none' 
    BrigandBloodletterSprite.style.display = 'block'
    BrigandBloodletterStatBtn.style.display = 'block'
    BrigandBloodletterStratBtn.style.display = 'block'

    BrigandBloodletterApp.style.display = 'block'
    BrigandBloodletterVet.style.display = 'block'  
    BrigandBloodletterChamp.style.display = 'block' 
    BrigandBloodletterVetStat.style.display = 'none'
    BrigandBloodletterChampStat.style.display = 'none'
    BrigandBloodletterAppStat.style.display = 'block'
    BrigandBloodletterAppSkills.style.display = 'block'
    BrigandBloodletterVetSkills.style.display = 'none'
    BrigandBloodletterChampSkills.style.display = 'none' 

})

BrigandFusilierPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BrigandFusilierStrat.style.display = 'none' 
    BrigandFusilierSprite.style.display = 'block'
    BrigandFusilierStatBtn.style.display = 'block'
    BrigandFusilierStratBtn.style.display = 'block'

    BrigandFusilierApp.style.display = 'block'
    BrigandFusilierVet.style.display = 'block'  
    BrigandFusilierChamp.style.display = 'block' 
    BrigandFusilierVetStat.style.display = 'none'
    BrigandFusilierChampStat.style.display = 'none'
    BrigandFusilierAppStat.style.display = 'block'
    BrigandFusilierAppSkills.style.display = 'block'
    BrigandFusilierVetSkills.style.display = 'none'
    BrigandFusilierChampSkills.style.display = 'none' 

})

CultistBrawlerPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    CultistBrawlerStrat.style.display = 'none' 
    CultistBrawlerSprite.style.display = 'block'
    CultistBrawlerStatBtn.style.display = 'block'
    CultistBrawlerStratBtn.style.display = 'block'

    CultistBrawlerApp.style.display = 'block'
    CultistBrawlerVet.style.display = 'block'  
    CultistBrawlerChamp.style.display = 'block' 
    CultistBrawlerVetStat.style.display = 'none'
    CultistBrawlerChampStat.style.display = 'none'
    CultistBrawlerAppStat.style.display = 'block'
    CultistBrawlerAppSkills.style.display = 'block'
    CultistBrawlerVetSkills.style.display = 'none'
    CultistBrawlerChampSkills.style.display = 'none' 

})

CultistAcolytePortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    CultistAcolyteStrat.style.display = 'none' 
    CultistAcolyteSprite.style.display = 'block'
    CultistAcolyteStatBtn.style.display = 'block'
    CultistAcolyteStratBtn.style.display = 'block'

    CultistAcolyteApp.style.display = 'block'
    CultistAcolyteVet.style.display = 'block'  
    CultistAcolyteChamp.style.display = 'block' 
    CultistAcolyteVetStat.style.display = 'none'
    CultistAcolyteChampStat.style.display = 'none'
    CultistAcolyteAppStat.style.display = 'block'
    CultistAcolyteAppSkills.style.display = 'block'
    CultistAcolyteVetSkills.style.display = 'none'
    CultistAcolyteChampSkills.style.display = 'none' 

})

MadmanPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    MadmanStrat.style.display = 'none' 
    MadmanSprite.style.display = 'block'
    MadmanStatBtn.style.display = 'block'
    MadmanStratBtn.style.display = 'block'

    MadmanApp.style.display = 'block'
    MadmanVet.style.display = 'block'  
    MadmanChamp.style.display = 'block' 
    MadmanVetStat.style.display = 'none'
    MadmanChampStat.style.display = 'none'
    MadmanAppStat.style.display = 'block'
    MadmanAppSkills.style.display = 'block'
    MadmanVetSkills.style.display = 'none'
    MadmanChampSkills.style.display = 'none' 

})

WebberPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    WebberStrat.style.display = 'none' 
    WebberSprite.style.display = 'block'
    WebberStatBtn.style.display = 'block'
    WebberStratBtn.style.display = 'block'

    WebberApp.style.display = 'block'
    WebberVet.style.display = 'block'  
    WebberChamp.style.display = 'block' 
    WebberVetStat.style.display = 'none'
    WebberChampStat.style.display = 'none'
    WebberAppStat.style.display = 'block'
    WebberAppSkills.style.display = 'block'
    WebberVetSkills.style.display = 'none'
    WebberChampSkills.style.display = 'none' 

})

SpitterPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    SpitterStrat.style.display = 'none' 
    SpitterSprite.style.display = 'block'
    SpitterStatBtn.style.display = 'block'
    SpitterStratBtn.style.display = 'block'

    SpitterApp.style.display = 'block'
    SpitterVet.style.display = 'block'  
    SpitterChamp.style.display = 'block' 
    SpitterVetStat.style.display = 'none'
    SpitterChampStat.style.display = 'none'
    SpitterAppStat.style.display = 'block'
    SpitterAppSkills.style.display = 'block'
    SpitterVetSkills.style.display = 'none'
    SpitterChampSkills.style.display = 'none' 

})

MaggotPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    MaggotStrat.style.display = 'none' 
    MaggotSprite.style.display = 'block'
    MaggotStatBtn.style.display = 'block'
    MaggotStratBtn.style.display = 'block'

    MaggotApp.style.display = 'block'
    MaggotVet.style.display = 'block'  
    MaggotChamp.style.display = 'block' 
    MaggotVetStat.style.display = 'none'
    MaggotChampStat.style.display = 'none'
    MaggotAppStat.style.display = 'block'
    MaggotAppSkills.style.display = 'block'
    MaggotVetSkills.style.display = 'none'
    MaggotChampSkills.style.display = 'none' 

})

BoneRabblePortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BoneRabbleStrat.style.display = 'none' 
    BoneRabbleSprite.style.display = 'block'
    BoneRabbleStatBtn.style.display = 'block'
    BoneRabbleStratBtn.style.display = 'block'

    BoneRabbleApp.style.display = 'block'
    BoneRabbleVet.style.display = 'block'  
    BoneRabbleChamp.style.display = 'block' 
    BoneRabbleVetStat.style.display = 'none'
    BoneRabbleChampStat.style.display = 'none'
    BoneRabbleAppStat.style.display = 'block'
    BoneRabbleAppSkills.style.display = 'block'
    BoneRabbleVetSkills.style.display = 'none'
    BoneRabbleChampSkills.style.display = 'none' 

})

GargoylePortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'

    GargoyleStrat.style.display = 'none' 
    GargoyleSprite.style.display = 'block'
    GargoyleStatBtn.style.display = 'block'
    GargoyleStratBtn.style.display = 'block'

    GargoyleVet.style.display = 'block'  
    GargoyleChamp.style.display = 'block' 

    GargoyleChampStat.style.display = 'none'
    GargoyleVetStat.style.display = 'block'
    GargoyleVetSkills.style.display = 'block'
    GargoyleChampSkills.style.display = 'none' 

})

GhoulPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'

    GhoulStrat.style.display = 'none' 
    GhoulSprite.style.display = 'block'
    GhoulStatBtn.style.display = 'block'
    GhoulStratBtn.style.display = 'block'

    GhoulVet.style.display = 'block'  
    GhoulChamp.style.display = 'block' 

    GhoulChampStat.style.display = 'none'
    GhoulVetStat.style.display = 'block'
    GhoulVetSkills.style.display = 'block'
    GhoulChampSkills.style.display = 'none' 

})

BrigandRaiderPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BrigandRaiderSprite.style.display = 'block'
    BrigandRaiderStatBtn.style.display = 'block'
    BrigandRaiderStratBtn.style.display = 'block'

   
    BrigandRaiderDarkest.style.display = 'block' 
    BrigandRaiderDarkestStat.style.display = 'block'
    BrigandRaiderDarkestSkills.style.display = 'block'
    
})

BrigandHunterPortrait.addEventListener('click', function() {  
    HideHeadersShared.style.display = 'none'
   
    BrigandHunterSprite.style.display = 'block'
    BrigandHunterStatBtn.style.display = 'block'
    BrigandHunterStratBtn.style.display = 'block'

   
    BrigandHunterDarkest.style.display = 'block' 
    BrigandHunterDarkestStat.style.display = 'block'
    BrigandHunterDarkestSkills.style.display = 'block'
    
})

//Add Lvl Toggle Listeners

//Ruins

BoneSoldierApp.addEventListener('click', function() {
    PlayBtnPress()
    BoneSoldierStrat.style.display = 'none'    
    BoneSoldierAppStat.style.display = 'block'
    BoneSoldierVetStat.style.display = 'none'
    BoneSoldierChampStat.style.display = 'none'
    BoneSoldierAppSkills.style.display = 'block'
    BoneSoldierVetSkills.style.display = 'none'
    BoneSoldierChampSkills.style.display = 'none'

})

BoneSoldierVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneSoldierStrat.style.display = 'none'    
    BoneSoldierAppStat.style.display = 'none'
    BoneSoldierVetStat.style.display = 'block'
    BoneSoldierChampStat.style.display = 'none'
    BoneSoldierAppSkills.style.display = 'none'
    BoneSoldierVetSkills.style.display = 'block'
    BoneSoldierChampSkills.style.display = 'none'
})

BoneSoldierChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneSoldierStrat.style.display = 'none'    
    BoneSoldierAppStat.style.display = 'none'
    BoneSoldierVetStat.style.display = 'none'
    BoneSoldierChampStat.style.display = 'block'
    BoneSoldierAppSkills.style.display = 'none'
    BoneSoldierVetSkills.style.display = 'none'
    BoneSoldierChampSkills.style.display = 'block'
})

BoneDefenderApp.addEventListener('click', function() {
    PlayBtnPress()
    BoneDefenderStrat.style.display = 'none'    
    BoneDefenderAppStat.style.display = 'block'
    BoneDefenderVetStat.style.display = 'none'
    BoneDefenderChampStat.style.display = 'none'
    BoneDefenderAppSkills.style.display = 'block'
    BoneDefenderVetSkills.style.display = 'none'
    BoneDefenderChampSkills.style.display = 'none'

})

BoneDefenderVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneDefenderStrat.style.display = 'none'    
    BoneDefenderAppStat.style.display = 'none'
    BoneDefenderVetStat.style.display = 'block'
    BoneDefenderChampStat.style.display = 'none'
    BoneDefenderAppSkills.style.display = 'none'
    BoneDefenderVetSkills.style.display = 'block'
    BoneDefenderChampSkills.style.display = 'none'
})

BoneDefenderChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneDefenderStrat.style.display = 'none'    
    BoneDefenderAppStat.style.display = 'none'
    BoneDefenderVetStat.style.display = 'none'
    BoneDefenderChampStat.style.display = 'block'
    BoneDefenderAppSkills.style.display = 'none'
    BoneDefenderVetSkills.style.display = 'none'
    BoneDefenderChampSkills.style.display = 'block'
})

BoneArbalestApp.addEventListener('click', function() {
    PlayBtnPress()
    BoneArbalestStrat.style.display = 'none'    
    BoneArbalestAppStat.style.display = 'block'
    BoneArbalestVetStat.style.display = 'none'
    BoneArbalestChampStat.style.display = 'none'
    BoneArbalestAppSkills.style.display = 'block'
    BoneArbalestVetSkills.style.display = 'none'
    BoneArbalestChampSkills.style.display = 'none'

})

BoneArbalestVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneArbalestStrat.style.display = 'none'    
    BoneArbalestAppStat.style.display = 'none'
    BoneArbalestVetStat.style.display = 'block'
    BoneArbalestChampStat.style.display = 'none'
    BoneArbalestAppSkills.style.display = 'none'
    BoneArbalestVetSkills.style.display = 'block'
    BoneArbalestChampSkills.style.display = 'none'
})

BoneArbalestChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneArbalestStrat.style.display = 'none'    
    BoneArbalestAppStat.style.display = 'none'
    BoneArbalestVetStat.style.display = 'none'
    BoneArbalestChampStat.style.display = 'block'
    BoneArbalestAppSkills.style.display = 'none'
    BoneArbalestVetSkills.style.display = 'none'
    BoneArbalestChampSkills.style.display = 'block'
})

BoneCourtierApp.addEventListener('click', function() {
    PlayBtnPress()
    BoneCourtierStrat.style.display = 'none'    
    BoneCourtierAppStat.style.display = 'block'
    BoneCourtierVetStat.style.display = 'none'
    BoneCourtierChampStat.style.display = 'none'
    BoneCourtierAppSkills.style.display = 'block'
    BoneCourtierVetSkills.style.display = 'none'
    BoneCourtierChampSkills.style.display = 'none'

})

BoneCourtierVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneCourtierStrat.style.display = 'none'    
    BoneCourtierAppStat.style.display = 'none'
    BoneCourtierVetStat.style.display = 'block'
    BoneCourtierChampStat.style.display = 'none'
    BoneCourtierAppSkills.style.display = 'none'
    BoneCourtierVetSkills.style.display = 'block'
    BoneCourtierChampSkills.style.display = 'none'
})

BoneCourtierChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneCourtierStrat.style.display = 'none'    
    BoneCourtierAppStat.style.display = 'none'
    BoneCourtierVetStat.style.display = 'none'
    BoneCourtierChampStat.style.display = 'block'
    BoneCourtierAppSkills.style.display = 'none'
    BoneCourtierVetSkills.style.display = 'none'
    BoneCourtierChampSkills.style.display = 'block'
})

BoneSpearmanVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneSpearmanStrat.style.display = 'none'    
    BoneSpearmanVetStat.style.display = 'block'
    BoneSpearmanChampStat.style.display = 'none'
    BoneSpearmanVetSkills.style.display = 'block'
    BoneSpearmanChampSkills.style.display = 'none'

})

BoneSpearmanChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneSpearmanStrat.style.display = 'none'    
    BoneSpearmanVetStat.style.display = 'none'
    BoneSpearmanChampStat.style.display = 'block'
    BoneSpearmanVetSkills.style.display = 'none'
    BoneSpearmanChampSkills.style.display = 'block'
})

BoneCaptainVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneCaptainStrat.style.display = 'none'    
    BoneCaptainVetStat.style.display = 'block'
    BoneCaptainChampStat.style.display = 'none'
    BoneCaptainVetSkills.style.display = 'block'
    BoneCaptainChampSkills.style.display = 'none'

})

BoneCaptainChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneCaptainStrat.style.display = 'none'    
    BoneCaptainVetStat.style.display = 'none'
    BoneCaptainChampStat.style.display = 'block'
    BoneCaptainVetSkills.style.display = 'none'
    BoneCaptainChampSkills.style.display = 'block'
})

BoneBearerChamp.addEventListener('click', function() {PlayBtnPress(); BoneBearerStrat.style.display = 'none';})

//Weald

FungalScratcherApp.addEventListener('click', function() {
    PlayBtnPress()
    FungalScratcherStrat.style.display = 'none'    
    FungalScratcherAppStat.style.display = 'block'
    FungalScratcherVetStat.style.display = 'none'
    FungalScratcherChampStat.style.display = 'none'
    FungalScratcherAppSkills.style.display = 'block'
    FungalScratcherVetSkills.style.display = 'none'
    FungalScratcherChampSkills.style.display = 'none'

})

FungalScratcherVet.addEventListener('click', function() {
    PlayBtnPress()
    FungalScratcherStrat.style.display = 'none'    
    FungalScratcherAppStat.style.display = 'none'
    FungalScratcherVetStat.style.display = 'block'
    FungalScratcherChampStat.style.display = 'none'
    FungalScratcherAppSkills.style.display = 'none'
    FungalScratcherVetSkills.style.display = 'block'
    FungalScratcherChampSkills.style.display = 'none'
})

FungalScratcherChamp.addEventListener('click', function() {
    PlayBtnPress()
    FungalScratcherStrat.style.display = 'none'    
    FungalScratcherAppStat.style.display = 'none'
    FungalScratcherVetStat.style.display = 'none'
    FungalScratcherChampStat.style.display = 'block'
    FungalScratcherAppSkills.style.display = 'none'
    FungalScratcherVetSkills.style.display = 'none'
    FungalScratcherChampSkills.style.display = 'block'
})

FungalArtilleryApp.addEventListener('click', function() {
    PlayBtnPress()
    FungalArtilleryStrat.style.display = 'none'    
    FungalArtilleryAppStat.style.display = 'block'
    FungalArtilleryVetStat.style.display = 'none'
    FungalArtilleryChampStat.style.display = 'none'
    FungalArtilleryAppSkills.style.display = 'block'
    FungalArtilleryVetSkills.style.display = 'none'
    FungalArtilleryChampSkills.style.display = 'none'

})

FungalArtilleryVet.addEventListener('click', function() {
    PlayBtnPress()
    FungalArtilleryStrat.style.display = 'none'    
    FungalArtilleryAppStat.style.display = 'none'
    FungalArtilleryVetStat.style.display = 'block'
    FungalArtilleryChampStat.style.display = 'none'
    FungalArtilleryAppSkills.style.display = 'none'
    FungalArtilleryVetSkills.style.display = 'block'
    FungalArtilleryChampSkills.style.display = 'none'
})

FungalArtilleryChamp.addEventListener('click', function() {
    PlayBtnPress()
    FungalArtilleryStrat.style.display = 'none'    
    FungalArtilleryAppStat.style.display = 'none'
    FungalArtilleryVetStat.style.display = 'none'
    FungalArtilleryChampStat.style.display = 'block'
    FungalArtilleryAppSkills.style.display = 'none'
    FungalArtilleryVetSkills.style.display = 'none'
    FungalArtilleryChampSkills.style.display = 'block'
})

RabidGnasherApp.addEventListener('click', function() {
    PlayBtnPress()
    RabidGnasherStrat.style.display = 'none'    
    RabidGnasherAppStat.style.display = 'block'
    RabidGnasherVetStat.style.display = 'none'
    RabidGnasherChampStat.style.display = 'none'
    RabidGnasherAppSkills.style.display = 'block'
    RabidGnasherVetSkills.style.display = 'none'
    RabidGnasherChampSkills.style.display = 'none'

})

RabidGnasherVet.addEventListener('click', function() {
    PlayBtnPress()
    RabidGnasherStrat.style.display = 'none'    
    RabidGnasherAppStat.style.display = 'none'
    RabidGnasherVetStat.style.display = 'block'
    RabidGnasherChampStat.style.display = 'none'
    RabidGnasherAppSkills.style.display = 'none'
    RabidGnasherVetSkills.style.display = 'block'
    RabidGnasherChampSkills.style.display = 'none'
})

RabidGnasherChamp.addEventListener('click', function() {
    PlayBtnPress()
    RabidGnasherStrat.style.display = 'none'    
    RabidGnasherAppStat.style.display = 'none'
    RabidGnasherVetStat.style.display = 'none'
    RabidGnasherChampStat.style.display = 'block'
    RabidGnasherAppSkills.style.display = 'none'
    RabidGnasherVetSkills.style.display = 'none'
    RabidGnasherChampSkills.style.display = 'block'
})

EctoplasmApp.addEventListener('click', function() {
    PlayBtnPress()
    EctoplasmStrat.style.display = 'none'    
    EctoplasmAppStat.style.display = 'block'
    EctoplasmVetStat.style.display = 'none'
    EctoplasmChampStat.style.display = 'none'
    EctoplasmAppSkills.style.display = 'block'
    EctoplasmVetSkills.style.display = 'none'
    EctoplasmChampSkills.style.display = 'none'

})

EctoplasmVet.addEventListener('click', function() {
    PlayBtnPress()
    EctoplasmStrat.style.display = 'none'    
    EctoplasmAppStat.style.display = 'none'
    EctoplasmVetStat.style.display = 'block'
    EctoplasmChampStat.style.display = 'none'
    EctoplasmAppSkills.style.display = 'none'
    EctoplasmVetSkills.style.display = 'block'
    EctoplasmChampSkills.style.display = 'none'
})

EctoplasmChamp.addEventListener('click', function() {
    PlayBtnPress()
    EctoplasmStrat.style.display = 'none'    
    EctoplasmAppStat.style.display = 'none'
    EctoplasmVetStat.style.display = 'none'
    EctoplasmChampStat.style.display = 'block'
    EctoplasmAppSkills.style.display = 'none'
    EctoplasmVetSkills.style.display = 'none'
    EctoplasmChampSkills.style.display = 'block'
})

LargeEctoplasmApp.addEventListener('click', function() {
    PlayBtnPress()
    LargeEctoplasmStrat.style.display = 'none'    
    LargeEctoplasmAppStat.style.display = 'block'
    LargeEctoplasmVetStat.style.display = 'none'
    LargeEctoplasmChampStat.style.display = 'none'
    LargeEctoplasmAppSkills.style.display = 'block'
    LargeEctoplasmVetSkills.style.display = 'none'
    LargeEctoplasmChampSkills.style.display = 'none'

})

LargeEctoplasmVet.addEventListener('click', function() {
    PlayBtnPress()
    LargeEctoplasmStrat.style.display = 'none'    
    LargeEctoplasmAppStat.style.display = 'none'
    LargeEctoplasmVetStat.style.display = 'block'
    LargeEctoplasmChampStat.style.display = 'none'
    LargeEctoplasmAppSkills.style.display = 'none'
    LargeEctoplasmVetSkills.style.display = 'block'
    LargeEctoplasmChampSkills.style.display = 'none'
})

LargeEctoplasmChamp.addEventListener('click', function() {
    PlayBtnPress()
    LargeEctoplasmStrat.style.display = 'none'    
    LargeEctoplasmAppStat.style.display = 'none'
    LargeEctoplasmVetStat.style.display = 'none'
    LargeEctoplasmChampStat.style.display = 'block'
    LargeEctoplasmAppSkills.style.display = 'none'
    LargeEctoplasmVetSkills.style.display = 'none'
    LargeEctoplasmChampSkills.style.display = 'block'
})

CroneVet.addEventListener('click', function() {
    PlayBtnPress()
    CroneStrat.style.display = 'none'    
    CroneVetStat.style.display = 'block'
    CroneChampStat.style.display = 'none'
    CroneVetSkills.style.display = 'block'
    CroneChampSkills.style.display = 'none'

})

CroneChamp.addEventListener('click', function() {
    PlayBtnPress()
    CroneStrat.style.display = 'none'    
    CroneVetStat.style.display = 'none'
    CroneChampStat.style.display = 'block'
    CroneVetSkills.style.display = 'none'
    CroneChampSkills.style.display = 'block'
})

UncleanGiantVet.addEventListener('click', function() {
    PlayBtnPress()
    UncleanGiantStrat.style.display = 'none'    
    UncleanGiantVetStat.style.display = 'block'
    UncleanGiantChampStat.style.display = 'none'
    UncleanGiantVetSkills.style.display = 'block'
    UncleanGiantChampSkills.style.display = 'none'

})

UncleanGiantChamp.addEventListener('click', function() {
    PlayBtnPress()
    UncleanGiantStrat.style.display = 'none'    
    UncleanGiantVetStat.style.display = 'none'
    UncleanGiantChampStat.style.display = 'block'
    UncleanGiantVetSkills.style.display = 'none'
    UncleanGiantChampSkills.style.display = 'block'
})

HatefulViragoChamp.addEventListener('click', function() {PlayBtnPress(); HatefulViragoStrat.style.display = 'none';})
NecroticFungusChamp.addEventListener('click', function() {PlayBtnPress(); NecroticFungusStrat.style.display = 'none';})

//Warrens

SwineChopperApp.addEventListener('click', function() {
    PlayBtnPress()
    SwineChopperStrat.style.display = 'none'    
    SwineChopperAppStat.style.display = 'block'
    SwineChopperVetStat.style.display = 'none'
    SwineChopperChampStat.style.display = 'none'
    SwineChopperAppSkills.style.display = 'block'
    SwineChopperVetSkills.style.display = 'none'
    SwineChopperChampSkills.style.display = 'none'

})

SwineChopperVet.addEventListener('click', function() {
    PlayBtnPress()
    SwineChopperStrat.style.display = 'none'    
    SwineChopperAppStat.style.display = 'none'
    SwineChopperVetStat.style.display = 'block'
    SwineChopperChampStat.style.display = 'none'
    SwineChopperAppSkills.style.display = 'none'
    SwineChopperVetSkills.style.display = 'block'
    SwineChopperChampSkills.style.display = 'none'
})

SwineChopperChamp.addEventListener('click', function() {
    PlayBtnPress()
    SwineChopperStrat.style.display = 'none'    
    SwineChopperAppStat.style.display = 'none'
    SwineChopperVetStat.style.display = 'none'
    SwineChopperChampStat.style.display = 'block'
    SwineChopperAppSkills.style.display = 'none'
    SwineChopperVetSkills.style.display = 'none'
    SwineChopperChampSkills.style.display = 'block'
})

SwineWretchApp.addEventListener('click', function() {
    PlayBtnPress();
    SwineWretchStrat.style.display = 'none';
    SwineWretchAppStat.style.display = 'block';
    SwineWretchVetStat.style.display = 'none';
    SwineWretchChampStat.style.display = 'none';
    SwineWretchAppSkills.style.display = 'block';
    SwineWretchVetSkills.style.display = 'none';
    SwineWretchChampSkills.style.display = 'none';
});

SwineWretchVet.addEventListener('click', function() {
    PlayBtnPress();
    SwineWretchStrat.style.display = 'none';
    SwineWretchAppStat.style.display = 'none';
    SwineWretchVetStat.style.display = 'block';
    SwineWretchChampStat.style.display = 'none';
    SwineWretchAppSkills.style.display = 'none';
    SwineWretchVetSkills.style.display = 'block';
    SwineWretchChampSkills.style.display = 'none';
});

SwineWretchChamp.addEventListener('click', function() {
    PlayBtnPress();
    SwineWretchStrat.style.display = 'none';
    SwineWretchAppStat.style.display = 'none';
    SwineWretchVetStat.style.display = 'none';
    SwineWretchChampStat.style.display = 'block';
    SwineWretchAppSkills.style.display = 'none';
    SwineWretchVetSkills.style.display = 'none';
    SwineWretchChampSkills.style.display = 'block';
});

SwineDrummerApp.addEventListener('click', function() {
    PlayBtnPress();
    SwineDrummerStrat.style.display = 'none';
    SwineDrummerAppStat.style.display = 'block';
    SwineDrummerVetStat.style.display = 'none';
    SwineDrummerChampStat.style.display = 'none';
    SwineDrummerAppSkills.style.display = 'block';
    SwineDrummerVetSkills.style.display = 'none';
    SwineDrummerChampSkills.style.display = 'none';
});

SwineDrummerVet.addEventListener('click', function() {
    PlayBtnPress();
    SwineDrummerStrat.style.display = 'none';
    SwineDrummerAppStat.style.display = 'none';
    SwineDrummerVetStat.style.display = 'block';
    SwineDrummerChampStat.style.display = 'none';
    SwineDrummerAppSkills.style.display = 'none';
    SwineDrummerVetSkills.style.display = 'block';
    SwineDrummerChampSkills.style.display = 'none';
});

SwineDrummerChamp.addEventListener('click', function() {
    PlayBtnPress();
    SwineDrummerStrat.style.display = 'none';
    SwineDrummerAppStat.style.display = 'none';
    SwineDrummerVetStat.style.display = 'none';
    SwineDrummerChampStat.style.display = 'block';
    SwineDrummerAppSkills.style.display = 'none';
    SwineDrummerVetSkills.style.display = 'none';
    SwineDrummerChampSkills.style.display = 'block';
})

SwineSlasherApp.addEventListener('click', function() {
    PlayBtnPress()
    SwineSlasherStrat.style.display = 'none'    
    SwineSlasherAppStat.style.display = 'block'
    SwineSlasherVetStat.style.display = 'none'
    SwineSlasherChampStat.style.display = 'none'
    SwineSlasherAppSkills.style.display = 'block'
    SwineSlasherVetSkills.style.display = 'none'
    SwineSlasherChampSkills.style.display = 'none'

})

SwineSlasherVet.addEventListener('click', function() {
    PlayBtnPress()
    SwineSlasherStrat.style.display = 'none'    
    SwineSlasherAppStat.style.display = 'none'
    SwineSlasherVetStat.style.display = 'block'
    SwineSlasherChampStat.style.display = 'none'
    SwineSlasherAppSkills.style.display = 'none'
    SwineSlasherVetSkills.style.display = 'block'
    SwineSlasherChampSkills.style.display = 'none'
})

SwineSlasherChamp.addEventListener('click', function() {
    PlayBtnPress()
    SwineSlasherStrat.style.display = 'none'    
    SwineSlasherAppStat.style.display = 'none'
    SwineSlasherVetStat.style.display = 'none'
    SwineSlasherChampStat.style.display = 'block'
    SwineSlasherAppSkills.style.display = 'none'
    SwineSlasherVetSkills.style.display = 'none'
    SwineSlasherChampSkills.style.display = 'block'
})


CarrionEaterApp.addEventListener('click', function() {
    PlayBtnPress()
    CarrionEaterStrat.style.display = 'none'    
    CarrionEaterAppStat.style.display = 'block'
    CarrionEaterVetStat.style.display = 'none'
    CarrionEaterChampStat.style.display = 'none'
    CarrionEaterAppSkills.style.display = 'block'
    CarrionEaterVetSkills.style.display = 'none'
    CarrionEaterChampSkills.style.display = 'none'

})

CarrionEaterVet.addEventListener('click', function() {
    PlayBtnPress()
    CarrionEaterStrat.style.display = 'none'    
    CarrionEaterAppStat.style.display = 'none'
    CarrionEaterVetStat.style.display = 'block'
    CarrionEaterChampStat.style.display = 'none'
    CarrionEaterAppSkills.style.display = 'none'
    CarrionEaterVetSkills.style.display = 'block'
    CarrionEaterChampSkills.style.display = 'none'
})

CarrionEaterChamp.addEventListener('click', function() {
    PlayBtnPress()
    CarrionEaterStrat.style.display = 'none'    
    CarrionEaterAppStat.style.display = 'none'
    CarrionEaterVetStat.style.display = 'none'
    CarrionEaterChampStat.style.display = 'block'
    CarrionEaterAppSkills.style.display = 'none'
    CarrionEaterVetSkills.style.display = 'none'
    CarrionEaterChampSkills.style.display = 'block'
})


SwinetaurVet.addEventListener('click', function() {
    PlayBtnPress()
    SwinetaurStrat.style.display = 'none'    
    SwinetaurVetStat.style.display = 'block'
    SwinetaurChampStat.style.display = 'none'
    SwinetaurVetSkills.style.display = 'block'
    SwinetaurChampSkills.style.display = 'none'

})

SwinetaurChamp.addEventListener('click', function() {
    PlayBtnPress()
    SwinetaurStrat.style.display = 'none'    
    SwinetaurVetStat.style.display = 'none'
    SwinetaurChampStat.style.display = 'block'
    SwinetaurVetSkills.style.display = 'none'
    SwinetaurChampSkills.style.display = 'block'
})

LargeCarrionEaterVet.addEventListener('click', function() {
    PlayBtnPress()
    LargeCarrionEaterStrat.style.display = 'none'    
    LargeCarrionEaterVetStat.style.display = 'block'
    LargeCarrionEaterChampStat.style.display = 'none'
    LargeCarrionEaterVetSkills.style.display = 'block'
    LargeCarrionEaterChampSkills.style.display = 'none'

})

LargeCarrionEaterChamp.addEventListener('click', function() {
    PlayBtnPress()
    LargeCarrionEaterStrat.style.display = 'none'    
    LargeCarrionEaterVetStat.style.display = 'none'
    LargeCarrionEaterChampStat.style.display = 'block'
    LargeCarrionEaterVetSkills.style.display = 'none'
    LargeCarrionEaterChampSkills.style.display = 'block'
})

SwineSkiverChamp.addEventListener('click', function() {PlayBtnPress(); SwineSkiverStrat.style.display = 'none';})

//Cove

PelagicGrouperApp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGrouperStrat.style.display = 'none'    
    PelagicGrouperAppStat.style.display = 'block'
    PelagicGrouperVetStat.style.display = 'none'
    PelagicGrouperChampStat.style.display = 'none'
    PelagicGrouperAppSkills.style.display = 'block'
    PelagicGrouperVetSkills.style.display = 'none'
    PelagicGrouperChampSkills.style.display = 'none'

})

PelagicGrouperVet.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGrouperStrat.style.display = 'none'    
    PelagicGrouperAppStat.style.display = 'none'
    PelagicGrouperVetStat.style.display = 'block'
    PelagicGrouperChampStat.style.display = 'none'
    PelagicGrouperAppSkills.style.display = 'none'
    PelagicGrouperVetSkills.style.display = 'block'
    PelagicGrouperChampSkills.style.display = 'none'
})

PelagicGrouperChamp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGrouperStrat.style.display = 'none'    
    PelagicGrouperAppStat.style.display = 'none'
    PelagicGrouperVetStat.style.display = 'none'
    PelagicGrouperChampStat.style.display = 'block'
    PelagicGrouperAppSkills.style.display = 'none'
    PelagicGrouperVetSkills.style.display = 'none'
    PelagicGrouperChampSkills.style.display = 'block'
})

PelagicGuardianApp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGuardianStrat.style.display = 'none'    
    PelagicGuardianAppStat.style.display = 'block'
    PelagicGuardianVetStat.style.display = 'none'
    PelagicGuardianChampStat.style.display = 'none'
    PelagicGuardianAppSkills.style.display = 'block'
    PelagicGuardianVetSkills.style.display = 'none'
    PelagicGuardianChampSkills.style.display = 'none'

})

PelagicGuardianVet.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGuardianStrat.style.display = 'none'    
    PelagicGuardianAppStat.style.display = 'none'
    PelagicGuardianVetStat.style.display = 'block'
    PelagicGuardianChampStat.style.display = 'none'
    PelagicGuardianAppSkills.style.display = 'none'
    PelagicGuardianVetSkills.style.display = 'block'
    PelagicGuardianChampSkills.style.display = 'none'
})

PelagicGuardianChamp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicGuardianStrat.style.display = 'none'    
    PelagicGuardianAppStat.style.display = 'none'
    PelagicGuardianVetStat.style.display = 'none'
    PelagicGuardianChampStat.style.display = 'block'
    PelagicGuardianAppSkills.style.display = 'none'
    PelagicGuardianVetSkills.style.display = 'none'
    PelagicGuardianChampSkills.style.display = 'block'
})

PelagicShamanApp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicShamanStrat.style.display = 'none'    
    PelagicShamanAppStat.style.display = 'block'
    PelagicShamanVetStat.style.display = 'none'
    PelagicShamanChampStat.style.display = 'none'
    PelagicShamanAppSkills.style.display = 'block'
    PelagicShamanVetSkills.style.display = 'none'
    PelagicShamanChampSkills.style.display = 'none'

})

PelagicShamanVet.addEventListener('click', function() {
    PlayBtnPress()
    PelagicShamanStrat.style.display = 'none'    
    PelagicShamanAppStat.style.display = 'none'
    PelagicShamanVetStat.style.display = 'block'
    PelagicShamanChampStat.style.display = 'none'
    PelagicShamanAppSkills.style.display = 'none'
    PelagicShamanVetSkills.style.display = 'block'
    PelagicShamanChampSkills.style.display = 'none'
})

PelagicShamanChamp.addEventListener('click', function() {
    PlayBtnPress()
    PelagicShamanStrat.style.display = 'none'    
    PelagicShamanAppStat.style.display = 'none'
    PelagicShamanVetStat.style.display = 'none'
    PelagicShamanChampStat.style.display = 'block'
    PelagicShamanAppSkills.style.display = 'none'
    PelagicShamanVetSkills.style.display = 'none'
    PelagicShamanChampSkills.style.display = 'block'
})

DeepStingerApp.addEventListener('click', function() {
    PlayBtnPress()
    DeepStingerStrat.style.display = 'none'    
    DeepStingerAppStat.style.display = 'block'
    DeepStingerVetStat.style.display = 'none'
    DeepStingerChampStat.style.display = 'none'
    DeepStingerAppSkills.style.display = 'block'
    DeepStingerVetSkills.style.display = 'none'
    DeepStingerChampSkills.style.display = 'none'

})

DeepStingerVet.addEventListener('click', function() {
    PlayBtnPress()
    DeepStingerStrat.style.display = 'none'    
    DeepStingerAppStat.style.display = 'none'
    DeepStingerVetStat.style.display = 'block'
    DeepStingerChampStat.style.display = 'none'
    DeepStingerAppSkills.style.display = 'none'
    DeepStingerVetSkills.style.display = 'block'
    DeepStingerChampSkills.style.display = 'none'
})

DeepStingerChamp.addEventListener('click', function() {
    PlayBtnPress()
    DeepStingerStrat.style.display = 'none'    
    DeepStingerAppStat.style.display = 'none'
    DeepStingerVetStat.style.display = 'none'
    DeepStingerChampStat.style.display = 'block'
    DeepStingerAppSkills.style.display = 'none'
    DeepStingerVetSkills.style.display = 'none'
    DeepStingerChampSkills.style.display = 'block'
})

DrownedThrallApp.addEventListener('click', function() {
    PlayBtnPress()
    DrownedThrallStrat.style.display = 'none'    
    DrownedThrallAppStat.style.display = 'block'
    DrownedThrallVetStat.style.display = 'none'
    DrownedThrallChampStat.style.display = 'none'
    DrownedThrallAppSkills.style.display = 'block'
    DrownedThrallVetSkills.style.display = 'none'
    DrownedThrallChampSkills.style.display = 'none'

})

DrownedThrallVet.addEventListener('click', function() {
    PlayBtnPress()
    DrownedThrallStrat.style.display = 'none'    
    DrownedThrallAppStat.style.display = 'none'
    DrownedThrallVetStat.style.display = 'block'
    DrownedThrallChampStat.style.display = 'none'
    DrownedThrallAppSkills.style.display = 'none'
    DrownedThrallVetSkills.style.display = 'block'
    DrownedThrallChampSkills.style.display = 'none'
})

DrownedThrallChamp.addEventListener('click', function() {
    PlayBtnPress()
    DrownedThrallStrat.style.display = 'none'    
    DrownedThrallAppStat.style.display = 'none'
    DrownedThrallVetStat.style.display = 'none'
    DrownedThrallChampStat.style.display = 'block'
    DrownedThrallAppSkills.style.display = 'none'
    DrownedThrallVetSkills.style.display = 'none'
    DrownedThrallChampSkills.style.display = 'block'
})

SeaMaggotApp.addEventListener('click', function() {
    PlayBtnPress()
    SeaMaggotStrat.style.display = 'none'    
    SeaMaggotAppStat.style.display = 'block'
    SeaMaggotVetStat.style.display = 'none'
    SeaMaggotChampStat.style.display = 'none'
    SeaMaggotAppSkills.style.display = 'block'
    SeaMaggotVetSkills.style.display = 'none'
    SeaMaggotChampSkills.style.display = 'none'

})

SeaMaggotVet.addEventListener('click', function() {
    PlayBtnPress()
    SeaMaggotStrat.style.display = 'none'    
    SeaMaggotAppStat.style.display = 'none'
    SeaMaggotVetStat.style.display = 'block'
    SeaMaggotChampStat.style.display = 'none'
    SeaMaggotAppSkills.style.display = 'none'
    SeaMaggotVetSkills.style.display = 'block'
    SeaMaggotChampSkills.style.display = 'none'
})

SeaMaggotChamp.addEventListener('click', function() {
    PlayBtnPress()
    SeaMaggotStrat.style.display = 'none'    
    SeaMaggotAppStat.style.display = 'none'
    SeaMaggotVetStat.style.display = 'none'
    SeaMaggotChampStat.style.display = 'block'
    SeaMaggotAppSkills.style.display = 'none'
    SeaMaggotVetSkills.style.display = 'none'
    SeaMaggotChampSkills.style.display = 'block'
})

UcaCrusherVet.addEventListener('click', function() {
    PlayBtnPress()
    UcaCrusherStrat.style.display = 'none'    
    UcaCrusherVetStat.style.display = 'block'
    UcaCrusherChampStat.style.display = 'none'
    UcaCrusherVetSkills.style.display = 'block'
    UcaCrusherChampSkills.style.display = 'none'

})

UcaCrusherChamp.addEventListener('click', function() {
    PlayBtnPress()
    UcaCrusherStrat.style.display = 'none'    
    UcaCrusherVetStat.style.display = 'none'
    UcaCrusherChampStat.style.display = 'block'
    UcaCrusherVetSkills.style.display = 'none'
    UcaCrusherChampSkills.style.display = 'block'
})

SquiffyGhastChamp.addEventListener('click', function() {PlayBtnPress(); SquiffyGhastStrat.style.display = 'none';})

//Shared

BrigandCutthroatApp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandCutthroatStrat.style.display = 'none'    
    BrigandCutthroatAppStat.style.display = 'block'
    BrigandCutthroatVetStat.style.display = 'none'
    BrigandCutthroatChampStat.style.display = 'none'
    BrigandCutthroatAppSkills.style.display = 'block'
    BrigandCutthroatVetSkills.style.display = 'none'
    BrigandCutthroatChampSkills.style.display = 'none'

})

BrigandCutthroatVet.addEventListener('click', function() {
    PlayBtnPress()
    BrigandCutthroatStrat.style.display = 'none'    
    BrigandCutthroatAppStat.style.display = 'none'
    BrigandCutthroatVetStat.style.display = 'block'
    BrigandCutthroatChampStat.style.display = 'none'
    BrigandCutthroatAppSkills.style.display = 'none'
    BrigandCutthroatVetSkills.style.display = 'block'
    BrigandCutthroatChampSkills.style.display = 'none'
})

BrigandCutthroatChamp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandCutthroatStrat.style.display = 'none'    
    BrigandCutthroatAppStat.style.display = 'none'
    BrigandCutthroatVetStat.style.display = 'none'
    BrigandCutthroatChampStat.style.display = 'block'
    BrigandCutthroatAppSkills.style.display = 'none'
    BrigandCutthroatVetSkills.style.display = 'none'
    BrigandCutthroatChampSkills.style.display = 'block'
})

BrigandBloodletterApp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandBloodletterStrat.style.display = 'none'    
    BrigandBloodletterAppStat.style.display = 'block'
    BrigandBloodletterVetStat.style.display = 'none'
    BrigandBloodletterChampStat.style.display = 'none'
    BrigandBloodletterAppSkills.style.display = 'block'
    BrigandBloodletterVetSkills.style.display = 'none'
    BrigandBloodletterChampSkills.style.display = 'none'

})

BrigandBloodletterVet.addEventListener('click', function() {
    PlayBtnPress()
    BrigandBloodletterStrat.style.display = 'none'    
    BrigandBloodletterAppStat.style.display = 'none'
    BrigandBloodletterVetStat.style.display = 'block'
    BrigandBloodletterChampStat.style.display = 'none'
    BrigandBloodletterAppSkills.style.display = 'none'
    BrigandBloodletterVetSkills.style.display = 'block'
    BrigandBloodletterChampSkills.style.display = 'none'
})

BrigandBloodletterChamp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandBloodletterStrat.style.display = 'none'    
    BrigandBloodletterAppStat.style.display = 'none'
    BrigandBloodletterVetStat.style.display = 'none'
    BrigandBloodletterChampStat.style.display = 'block'
    BrigandBloodletterAppSkills.style.display = 'none'
    BrigandBloodletterVetSkills.style.display = 'none'
    BrigandBloodletterChampSkills.style.display = 'block'
})

BrigandFusilierApp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandFusilierStrat.style.display = 'none'    
    BrigandFusilierAppStat.style.display = 'block'
    BrigandFusilierVetStat.style.display = 'none'
    BrigandFusilierChampStat.style.display = 'none'
    BrigandFusilierAppSkills.style.display = 'block'
    BrigandFusilierVetSkills.style.display = 'none'
    BrigandFusilierChampSkills.style.display = 'none'

})

BrigandFusilierVet.addEventListener('click', function() {
    PlayBtnPress()
    BrigandFusilierStrat.style.display = 'none'    
    BrigandFusilierAppStat.style.display = 'none'
    BrigandFusilierVetStat.style.display = 'block'
    BrigandFusilierChampStat.style.display = 'none'
    BrigandFusilierAppSkills.style.display = 'none'
    BrigandFusilierVetSkills.style.display = 'block'
    BrigandFusilierChampSkills.style.display = 'none'
})

BrigandFusilierChamp.addEventListener('click', function() {
    PlayBtnPress()
    BrigandFusilierStrat.style.display = 'none'    
    BrigandFusilierAppStat.style.display = 'none'
    BrigandFusilierVetStat.style.display = 'none'
    BrigandFusilierChampStat.style.display = 'block'
    BrigandFusilierAppSkills.style.display = 'none'
    BrigandFusilierVetSkills.style.display = 'none'
    BrigandFusilierChampSkills.style.display = 'block'
})

CultistBrawlerApp.addEventListener('click', function() {
    PlayBtnPress()
    CultistBrawlerStrat.style.display = 'none'    
    CultistBrawlerAppStat.style.display = 'block'
    CultistBrawlerVetStat.style.display = 'none'
    CultistBrawlerChampStat.style.display = 'none'
    CultistBrawlerAppSkills.style.display = 'block'
    CultistBrawlerVetSkills.style.display = 'none'
    CultistBrawlerChampSkills.style.display = 'none'

})

CultistBrawlerVet.addEventListener('click', function() {
    PlayBtnPress()
    CultistBrawlerStrat.style.display = 'none'    
    CultistBrawlerAppStat.style.display = 'none'
    CultistBrawlerVetStat.style.display = 'block'
    CultistBrawlerChampStat.style.display = 'none'
    CultistBrawlerAppSkills.style.display = 'none'
    CultistBrawlerVetSkills.style.display = 'block'
    CultistBrawlerChampSkills.style.display = 'none'
})

CultistBrawlerChamp.addEventListener('click', function() {
    PlayBtnPress()
    CultistBrawlerStrat.style.display = 'none'    
    CultistBrawlerAppStat.style.display = 'none'
    CultistBrawlerVetStat.style.display = 'none'
    CultistBrawlerChampStat.style.display = 'block'
    CultistBrawlerAppSkills.style.display = 'none'
    CultistBrawlerVetSkills.style.display = 'none'
    CultistBrawlerChampSkills.style.display = 'block'
})

CultistAcolyteApp.addEventListener('click', function() {
    PlayBtnPress()
    CultistAcolyteStrat.style.display = 'none'    
    CultistAcolyteAppStat.style.display = 'block'
    CultistAcolyteVetStat.style.display = 'none'
    CultistAcolyteChampStat.style.display = 'none'
    CultistAcolyteAppSkills.style.display = 'block'
    CultistAcolyteVetSkills.style.display = 'none'
    CultistAcolyteChampSkills.style.display = 'none'

})

CultistAcolyteVet.addEventListener('click', function() {
    PlayBtnPress()
    CultistAcolyteStrat.style.display = 'none'    
    CultistAcolyteAppStat.style.display = 'none'
    CultistAcolyteVetStat.style.display = 'block'
    CultistAcolyteChampStat.style.display = 'none'
    CultistAcolyteAppSkills.style.display = 'none'
    CultistAcolyteVetSkills.style.display = 'block'
    CultistAcolyteChampSkills.style.display = 'none'
})

CultistAcolyteChamp.addEventListener('click', function() {
    PlayBtnPress()
    CultistAcolyteStrat.style.display = 'none'    
    CultistAcolyteAppStat.style.display = 'none'
    CultistAcolyteVetStat.style.display = 'none'
    CultistAcolyteChampStat.style.display = 'block'
    CultistAcolyteAppSkills.style.display = 'none'
    CultistAcolyteVetSkills.style.display = 'none'
    CultistAcolyteChampSkills.style.display = 'block'
})

MadmanApp.addEventListener('click', function() {
    PlayBtnPress()
    MadmanStrat.style.display = 'none'    
    MadmanAppStat.style.display = 'block'
    MadmanVetStat.style.display = 'none'
    MadmanChampStat.style.display = 'none'
    MadmanAppSkills.style.display = 'block'
    MadmanVetSkills.style.display = 'none'
    MadmanChampSkills.style.display = 'none'

})

MadmanVet.addEventListener('click', function() {
    PlayBtnPress()
    MadmanStrat.style.display = 'none'    
    MadmanAppStat.style.display = 'none'
    MadmanVetStat.style.display = 'block'
    MadmanChampStat.style.display = 'none'
    MadmanAppSkills.style.display = 'none'
    MadmanVetSkills.style.display = 'block'
    MadmanChampSkills.style.display = 'none'
})

MadmanChamp.addEventListener('click', function() {
    PlayBtnPress()
    MadmanStrat.style.display = 'none'    
    MadmanAppStat.style.display = 'none'
    MadmanVetStat.style.display = 'none'
    MadmanChampStat.style.display = 'block'
    MadmanAppSkills.style.display = 'none'
    MadmanVetSkills.style.display = 'none'
    MadmanChampSkills.style.display = 'block'
})

WebberApp.addEventListener('click', function() {
    PlayBtnPress()
    WebberStrat.style.display = 'none'    
    WebberAppStat.style.display = 'block'
    WebberVetStat.style.display = 'none'
    WebberChampStat.style.display = 'none'
    WebberAppSkills.style.display = 'block'
    WebberVetSkills.style.display = 'none'
    WebberChampSkills.style.display = 'none'

})

WebberVet.addEventListener('click', function() {
    PlayBtnPress()
    WebberStrat.style.display = 'none'    
    WebberAppStat.style.display = 'none'
    WebberVetStat.style.display = 'block'
    WebberChampStat.style.display = 'none'
    WebberAppSkills.style.display = 'none'
    WebberVetSkills.style.display = 'block'
    WebberChampSkills.style.display = 'none'
})

WebberChamp.addEventListener('click', function() {
    PlayBtnPress()
    WebberStrat.style.display = 'none'    
    WebberAppStat.style.display = 'none'
    WebberVetStat.style.display = 'none'
    WebberChampStat.style.display = 'block'
    WebberAppSkills.style.display = 'none'
    WebberVetSkills.style.display = 'none'
    WebberChampSkills.style.display = 'block'
})

SpitterApp.addEventListener('click', function() {
    PlayBtnPress()
    SpitterStrat.style.display = 'none'    
    SpitterAppStat.style.display = 'block'
    SpitterVetStat.style.display = 'none'
    SpitterChampStat.style.display = 'none'
    SpitterAppSkills.style.display = 'block'
    SpitterVetSkills.style.display = 'none'
    SpitterChampSkills.style.display = 'none'

})

SpitterVet.addEventListener('click', function() {
    PlayBtnPress()
    SpitterStrat.style.display = 'none'    
    SpitterAppStat.style.display = 'none'
    SpitterVetStat.style.display = 'block'
    SpitterChampStat.style.display = 'none'
    SpitterAppSkills.style.display = 'none'
    SpitterVetSkills.style.display = 'block'
    SpitterChampSkills.style.display = 'none'
})

SpitterChamp.addEventListener('click', function() {
    PlayBtnPress()
    SpitterStrat.style.display = 'none'    
    SpitterAppStat.style.display = 'none'
    SpitterVetStat.style.display = 'none'
    SpitterChampStat.style.display = 'block'
    SpitterAppSkills.style.display = 'none'
    SpitterVetSkills.style.display = 'none'
    SpitterChampSkills.style.display = 'block'
})

MaggotApp.addEventListener('click', function() {
    PlayBtnPress()
    MaggotStrat.style.display = 'none'    
    MaggotAppStat.style.display = 'block'
    MaggotVetStat.style.display = 'none'
    MaggotChampStat.style.display = 'none'
    MaggotAppSkills.style.display = 'block'
    MaggotVetSkills.style.display = 'none'
    MaggotChampSkills.style.display = 'none'

})

MaggotVet.addEventListener('click', function() {
    PlayBtnPress()
    MaggotStrat.style.display = 'none'    
    MaggotAppStat.style.display = 'none'
    MaggotVetStat.style.display = 'block'
    MaggotChampStat.style.display = 'none'
    MaggotAppSkills.style.display = 'none'
    MaggotVetSkills.style.display = 'block'
    MaggotChampSkills.style.display = 'none'
})

MaggotChamp.addEventListener('click', function() {
    PlayBtnPress()
    MaggotStrat.style.display = 'none'    
    MaggotAppStat.style.display = 'none'
    MaggotVetStat.style.display = 'none'
    MaggotChampStat.style.display = 'block'
    MaggotAppSkills.style.display = 'none'
    MaggotVetSkills.style.display = 'none'
    MaggotChampSkills.style.display = 'block'
})

BoneRabbleApp.addEventListener('click', function() {
    PlayBtnPress()
    BoneRabbleStrat.style.display = 'none'    
    BoneRabbleAppStat.style.display = 'block'
    BoneRabbleVetStat.style.display = 'none'
    BoneRabbleChampStat.style.display = 'none'
    BoneRabbleAppSkills.style.display = 'block'
    BoneRabbleVetSkills.style.display = 'none'
    BoneRabbleChampSkills.style.display = 'none'

})

BoneRabbleVet.addEventListener('click', function() {
    PlayBtnPress()
    BoneRabbleStrat.style.display = 'none'    
    BoneRabbleAppStat.style.display = 'none'
    BoneRabbleVetStat.style.display = 'block'
    BoneRabbleChampStat.style.display = 'none'
    BoneRabbleAppSkills.style.display = 'none'
    BoneRabbleVetSkills.style.display = 'block'
    BoneRabbleChampSkills.style.display = 'none'
})

BoneRabbleChamp.addEventListener('click', function() {
    PlayBtnPress()
    BoneRabbleStrat.style.display = 'none'    
    BoneRabbleAppStat.style.display = 'none'
    BoneRabbleVetStat.style.display = 'none'
    BoneRabbleChampStat.style.display = 'block'
    BoneRabbleAppSkills.style.display = 'none'
    BoneRabbleVetSkills.style.display = 'none'
    BoneRabbleChampSkills.style.display = 'block'
})

GargoyleVet.addEventListener('click', function() {
    PlayBtnPress()
    GargoyleStrat.style.display = 'none'    
    GargoyleVetStat.style.display = 'block'
    GargoyleChampStat.style.display = 'none'
    GargoyleVetSkills.style.display = 'block'
    GargoyleChampSkills.style.display = 'none'

})

GargoyleChamp.addEventListener('click', function() {
    PlayBtnPress()
    GargoyleStrat.style.display = 'none'    
    GargoyleVetStat.style.display = 'none'
    GargoyleChampStat.style.display = 'block'
    GargoyleVetSkills.style.display = 'none'
    GargoyleChampSkills.style.display = 'block'
})

GhoulVet.addEventListener('click', function() {
    PlayBtnPress()
    GhoulStrat.style.display = 'none'    
    GhoulVetStat.style.display = 'block'
    GhoulChampStat.style.display = 'none'
    GhoulVetSkills.style.display = 'block'
    GhoulChampSkills.style.display = 'none'

})

GhoulChamp.addEventListener('click', function() {
    PlayBtnPress()
    GhoulStrat.style.display = 'none'    
    GhoulVetStat.style.display = 'none'
    GhoulChampStat.style.display = 'block'
    GhoulVetSkills.style.display = 'none'
    GhoulChampSkills.style.display = 'block'
})

BrigandRaiderDarkest.addEventListener('click', function() {PlayBtnPress(); BrigandRaiderStrat.style.display = 'none';})
BrigandHunterDarkest.addEventListener('click', function() {PlayBtnPress(); BrigandHunterStrat.style.display = 'none';})

//Adding Stat and Strat Toggle Listeners

//Ruins

BoneSoldierStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneSoldierStrat.style.display = 'none'})
BoneSoldierStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneSoldierStrat.style.display = 'block'})

BoneDefenderStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneDefenderStrat.style.display = 'none'})
BoneDefenderStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneDefenderStrat.style.display = 'block'})

BoneArbalestStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneArbalestStrat.style.display = 'none'})
BoneArbalestStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneArbalestStrat.style.display = 'block'})

BoneCourtierStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneCourtierStrat.style.display = 'none'})
BoneCourtierStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneCourtierStrat.style.display = 'block'})

BoneSpearmanStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneSpearmanStrat.style.display = 'none'})
BoneSpearmanStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneSpearmanStrat.style.display = 'block'})

BoneCaptainStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneCaptainStrat.style.display = 'none'})
BoneCaptainStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneCaptainStrat.style.display = 'block'})

BoneBearerStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneBearerStrat.style.display = 'none'})
BoneBearerStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneBearerStrat.style.display = 'block'})


//Weald

FungalScratcherStatBtn.addEventListener ('click', function() { PlayPageOpn();FungalScratcherStrat.style.display = 'none'})
FungalScratcherStratBtn.addEventListener ('click', function() {PlayPageOpn();FungalScratcherStrat.style.display = 'block'})

FungalArtilleryStatBtn.addEventListener ('click', function() { PlayPageOpn();FungalArtilleryStrat.style.display = 'none'})
FungalArtilleryStratBtn.addEventListener ('click', function() {PlayPageOpn();FungalArtilleryStrat.style.display = 'block'})

RabidGnasherStatBtn.addEventListener ('click', function() { PlayPageOpn();RabidGnasherStrat.style.display = 'none'})
RabidGnasherStratBtn.addEventListener ('click', function() {PlayPageOpn();RabidGnasherStrat.style.display = 'block'})

EctoplasmStatBtn.addEventListener ('click', function() { PlayPageOpn();EctoplasmStrat.style.display = 'none'})
EctoplasmStratBtn.addEventListener ('click', function() {PlayPageOpn();EctoplasmStrat.style.display = 'block'})

LargeEctoplasmStatBtn.addEventListener ('click', function() { PlayPageOpn();LargeEctoplasmStrat.style.display = 'none'})
LargeEctoplasmStratBtn.addEventListener ('click', function() {PlayPageOpn();LargeEctoplasmStrat.style.display = 'block'})

CroneStatBtn.addEventListener ('click', function() { PlayPageOpn();CroneStrat.style.display = 'none'})
CroneStratBtn.addEventListener ('click', function() {PlayPageOpn();CroneStrat.style.display = 'block'})

UncleanGiantStatBtn.addEventListener ('click', function() { PlayPageOpn();UncleanGiantStrat.style.display = 'none'})
UncleanGiantStratBtn.addEventListener ('click', function() {PlayPageOpn();UncleanGiantStrat.style.display = 'block'})

HatefulViragoStatBtn.addEventListener ('click', function() { PlayPageOpn();HatefulViragoStrat.style.display = 'none'})
HatefulViragoStratBtn.addEventListener ('click', function() {PlayPageOpn();HatefulViragoStrat.style.display = 'block'})

NecroticFungusStatBtn.addEventListener ('click', function() { PlayPageOpn();NecroticFungusStrat.style.display = 'none'})
NecroticFungusStratBtn.addEventListener ('click', function() {PlayPageOpn();NecroticFungusStrat.style.display = 'block'})


//Warrens

SwineChopperStatBtn.addEventListener ('click', function() { PlayPageOpn();SwineChopperStrat.style.display = 'none'})
SwineChopperStratBtn.addEventListener ('click', function() {PlayPageOpn();SwineChopperStrat.style.display = 'block'})

SwineWretchStatBtn.addEventListener ('click', function() { PlayPageOpn();SwineWretchStrat.style.display = 'none'})
SwineWretchStratBtn.addEventListener ('click', function() { PlayPageOpn();SwineWretchStrat.style.display = 'block'})

SwineDrummerStatBtn.addEventListener ('click', function() { PlayPageOpn();SwineDrummerStrat.style.display = 'none'})
SwineDrummerStratBtn.addEventListener ('click', function() { PlayPageOpn();SwineDrummerStrat.style.display = 'block'})

SwineSlasherStatBtn.addEventListener ('click', function() { PlayPageOpn();SwineSlasherStrat.style.display = 'none'})
SwineSlasherStratBtn.addEventListener ('click', function() { PlayPageOpn();SwineSlasherStrat.style.display = 'block'})

CarrionEaterStatBtn.addEventListener ('click', function() { PlayPageOpn();CarrionEaterStrat.style.display = 'none'})
CarrionEaterStratBtn.addEventListener ('click', function() { PlayPageOpn();CarrionEaterStrat.style.display = 'block'})

LargeCarrionEaterStatBtn.addEventListener ('click', function() { PlayPageOpn();LargeCarrionEaterStrat.style.display = 'none'})
LargeCarrionEaterStratBtn.addEventListener ('click', function() { PlayPageOpn();LargeCarrionEaterStrat.style.display = 'block'})

SwinetaurStatBtn.addEventListener ('click', function() {PlayPageOpn();SwinetaurStrat.style.display = 'none'})
SwinetaurStratBtn.addEventListener ('click', function() {PlayPageOpn();SwinetaurStrat.style.display = 'block'})

SwineSkiverStatBtn.addEventListener ('click', function() {PlayPageOpn();SwineSkiverStrat.style.display = 'none'})
SwineSkiverStratBtn.addEventListener ('click', function() {PlayPageOpn();SwineSkiverStrat.style.display = 'block'})


//Cove

PelagicGrouperStatBtn.addEventListener ('click', function() { PlayPageOpn();PelagicGrouperStrat.style.display = 'none'})
PelagicGrouperStratBtn.addEventListener ('click', function() {PlayPageOpn();PelagicGrouperStrat.style.display = 'block'})

PelagicGuardianStatBtn.addEventListener ('click', function() { PlayPageOpn();PelagicGuardianStrat.style.display = 'none'})
PelagicGuardianStratBtn.addEventListener ('click', function() {PlayPageOpn();PelagicGuardianStrat.style.display = 'block'})

PelagicShamanStatBtn.addEventListener ('click', function() { PlayPageOpn();PelagicShamanStrat.style.display = 'none'})
PelagicShamanStratBtn.addEventListener ('click', function() {PlayPageOpn();PelagicShamanStrat.style.display = 'block'})

DeepStingerStatBtn.addEventListener ('click', function() { PlayPageOpn();DeepStingerStrat.style.display = 'none'})
DeepStingerStratBtn.addEventListener ('click', function() {PlayPageOpn();DeepStingerStrat.style.display = 'block'})

DrownedThrallStatBtn.addEventListener ('click', function() { PlayPageOpn();DrownedThrallStrat.style.display = 'none'})
DrownedThrallStratBtn.addEventListener ('click', function() {PlayPageOpn();DrownedThrallStrat.style.display = 'block'})

SeaMaggotStatBtn.addEventListener ('click', function() { PlayPageOpn();SeaMaggotStrat.style.display = 'none'})
SeaMaggotStratBtn.addEventListener ('click', function() {PlayPageOpn();SeaMaggotStrat.style.display = 'block'})

UcaCrusherStatBtn.addEventListener ('click', function() { PlayPageOpn();UcaCrusherStrat.style.display = 'none'})
UcaCrusherStratBtn.addEventListener ('click', function() {PlayPageOpn();UcaCrusherStrat.style.display = 'block'})

SquiffyGhastStatBtn.addEventListener ('click', function() { PlayPageOpn();SquiffyGhastStrat.style.display = 'none'})
SquiffyGhastStratBtn.addEventListener ('click', function() {PlayPageOpn();SquiffyGhastStrat.style.display = 'block'})


//Shared

BrigandCutthroatStatBtn.addEventListener ('click', function() { PlayPageOpn();BrigandCutthroatStrat.style.display = 'none'})
BrigandCutthroatStratBtn.addEventListener ('click', function() {PlayPageOpn();BrigandCutthroatStrat.style.display = 'block'})

BrigandBloodletterStatBtn.addEventListener ('click', function() { PlayPageOpn();BrigandBloodletterStrat.style.display = 'none'})
BrigandBloodletterStratBtn.addEventListener ('click', function() {PlayPageOpn();BrigandBloodletterStrat.style.display = 'block'})

BrigandFusilierStatBtn.addEventListener ('click', function() { PlayPageOpn();BrigandFusilierStrat.style.display = 'none'})
BrigandFusilierStratBtn.addEventListener ('click', function() {PlayPageOpn();BrigandFusilierStrat.style.display = 'block'})

CultistBrawlerStatBtn.addEventListener ('click', function() { PlayPageOpn();CultistBrawlerStrat.style.display = 'none'})
CultistBrawlerStratBtn.addEventListener ('click', function() {PlayPageOpn();CultistBrawlerStrat.style.display = 'block'})

CultistAcolyteStatBtn.addEventListener ('click', function() { PlayPageOpn();CultistAcolyteStrat.style.display = 'none'})
CultistAcolyteStratBtn.addEventListener ('click', function() {PlayPageOpn();CultistAcolyteStrat.style.display = 'block'})

MadmanStatBtn.addEventListener ('click', function() { PlayPageOpn();MadmanStrat.style.display = 'none'})
MadmanStratBtn.addEventListener ('click', function() {PlayPageOpn();MadmanStrat.style.display = 'block'})

WebberStatBtn.addEventListener ('click', function() { PlayPageOpn();WebberStrat.style.display = 'none'})
WebberStratBtn.addEventListener ('click', function() {PlayPageOpn();WebberStrat.style.display = 'block'})

SpitterStatBtn.addEventListener ('click', function() { PlayPageOpn();SpitterStrat.style.display = 'none'})
SpitterStratBtn.addEventListener ('click', function() {PlayPageOpn();SpitterStrat.style.display = 'block'})

MaggotStatBtn.addEventListener ('click', function() { PlayPageOpn();MaggotStrat.style.display = 'none'})
MaggotStratBtn.addEventListener ('click', function() {PlayPageOpn();MaggotStrat.style.display = 'block'})

BoneRabbleStatBtn.addEventListener ('click', function() { PlayPageOpn();BoneRabbleStrat.style.display = 'none'})
BoneRabbleStratBtn.addEventListener ('click', function() {PlayPageOpn();BoneRabbleStrat.style.display = 'block'})

GargoyleStatBtn.addEventListener ('click', function() { PlayPageOpn();GargoyleStrat.style.display = 'none'})
GargoyleStratBtn.addEventListener ('click', function() {PlayPageOpn();GargoyleStrat.style.display = 'block'})

GhoulStatBtn.addEventListener ('click', function() { PlayPageOpn();GhoulStrat.style.display = 'none'})
GhoulStratBtn.addEventListener ('click', function() {PlayPageOpn();GhoulStrat.style.display = 'block'})

BrigandRaiderStatBtn.addEventListener ('click', function() { PlayPageOpn();BrigandRaiderStrat.style.display = 'none'})
BrigandRaiderStratBtn.addEventListener ('click', function() {PlayPageOpn();BrigandRaiderStrat.style.display = 'block'})

BrigandHunterStatBtn.addEventListener ('click', function() { PlayPageOpn();BrigandHunterStrat.style.display = 'none'})
BrigandHunterStratBtn.addEventListener ('click', function() {PlayPageOpn();BrigandHunterStrat.style.display = 'block'})



  
