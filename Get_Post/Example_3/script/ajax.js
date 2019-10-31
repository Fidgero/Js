//XMLHttpRequest
function ajax(url, method, functionName, dataArray) {
	let xhttp = new XMLHttpRequest();
	xhttp.open(method, url, true);
	xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhttp.send(dataArray);

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			functionName(this.response);
		}
	}
}
function requestData(dataArr) {
	let out = '';
	for (let key in dataArr) {
		out += `${key}=${dataArr[key]}&`;
	}
	console.log(out);
	return out;
}