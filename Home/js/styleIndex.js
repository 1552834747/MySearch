/* 
// js控制样式
// 引入脚本时使用defer标注
// 正常引入脚本时会诸塞后继html解析
// 标注defer时，脚本加载和html解析会同步进行，但脚本会等html解析完后运行
// 标注async时，脚本加载和html解析会同步进行，且脚本会马上执行
// 使用window.onload时，会在页面加载完后执行（包括图片加载，所以当图片加载越慢执行越慢） 
*/
defer()

function defer() {
	console.log("加载样式脚本");
	engine.onclick = openEngines;
	searchEngins.onblur = closeEngines;
	nav.onwheel = navWheel;
	more.onclick = ()=>{
		user.hidden = false;
		open(user);
	}
}
window.addEventListener("message",(e)=>{
	console.log(e.data);
})
// 打开搜索引擎列表
function openEngines(){
	open(searchEngins);
	engine.onclick = null;
	searchEngins.focus();
}
// 搜索引擎列表失去焦点
function closeEngines(){
	close(searchEngins);
	setTimeout(() => {
		engine.onclick = openEngines;
	}, 200)
}
// 打开窗口
function open(e){
	e.classList.remove("CloseY");
	e.classList.add("OpenY");
}
// 关闭窗口
function close(e){
	e.classList.remove("OpenY");
	e.classList.add("CloseY");
}
//导航栏滚动
function navWheel() {
	let step = 184;
	let direction = event.wheelDelta > 0 ? step : -1 * step;
	nav.scrollLeft = Math.trunc(nav.scrollLeft - direction);
}
