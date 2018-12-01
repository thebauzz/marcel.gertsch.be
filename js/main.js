// bei jedem scrollen, soll die Funktion schonGescrollt aufgeruft werden
window.onscroll = schonGescrollt;

function schonGescrollt() {
  var scrollposition = window.pageYOffset;
  var sticky = document.getElementById("stickynav");

// Bereits 300px gescrollt?
// Ja = .nav-fixed wird geadded, Nein = .nav-fixed wird entfernt
  if (scrollposition >= 300) {
    sticky.classList.add("nav-fixed");
  }
  else {
    sticky.classList.remove("nav-fixed");
  }
}

// Navigation kommt rein und raus
function navReinRaus() {
// mach das Hamburgermenu zum X und zurück
  document.getElementById("menu").classList.toggle("menudrehen");
  document.getElementById("linie1").classList.toggle("gedreht1");
  document.getElementById("linie2").classList.toggle("gedreht2");
  document.getElementById("linie3").classList.toggle("gedreht3");

// Navigation kommt rein oder raus
  var nav = document.getElementById("nav-menu-nav");
  nav.classList.toggle("nav-rein");

// wurde Dropdown geöffnet, wird es geschlossen wenn die Navigation weg geht
  var dropdown = document.getElementById("nav-dropdown");
  if (dropdown.classList.contains("dropdown-rein")) {
    dropdown.classList.remove("dropdown-rein");
  }

// unsichbarer Container wird hinzugefügt
  var empty = document.getElementById("leerecontainer");
  empty.classList.toggle("unsichtbar");

  var ddicon = document.getElementById("dropdownicon");
  ddicon.classList.remove("drehen");

}

// Dropdownmenu entweder geöffnet oder geschlossen
function dropdownToggle() {
  var ddicon = document.getElementById("dropdownicon");
  var zeigen = document.getElementById("nav-dropdown");

  ddicon.classList.toggle("drehen");
  zeigen.classList.toggle("dropdown-rein")

}

// Funktion wird ausgelöst, die Nav geschlossen werden soll.
function wegMitAllem() {
  var ddicon = document.getElementById("dropdownicon");
  ddicon.classList.remove("drehen");

// wurde nav ausgelöst? dann wird dieses if getriggered
  var nav = document.getElementById("nav-menu-nav");
  if (nav.classList.contains("nav-rein")) {
    navReinRaus();
  }
}
