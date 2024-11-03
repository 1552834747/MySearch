import {
	getEngines,
	index
} from "./class/classEngines.js";
import {
	getNavs
} from "./class/classNavs.js";
var isLogin = false;
loadEngines();
//加载搜索引擎列表
function loadEngines() {
	console.log("index");
	let array = getEngines();
	for (let term of array) {
		let engineName = term.engineName;
		//创建元素
		let div = document.createElement("div");
		let img = document.createElement("img");
		let span = document.createElement("span");
		//设置参数
		img.src = term.ico;
		img.alt = engineName;
		span.textContent = engineName;
		if (engineName.length > 5) {
			div.title = engineName;
		}
		// 绑定事件
		div.addEventListener("click", () => {
			formSearch.action = term.action;
			inputSearch.name = term.parameterName;
			engine.firstElementChild.src = img.src;
			engine.firstElementChild.alt = engineName.substring(0, 1);
		})
		//	设置默认搜索引擎
		if (array.indexOf(term) == index) {
			div.click();
		}
		// 设置继承
		div.appendChild(img);
		div.appendChild(span);
		engines.appendChild(div);
	}

}
loadNavs();
// 加载导航栏
function loadNavs() {
	let nav = document.createElement("nav");
	nav.id = "nav";
	nav.className = "WithinBg IconTable1";
	divNav.appendChild(nav);
	for (let term of getNavs()) {
		//创建对象
		let a = document.createElement("a");
		let div = document.createElement("div");
		let img = document.createElement("img");
		let span = document.createElement("span");
		//设置内容
		a.href = term.href;
		a.target = "_blank";
		img.src = term.ico;
		img.alt = term.name.substring(0,1);
		span.textContent = term.name;
		//这是层级
		div.appendChild(img);
		div.appendChild(span);
		a.appendChild(div);
		nav.appendChild(a);
	}
}
