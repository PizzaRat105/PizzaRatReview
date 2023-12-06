

document.addEventListener('DOMContentLoaded', function() {


    
    
    /*Provisions*/
    const ProvisionerBtn = document.getElementById('provisioner')
    const ProvisionerBox = document.getElementById('provisionbox')
    const RuinsNavigate = document.getElementById('ruins_nav')
    const WealdNavigate = document.getElementById('weald_nav')
    const WarrensNavigate = document.getElementById('warrens_nav')
    const CoveNavigate = document.getElementById('cove_nav')
    const CourtyardNavigate = document.getElementById('courtyard_nav')
    const FarmsteadNavigate = document.getElementById('farmstead_nav')
    
    const RuinsArea = document.getElementById('ruins_area')
    const WealdArea = document.getElementById('weald_area')
    const WarrensArea = document.getElementById('warrens_area')
    const CoveArea = document.getElementById('cove_area')
    const CourtyardArea = document.getElementById('courtyard_area')
    const FarmsteadArea = document.getElementById('farmstead_area')
    
    
    ProvisionerBtn.addEventListener('click' , function() {
      PlayPageOpn()
      ProvisionerBox.style.display = 'block'
    })
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && ProvisionerBox.style.display === 'block') {
        PlayPageClose()
        ProvisionerBox.style.display = 'none';
      }
    });
    
    
    RuinsNavigate.addEventListener('click', function() {
      PlayPageOpn()
      RuinsArea.style.display = 'flex'
      WealdArea.style.display = 'none'
      WarrensArea.style.display = 'none'
      CoveArea.style.display = 'none'
      CourtyardArea.style.display = 'none'
      FarmsteadArea.style.display = 'none'
    })
    WealdNavigate.addEventListener('click', function() {
      PlayPageOpn()
      RuinsArea.style.display = 'none'
      WealdArea.style.display = 'flex'
      WarrensArea.style.display = 'none'
      CoveArea.style.display = 'none'
      CourtyardArea.style.display = 'none'
      FarmsteadArea.style.display = 'none'
    })
    WarrensNavigate.addEventListener('click', function() {
      PlayPageOpn()
      RuinsArea.style.display = 'none'
      WealdArea.style.display = 'none'
      WarrensArea.style.display = 'flex'
      CoveArea.style.display = 'none'
      CourtyardArea.style.display = 'none'
      FarmsteadArea.style.display = 'none'
    })
    CoveNavigate.addEventListener('click', function() {
      PlayPageOpn()
      RuinsArea.style.display = 'none'
      WealdArea.style.display = 'none'
      WarrensArea.style.display = 'none'
      CoveArea.style.display = 'flex'
      CourtyardArea.style.display = 'none'
      FarmsteadArea.style.display = 'none'
    })
    CourtyardNavigate.addEventListener('click', function() {
      PlayPageOpn()
      RuinsArea.style.display = 'none'
      WealdArea.style.display = 'none'
      WarrensArea.style.display = 'none'
      CoveArea.style.display = 'none'
      CourtyardArea.style.display = 'flex'
      FarmsteadArea.style.display = 'none'
    })
    FarmsteadNavigate.addEventListener('click', function() {
      PlayPageOpn()
      RuinsArea.style.display = 'none'
      WealdArea.style.display = 'none'
      WarrensArea.style.display = 'none'
      CoveArea.style.display = 'none'
      CourtyardArea.style.display = 'none'
      FarmsteadArea.style.display = 'flex'
    })
    
    const CloseProvisions = document.getElementById('food_close')
    CloseProvisions.addEventListener('click', function() {
      PlayPageClose()
        ProvisionerBox.style.display = 'none'
      })
    
    })