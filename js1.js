var a = 0

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
