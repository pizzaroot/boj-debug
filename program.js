(function() {
	let url = 'https://coral-eminent-kindly.ngrok-free.app/';
	let req = new XMLHttpRequest();
	req.open("GET", url + window.location.toString().split('/')[4], false);
	req.send(null);
	if (req.status != 200) return;
	let len = 0;
	for (let i = 1; ; i++) {
		let samples = document.getElementById('sampleinput' + i);

		if (samples !== null) {
			len = i;
		} else {
			break;
		}
	}
	let nxt = len + 1;
	let samples = document.querySelector('#sampleinput' + len).parentElement.parentElement.parentElement;
	samples.outerHTML += '<div class="col-md-12"><div class="row"><div class="col-md-6"><section id="sampleinput' + nxt + '"><div class="headline"><h2>예제 입력 N <button type="button" class="btn btn-link copy-button" style="padding: 0px;" data-clipboard-target="#sample-input-' + nxt + '" onclick="fetch(\'' + url + '\' + window.location.toString().split(\'/\')[4], {\nmethod:\'POST\',\nbody: document.getElementById(\'stdin\').value,\nheaders: {}}).then((response) =>  response.text()).then((text) => {\ndocument.getElementById(\'sample-input-' + nxt +'\').innerHTML = document.getElementById(\'stdin\').value;\ndocument.getElementById(\'sample-output-' + nxt +'\').innerText = text;\n}); document.getElementById(\'copy\').outerHTML = \'<button type=\\\'button\\\' class=\\\'btn btn-link copy-button\\\' style=\\\'padding: 0px;\\\' data-clipboard-target=\\\'#sample-input-' + nxt + '\\\' id=\\\'copy\\\'>복사</button>\';" id="copy">실행</button></h2></div><pre class="sampledata" id="sample-input-' + nxt + '"><textarea id="stdin" width="100%" oninput="this.style.height = \'5px\';this.style.height = (this.scrollHeight) + \'px\';"></textarea></pre></section></div><div class="col-md-6"><section id="sampleoutput' + nxt + '"><div class="headline"><h2>예제 출력 N <button type="button" class="btn btn-link copy-button" style="padding: 0px;" data-clipboard-target="#sample-output-' + nxt + '">복사</button></h2></div><pre class="sampledata" id="sample-output-' + nxt + '"></pre></section></div></div></div>';
})();