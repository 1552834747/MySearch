window.onload = ()=>{
	// window.parent.close(window.parent.user);
	console.log(window.parent.user)
}
start();
function start(){
	document.getElementById("body").onclick = ()=>{
		window.parent.close(window.parent.user);
	}
}