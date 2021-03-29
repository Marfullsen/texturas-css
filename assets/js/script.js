let patterns = ['black-linen.png', 'black-scales.png', 'black-thread-light.png', 'bo-play.png', 'buried.png', 'carbon-fibre-big.png', 'carbon-fibre-v2.png', 'classy-fabric.png', 'dark-wood.png', 'fake-luxury.png', 'foggy-birds.png', 'football-no-lines.png', 'gplay.png', 'green-fibers.png', 'green-gobbler.png', 'low-contrast-linen.png', 'moulin.png', 'nami.png', 'navy.png', 'otis-redding.png', 'outlets.png', 'pinstripe-light.png', 'random-grey-variations.png', 'real-carbon-fibre.png', 'rebel.png', 'retina-wood.png', 'shley-tree-1.png', 'skulls.png', 'soft-kill.png', 'straws.png', 'subtle-stripes.png', 'swirl.png', 'tasky.png', 'triangles.png', 'white-diamond.png'];
let currentPattern = [0, 0, 1];
let ruta = "/assets/img/patterns/";
const TOTAL_PATTERNS = patterns.length;

function nextPattern(recuadro) {
  if (currentPattern[recuadro] == TOTAL_PATTERNS) {
    currentPattern[recuadro] = 0;
  }
  let divAffected = document.getElementById("d" + (recuadro + 1));
  divAffected.style.backgroundImage =
    'url("' + ruta + patterns[currentPattern[recuadro] + 1] + '")';
  currentPattern[recuadro] += 1;
  divAffected.firstElementChild.innerHTML = "Sin patrón";
  if (patterns[currentPattern[recuadro]]) {
    divAffected.firstElementChild.innerHTML = patterns[
      currentPattern[recuadro]
    ].slice(0, -4);
  }
  //console.log("d" + (recuadro + 1));
  //console.log('url("' + ruta + patterns[currentPattern[recuadro] + 1] + '");');
}

function lastPattern(recuadro) {
  let divAffected = document.getElementById("d" + (recuadro + 1));
  if (currentPattern[recuadro] == -1) {
    currentPattern[recuadro] = 0;
  }
  divAffected.style.backgroundImage =
    'url("' + ruta + patterns[currentPattern[recuadro] - 1] + '")';
  currentPattern[recuadro] -= 1;
  divAffected.firstElementChild.innerHTML = "Sin patrón";
  if (patterns[currentPattern[recuadro]]) {
    divAffected.firstElementChild.innerHTML = patterns[
      currentPattern[recuadro]
    ].slice(0, -4);
  }
  //console.log(patterns[currentPattern[recuadro]]);
  //console.log("d" + (recuadro - 1));
  //console.log('url("' + ruta + patterns[currentPattern[recuadro] - 1] + '");');
}