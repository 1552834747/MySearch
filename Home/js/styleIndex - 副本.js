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
	console.log("styleIndex");
	// 搜索引擎按钮绑定点击事件
	engine.onclick = openEngines;
	// 搜索引擎列表绑定失去焦点事件
	bEngines.onblur = ()=>{
		close(bEngines);
		setTimeout(() => {
			engine.onclick = openEngines;
		}, 200)
	};
	// 导航栏绑定滚轮事件
	nav.onwheel = navWheel;
	// 更多按钮绑定点击事件
	up.onclick = ()=>{
		open(pMore);
	};
	// 更多窗口绑定点击事件
	pMore.onclick = ()=>{
		close(pMore);
	};
}
// 打开窗口
function open(e){
	e.classList.remove("Close");
	e.classList.add("Open");
}
// 关闭窗口
function close(e){
	e.classList.remove("Open");
	e.classList.add("Close");
}
// 打开搜索引擎列表
function openEngines(){
	open(bEngines);
	engine.onclick = null;
	bEngines.focus();
}
//导航栏滚动
function navWheel() {
	let step = 160;
	let direction = event.wheelDelta > 0 ? step : -1 * step;
	nav.scrollLeft = Math.trunc(nav.scrollLeft - direction);
}
