//导航
class Nav {
	constructor(name, href, ico) {
		this.name = name;
		this.href = href;
		this.ico = ico;
	}
}
// 基础导航栏
let nav = new Array();

function setNavs(nav) {
	this.nav = nav;
}

function getNav() {
	if (nav.length == 0) {
		nav.push(new Nav("哔哩哔哩", "https://www.bilibili.com/", "https://www.bilibili.com/favicon.ico"));
		nav.push(new Nav("网易云音乐", "https://music.163.com/", "https://s1.music.126.net/style/favicon.ico?v20180823"));
		nav.push(new Nav("起点中文网", "https://www.qidian.com/",
			"https://qdfepccdn.qidian.com/www.qidian.com/favicon/qd_icon.ico"));
		nav.push(new Nav("菜鸟教程", "https://www.runoob.com/", "https://static.runoob.com/images/favicon.ico"));
		nav.push(new Nav("BT迅雷", "https://btxunlei.cc/", "https://btxunlei.cc/wp-content/themes/webstackpro/images/favicon.png"));
		nav.push(new Nav("AcFun", "https://www.acfun.cn/", "https://cdn.aixifan.com/ico/favicon.ico"));
	} else {

	}
	return nav;
}

export {
	getNav
};
