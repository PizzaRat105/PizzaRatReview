document.addEventListener("DOMContentLoaded", function() {
  var abmcbtElements = document.querySelectorAll("[id^='abomcbt']");
  var combatabomElements = document.querySelectorAll("[id^='combatabom']");

  for (var i = 0; i < abmcbtElements.length; i++) {
    attachHoverListener(abmcbtElements[i], combatabomElements[i]);
  }
});

function attachHoverListener(abmcbt, combatabom) {
  abmcbt.addEventListener("mouseenter", function() {
    combatabom.style.display = "block";
  });

  abmcbt.addEventListener("mouseleave", function() {
    combatabom.style.display = "none";
  });
}


document.addEventListener("DOMContentLoaded", function() {
  var sharedCampElements = document.querySelectorAll("[id^='sharedcamp']");
  var genericAmpElements = document.querySelectorAll("[id^='genericamp']");

  for (var i = 0; i < sharedCampElements.length; i++) {
    attachHoverListener(sharedCampElements[i], genericAmpElements[i]);
  }
});

function attachHoverListener(sharedCamp, genericAmp) {
  sharedCamp.addEventListener("mouseenter", function() {
    genericAmp.style.display = "block";
  });

  sharedCamp.addEventListener("mouseleave", function() {
    genericAmp.style.display = "none";
  });
}
// Get all the sharedcamp elements

document.addEventListener("DOMContentLoaded", function() {
  var abomcampElements = document.querySelectorAll("[id^='abomcamp']");
  var restabomElements = document.querySelectorAll("[id^='restabom']");

  for (var i = 0; i < abomcampElements.length; i++) {
    attachHoverListener(abomcampElements[i], restabomElements[i]);
  }
});

function attachHoverListener(abomcamp, restabom) {
  abomcamp.addEventListener("mouseenter", function() {
    restabom.style.display = "block";
  });

  abomcamp.addEventListener("mouseleave", function() {
    restabom.style.display = "none";
  });
}