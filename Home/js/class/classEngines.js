// 搜索引擎类
class Engine {
	constructor(engineName, action, parameterName, ico, value, valueType) {
		this.engineName = engineName;
		this.action = action;
		this.parameterName = parameterName;
		this.ico = ico;
		this.value = value;
		this.valueType = valueType;
	}
}

// 搜索引擎集合
let arrayEngines = new Array();
// 默认搜索引擎索引
let defaultEngine = 1;
// 设置搜索引擎集合
function setEngines(arrayengines) {
	this.arrayEngines = arrayEngines;
}
// 获取搜索引擎集合
function getEngines() {
	if (arrayEngines.length == 0) {
		arrayEngines.push(new Engine("百度", "https://www.baidu.com/s", "wd", "https://www.baidu.com/favicon.ico"));
		arrayEngines.push(new Engine("必应", "https://cn.bing.com/search", "q", "https://cn.bing.com/favicon.ico"));
		arrayEngines.push(new Engine("搜狗", "http://sogou.com/web", "query", "https://sogou.com/favicon.ico"));
		arrayEngines.push(new Engine("360", "https://www.so.com/s", "q", "https://www.so.com/favicon.ico"));
		arrayEngines.push(new Engine("淘宝", "https://s.taobao.com/search", "q",
			"https://img.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png"));
		arrayEngines.push(new Engine("哔哩哔哩", "https://search.bilibili.com/all", "keyword",
			"https://search.bilibili.com/favicon.ico"));
		arrayEngines.push(new Engine("AcFun", "https://www.acfun.cn/search", "keyword",
			"https://cdn.aixifan.com/ico/favicon.ico"));
		arrayEngines.push(new Engine("开发者搜索", "https://kaifa.baidu.com/searchPage", "wd",
			"https://kaifa.baidu.com/assets/favicon.ico"));
		arrayEngines.push(new Engine("指南网站", "https://zh.wikihow.com/wikiHowTo", "search",
			"https://zh.wikihow.com/favicon_round.ico"));
		arrayEngines.push(new Engine("音乐搜索器", "http://www.xmsj.org/", "name",
			"http://www.xmsj.org/favicon.ico", {
				"type": "netease"
			}));
		arrayEngines.push(new Engine("电影狗搜索", "https://dianyinggou.com/so/", null,
			"https://dianyinggou.com/favicon.ico", null, {
				type: "1",
				value: ""
			}));
		arrayEngines.push(new Engine("起点中文网", "https://www.qidian.com/so/", null,
			"https://qdfepccdn.qidian.com/www.qidian.com/favicon/qd_icon.ico", null, {
				type: "1",
				value: ".html"
			}));
		arrayEngines.push(new Engine("搜番", "https://fx.sefan.cc/s", "word", "https://fx.sefan.cc/favicon.ico"));
		arrayEngines.push(new Engine("BT联盟", "https://mv.btlm.pro/s", "word", "https://mv.btlm.pro/favicon.png"));
		arrayEngines.push(new Engine("磁力片", "https://p24.btapp.cc/so.php", "word",
			"https://p24.btapp.cc/static/img/favicon.png"));
	}
	return arrayEngines;
}

// export default arrayEngines;
export {
	setEngines,
	getEngines,
	defaultEngine
};
