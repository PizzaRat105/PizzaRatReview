
//Town Event

for (let i = 1; i <= 65; i++) { 
    attachTownEventClickListeners(`town_event${i}`)
  }


function HideAllTownEventContent() {
   const AllTownEventContent =  document.querySelectorAll('[class*="is_event_info"], [class*="event_header_container"], [class*="event_img_new"]');
   const AllTownEventContentArray = Array.from(AllTownEventContent); 
  
   AllTownEventContentArray.forEach(event => {
     event.style.display = 'none';
   });
}


function HideAllTownEventFrames() {
    const AllTownEventFrames =  document.querySelectorAll('[class*="town_event_overlay"]');
    const AllTownEventFramesArray = Array.from(AllTownEventFrames); 
   
    AllTownEventFramesArray.forEach(frame => {
      frame.style.display = 'none';
    });
 }
 

 const GoodEventOverlay = document.getElementById("good_event_overlay")
 const NeutralEventOverlay = document.getElementById("neutral_event_overlay")
 const BadEventOverlay = document.getElementById("bad_event_overlay")
 const CrimsonEventOverlay = document.getElementById("crimson_event_overlay")

 

function attachTownEventClickListeners(TownEventID) {
    const EventTrigger = document.getElementById(`${TownEventID}`);
    const EventImg = document.getElementById(`${TownEventID}_img`);
    const EventHeader = document.getElementById(`${TownEventID}_header`);
    const EventInfo = document.getElementById(`${TownEventID}_info`);
    EventTrigger.addEventListener("click", function() {
        PlayIconPress();
        HideAllTownEventContent();
        HideAllTownEventFrames();
        EventImg.style.display = "block"
        EventHeader.style.display = "block"
        EventInfo.style.display = "block"


        if (TownEventID === "town_event9" || TownEventID === "town_event10" || TownEventID === "town_event11" ||
        TownEventID === "town_event20" || TownEventID === "town_event22" ){
            BadEventOverlay.style.display = "block"
        }
        else if (TownEventID === "town_event1" || TownEventID === "town_event2" || TownEventID === "town_event3" ||
        TownEventID === "town_event4" || TownEventID === "town_event5" || TownEventID === "town_event6" ||
        TownEventID === "town_event12" || TownEventID === "town_event13" || TownEventID === "town_event14" ||
        TownEventID === "town_event15" || TownEventID === "town_event16" || TownEventID === "town_event17" ||
        TownEventID === "town_event18" || TownEventID === "town_event19" || TownEventID === "town_event21" ||
        TownEventID === "town_event27" || TownEventID === "town_event29" || TownEventID === "town_event30" ||
        TownEventID === "town_event32" || TownEventID === "town_event33" || TownEventID === "town_event49" ||
        TownEventID === "town_event57" || TownEventID === "town_event58" || TownEventID === "town_event59" ||
        TownEventID === "town_event60" || TownEventID === "town_event61" || TownEventID === "town_event64" ||
        TownEventID === "town_event65"  || TownEventID === "town_event8" ||  TownEventID === "town_event7"
        ){
            GoodEventOverlay.style.display = "block"
        }
        else if (TownEventID === "town_event52" || TownEventID === "town_event53" || TownEventID === "town_event54" ||
        TownEventID === "town_event55" || TownEventID === "town_event56"){
            CrimsonEventOverlay.style.display = "block"
        }
        else {
            NeutralEventOverlay.style.display = "block"
        }
    })
  }
  


  attachClickListeners("[id='general_event_btn']", "[id='general_town_event_names']", "town_event_column", );
  attachClickListeners("[id='quest_event_btn']", "[id='quest_town_event_names']", "town_event_column", );
  attachClickListeners("[id='facility_event_btn']", "[id='facility_town_event_names']", "town_event_column", );
  attachClickListeners("[id='hero_event_btn']", "[id='hero_town_event_names']", "town_event_column", );
  attachClickListeners("[id='dlc_event_btn']", "[id='dlc_town_event_names']", "town_event_column", );
  
  
  /*Town Event */
  const EventOpen = document.getElementById('town_event_open')
  const EventClosed = document.getElementById('town_event_closed')
  const EventOverlay = document.getElementById('event_overlay')
  const EventBox = document.getElementById('town_event_box');
  const ClosedEvent = document.getElementById('town_event_close');
  
  
  EventOpen.addEventListener('click' , function() {
    PlayBtnPress()
    EventClosed.style.display = 'block'
    EventOpen.style.display = 'none'
    EventBox.style.display = 'none'
  })
  EventClosed.addEventListener('click' , function() {
    PlayBtnPress()
    EventClosed.style.display = 'none'
    EventOpen.style.display = 'block'
    EventBox.style.display = 'block'
    const eventInfoContainers = document.querySelectorAll('.event_info_container');
  
      eventInfoContainers.forEach(function(container) {
          container.style.display = 'none';
      });
  })
  
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && EventBox.style.display === 'block') {
      PlayBtnPress()
      EventClosed.style.display = 'block'
      EventOpen.style.display = 'none'
      EventBox.style.display = 'none';
    }
  });
  
  ClosedEvent.addEventListener('click' , function() {
    PlayPageClose()
  
    EventClosed.style.display = 'block'
    EventOpen.style.display = 'none'
    EventBox.style.display = 'none'
  })
  
  EventOpen.addEventListener('mouseover' , function() {EventOverlay.style.display = 'block'})
  EventOpen.addEventListener('mouseleave', function() {EventOverlay.style.display = 'none'; });
  EventClosed.addEventListener('mouseover' , function() {EventOverlay.style.display = 'block'})
  EventClosed.addEventListener('mouseleave', function() {EventOverlay.style.display = 'none'; });
  