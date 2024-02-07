

document.addEventListener('DOMContentLoaded', function() {


  function HideAllAreaContent() {
    const AllAreaContent = document.querySelectorAll('[class*="provision_areabox"], [class*="area_trap_content"], [class*="area_trap_desc"]');
  
    const AllAreaContentArray = Array.from(AllAreaContent); 
  
    AllAreaContentArray.forEach(area => {
      area.style.display = 'none';
    });
  
  }

  function HideAllTrapContent() {
    const AllTrapContent = document.querySelectorAll('[class*="area_trap_desc"]');
  
    const AllTrapContentArray = Array.from(AllTrapContent); 
  
    AllTrapContentArray.forEach(trap => {
      trap.style.display = 'none';
    });
  
  }

  



  function AssignTrapToggle(area){
    const TrapInfoShowBtn = document.getElementById(`${area}_trap_info_open`)
    const TrapInfoHideBtn = document.getElementById(`${area}_trap_info_close`)

    const AreaProvisionInfo = document.getElementById(`${area}_provision_content`)
    const AreaTrapInfo = document.getElementById(`${area}_trap_info_desc`)

    TrapInfoShowBtn.addEventListener("click", function(){
      PlayBtnPress()
      AreaProvisionInfo.style.display = "none"
      AreaTrapInfo.style.display = "block"
    })

    
    TrapInfoHideBtn.addEventListener("click", function(){
      PlayBtnPress()
      AreaProvisionInfo.style.display = "flex"
      AreaTrapInfo.style.display = "none"
    })
  }
  AssignTrapToggle("ruins")
  AssignTrapToggle("weald")
  AssignTrapToggle("warrens")
  AssignTrapToggle("cove")
  AssignTrapToggle("courtyard")

    /*Provisions*/
    const ProvisionerBtn = document.getElementById('provisioner')
    const ProvisionerBox = document.getElementById('provisionbox')


    const RuinsNavigate = document.getElementById('ruins_nav')
    const WealdNavigate = document.getElementById('weald_nav')
    const WarrensNavigate = document.getElementById('warrens_nav')
    const CoveNavigate = document.getElementById('cove_nav')
    const CourtyardNavigate = document.getElementById('courtyard_nav')
    const FarmsteadNavigate = document.getElementById('farmstead_nav')

    const RuinsProvisionInfo = document.getElementById('ruins_provision_content')
    const WealdProvisionInfo = document.getElementById('weald_provision_content')
    const WarrensProvisionInfo = document.getElementById('warrens_provision_content')
    const CoveProvisionInfo = document.getElementById('cove_provision_content')
    const CourtyardProvisionInfo = document.getElementById('courtyard_provision_content')


    const RuinsTrapToggle = document.getElementById('ruins_trap_toggle_menu')
    const WealdTrapToggle = document.getElementById('weald_trap_toggle_menu')
    const WarrensTrapToggle = document.getElementById('warrens_trap_toggle_menu')
    const CoveTrapToggle = document.getElementById('cove_trap_toggle_menu')
    const CourtyardTrapToggle = document.getElementById('courtyard_trap_toggle_menu')
    
    
    const RuinsArea = document.getElementById('ruins_area')
    const WealdArea = document.getElementById('weald_area')
    const WarrensArea = document.getElementById('warrens_area')
    const CoveArea = document.getElementById('cove_area')
    const CourtyardArea = document.getElementById('courtyard_area')
    const FarmsteadArea = document.getElementById('farmstead_area')
    
    
    ProvisionerBtn.addEventListener('click' , function() {
      PlayPageOpn()
      ProvisionerBox.style.display = 'flex'
      HideAllAreaContent()
      RuinsArea.style.display = 'flex'
      RuinsTrapToggle.style.display = 'flex'
      RuinsProvisionInfo.style.display = 'flex'


    })
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && ProvisionerBox.style.display === 'flex') {
        PlayPageClose()
        ProvisionerBox.style.display = 'none';
      }
    });
    
    
    RuinsNavigate.addEventListener('click', function() {
      PlayPageOpn()
      HideAllAreaContent()
      RuinsArea.style.display = 'flex'
      RuinsTrapToggle.style.display = 'flex'
      RuinsProvisionInfo.style.display = 'flex'
    })
    WealdNavigate.addEventListener('click', function() {
      PlayPageOpn()
      HideAllAreaContent()
      WealdArea.style.display = 'flex'
      WealdTrapToggle.style.display = 'flex'
      WealdProvisionInfo.style.display = 'flex'
    })
    WarrensNavigate.addEventListener('click', function() {
      PlayPageOpn()
      HideAllAreaContent()
      WarrensArea.style.display = 'flex'
      WarrensTrapToggle.style.display = 'flex'
      WarrensProvisionInfo.style.display = 'flex'
    })
    CoveNavigate.addEventListener('click', function() {
      PlayPageOpn()
      HideAllAreaContent()
      CoveArea.style.display = 'flex'
      CoveTrapToggle.style.display = 'flex'
      CoveProvisionInfo.style.display = 'flex'
    })
    CourtyardNavigate.addEventListener('click', function() {
      PlayPageOpn()
      HideAllAreaContent()
      CourtyardArea.style.display = 'flex'
      CourtyardTrapToggle.style.display = 'flex'
      CourtyardProvisionInfo.style.display = 'flex'
    })
    FarmsteadNavigate.addEventListener('click', function() {
      PlayPageOpn()
      HideAllAreaContent()
      FarmsteadArea.style.display = 'flex'
    })
    
    const CloseProvisions = document.getElementById('food_close')
    CloseProvisions.addEventListener('click', function() {
      PlayPageClose()
        ProvisionerBox.style.display = 'none'
      })
    
    })


    attachFlexElementHoverListener("food_provision");
    attachFlexElementHoverListener("shovel_provision");
    attachFlexElementHoverListener("antivenom_provision");
    attachFlexElementHoverListener("bandage_provision");
    attachFlexElementHoverListener("medicinal_herbs_provision");
    attachFlexElementHoverListener("skeleton_key_provision");
    attachFlexElementHoverListener("holy_water_provision");
    attachFlexElementHoverListener("laudanum_provision");
    attachFlexElementHoverListener("torch_provision");
    attachFlexElementHoverListener("dog_treats_provision");
    attachFlexElementHoverListener("firewood_provision");
    attachFlexElementHoverListener("the_blood_provision");
    attachFlexElementHoverListener("the_cure_provision");
    attachFlexElementHoverListener("aegis_scale_provision");
    attachFlexElementHoverListener("shard_dust_provision");


