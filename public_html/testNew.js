var n = 0;
var otazky = new Array();
var odpovezene = new Array();
var spatneOtazky = new Array();

var spravne = 0;
var spatne = 0;

var otazka;

var numberOfAnswers = 0;

var x = 0;

function start() {
	zalozOtazky();
	document.getElementById('start').remove();

	document.getElementById('otazka').style.visibility = 'visible';
	//document.getElementById('odpoved').style.visibility = 'visible';
	document.getElementById('check').style.visibility = 'visible';
	document.getElementById('otazkaCislo').style.visibility = 'visible';

	nactiOtazku();
}

function nactiOtazku() {
	if (otazky.length <= n) {
		document.getElementById("form").style.visibility = 'hidden';
		document.getElementById("otazkaCislo").style.visibility = 'hidden';
		document.getElementById("dalsi").style.visibility = "hidden";

		document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' +
			'<p>Špatných odpovědí: ' + spatne + '</p>' +
			'<button id="spatneOtazky" type="button" onclick=nactiSpatne()>Znovu špatné otázky</button>';
		return;
	}

	while (true) {
		x = Math.floor((Math.random() * otazky.length));

		if (odpovezene.indexOf(x.toString()) == -1) {
			odpovezene.push(x.toString());
			break;
		} else {
			continue;
		}
	}

	var used = new Array();
	var rand;
	var numOfQuestion = 0;

	document.getElementById('otazkaCislo').innerHTML = "Otázka " + (n + 1) + " z " + (otazky.length);
	document.getElementById("check").style.visibility = 'hidden';
	document.getElementById("dalsi").style.visibility = 'hidden';
	otazka = otazky[x];
	//document.getElementById('otazka').innerHTML = '<div id="form">' + otazka.otazka + '<br>';

	if (otazka.typ == "psaci")
		numberOfAnswers = 1;
	else if (!otazka.d)
		numberOfAnswers = 3;
	else if (!otazka.e)
		numberOfAnswers = 4;
	else if (!otazka.f)
		numberOfAnswers = 5;
	else if (!otazka.g)
		numberOfAnswers = 6;
	else if (!otazka.h)
		numberOfAnswers = 7;
	else if (!otazka.i)
		numberOfAnswers = 8;
	else if (!otazka.j)
		numberOfAnswers = 9;
	else
		numberOfAnswers = 10;

	var str2;
	str2 = '<div id="form">' + otazka.otazka + '<br>';
	do {
		while (true) {
			rand = Math.floor((Math.random() * numberOfAnswers));
			if (used.indexOf(rand) >= 0)
				;
			else
				break;
		}

		used.push(rand);

		if (otazka.typ == "vybiraci") {
			switch (rand) {
				case 0:
					str2 += '<br><input id="a" type="radio" name="a" value="a">' + '<label for="a" id="aa"> ' + otazka.a + '</label>';
					break;
				case 1:
					str2 += '<br><input id="b" type="radio" name="a" value="a">' + '<label for="b" id="bb"> ' + otazka.b + '</label>';
					break
				case 2:
					str2 += '<br><input id="c" type="radio" name="a" value="a">' + '<label for="c" id="cc"> ' + otazka.c + '</label>';
					break;
				case 3:
					str2 += '<br><input id="d" type="radio" name="a" value="a">' + '<label for="d" id="dd"> ' + otazka.d + '</label>';
					break;
				case 4:
					str2 += '<br><input id="e" type="radio" name="a" value="a">' + '<label for="e" id="ee"> ' + otazka.e + '</label>';
					break;
				case 5:
					str2 += '<br><input id="f" type="radio" name="a" value="a">' + '<label for="f" id="ff"> ' + otazka.f + '</label>';
					break;
				case 6:
					str2 += '<br><input id="g" type="radio" name="a" value="a">' + '<label for="g" id="gg"> ' + otazka.g + '</label>';
					break;
				case 7:
					str2 += '<br><input id="h" type="radio" name="a" value="a">' + '<label for="h" id="hh"> ' + otazka.h + '</label>';
					break;
				case 8:
					str2 += '<br><input id="i" type="radio" name="a" value="a">' + '<label for="i" id="ii"> ' + otazka.i + '</label>';
					break;
				case 9:
					str2 += '<br><input id="j" type="radio" name="a" value="a">' + '<label for="j" id="jj"> ' + otazka.j + '</label>';
					break;
			}
		} else if (otazka.typ == "psaci") {
			str2 += '<br><input id="a" type="text" size="60" name="a" value="" onkeypress="isEnter()">';
		} else {
			switch (rand) {
				case 0:
					str2 += '<br><input id="a" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<label for="a" id="aa"> ' + otazka.a + '</label>';
					break;
				case 1:
					str2 += '<br><input id="b" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<label for="b" id="bb"> ' + otazka.b + '</label>';
					break
				case 2:
					str2 += '<br><input id="c" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<label for="c" id="cc"> ' + otazka.c + '</label>';
					break;
				case 3:
					str2 += '<br><input id="d" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<label for="d" id="dd"> ' + otazka.d + '</label>';
					break;
				case 4:
					str2 += '<br><input id="e" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<label for="e" id="ee"> ' + otazka.e + '</label>';
					break;
				case 5:
					str2 += '<br><input id="f" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<label for="f" id="ff"> ' + otazka.f + '</label>';
					break;
				case 6:
					str2 += '<br><input id="g" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<label for="g" id="gg"> ' + otazka.g + '</label>';
					break;
				case 7:
					str2 += '<br><input id="h" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<label for="h" id="hh"> ' + otazka.h + '</label>';
					break;
				case 8:
					str2 += '<br><input id="i" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<label for="i" id="ii"> ' + otazka.i + '</label>';
					break;
				case 9:
					str2 += '<br><input id="j" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<label for="j" id="jj"> ' + otazka.j + '</label>';
					break;
			}
		}
		numOfQuestion++;

	} while (used.length != numberOfAnswers)

	str2 += '<br><br><input id="end" type="button" value="Odpovědět" onclick=check()>' + '</div>';
	document.getElementById('otazka').innerHTML = str2;

	if (otazka.typ == "psaci")
		document.getElementById("a").focus();

	/*
	 document.getElementById('otazka').innerHTML = '<div id="form">' + otazka.otazka + '<br>' + 
	 '<br><input id="a" type="radio" name="a" value="a">' + '<span id="aa"> ' + otazka.a + '</span>' +
	 '<br><input id="b" type="radio" name="a" value="a">' + '<span id="bb"> ' + otazka.b + '</span>' +
	 '<br><input id="c" type="radio" name="a" value="a">' + '<span id="cc"> ' + otazka.c + '</span>' +
	 '<br><input id="d" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.d + '</span>' + '<br>' +
	 '<br><input id="end" type="button" value="Odpovědět" onclick=check()>' +
	 '</div>';*/
}

function nactiSpatne() {
	document.getElementById("form").style.visibility = 'visible';
	document.getElementById("otazkaCislo").style.visibility = 'visible';
	document.getElementById("dalsi").style.visibility = 'visible';
	document.getElementById('otazka').style.visibility = 'visible';
	document.getElementById('check').style.visibility = 'visible';

	otazky = [];
	otazky = spatneOtazky;
	spatneOtazky = [];
	n = 0;
	x = 0;
	spravne = 0;
	spatne = 0;
	odpovezene = [];
	nactiOtazku();
}

function isEnter(e) {
	if ((event.which == 13 || event.keyCode == 13)) {
		if (document.getElementById("end").value == 'Další') {
			nactiOtazku();
		} else {
			check();
		}
	}
}

function check() {
	if (otazka.typ == "vybiraci")
		checkVybiraci();
	else if (otazka.typ == "psaci")
		checkPsaci();
	else
		checkZaskrtavaci();
}

function checkPsaci() {
	var ok = true;
	document.getElementById("check").style.visibility = 'visible';

	if (document.getElementById("a").value.toString().toLowerCase() == otazka.odpoved.toString().toLowerCase()) {
		document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
		spravne++;
	} else {
		document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
			'Správná odpověď je: ' + otazka.odpoved;
		spatne++;
		spatneOtazky.push(otazka);
	}

	if (otazky.length > n) {
		odpovezene.push(x);
		n++;
	}

	document.getElementById("end").value = "Další";
	document.getElementById("end").onclick = nactiOtazku;

}

function checkZaskrtavaci() {
	var ok = true;
	//document.getElementById("check").innerHTML = document.getElementById("id1").value;
	document.getElementById("check").style.visibility = 'visible';
	if (otazka.odpoved.indexOf("a") > -1) {
		if (document.getElementById("a").checked == true) {
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("a").checked == true) {
			document.getElementById("aa").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (otazka.odpoved.indexOf("b") > -1) {
		if (document.getElementById("b").checked == true) {
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("b").checked == true) {
			document.getElementById("bb").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (otazka.odpoved.indexOf("c") > -1) {
		if (document.getElementById("c").checked == true) {
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("c").checked == true) {
			document.getElementById("cc").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (numberOfAnswers > 3 && otazka.odpoved.indexOf("d") > -1) {
		if (document.getElementById("d").checked == true) {
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("d").checked == true) {
			document.getElementById("dd").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (numberOfAnswers > 4 && otazka.odpoved.indexOf("e") > -1) {
		if (document.getElementById("e").checked == true) {
			document.getElementById("ee").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("ee").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (numberOfAnswers > 4 && document.getElementById("e").checked == true) {
			document.getElementById("ee").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (numberOfAnswers > 5 && otazka.odpoved.indexOf("f") > -1) {
		if (document.getElementById("f").checked == true) {
			document.getElementById("ff").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("ff").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (numberOfAnswers > 5 && document.getElementById("f").checked == true) {
			document.getElementById("ff").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (numberOfAnswers > 6 && otazka.odpoved.indexOf("g") > -1) {
		if (document.getElementById("g").checked == true) {
			document.getElementById("gg").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("gg").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (numberOfAnswers > 6 && document.getElementById("g").checked == true) {
			document.getElementById("gg").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (numberOfAnswers > 7 && otazka.odpoved.indexOf("h") > -1) {
		if (document.getElementById("h").checked == true) {
			document.getElementById("hh").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("hh").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (numberOfAnswers > 7 && document.getElementById("h").checked == true) {
			document.getElementById("hh").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (numberOfAnswers > 8 && otazka.odpoved.indexOf("i") > -1) {
		if (document.getElementById("i").checked == true) {
			document.getElementById("ii").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("ii").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (numberOfAnswers > 8 && document.getElementById("i").checked == true) {
			document.getElementById("ii").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (numberOfAnswers > 9 && otazka.odpoved.indexOf("j") > -1) {
		if (document.getElementById("j").checked == true) {
			document.getElementById("jj").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("jj").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (numberOfAnswers > 9 && document.getElementById("j").checked == true) {
			document.getElementById("jj").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}

	if (document.getElementById("a").checked == false &&
		document.getElementById("b").checked == false &&
		document.getElementById("c").checked == false &&
		((numberOfAnswers > 3 && document.getElementById("d").checked == false) || numberOfAnswers < 4) &&
		((numberOfAnswers > 4 && document.getElementById("e").checked == false) || numberOfAnswers < 5) &&
		((numberOfAnswers > 5 && document.getElementById("f").checked == false) || numberOfAnswers < 6) &&
		((numberOfAnswers > 6 && document.getElementById("g").checked == false) || numberOfAnswers < 7) &&
		((numberOfAnswers > 7 && document.getElementById("h").checked == false) || numberOfAnswers < 8) &&
		((numberOfAnswers > 8 && document.getElementById("i").checked == false) || numberOfAnswers < 9) &&
		((numberOfAnswers > 9 && document.getElementById("j").checked == false) || numberOfAnswers < 10)) {
		if (otazka.odpoved.indexOf("b") > -1)
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("c") > -1)
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
		if (numberOfAnswers > 3 && otazka.odpoved.indexOf("d") > -1)
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("a") > -1)
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
		if (numberOfAnswers > 4 && otazka.odpoved.indexOf("e") > -1)
			document.getElementById("ee").style.backgroundColor = 'LightGreen';
		if (numberOfAnswers > 5 && otazka.odpoved.indexOf("f") > -1)
			document.getElementById("ff").style.backgroundColor = 'LightGreen';
		if (numberOfAnswers > 6 && otazka.odpoved.indexOf("g") > -1)
			document.getElementById("gg").style.backgroundColor = 'LightGreen';
		if (numberOfAnswers > 7 && otazka.odpoved.indexOf("h") > -1)
			document.getElementById("hh").style.backgroundColor = 'LightGreen';
		if (numberOfAnswers > 8 && otazka.odpoved.indexOf("i") > -1)
			document.getElementById("ii").style.backgroundColor = 'LightGreen';
		if (numberOfAnswers > 9 && otazka.odpoved.indexOf("j") > -1)
			document.getElementById("jj").style.backgroundColor = 'LightGreen';
		ok = false;
	}

	if (!ok) {
		var odpovedSpravna;
		odpovedSpravna = '<p style="color:red">Špatně!</p>' + 'Správná odpověď je: ';
		var pismenoSpravne = new Array();
		if (otazka.odpoved.indexOf("a") > -1)
			pismenoSpravne.push(document.getElementById("a").value);
		if (otazka.odpoved.indexOf("b") > -1)
			pismenoSpravne.push(document.getElementById("b").value);
		if (otazka.odpoved.indexOf("c") > -1)
			pismenoSpravne.push(document.getElementById("c").value);
		if (numberOfAnswers > 3 && otazka.odpoved.indexOf("d") > -1)
			pismenoSpravne.push(document.getElementById("d").value);
		if (numberOfAnswers > 4 && otazka.odpoved.indexOf("e") > -1)
			pismenoSpravne.push(document.getElementById("e").value);
		if (numberOfAnswers > 5 && otazka.odpoved.indexOf("f") > -1)
			pismenoSpravne.push(document.getElementById("f").value);
		if (numberOfAnswers > 6 && otazka.odpoved.indexOf("g") > -1)
			pismenoSpravne.push(document.getElementById("g").value);
		if (numberOfAnswers > 7 && otazka.odpoved.indexOf("h") > -1)
			pismenoSpravne.push(document.getElementById("h").value);
		if (numberOfAnswers > 8 && otazka.odpoved.indexOf("i") > -1)
			pismenoSpravne.push(document.getElementById("i").value);
		if (numberOfAnswers > 9 && otazka.odpoved.indexOf("j") > -1)
			pismenoSpravne.push(document.getElementById("j").value);
		pismenoSpravne.sort();

		document.getElementById("check").innerHTML = odpovedSpravna + pismenoSpravne.toString();
		spatne++;
		spatneOtazky.push(otazka);
	} else {
		document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
		spravne++;
	}

	if (otazky.length > n) {
		odpovezene.push(x);
		n++;

		//document.getElementById("end").style.visibility = 'hidden';
		//document.getElementById("dalsi").style.visibility = 'visible';
	}

	document.getElementById("end").value = "Další";
	document.getElementById("end").onclick = nactiOtazku;

	/*else{
	 document.getElementById("form").remove();
	 document.getElementById("otazkaCislo").remove();;
	 document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' + 
	 '<p>Špatných odpovědí: ' + spatne + '</p>'
	 }*/
}


function checkVybiraci() {
	//document.getElementById("check").innerHTML = document.getElementById("id1").value;
	document.getElementById("check").style.visibility = 'visible';
	if (document.getElementById("a").checked == true) {
		if (otazka.a == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("aa").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved && numberOfAnswers > 3)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';
			else if (otazka.e == otazka.odpoved && numberOfAnswers > 4)
				document.getElementById("ee").style.backgroundColor = 'LightGreen';
			else if (otazka.f == otazka.odpoved && numberOfAnswers > 5)
				document.getElementById("ff").style.backgroundColor = 'LightGreen';
			else if (otazka.g == otazka.odpoved && numberOfAnswers > 6)
				document.getElementById("gg").style.backgroundColor = 'LightGreen';
			else if (otazka.h == otazka.odpoved && numberOfAnswers > 7)
				document.getElementById("hh").style.backgroundColor = 'LightGreen';
			else if (otazka.i == otazka.odpoved && numberOfAnswers > 8)
				document.getElementById("ii").style.backgroundColor = 'LightGreen';
			else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("jj").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (document.getElementById("b").checked == true) {
		if (otazka.b == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("bb").style.backgroundColor = 'LightCoral';
			if (otazka.a == otazka.odpoved)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved && numberOfAnswers > 3)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';
			else if (otazka.e == otazka.odpoved && numberOfAnswers > 4)
				document.getElementById("ee").style.backgroundColor = 'LightGreen';
			else if (otazka.f == otazka.odpoved && numberOfAnswers > 5)
				document.getElementById("ff").style.backgroundColor = 'LightGreen';
			else if (otazka.g == otazka.odpoved && numberOfAnswers > 6)
				document.getElementById("gg").style.backgroundColor = 'LightGreen';
			else if (otazka.h == otazka.odpoved && numberOfAnswers > 7)
				document.getElementById("hh").style.backgroundColor = 'LightGreen';
			else if (otazka.i == otazka.odpoved && numberOfAnswers > 8)
				document.getElementById("ii").style.backgroundColor = 'LightGreen';
			else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("jj").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (document.getElementById("c").checked == true) {
		if (otazka.c == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("cc").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.a == otazka.odpoved)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved && numberOfAnswers > 3)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';
			else if (otazka.e == otazka.odpoved && numberOfAnswers > 4)
				document.getElementById("ee").style.backgroundColor = 'LightGreen';
			else if (otazka.f == otazka.odpoved && numberOfAnswers > 5)
				document.getElementById("ff").style.backgroundColor = 'LightGreen';
			else if (otazka.g == otazka.odpoved && numberOfAnswers > 6)
				document.getElementById("gg").style.backgroundColor = 'LightGreen';
			else if (otazka.h == otazka.odpoved && numberOfAnswers > 7)
				document.getElementById("hh").style.backgroundColor = 'LightGreen';
			else if (otazka.i == otazka.odpoved && numberOfAnswers > 8)
				document.getElementById("ii").style.backgroundColor = 'LightGreen';
			else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("jj").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (numberOfAnswers > 3 && document.getElementById("d").checked == true) {
		if (otazka.d == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("dd").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.a == otazka.odpoved)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.e == otazka.odpoved && numberOfAnswers > 4)
				document.getElementById("ee").style.backgroundColor = 'LightGreen';
			else if (otazka.f == otazka.odpoved && numberOfAnswers > 5)
				document.getElementById("ff").style.backgroundColor = 'LightGreen';
			else if (otazka.g == otazka.odpoved && numberOfAnswers > 6)
				document.getElementById("gg").style.backgroundColor = 'LightGreen';
			else if (otazka.h == otazka.odpoved && numberOfAnswers > 7)
				document.getElementById("hh").style.backgroundColor = 'LightGreen';
			else if (otazka.i == otazka.odpoved && numberOfAnswers > 8)
				document.getElementById("ii").style.backgroundColor = 'LightGreen';
			else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("jj").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (numberOfAnswers > 4 && document.getElementById("e").checked == true) {
		if (otazka.e == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("ee").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.a == otazka.odpoved && numberOfAnswers > 3)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved && numberOfAnswers > 4)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';
			else if (otazka.f == otazka.odpoved && numberOfAnswers > 5)
				document.getElementById("ff").style.backgroundColor = 'LightGreen';
			else if (otazka.g == otazka.odpoved && numberOfAnswers > 6)
				document.getElementById("gg").style.backgroundColor = 'LightGreen';
			else if (otazka.h == otazka.odpoved && numberOfAnswers > 7)
				document.getElementById("hh").style.backgroundColor = 'LightGreen';
			else if (otazka.i == otazka.odpoved && numberOfAnswers > 8)
				document.getElementById("ii").style.backgroundColor = 'LightGreen';
			else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("jj").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (numberOfAnswers > 5 && document.getElementById("f").checked == true) {
		if (otazka.f == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("ff").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.a == otazka.odpoved && numberOfAnswers > 3)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.e == otazka.odpoved && numberOfAnswers > 4)
				document.getElementById("ee").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved && numberOfAnswers > 5)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';
			else if (otazka.g == otazka.odpoved && numberOfAnswers > 6)
				document.getElementById("gg").style.backgroundColor = 'LightGreen';
			else if (otazka.h == otazka.odpoved && numberOfAnswers > 7)
				document.getElementById("hh").style.backgroundColor = 'LightGreen';
			else if (otazka.i == otazka.odpoved && numberOfAnswers > 8)
				document.getElementById("ii").style.backgroundColor = 'LightGreen';
			else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("jj").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (numberOfAnswers > 6 && document.getElementById("g").checked == true) {
		if (otazka.g == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("gg").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.a == otazka.odpoved && numberOfAnswers > 3)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.e == otazka.odpoved && numberOfAnswers > 4)
				document.getElementById("ee").style.backgroundColor = 'LightGreen';
			else if (otazka.f == otazka.odpoved && numberOfAnswers > 5)
				document.getElementById("ff").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved && numberOfAnswers > 6)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';
			else if (otazka.h == otazka.odpoved && numberOfAnswers > 7)
				document.getElementById("hh").style.backgroundColor = 'LightGreen';
			else if (otazka.i == otazka.odpoved && numberOfAnswers > 8)
				document.getElementById("ii").style.backgroundColor = 'LightGreen';
			else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("jj").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (numberOfAnswers > 7 && document.getElementById("h").checked == true) {
		if (otazka.h == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("hh").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.a == otazka.odpoved && numberOfAnswers > 3)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.e == otazka.odpoved && numberOfAnswers > 4)
				document.getElementById("ee").style.backgroundColor = 'LightGreen';
			else if (otazka.f == otazka.odpoved && numberOfAnswers > 5)
				document.getElementById("ff").style.backgroundColor = 'LightGreen';
			else if (otazka.g == otazka.odpoved && numberOfAnswers > 6)
				document.getElementById("gg").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved && numberOfAnswers > 7)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';
			else if (otazka.i == otazka.odpoved && numberOfAnswers > 8)
				document.getElementById("ii").style.backgroundColor = 'LightGreen';
			else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("jj").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (numberOfAnswers > 8 && document.getElementById("i").checked == true) {
		if (otazka.i == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("ii").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.a == otazka.odpoved && numberOfAnswers > 3)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.e == otazka.odpoved && numberOfAnswers > 4)
				document.getElementById("ee").style.backgroundColor = 'LightGreen';
			else if (otazka.f == otazka.odpoved && numberOfAnswers > 5)
				document.getElementById("ff").style.backgroundColor = 'LightGreen';
			else if (otazka.g == otazka.odpoved && numberOfAnswers > 6)
				document.getElementById("gg").style.backgroundColor = 'LightGreen';
			else if (otazka.h == otazka.odpoved && numberOfAnswers > 7)
				document.getElementById("hh").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved && numberOfAnswers > 8)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';
			else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("jj").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (numberOfAnswers > 9 && document.getElementById("j").checked == true) {
		if (otazka.j == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("jj").style.backgroundColor = 'LightCoral';
			if (otazka.b == otazka.odpoved)
				document.getElementById("bb").style.backgroundColor = 'LightGreen';
			else if (otazka.c == otazka.odpoved)
				document.getElementById("cc").style.backgroundColor = 'LightGreen';
			else if (otazka.a == otazka.odpoved && numberOfAnswers > 3)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';
			else if (otazka.e == otazka.odpoved && numberOfAnswers > 4)
				document.getElementById("ee").style.backgroundColor = 'LightGreen';
			else if (otazka.f == otazka.odpoved && numberOfAnswers > 5)
				document.getElementById("ff").style.backgroundColor = 'LightGreen';
			else if (otazka.g == otazka.odpoved && numberOfAnswers > 6)
				document.getElementById("gg").style.backgroundColor = 'LightGreen';
			else if (otazka.h == otazka.odpoved && numberOfAnswers > 7)
				document.getElementById("hh").style.backgroundColor = 'LightGreen';
			else if (otazka.i == otazka.odpoved && numberOfAnswers > 8)
				document.getElementById("ii").style.backgroundColor = 'LightGreen';
			else if (otazka.d == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
				'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else {
		if (otazka.a == otazka.odpoved)
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
		else if (otazka.b == otazka.odpoved)
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
		else if (otazka.c == otazka.odpoved)
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
		else if (otazka.d == otazka.odpoved && numberOfAnswers > 3)
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
		else if (otazka.e == otazka.odpoved && numberOfAnswers > 4)
			document.getElementById("ee").style.backgroundColor = 'LightGreen';
		else if (otazka.f == otazka.odpoved && numberOfAnswers > 5)
			document.getElementById("ff").style.backgroundColor = 'LightGreen';
		else if (otazka.g == otazka.odpoved && numberOfAnswers > 6)
			document.getElementById("gg").style.backgroundColor = 'LightGreen';
		else if (otazka.h == otazka.odpoved && numberOfAnswers > 7)
			document.getElementById("hh").style.backgroundColor = 'LightGreen';
		else if (otazka.i == otazka.odpoved && numberOfAnswers > 8)
			document.getElementById("ii").style.backgroundColor = 'LightGreen';
		else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
			document.getElementById("jj").style.backgroundColor = 'LightGreen';
		document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
			'Správná odpověď je: ' + otazka.odpoved;
		spatne++;
		spatneOtazky.push(otazka);
	}

	if (otazky.length > n) {
		odpovezene.push(x);
		n++;

		//document.getElementById("end").style.visibility = 'hidden';
		//document.getElementById("dalsi").style.visibility = 'visible';
	}

	document.getElementById("end").value = "Další";
	document.getElementById("end").onclick = nactiOtazku;

	/*else{
	 document.getElementById("form").remove();
	 document.getElementById("otazkaCislo").remove();;
	 document.getElementById("check").innerHTML = '<p>Správných odpovědí: ' + spravne + '</p>' + 
	 '<p>Špatných odpovědí: ' + spatne + '</p>'
	 }*/
}

function zalozOtazky() {
	pridejOtazku(
		"Co je to rendering u webových prohlížečů?",
		"Schopnost vykreslovat objekty různých typů",
		"Schopnost volat nesamostatné moduly",
		"Schopnost pracovat jako klient určité služby např. FTP",
		"Schopnost volat externí programy.",
		"",
		"",
		"",
		"",
		"",
		"",
		"Schopnost vykreslovat objekty různých typů",
		"vybiraci");
	pridejOtazku(
		"Co to je konverze (konverzní poměr)?",
		"Pocet uživatelů kteří „došli“ k určité mému cíli vůči celkovému počtu uživatelů, kteří (? to asi neudělali)",
		"Počet zpětných odkazů vůči celkovému počtu odkazů na webu",
		"Počet klíčových slov vůči celkovému počtu klíčových slov na webové stránce",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"Pocet uživatelů kteří „došli“ k určité mému cíli vůči celkovému počtu uživatelů, kteří (? to asi neudělali)",
		"vybiraci");
	pridejOtazku(
		"[?] Ktery graficky format je nekomprimovany",
		"JPEG",
		"PNG",
		"TIFF",
		"BMP",
		"GIF",
		"",
		"",
		"",
		"",
		"",
		"GIF",
		"vybiraci");
	pridejOtazku(
		"Ve kterém státě byla navržena technologie WWW",
		"Velka británoe",
		"Francie",
		"Rusko",
		"Švýracsko",
		"USA",
		"",
		"",
		"",
		"",
		"",
		"Švýracsko",
		"vybiraci");
	pridejOtazku(
		"[?] Pro klikají mapy z hlediska přístupnosti webu pro zrakově handicapované uživatele platí",
		"Odečítače obrazovky disponující efektivním čtením klikacích map, dodatečné informace o odkazech nejsou potřebné",
		"Barevná kombinace klikací mapy není důležitá",
		"Každý odkaz klikací mapy nese informaci o odkazu",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"Každý odkaz klikací mapy nese informaci o odkazu",
		"vybiraci");
	pridejOtazku(
		"Jaké použití kaskádového stylu je u vícestránkové webové prezentace nejefektivnější ?",
		"Použití stylopisu v externím souboru",
		"Použití značky style u každého formátovaného elementu",
		"Použití stylopisu v hlavičce stránky",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"Použití stylopisu v externím souboru",
		"vybiraci");
	pridejOtazku(
		"Která značka je z pohledu fulltextového vyhledávače nejvýznamnější ?",
		"Link",
		"Meta",
		"P",
		"Strong",
		"",
		"",
		"",
		"",
		"",
		"",
		"Meta",
		"vybiraci");
	pridejOtazku(
		"Co jsou tzv. Izomorfní apliace ( isomorphic, Applications) ?",
		"Aplikace kterí se stejně zobrazují na všechny platformách",
		"Aplikace které splnují ISO normy",
		"Aplikace které běží izolovaně",
		"Aplikace které využívají univerzální API",
		"Aplikace kde JavaScript běží na klientském i servervé části",
		"",
		"",
		"",
		"",
		"",
		"Aplikace kde JavaScript běží na klientském i servervé části",
		"vybiraci");
	pridejOtazku(
		"Jaký tvar má IP adresa verze 6",
		"XXX.XXX.XXX.XXX, např  192.168.4.11",
		"XXXX XXXX XXXX XXXXXXX XXXX XXXX XXXX XXXX: 2001:odb8:0000:0000:0000: atd..",
		"XX:XX:XX, např 12:25:56",
		"X.Y.Z, např. www.czu.cz",
		"",
		"",
		"",
		"",
		"",
		"",
		"XXXX XXXX XXXX XXXXXXX XXXX XXXX XXXX XXXX: 2001:odb8:0000:0000:0000: atd..",
		"vybiraci");
	pridejOtazku(
		"Jaký tvar má IP adresa verze 4",
		"XXX.XXX.XXX.XXX, např  192.168.4.11",
		"XXXX XXXX XXXX XXXXXXX XXXX XXXX XXXX XXXX: 2001:odb8:0000:0000:0000: atd..",
		"XX:XX:XX, např 12:25:56",
		"X.Y.Z, např. www.czu.cz",
		"",
		"",
		"",
		"",
		"",
		"",
		"XXX.XXX.XXX.XXX, např  192.168.4.11",
		"vybiraci");
	pridejOtazku(
		"Ve kterém státě byla realizovaná decentrilizovaní sít která je považována za předchudce dnešního internetu",
		"Svycarsko",
		"Velka británie",
		"SSSR",
		"Francie",
		"USA",
		"",
		"",
		"",
		"",
		"",
		"USA",
		"vybiraci");
	pridejOtazku(
		"Jsou doménová jména citlivá na velká a malé písmena?",
		"Ne",
		"Pouze v domene .cz",
		"Pouze v domene .com",
		"Ano",
		"Pouze v ccTLD",
		"",
		"",
		"",
		"",
		"",
		"Ne",
		"vybiraci");
	pridejOtazku(
		"Co je to ECMAScript?",
		"Předchůdce Javascriptu",
		"Standard Javascriptu ( a offiko název)",
		"Nástupce Java Scriptu",
		"Alternativa k Javascriptu",
		"",
		"",
		"",
		"",
		"",
		"",
		"Standard Javascriptu ( a offiko název)",
		"vybiraci");
	pridejOtazku(
		"CO je z hlediska odkazu v katalogu dolezité",
		"Jednotná podoba URL",
		"Kontakt na správce webu",
		"Použití URL vždy s části WWW",
		"Grafická forma odkazu",
		"",
		"",
		"",
		"",
		"",
		"",
		"Jednotná podoba URL",
		"vybiraci");
	pridejOtazku(
		"Co je to unikátní uživatel",
		"Přepočet návštěvy na reálného člověka",
		"Zobrazení obsahu webové stránky",
		"Navštívění webové stránky jedním prohlížečem za určitě období",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"Navštívění webové stránky jedním prohlížečem za určitě období",
		"vybiraci");
	pridejOtazku(
		"Co je to Netmonitor",
		"Oficiální jednotné měření návštěvnosti webových stránek v čr",
		"Sdružení pro internetovou reklamu v Čr",
		"Měření nákladů do internetového marketingu",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"Oficiální jednotné měření návštěvnosti webových stránek v čr",
		"vybiraci");
	pridejOtazku(
		"Jaká je „výsledná“ barva v aditivních barevném modelu při nepoužití ani jedné základní barvy?",
		"Žlutá",
		"Zelené",
		"Azurová",
		"Červená",
		"Purpulová",
		"Modrá",
		"Černá",
		"Bílá",
		"",
		"",
		"Černá",
		"vybiraci");
	pridejOtazku(
		"Jaká je „výsledná“ barva v aditivních barevném modelu při použití všech základních barvy?",
		"Žlutá",
		"Zelené",
		"Azurová",
		"Červená",
		"Purpulová",
		"Modrá",
		"Černá",
		"Bílá",
		"",
		"",
		"Bílá",
		"vybiraci");
	pridejOtazku(
		"Jaká je výsledná barva při smíchání všechny základních barev s plnou internzitou v subtraktivním barevném modelu",
		"Žlutá",
		"Zelené",
		"Azurová",
		"Červená",
		"Purpulová",
		"Modrá",
		"Černá",
		"Bílá",
		"",
		"",
		"Černá",
		"vybiraci");
	pridejOtazku(
		"Jaká je výsledná barva při nepoužití žádné ze základních barev v subtraktivním barevném modelu",
		"Žlutá",
		"Zelené",
		"Azurová",
		"Červená",
		"Purpulová",
		"Modrá",
		"Černá",
		"Bílá",
		"",
		"",
		"Bílá",
		"vybiraci");
	pridejOtazku(
		"Co je framweork pro JavaScript ?",
		"Net Framework",
		"Nette Framework",
		"Zend Framwork",
		"JQuerry",
		"",
		"",
		"",
		"",
		"",
		"",
		"JQuerry",
		"vybiraci");
	pridejOtazku(
		"CO je Media Queries?",
		"Technologie soužící pro distribuci stylu různá koncová zařízení",
		"Zpracování grafických objektů ve webovém prohlížeči",
		"Technologie pro tvorbu přístupného webu zrakově handicapované uživatele",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"Technologie soužící pro distribuci stylu různá koncová zařízení",
		"vybiraci");
	pridejOtazku(
		"[?] Pro položky formulářu z hlediska přístupunosti webu pro zrakově handicapované uživatelé platí?",
		"Povinná položka jsou označená dodatečným znakem",
		"Povinné položky jsou označeny velikostí písma definovaného v CSS",
		"Povinná položky jsou barevně odlišeny od nepovinných",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"Povinná položka jsou označená dodatečným znakem",
		"vybiraci");
	pridejOtazku(
		"Co je Node.js",
		"CSS framework",
		"Speciální serverová distribuce Linuxu",
		"Serveré běhové prostředí pro Java Script",
		"Moderní webové server pro PHP",
		"JavaScriptový Framework",
		"",
		"",
		"",
		"",
		"",
		"Serveré běhové prostředí pro Java Script",
		"vybiraci");
	pridejOtazku(
		"K čemu je dobrý node.js ?",
		"Pro efektivnější správu procesu na webovém serveru",
		"Pro efektivnšjčí běh PHP",
		"Pro aplikace které ke svém běhu využívají PHP i Java Script",
		"Pro běh aplikací s hodně I/O operacemi a real-time zpracováním",
		"",
		"",
		"",
		"",
		"",
		"",
		"Pro běh aplikací s hodně I/O operacemi a real-time zpracováním",
		"vybiraci");
	pridejOtazku(
		"V kterých případech by měl být uživatel předem upozorněn?",
		"Pokud cílem odkazu je dokument obsahující rozsáhlý text",
		"Pokud v následujících dokumentu nená zpětný odkaz na původní dokument",
		"Ookud je cíl odkazu zobrazen v novém okně prohlížeče",
		"Pokud odkaz vede na soubor jiného typu než (X)HTML",
		"",
		"",
		"",
		"",
		"",
		"",
		"Ookud je cíl odkazu zobrazen v novém okně prohlížeče",
		"vybiraci");
	pridejOtazku(
		"Co je to SPIR?",
		"Officiální jednotné měření návštěvnosti webových stránek čr",
		"Sdružení pro internetový rozvoj",
		"Měření nákladu do internetového marketingu",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"Sdružení pro internetový rozvoj",
		"vybiraci");
	pridejOtazku(
		"Jaké jsou aktuální metody pro tvorbu přístupného webu",
		"Pravidla přístupnosti MI čr – best practice",
		"Manifest Dogma W4",
		"WCAG 2.0",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"WCAG 2.0",
		"vybiraci");
	pridejOtazku(
		"Z pohledu přístupnosti webu pro zrakově handicapované uživatele pro baru textu a pozadí platí",
		"Nesmí být použita stejný barva textu a pozadí",
		"Jsou v dostačeném kontrastu",
		"Smí být použit pouze černý text na bílém pozadí nebo bílý text na černím pozadí",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"Jsou v dostačeném kontrastu",
		"vybiraci");
	pridejOtazku(
		"Pro provoz ASP.NET je nezbytné potřeba",
		"Webový server apache",
		"OS windows server",
		"Weobý server ISS",
		"Databáze MS SQL",
		"",
		"",
		"",
		"",
		"",
		"",
		"Weobý server ISS",
		"vybiraci");
	pridejOtazku(
		"V kterém roce byla navržená technologie WWW",
		"1979",
		"1967",
		"1957",
		"1989",
		"1983",
		"",
		"",
		"",
		"",
		"",
		"1989",
		"vybiraci");
	pridejOtazku(
		"jaký interval celých čísel lze použít pro zápis barvy v CSS poměrem celých čísel",
		"0-16,8 mil",
		"1-64 tisíc",
		"0-255",
		"0-64 tisic",
		"1-16,8 mil",
		"1-255",
		"",
		"",
		"",
		"",
		"0-255",
		"vybiraci");
	pridejOtazku(
		"Co to znamená zkratka Ajax",
		"Asynchroní JAVA aplikace s XML",
		"Asynchronní Java Scriptu a XML",
		"Aritmectický  JavaScriptový Archiv v XML",
		"Alternativní Joomta aplikace s XML",
		"",
		"",
		"",
		"",
		"",
		"",
		"Asynchronní Java Scriptu a XML",
		"vybiraci");
	pridejOtazku(
		"Jaké jsou aktuální metody pro tvorbu přístupného webu (2b)",
		"Pravidla přístupnosti MI čr – 64/2008 Sb",
		"Manifest Dogma W4",
		"WCAG 2.0 - Web Content Accessibility Guidelines",
		"WAI 9.3 - Web Accessibility Initiative",
		"CSS 3.0 Standart",
		"",
		"",
		"",
		"",
		"",
		"ac",
		"zaskrtavaci");
	pridejOtazku(
		"Který grafický formát je vhodný pro jednoduché kresby či loga publikované na webu",
		"JPEG",
		"PNG",
		"TIFF",
		"BMP",
		"GIF",
		"",
		"",
		"",
		"",
		"",
		"be",
		"zaskrtavaci");
	pridejOtazku(
		"[?] CO je to Dom ? 3 body",
		"Dynamický objednávkový model",
		"Definovaný standard obecného modelovaní serverech webových aplikaci",
		"DOM definuje obecný standard pro přístup k platnému (X)HTML dokumentu",
		"Interní hierarchická organizace prvků dokumentů ve webovém prohlížeči",
		"DOM definuje obecný standard pro přístup k platnému XML dokumentu",
		"",
		"",
		"",
		"",
		"",
		"cde",
		"zaskrtavaci");
	pridejOtazku(
		"Jake jsou obecné základní komponenty DOM ? 2body",
		"Metody",
		"Značkovací jazyky",
		"Kolekce",
		"URL",
		"",
		"",
		"",
		"",
		"",
		"",
		"ac",
		"zaskrtavaci");
	pridejOtazku(
		"V jakých jednotkách může být velikost buněk tabulky definovaná aby byl web přístupný zrakově handicovapanému uživateli (2body)",
		"Kličovým slovem např smaller",
		"Pt",
		"Px",
		"Em",
		"",
		"",
		"",
		"",
		"",
		"",
		"ad",
		"zaskrtavaci");
	pridejOtazku(
		"Co víte o doménách ? (3body)",
		"Poslední část je nejobecnější",
		"Časti jsou číslovány odpředu",
		"První část je nejobecnější",
		"Poslední část je nejkonkretnější",
		"První část je nejkonkretnější",
		"Části jsou číslovany odzadu",
		"V podstatě nic :'(",
		"",
		"",
		"",
		"aef",
		"zaskrtavaci");
	pridejOtazku(
		"Mezi client side technolohie patří  (3body)",
		"WebSQL",
		"Net MVC",
		"Java scropt",
		"HTML5",
		"Node.js",
		"",
		"",
		"",
		"",
		"",
		"acd",
		"zaskrtavaci");
	pridejOtazku(
		"Jaká barevná plata odpovídá formátu JPEG? (2body)",
		"256 barev",
		"24 bitu",
		"16,8 mil barev",
		"8 bitů",
		"256 odstínu šedi",
		"",
		"",
		"",
		"",
		"",
		"bc",
		"zaskrtavaci");
	pridejOtazku(
		"Co jsou technologie na straně klienta? (2body)",
		"Java servlet",
		"PHP5",
		"Java Applet",
		"Java Script",
		"",
		"",
		"",
		"",
		"",
		"",
		"ab",
		"zaskrtavaci");
	pridejOtazku(
		"[?] Co je to WWW ? (2body)",
		"Webový server",
		"Služba internetu",
		"Word WIde Web",
		"Webový prohlížeč",
		"Internet",
		"Poštovní klient",
		"",
		"",
		"",
		"",
		"ac",
		"zaskrtavaci");
	pridejOtazku(
		"Jaké jsou požadavky na XHTML (2 body)",
		"Všechny značky musí být do sebe správně vnořeny",
		"Všechny atributy značek musí být psány velkým písmeny",
		"Všechny značky a atributy musí být psány malými písmeny",
		"XHTML dokument nesmí mít XML prolog",
		"Číselné hodnoty atributů se zapisují bez uvozovek",
		"",
		"",
		"",
		"",
		"",
		"ac",
		"zaskrtavaci");
	pridejOtazku(
		"Co je to HTTP (3body)",
		"Bezstavový protokol",
		"Stavový protokol",
		"Značkovací jazyk pro tvorbu webových stránek",
		"Protokol pro přenos dat v textovém tvaru",
		"Protokol který podporuje i částečné přenosy",
		"",
		"",
		"",
		"",
		"",
		"ad",
		"zaskrtavaci");
	pridejOtazku(
		"Co je to JavaScript ? (2body)",
		"Technologie pro interaktivní webové stránky",
		"Technologie plně nahrazující XHTML",
		"Nejpoužívanější technologie na straně serveru",
		"Nejpoužívanější skriptovací jazyk na straně klienta",
		"",
		"",
		"",
		"",
		"",
		"",
		"ad",
		"zaskrtavaci");
	pridejOtazku(
		"Jaky je obecny zapis barvy v CSS hexa cisla (2body)",
		"#ggbbrr",
		"#brg",
		"#rrbbgg",
		"#grb",
		"#rbg",
		"#gbr",
		"#bbrrgg",
		"#bbggrr",
		"#rrggbb",
		"#rgb",
		"ij",
		"zaskrtavaci");
	pridejOtazku(
		"[???] Z jakých částí se skládá čisté fulltextový vyhledávač (2body)",
		"Z tématicky zaměřených sekcí",
		"DTD XHTML dokumentů",
		"Webového uživatelského rozhraní",
		"Z robota,který stahuje a indexuje soubory",
		"",
		"",
		"",
		"",
		"",
		"",
		"cd",
		"zaskrtavaci");
	pridejOtazku(
		"Co je to WWW klient? (2body)",
		"Aplikace ( program) umožňující funkce webového serveru",
		"Webový prohlížeč",
		"Uživatel pracující s WWW",
		"Uživatel pracující s internetem",
		"Aploakce (program ) nainstalovaný na počítači",
		"",
		"",
		"",
		"",
		"",
		"be",
		"zaskrtavaci");
	pridejOtazku(
		"Kdo může být držitelem doménového jména ccTLD.cz (2body)",
		"Pouze právnická osoba",
		"Právnická osoba",
		"Fyzická osoba",
		"Pouze zájmové sdružení právnických osob  např CZ NIC s.r.o",
		"Pouze fyzická osoba",
		"Pouze občanské sdružení (spolek)",
		"",
		"",
		"",
		"",
		"bc",
		"zaskrtavaci");
	pridejOtazku(
		"Které konkrétní zápisy barvy hexa číslem jsou v CSS korektní (3body)",
		"#Bila",
		"#00ff00",
		"#ggg",
		"#wyz",
		"#123456",
		"#000000",
		"",
		"",
		"",
		"",
		"bef",
		"zaskrtavaci");
	pridejOtazku(
		"Jaké jsou základní Filozofie HTML (2body)",
		"Definuje čím má text ve stránce být",
		"Definuje jak má text v prohlížeči vypadat",
		"Umožnuje obousměrnou prezentaci",
		"Je doplňkem k CSS",
		"Používá se k výhradně pro formátování vzhledu webových stránek",
		"Umožnuje pouze jednosměrnou prezentaci",
		"",
		"",
		"",
		"",
		"ac",
		"zaskrtavaci");
	pridejOtazku(
		"Co je to CZ nic z s.p.o (2body)",
		"Subjekt který sdružuje všechny registrátory doménových jmen v doménových jmen v doménách největší úrovně",
		"Subjekt který spravuje centrální registr doménových hmen v doméne .cz",
		"Subjekt který vydává pravidla registrace doménových jmen v doméne .cz",
		"Subjekt který vydává pravidla pro webhosting, serverhosting a serverouhousing",
		"Subjekt který sdružuje všechny poskytovatele připojení k internetu v čr",
		"",
		"",
		"",
		"",
		"",
		"bc",
		"zaskrtavaci");
	pridejOtazku(
		"Co je to SEM ? (2body)",
		"Standard tvroby jednouživatelských webových aplikací",
		"Search Engine Marketing",
		"Jeden ze způsobů placené propagace webu na vyhledávacích",
		"Ukazatel návratnosti investovaných nákladů na SEO",
		"",
		"",
		"",
		"",
		"",
		"",
		"bc",
		"zaskrtavaci");
	pridejOtazku(
		'Kolik sloupsů má tabulka popsána následujícím HTML kódem? [ENTER]<table>[ENTER]<tr>[ENTER]<td colspan="2"></td>[ENTER]<td></td>[ENTER]</tr>[ENTER]<tr>[ENTER]<td></td>[ENTER]<td colspan="2"></td>[ENTER]</tr>[ENTER]</table>',
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"2.5",
		"-1",
		"",
		"3",
		"psaci");
	pridejOtazku(
		'[???] Kolik uzlů měla původní sít která je považována za předchůdce dnešního internetu?',
		"27",
		"1",
		"255",
		"3",
		"256",
		"5",
		"6",
		"2.5",
		"16",
		"500",
		"16",
		"psaci");
	pridejOtazku(
		"Jaká je základní struktura WWW stránky",
		"hlavička, tělo",
		"hlavička, část technických informací, tělo, obsah",
		"záhlaví, hlavička, tělo, zápatí",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"hlavička, tělo",
		"vybiraci");
	pridejOtazku(
		"Co jsou domény 1. řádu? [2 body]",
		"gTLD",
		"ccTLD",
		"subdomény",
		"doménová jména",
		"",
		"",
		"",
		"",
		"",
		"",
		"ab",
		"zaskrtavaci");
	pridejOtazku(
		"Aby byl web přístupný zrakově handicapovaným uživatelům, pro tabulky platí",
		"vše, co patří do jednoho řádku tabulky je z hlediska struktury tabulky skutečně v jednom řádku",
		"vše, co patří do jedné buňky je z hlediska struktury tabulky skutečně v jedné buňce",
		"vše co patří do jedné buňky je naformátovaní opticky přehledně, struktura tablky je v takovém případě liboolná",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"vše, co patří do jedné buňky je z hlediska struktury tabulky skutečně v jedné buňce",
		"vybiraci");
	pridejOtazku(
		"Který konkrétní hodnoty pro zápis barvy v CSS korektní? [3 body]",
		"green",
		"černá",
		"červená",
		"red",
		"black",
		"",
		"",
		"",
		"",
		"",
		"ade",
		"zaskrtavaci");
	pridejOtazku(
		"Co jsou technologie na straně serveru? [2 body]",
		"CGI",
		"ASP.NET",
		"CSS3",
		"HTML5",
		"",
		"",
		"",
		"",
		"",
		"",
		"ab",
		"zaskrtavaci");
	pridejOtazku(
		"Jaké jsou cíle SEO?",
		"zpřístupnění webu zrakově handicapovaným uživatelům",
		"důkladná registrace webu do katalogu (katalogových vyhledávačů)",
		"posunout wb na přední místa ve výsledcích vyhledávání",
		"zpřehlednění webu normálním uživatelům",
		"",
		"",
		"",
		"",
		"",
		"",
		"posunout wb na přední místa ve výsledcích vyhledávání",
		"vybiraci");
	pridejOtazku(
		"Jaká je maxmální délka domény?",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"255",
		"psaci");
	pridejOtazku(
		"Aby byl web přístupný zrakově handicapovaným uživatelům, musí být tabulky",
		"formátovýny na šířku",
		"koncipovány do čtverce",
		"linearizovány po sloupcích",
		"linearizovány po řádcích",
		"",
		"",
		"",
		"",
		"",
		"",
		"linearizovány po řádcích",
		"vybiraci");
	pridejOtazku(
		"V jakých jednotkách může být velikost buněk tabulky definována, aby byly přístupné zrakově postiženym uživatelům?",
		"in",
		"mm",
		"ex",
		"%",
		"",
		"",
		"",
		"",
		"",
		"",
		"cd",
		"zaskrtavaci");
	pridejOtazku(
		"Odkazy na webové stránce jsou zpřístupněny zrakově handicapovaným uživatelům, pokud:",
		"jsou zvýrazněny stínovým efektem písma",
		"jsou výrazně barevně odlišené od okolního textu",
		"i bez barevného rozlišení jsou zřetelné",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"i bez barevného rozlišení jsou zřetelné",
		"vybiraci");
	pridejOtazku(
		"Jakým způsoběm může být definovaná velikost písma v CSS z pohledu přístupnosti zrakově handicovapanému uživateli (2body)",
		"Velikost textu smí být definována v relativních jednotkách",
		"Velikost textu smí být definována v absolutních jednotkách",
		"Pro velikost textu lze použít klíčových slov, např. medium",
		"Velikost textu nesmí být v CSS vůbec definována, může však být definována (???) jinde",
		"",
		"",
		"",
		"",
		"",
		"",
		"ac",
		"zaskrtavaci");
	pridejOtazku(
		"Co jsou domény 2. řádu",
		"gTLD",
		"ccTLD",
		"subdomény",
		"doménová jména czu.cz nebo google.cz",
		"",
		"",
		"",
		"",
		"",
		"",
		"doménová jména czu.cz nebo google.cz",
		"vybiraci");
	pridejOtazku(
		"Kolik řádků má tabulka popsána následujícím HTML kódem? (doplňte číslo)[ENTER]<table>[ENTER]<tr>[ENTER]<td></td>[ENTER]<td></td>[ENTER]<td></td>[ENTER]</tr>[ENTER]</table>",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"1",
		"psaci");
	pridejOtazku(
		"Co jsou objektivní faktory testování website? [2 body]",
		"použitelnost webu",
		"validita XHTML kódu",
		"intuitivnost ovládání webu",
		"velikost a rychlost náčítání webového dokumentu",
		"",
		"",
		"",
		"",
		"",
		"",
		"ac",
		"zaskrtavaci");
	pridejOtazku(
		'Čím je tvořena tzv. "klikací mapa?"',
		"více obrázky - každý obrázek nese různý odkaz",
		"částí textu a obrázky - každá část textu a obrázky nesou různé odkazy",
		"jedním obrázkem - části obrázku nesou různé odkazy",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"jedním obrázkem - části obrázku nesou různé odkazy",
		"vybiraci");
	pridejOtazku(
		'Kolik sloupsů má tabulka popsána následujícím HTML kódem? [ENTER]<table>[ENTER]<tr>[ENTER]<td colspan="3"></td>[ENTER]<td></td>[ENTER]<td></td>[ENTER]</tr>[ENTER]<tr>[ENTER]<td></td>[ENTER]<td colspan="3"></td>[ENTER]<td></td>[ENTER]</tr>[ENTER]<tr>[ENTER]<td></td>[ENTER]<td></td>[ENTER]<td colspan="3"></td>[ENTER]</tr>[ENTER]</table>',
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"5",
		"psaci");
	pridejOtazku(
		"Co platí pro odkazy z pohledu pravidel přístupnosti webu pro zrakově handicepované uživatele [2 body]",
		"Cíl odkazů musí vyplývat bezprostředně z okolního textu odkazu ",
		"V rámci webside musí být k dispozici webová stránka obsahujicí popis cílu všech použitých odkazů",
		"Text odkazu obsahuje vystižné cíl odkazu",
		"Pro okomentovaní cíle odkazu lze používat atribut title",
		"",
		"",
		"",
		"",
		"",
		"",
		"cd",
		"zaskrtavaci");
	pridejOtazku(
		"Který vyhledávač je celosětově nejpoužívanější?",
		"Yahoo!",
		"ASK",
		"Bing",
		"Baidu",
		"AOL",
		"Google",
		"",
		"",
		"",
		"",
		"Google",
		"vybiraci");
	pridejOtazku(
		"Na kterém kontinentě je nejvíce uživatelů sítě internet?",
		"Severní Amerika",
		"Evropa",
		"Jižní Amerika",
		"Austrálie a Oceánie",
		"Asie",
		"Afrika",
		"",
		"",
		"",
		"",
		"Asie",
		"vybiraci");
	pridejOtazku(
		'Kolik sloupsů má tabulka popsána následujícím HTML kódem? [ENTER]<table>[ENTER]<tr>[ENTER]<td></td>[ENTER]</tr>[ENTER]<tr>[ENTER]<td></td>[ENTER]</tr>[ENTER]<tr>[ENTER]<td></td>[ENTER]</tr>[ENTER]</table>',
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"1",
		"psaci");
	pridejOtazku(
		"Co je to hypertext? [2 body]",
		"provázání jednotlivých stránek aktivními odkazy",
		"základní komponenta objektového modelu dokumentu - webové stránky",
		"součást WWW",
		"součást CSS",
		"součást XML",
		"",
		"",
		"",
		"",
		"",
		"ac",
		"zaskrtavaci");
	pridejOtazku(
		"Mezi nejrozšířenější PHP (MVC) frameworky patří [3 body]",
		"Node.js",
		"Laravel",
		"Nette",
		"Symfony",
		"Ember",
		"jQuery",
		"",
		"",
		"",
		"",
		"bcd",
		"zaskrtavaci");
	pridejOtazku(
		"Co je to SGML?",
		"značkovací jazyk pro tvorvu webových stránek",
		"značkovací jazyk pro uložení dat ve strukturované formě",
		"obecný standart značkovacích jazyků",
		"značkovací jazyk pro formátování vzhledu webových stránek",
		"",
		"",
		"",
		"",
		"",
		"",
		"obecný standart značkovacích jazyků",
		"vybiraci");
	pridejOtazku(
		"Které konkrétní zápisy barvy hexadecimálním číslem v CSS jsou korektní? [3 body]",
		"#f00",
		"#černá",
		"#abcdef",
		"#xxyyzz",
		"#barva",
		"#ffffff",
		"",
		"",
		"",
		"",
		"acf",
		"zaskrtavaci");
	pridejOtazku(
		"Co jsou technologie na straně klienta? [2 body]",
		"ASP.NET",
		"CGI",
		"CSS3",
		"HTML5",
		"",
		"",
		"",
		"",
		"",
		"",
		"cd",
		"zaskrtavaci");
	pridejOtazku(
		"Z jakých části se skládá rámový model CSS? [2 body]",
		"Výplň",
		"Vlastnost ",
		"Hlavička",
		"Obsah",
		"",
		"",
		"",
		"",
		"",
		"",
		"ad",
		"zaskrtavaci");
	pridejOtazku(
		"Jaká barevná hloubka odpovídá formátu PNG?",
		"24bity",
		"12bitů",
		"4bity",
		"8bitů",
		"",
		"",
		"",
		"",
		"",
		"",
		"24bity",
		"vybiraci");
	pridejOtazku(
		"Co je to WWW server?",
		"aplikace (program) umožňující webové služby",
		"databázový server",
		"uživatel pracující s WWW",
		"file server",
		"mailový server",
		"",
		"",
		"",
		"",
		"",
		"aplikace (program) umožňující webové služby",
		"vybiraci");
	pridejOtazku(
		"Co jsou cookies? [2 body]",
		"malé soubory vytvořené WWW klientem a uložené na WWW serveru",
		"v cookies je uložena předchozí komunikace mezi WWW serverem a WWW klientem",
		"doplněk k CSS",
		"princip nastavení WWW serveru",
		"malé soubory vytvořené WWW serverem a uložené u WWW klienta",
		"",
		"",
		"",
		"",
		"",
		"be",
		"zaskrtavaci");
	pridejOtazku(
		"Kolik vrstev má TCP/IP?",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"4",
		"psaci");
	pridejOtazku(
		"Kolik vrstev má model OSA/OSI?",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"7",
		"psaci");
	pridejOtazku(
		"Pokud je element ve webové stránce popsán značkou h1, které značky nesmí být pro ten samý element použity? [2 body]",
		"em",
		"p",
		"br",
		"table",
		"strong",
		"",
		"",
		"",
		"",
		"",
		"cd",
		"zaskrtavaci");
	pridejOtazku(
		"Co je to SEO?",
		"Optimalizace webu pro zrakově handicapované uživatele",
		"Optimalizace webu pro katalogy (katalogové vyhledávače)",
		"grafická a designová optimalizace webu",
		"optimalizace webu pro fulltextuvé vyhledávače",
		"",
		"",
		"",
		"",
		"",
		"",
		"optimalizace webu pro fulltextuvé vyhledávače",
		"vybiraci");
	pridejOtazku(
		"Jaké jsou obecné základní komponenty DOM? [3 body]",
		"události",
		"vlastnosti",
		"objekty",
		"protokoly",
		"zprávy",
		"",
		"",
		"",
		"",
		"",
		"abc",
		"zaskrtavaci");
	pridejOtazku(
		"Která instituce vydává standarty pro WWW?",
		"ISOC - Internet Society",
		"IAB - Internet Architecture Board",
		"W3C - World Wide Web Consorcium",
		"ISO - International Organization for Standardization",
		"IEEE - Institute od Electrical and Electronics Engineering",
		"",
		"",
		"",
		"",
		"",
		"W3C - World Wide Web Consorcium",
		"vybiraci");
	pridejOtazku(
		"[???] Co platí pro formulářové prvky z pohledu přístupnosti pro zrakově hadicapované uživatele?",
		"výstižný popis musí být vepsán přímo do formulářového políčka",
		"výstižný popis se musí nacházet vlevo od formulářového políčka, které je popisováno",
		"výstižný popis se musí nacházet nahoře od formulářového políčka, které je popisováno",
		"musí k nim být přiřazen výstižný popis pomocí značek XHTML",
		"",
		"",
		"",
		"",
		"",
		"",
		"výstižný popis se musí nacházet vlevo od formulářového políčka, které je popisováno",
		"vybiraci");
	pridejOtazku(
		"Která metoda je nejefektivnější pro zasílání dat od klienta na server?",
		"metoda POST",
		"metoda GET",
		"metoda HEAD",
		"metoda UNLINK",
		"metoda DELETE",
		"",
		"",
		"",
		"",
		"",
		"metoda POST",
		"vybiraci");
	pridejOtazku(
		"Co je charakteristické pro rastrový obrázek? [3 body]",
		"může být ve formátu GIF",
		"skládá se z jednotlivých bodů",
		"skládá se z vektorů",
		"skládá se z geometrických tvarů",
		"může být ve formátu JPEG",
		"",
		"",
		"",
		"",
		"",
		"abe",
		"zaskrtavaci");
	pridejOtazku(
		"Aby byl web přísupný slabozrakým uživatelům, pro tabulky platí:",
		"velikost buněk tabulky musí být definovány v relativních jednotkách",
		"velikost buněk tabulky musí být definovány v absolutních jednotkách",
		"velikost buněk tabulky musí být definovány v jednotkách px",
		"velikost celé tabulky musí být definována v jednotkách pt",
		"",
		"",
		"",
		"",
		"",
		"",
		"velikost buněk tabulky musí být definovány v relativních jednotkách",
		"vybiraci");
	pridejOtazku(
		"Kolik kořenových uzlů obsahuje DOM?",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"1",
		"psaci");
	pridejOtazku(
		'Co je z uvedé části kódu HTML značka?[ENTER]<div class="zahlavi"> ... </div>',
		"<div>",
		"class",
		"zahlavi",
		"...",
		"",
		"",
		"",
		"",
		"",
		"",
		"<div>",
		"vybiraci");
	pridejOtazku(
		"Který subjekt se stará o rozvoj Internetu?",
		"IETF - Internet Engineering Task Force",
		"IAB - Internet Architecture Board",
		"W3C - World Wide Web Consorcium",
		"IESG - Internet Engineering Steering Group",
		"",
		"",
		"",
		"",
		"",
		"",
		"IAB - Internet Architecture Board",
		"vybiraci");
	pridejOtazku(
		"Mezi server side technologie patří? [2 body]",
		"Cookies",
		"PHP",
		"Node.js",
		"DOM",
		"",
		"",
		"",
		"",
		"",
		"",
		"bc",
		"zaskrtavaci");
	pridejOtazku(
		"Co je architektura MVC? [2 body]",
		"CSS framework",
		"Struktura aplikace a logické rozčlenění zdrojového kódu",
		"Model View Controller",
		"Media and View Codec",
		"Funkcionální programovací jazyk",
		"",
		"",
		"",
		"",
		"",
		"bc",
		"zaskrtavaci");


	/*
	 
	 pridejOtazku(
	 "",
	 "",
	 "",
	 "",
	 "",
	 "",
	 "",
	 "",
	 "",
	 "",
	 "",
	 "",
	 "vybiraci");
	 pridejOtazku(
	 "",
	 "",
	 "",
	 "",
	 "",
	 "",
	 "vybiraci");*/
}

function pridejOtazku(otazka, a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", odpoved, typ) {
	var q = {
		a: escapeHtml(a),
		b: escapeHtml(b),
		c: escapeHtml(c),
		d: escapeHtml(d),
		e: escapeHtml(e),
		f: escapeHtml(f),
		g: escapeHtml(g),
		h: escapeHtml(h),
		i: escapeHtml(i),
		j: escapeHtml(j),
		otazka: (escapeHtml(otazka)).replaceAll('[ENTER]', '<br>'),
		odpoved: escapeHtml(odpoved),
		typ: typ
	};

	otazky.push(q);
}

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

String.prototype.replaceAll = function (search, replace) {
	if (replace === undefined) {
		return this.toString();
	}
	return this.split(search).join(replace);
};