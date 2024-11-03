import {
	getEngines,
	defaultEngine
} from "./class/classEngines.js";
import {
	getNav
} from "./class/classNav.js";

// 记录当前搜索引擎在数组中的索引
var engineIndex = 0;
start();

function start() {
	// 绑定事件
	searchForm.onsubmit = formSubmit;
	searchInput.onkeydown = switchEngine;
}

loadEngines();
//加载搜索引擎列表
function loadEngines() {
	console.log("加载搜索引擎列表");
	let array = getEngines();
	for (let term of array) {
		let engineName = term.engineName;
		//创建元素
		let div = document.createElement("div");
		let img = document.createElement("img");
		let span = document.createElement("span");
		//设置参数
		div.classList.add("TNav");
		img.src = term.ico;
		img.alt = engineName;
		span.textContent = engineName;
		if (engineName.length > 5) {
			div.title = engineName;
		}
		// 绑定事件
		let index = array.indexOf(term);
		div.onclick = () => {
			setEngine(index);
		}
		//	设置默认搜索引擎
		if (index == defaultEngine) {
			setEngine(index);
			engineIndex = defaultEngine;
		}
		// 设置继承
		div.appendChild(img);
		div.appendChild(span);
		document.getElementById("engines").appendChild(div);
	}
}
// 设置搜索引擎
function setEngine(index) {
	engineIndex = index;
	let term = getEngines()[index];
	document.getElementById("searchForm").action = term.action;
	document.getElementById("searchInput").name = term.parameterName;
	let engineImg = document.getElementById("engine").firstElementChild;
	engineImg.src = term.ico;
	engineImg.alt = term.engineName.substring(0, 1);
}
// 切换搜索引擎
var mTime;
function switchEngine() {
	if (event.keyCode == 9) {
		clearTimeout(mTime);
		engineIndex = engineIndex + 1 >= getEngines().length ? 0 : engineIndex + 1;
		setEngine(engineIndex);
		engineAlt.hidden = true;
		engineAlt.innerHTML = getEngines()[engineIndex].engineName;
		engineAlt.hidden = false;
		mTime = setTimeout(() => {
			engineAlt.hidden = true;
		}, 1000);
		return false;
	}
}
var searchValueClassName = "searchValue";
// 处理表单提交
function formSubmit() {
	let engines = getEngines()[engineIndex];
	// 处理隐藏参数
	let array = document.getElementsByClassName(searchValueClassName);
	while (array.length > 0) {
		array[0].remove();
	}
	let value = engines.value;
	if (value != null) {
		for (let key of Object.keys(value)) {
			console.log(key);
			console.log(value[key]);
			let input = document.createElement("input");
			input.className = searchValueClassName;
			input.hidden = true;
			input.name = key;
			input.value = value[key];
			searchForm.appendChild(input);
		}
	}
	// 处理特殊参数
	if (engines.valueType != null) {
		switch (engines.valueType.type) {
			case "1":
				// 直接衔接参数而非键值对参数
				searchForm.action += searchInput.value + engines.valueType.value;
				break;
		}
	}
}

loadNav();
// 加载导航栏
function loadNav() {
	for (let term of getNav()) {
		//创建对象
		let a = document.createElement("a");
		let div = document.createElement("div");
		let img = document.createElement("img");
		let span = document.createElement("span");
		//设置内容
		a.href = term.href;
		a.target = "_blank";
		div.className = "TNav";
		img.src = term.ico;
		img.alt = term.name.substring(0, 1);
		span.textContent = term.name;
		//设置层级
		div.appendChild(img);
		div.appendChild(span);
		a.appendChild(div);
		nav.appendChild(a);
	}
}
