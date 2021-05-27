var a = 0
var b = 0

function change()
{ if(a==0){
	document.getElementById('player').play()
document.getElementById('play').src="pause.png"
a=1
}
  else if(a==1){
  	document.getElementById('player').pause()
document.getElementById('play').src="play.png"
a=0
  }
}

function shower()
{ if(b==0){
  document.getElementById('finalgif').style.visibility="visible";
  b=1;
}
else if(b==1){
	document.getElementById('finalgif').style.visibility="hidden";
	b=0
}
}
