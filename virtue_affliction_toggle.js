
/*Resolve Box*/
const ResolveBox = document.getElementById("resolve_box");
const AfflictionBtn = document.getElementById("affliction_btn");
const VirtueBtn = document.getElementById("virtue_btn");

AfflictionBtn.addEventListener('click' , function() {
  PlayPageOpn();
  ResolveBox.style.display = 'block';
});

VirtueBtn.addEventListener('click' , function() {
  PlayPageOpn();
  ResolveBox.style.display = 'block';
});


document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && ResolveBox.style.display === 'block') {
    PlayPageClose()
    ResolveBox.style.display = 'none';
    HideAllResolveContent()
    HideAllResolveDescription();
    resolveCharacter.style.display = 'block';
  }
})

const CloseResolve = document.getElementById('resolve_close');

CloseResolve.addEventListener('click', function() {
    PlayPageClose()
    ResolveBox.style.display = 'none'
    HideAllResolveContent()
    HideAllResolveDescription();
    resolveCharacter.style.display = 'block';
  })

attachClickListeners("[id='stalwart']", "[id='stalwart_desc']", "resolve_desc");
attachClickListeners("[id='courageous']", "[id='courageous_desc']", "resolve_desc");
attachClickListeners("[id='focused']", "[id='focused_desc']", "resolve_desc");
attachClickListeners("[id='powerful']", "[id='powerful_desc']", "resolve_desc");
attachClickListeners("[id='vigorous']", "[id='vigorous_desc']", "resolve_desc");
attachClickListeners("[id='refracted']", "[id='refracted_desc']", "resolve_desc");
attachClickListeners("[id='fearful']", "[id='fearful_desc']", "resolve_desc");
attachClickListeners("[id='paranoid']", "[id='paranoid_desc']", "resolve_desc");
attachClickListeners("[id='selfish']", "[id='selfish_desc']", "resolve_desc");
attachClickListeners("[id='masochistic']", "[id='masochistic_desc']", "resolve_desc");
attachClickListeners("[id='abusive']", "[id='abusive_desc']", "resolve_desc");
attachClickListeners("[id='hopeless']", "[id='hopeless_desc']", "resolve_desc");
attachClickListeners("[id='irrational']", "[id='irrational_desc']", "resolve_desc");
attachClickListeners("[id='rapturous']", "[id='rapturous_desc']", "resolve_desc");



const resolveCharacter = document.getElementById("resolve_check_character")
const resolveOverview = document.getElementById("disease_overview_btn")
const virtueOverview = document.getElementById("virtue_overview_btn")
const afflictionOverview = document.getElementById("affliction_overview_btn")
const actoutOverview = document.getElementById("actout_overview_btn")



function HideAllResolveContent(){
  const AllResolveContent = document.querySelectorAll('[class*="resolve_textwall"]');
  const AllResolveContentArray = Array.from(AllResolveContent); 

  AllResolveContentArray.forEach(content => { 
    content.style.display = 'none'
  })
}

function HideAllResolveDescription(){
    const AllResolveDescription = document.querySelectorAll('[class*="resolve_desc"]');
    const AllResolveDescriptionArray = Array.from(AllResolveDescription); 
  
    AllResolveDescriptionArray.forEach(content => { 
      content.style.display = 'none'
    })
  }


function AssignResolveContentBtnClickListener(id){
  const TriggerElement = document.getElementById(id)
  const TargetElement = document.getElementById(`${id}_desc`)

  TriggerElement.addEventListener("click", function() {
    PlayBtnPress()
    HideAllResolveContent();
    resolveCharacter.style.display = "none"
    TargetElement.style.display = "block"
  })
}

AssignResolveContentBtnClickListener("resolve_overview_btn")
AssignResolveContentBtnClickListener("virtue_overview_btn")
AssignResolveContentBtnClickListener("affliction_overview_btn")
AssignResolveContentBtnClickListener("actout_overview_btn")





attachHoverListeners("[id='resolve_overview']", "[id='resolve_overview_desc']");
attachHoverListeners("[id='affliction_overview']", "[id='affliction_overview_desc']");
attachHoverListeners("[id='virtue_overview']", "[id='virtue_overview_desc']");
attachHoverListeners("[id='actout_overview']", "[id='actout_overview_desc']");
attachHoverListeners("[id='circus_resolve_overview']", "[id='circus_resolve_overview_desc']");