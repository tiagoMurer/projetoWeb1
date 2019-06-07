var slideroutput = Document.getElementById("slider-output");
var sliderinput = Document.getElementById("formControlRange");
slideroutput.innerHTML.textContent = String(sliderinput.value);


function onRangeChange(r,f) {
    var n,c,m;
    r.addEventListener("input",function(e){n=1;c=e.target.value;if(c!=m)f(e);m=c;});
    r.addEventListener("change",function(e){if(!n)f(e);});
  }

  