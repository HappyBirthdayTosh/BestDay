function change1()
{ document.getElementById('player').play()
	document.getElementById('pause').style.visibility="visible";
               document.getElementById('play').style.visibility="hidden";
}

function change2()
{ document.getElementById('player').pause()
	document.getElementById('pause').style.visibility="hidden";
               document.getElementById('play').style.visibility="visible";
}