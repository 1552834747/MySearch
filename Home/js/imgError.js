getImgs();
//获取图片元素绑定事件
function getImgs() {
	console.log("处理图片加载失败");
	for (let img of document.getElementsByTagName("img")) {
		let width = parseFloat(window.getComputedStyle(img).width);
		let height = parseFloat(window.getComputedStyle(img).height);
		img.addEventListener("error", () => {
			solve(img, width, height);
		})
	}
}
// 处理图片失效问题
function solve(img, width, height) {
	let canvas = document.createElement("canvas");
	// 设置画布宽高
	canvas.width = width;
	canvas.height = height;
	let context = canvas.getContext("2d");
	// 设置颜色，填充矩形
	context.strokeStyle = "red";
	
	/* 
	// 起始一条路径
	context.beginPath();
	// 定义一个无填充圆角矩形
	// 参数：左上角x坐标，左上角y坐标，右下角x坐标，右下角y坐标，圆角
	context.roundRect(0, 0, width, height, 5);
	// 绘制定义好的路径
	context.stroke(); */
	
	
	// 设置字体样式，填充字体
	context.font = "bold " + height * 0.8 + "px 微软雅黑";
	context.fillStyle = "white";
	context.textAlign = "center";
	context.fillText(img.alt.substring(0, 1), width / 2 - 0.5, height * 0.8);
	// 生成图片，设置圆角
	img.src = canvas.toDataURL("jpeg");
}
