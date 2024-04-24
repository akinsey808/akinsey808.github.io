var activePage = 'grades';
document.getElementById(activePage).classList.add('active-page');
document.getElementById(activePage).classList.add('fade-in');

function buttonClick(page) {
 var activePageElement = document.getElementById(activePage);
 if (activePageElement) {
   activePageElement.classList.remove('active-page');
   activePageElement.classList.remove('fade-in');   
   activePageElement.classList.add('fade-out');   
 }   
 activePage = page;
 document.getElementById(activePage).classList.add('active-page');
 document.getElementById(activePage).classList.add('fade-in');
 document.getElementById(activePage).classList.remove('fade-out');
}

/*
var p1 = document.getElementById('p1');
var   rectObject = p1.getBoundingClientRect();
console.log (rectObject);
console.log(window.innerWidth, window.innerHeight);
console.log(rectObject.left / window.innerWidth, rectObject.top / window.innerHeight);

var newTop = Math.random() - 0.5;
if (newTop < 0) {
  newTop = 0;
}
//if (newTop > window.)
p1.style.top = (Math.random() - 0.5) + 'vw';
console.log(p1.style.top);
*/

function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

var bt = document.querySelectorAll('#grades-button')[0];
initBt2(bt);
var bt2 = document.querySelectorAll('#skills-button')[0];
initBt2(bt2);
var bt3 = document.querySelectorAll('#advice-button')[0];
initBt2(bt3);
var bt4 = document.querySelectorAll('#service-button')[0];
initBt2(bt4);

// Button 2
function initBt2(bt) {
  var particleCount = 12;
  var colors = ['#DE8AA0', '#8AAEDE', '#FFB300', '#60C7DA']

  bt.addEventListener('click', function() {
    var particles = [];
    var tl = new TimelineLite();
    
    tl.to(bt.querySelectorAll('.button__bg'), 0.6, { scaleX: 1.05 });
    tl.to(bt.querySelectorAll('.button__bg'), 0.9, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 0.6);

    for (var i = 0; i < particleCount; i++) {
      particles.push(document.createElement('span'));
      bt.appendChild(particles[i]);

      particles[i].classList.add(i % 2 ? 'left' : 'right');
      
      var dir = i % 2 ? '-' : '+';
      var r = i % 2 ? getRandom(-1, 1)*i/2 : getRandom(-1, 1)*i;
      var size = i < 2 ? 1 : getRandom(0.4, 0.8);
      var tl = new TimelineLite({ onComplete: function(i) {
        particles[i].parentNode.removeChild(particles[i]);
        this.kill();
      }, onCompleteParams: [i] });

      tl.set(particles[i], { scale: size });
      tl.to(particles[i], 0.6, { x: dir + 20, scaleX: 3, ease: SlowMo.ease.config(0.1, 0.7, false) });
      tl.to(particles[i], 0.1, { scale: size, x: dir +'=25' }, '-=0.1');
      if(i >= 2) tl.set(particles[i], { backgroundColor: colors[Math.round(getRandom(0, 3))] });
      tl.to(particles[i], 0.6, { x: dir + getRandom(60, 100), y: r*10, scale: 0.1, ease: Power3.easeOut });
      tl.to(particles[i], 0.2, { opacity: 0, ease: Power3.easeOut }, '-=0.2');
    }
  });
}
