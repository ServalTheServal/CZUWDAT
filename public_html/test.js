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

		if (odpovezene.indexOf(x.toString()) == -1)
		{
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

	if (!otazka.d)
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

		if (otazka.typ == "vybiraci")
		{
			switch (rand) {
				case 0:
					str2 += '<br><input id="a" type="radio" name="a" value="a">' + '<span id="aa"> ' + otazka.a + '</span>';
					break;
				case 1:
					str2 += '<br><input id="b" type="radio" name="a" value="a">' + '<span id="bb"> ' + otazka.b + '</span>';
					break
				case 2:
					str2 += '<br><input id="c" type="radio" name="a" value="a">' + '<span id="cc"> ' + otazka.c + '</span>';
					break;
				case 3:
					str2 += '<br><input id="d" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.d + '</span>';
					break;
				case 4:
					str2 += '<br><input id="e" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.e + '</span>';
					break;
				case 5:
					str2 += '<br><input id="f" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.f + '</span>';
					break;
				case 6:
					str2 += '<br><input id="g" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.g + '</span>';
					break;
				case 7:
					str2 += '<br><input id="h" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.h + '</span>';
					break;
				case 8:
					str2 += '<br><input id="i" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.i + '</span>';
					break;
				case 9:
					str2 += '<br><input id="j" type="radio" name="a" value="a">' + '<span id="dd"> ' + otazka.j + '</span>';
					break;
			}
		} else
		{
			switch (rand) {
				case 0:
					str2 += '<br><input id="a" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<span id="aa"> ' + otazka.a + '</span>';
					break;
				case 1:
					str2 += '<br><input id="b" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<span id="bb"> ' + otazka.b + '</span>';
					break
				case 2:
					str2 += '<br><input id="c" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<span id="cc"> ' + otazka.c + '</span>';
					break;
				case 3:
					str2 += '<br><input id="d" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<span id="dd"> ' + otazka.d + '</span>';
					break;
				case 4:
					str2 += '<br><input id="e" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<span id="ee"> ' + otazka.e + '</span>';
					break;
				case 5:
					str2 += '<br><input id="f" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<span id="ff"> ' + otazka.f + '</span>';
					break;
				case 6:
					str2 += '<br><input id="g" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<span id="gg"> ' + otazka.g + '</span>';
					break;
				case 7:
					str2 += '<br><input id="h" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<span id="hh"> ' + otazka.h + '</span>';
					break;
				case 8:
					str2 += '<br><input id="i" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<span id="ii"> ' + otazka.i + '</span>';
					break;
				case 9:
					str2 += '<br><input id="j" type="checkbox" name="a" value="' + String.fromCharCode(97 + numOfQuestion) + '">' + '<span id="jj"> ' + otazka.j + '</span>';
					break;
			}
		}
		numOfQuestion++;

	} while (used.length != numberOfAnswers)

	str2 += '<br><br><input id="end" type="button" value="Odpovědět" onclick=check()>' + '</div>';
	document.getElementById('otazka').innerHTML = str2;

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
		if (document.getElementById("dalsi").style.visibility == 'visible') {
			nactiOtazku();
		} else {
			check();
		}
	}
}

function check() {
	if (otazka.typ == "vybiraci")
		checkVybiraci();
	else
		checkZaskrtavaci();
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
	if (otazka.odpoved.indexOf("d") > -1 && numberOfAnswers > 3) {
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
	if (otazka.odpoved.indexOf("e") > -1 && numberOfAnswers > 4) {
		if (document.getElementById("e").checked == true) {
			document.getElementById("ee").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("ee").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("e").checked == true) {
			document.getElementById("ee").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (otazka.odpoved.indexOf("f") > -1 && numberOfAnswers > 5) {
		if (document.getElementById("f").checked == true) {
			document.getElementById("ff").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("ff").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("f").checked == true) {
			document.getElementById("ff").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (otazka.odpoved.indexOf("g") > -1 && numberOfAnswers > 6) {
		if (document.getElementById("g").checked == true) {
			document.getElementById("gg").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("gg").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("g").checked == true) {
			document.getElementById("gg").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (otazka.odpoved.indexOf("h") > -1 && numberOfAnswers > 7) {
		if (document.getElementById("h").checked == true) {
			document.getElementById("hh").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("hh").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("h").checked == true) {
			document.getElementById("hh").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (otazka.odpoved.indexOf("i") > -1 && numberOfAnswers > 8) {
		if (document.getElementById("i").checked == true) {
			document.getElementById("ii").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("ii").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("i").checked == true) {
			document.getElementById("ii").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}
	if (otazka.odpoved.indexOf("j") > -1 && numberOfAnswers > 9) {
		if (document.getElementById("j").checked == true) {
			document.getElementById("jj").style.backgroundColor = 'LightGreen';
		} else {
			document.getElementById("jj").style.backgroundColor = 'LightGreen';
			ok = false;
		}
	} else {
		if (document.getElementById("j").checked == true) {
			document.getElementById("jj").style.backgroundColor = 'LightCoral';
			ok = false;
		}
	}

	if (document.getElementById("a").checked == false &&
			document.getElementById("b").checked == false &&
			document.getElementById("c").checked == false &&
			document.getElementById("d").checked == false &&
			document.getElementById("e").checked == false &&
			document.getElementById("f").checked == false &&
			document.getElementById("g").checked == false &&
			document.getElementById("h").checked == false &&
			document.getElementById("i").checked == false &&
			document.getElementById("j").checked == false) {
		if (otazka.odpoved.indexOf("b") > -1)
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("c") > -1)
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("d") > -1)
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("a") > -1)
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("e") > -1)
			document.getElementById("ee").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("f") > -1)
			document.getElementById("ff").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("g") > -1)
			document.getElementById("gg").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("h") > -1)
			document.getElementById("hh").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("i") > -1)
			document.getElementById("ii").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("j") > -1)
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
		if (otazka.odpoved.indexOf("d") > -1)
			pismenoSpravne.push(document.getElementById("d").value);
		if (otazka.odpoved.indexOf("e") > -1)
			pismenoSpravne.push(document.getElementById("e").value);
		if (otazka.odpoved.indexOf("f") > -1)
			pismenoSpravne.push(document.getElementById("f").value);
		if (otazka.odpoved.indexOf("g") > -1)
			pismenoSpravne.push(document.getElementById("g").value);
		if (otazka.odpoved.indexOf("h") > -1)
			pismenoSpravne.push(document.getElementById("h").value);
		if (otazka.odpoved.indexOf("i") > -1)
			pismenoSpravne.push(document.getElementById("i").value);
		if (otazka.odpoved.indexOf("j") > -1)
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
	} else if (document.getElementById("d").checked == true) {
		if (otazka.d == otazka.odpoved) {
			document.getElementById("check").innerHTML = '<p style="color:green">Správná odpověď</p>';
			spravne++;
		} else {
			document.getElementById("dd").style.backgroundColor = 'LightCoral';
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
			else if (otazka.j == otazka.odpoved && numberOfAnswers > 9)
				document.getElementById("jj").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
					'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else if (document.getElementById("e").checked == true) {
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
	} else if (document.getElementById("f").checked == true) {
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
	} else if (document.getElementById("g").checked == true) {
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
	} else if (document.getElementById("h").checked == true) {
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
	} else if (document.getElementById("i").checked == true) {
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
	} else if (document.getElementById("j").checked == true) {
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
		if (otazka.j == otazka.odpoved)
			document.getElementById("jj").style.backgroundColor = 'LightCoral';
		else if (otazka.b == otazka.odpoved)
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
			"Který zápis odpovídá modré barvě?",
			"#ff0000",
			"#0000ff",
			"#00ff00",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"#0000ff",
			"vybiraci");
	pridejOtazku(
			"Který zápis odpovídá zelené barvě?",
			"#ff0000",
			"#0000ff",
			"#00ff00",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"#00ff00",
			"vybiraci");
	pridejOtazku(
			"Který zápis odpovídá červené barvě?",
			"#ff0000",
			"#0000ff",
			"#00ff00",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"#ff0000",
			"vybiraci");
	pridejOtazku(
			"Jakým způsobem se zrakově handicapovaný uživatel pohybuje tabulkou na WWW stránce pomocí hlasových nebo hmatových výstupů?",
			"po řádcích od pravého horního rohu do pravého dolního rohu",
			"po sloupcích od pravého horního rohu do levého dolního rohu",
			"po řádcích od levého horního rohu do pravého dolního rohu",
			"po sloupcích od levého horního rohu do pravého dolního rohu",
			"",
			"",
			"",
			"",
			"",
			"",
			"po řádcích od levého horního rohu do pravého dolního rohu",
			"vybiraci");
	pridejOtazku(
			"Dle metodického návrhu Blind Friendly Web 2.3 veškeré grafické prvky, které slouží kovládání stránky, musí mít:",
			"flashovou alternativu",
			"textovou alternativu",
			"JavaScript alternativu",
			"Java alternativu",
			"",
			"",
			"",
			"",
			"",
			"",
			"textovou alternativu",
			"vybiraci");
	pridejOtazku(
			"Dle metodického návrhu Blind Friendly Web 2.3 veškeré grafické prvky, které slouží kovládání stránky, musí mít:",
			"flashovou alternativu",
			"textovou alternativu",
			"grafickou alternativu",
			"Java alternativu",
			"",
			"",
			"",
			"",
			"",
			"",
			"textovou alternativu",
			"vybiraci");
	pridejOtazku(
			"Která instituce (konsorcium) stanovuje standardy pro WWW?",
			"IEEE",
			"ISO",
			"W3C",
			"ISOC",
			"IAB",
			"",
			"",
			"",
			"",
			"",
			"W3C",
			"vybiraci");
	pridejOtazku(
			"Jaká je obecná syntaxe CSS (Cascading Style Sheets)",
			"hodnoty od vlastností jsou odděleny pomlčkou, vlastni navzájem jsou odděleny dvojtečkou, viz. vlastnost1 – hodnota: vlastnost2 – hodnota:",
			"hodnoty od vlastností jsou odděleny středníkem, vlastni navzájem jsou odděleny dvojtečkou, viz. vlastnost1; hodnota: vlastnost2; hodnota:",
			"hodnoty od vlastností jsou odděleny dvojtečkou, vlastni navzájem jsou odděleny středníkem, viz. vlastnost1: hodnota; vlastnost2: hodnota;",
			"hodnoty od vlastností jsou odděleny pomlčkou, vlastni navzájem jsou odděleny středníkem, viz. vlastnost1 – hodnota; vlastnost2 – hodnota;",
			"",
			"",
			"",
			"",
			"",
			"",
			"hodnoty od vlastností jsou odděleny dvojtečkou, vlastni navzájem jsou odděleny středníkem, viz. vlastnost1: hodnota; vlastnost2: hodnota;",
			"vybiraci");
	pridejOtazku(
			"Každá WWW stránka by měla mít své hlavní sdělení:",
			"na začátku",
			"ve 2/3 stránky",
			"na konci",
			"v polovině stránky",
			"",
			"",
			"",
			"",
			"",
			"",
			"na začátku",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje číslovaný/řazený seznam",
			"<img>",
			"<h1>",
			"<li>",
			"<em>",
			"<br>",
			"<p>",
			"<ol>",
			"<strong>",
			"<ul>",
			"<a>",
			"<ol>",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje hypertextový odkaz na webové stránce",
			"<img>",
			"<h1>",
			"<li>",
			"<em>",
			"<br>",
			"<p>",
			"<ol>",
			"<strong>",
			"<ul>",
			"<a>",
			"<a>",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje odstavec?",
			"<img>",
			"<h1>",
			"<li>",
			"<em>",
			"<br>",
			"<p>",
			"<ol>",
			"<strong>",
			"<ul>",
			"<a>",
			"<p>",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje položku v seznamu (pouze vnořena v ol nebo ul)",
			"<img>",
			"<h1>",
			"<li>",
			"<em>",
			"<br>",
			"<p>",
			"<ol>",
			"<strong>",
			"<ul>",
			"<a>",
			"<li>",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje nečíslovaný seznam?",
			"<img>",
			"<h1>",
			"<li>",
			"<em>",
			"<br>",
			"<p>",
			"<ol>",
			"<strong>",
			"<ul>",
			"<a>",
			"<ul>",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje mezeru (prázdný řádek)?",
			"<img>",
			"<h1>",
			"<li>",
			"<em>",
			"<br>",
			"<p>",
			"<ol>",
			"<strong>",
			"<ul>",
			"<a>",
			"<br>",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje vložení obrázku do XHTML stránky?",
			"<img>",
			"<h1>",
			"<li>",
			"<em>",
			"<br>",
			"<p>",
			"<ol>",
			"<strong>",
			"<ul>",
			"<a>",
			"<img />",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje tučný text (zesílený text)",
			"<img>",
			"<h1>",
			"<li>",
			"<em>",
			"<br>",
			"<p>",
			"<ol>",
			"<strong>",
			"<ul>",
			"<a>",
			"<strong>",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje nadpis? ",
			"<img>",
			"<h1>",
			"<li>",
			"<em>",
			"<br>",
			"<p>",
			"<ol>",
			"<strong>",
			"<ul>",
			"<a>",
			"<h1>",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje text psaný kurzívou? ",
			"<img>",
			"<h1>",
			"<li>",
			"<em>",
			"<br>",
			"<p>",
			"<ol>",
			"<strong>",
			"<ul>",
			"<a>",
			"<em>",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje buňku s daty tabulky? ",
			"<tr>",
			"<table>",
			"<te>",
			"colspan",
			"rowspan",
			"<th>",
			"",
			"",
			"",
			"",
			"<td>",
			"vybiraci");
	pridejOtazku(
			"Jaká HTML značka popisuje řádek tabulky? ",
			"<tr>",
			"<table>",
			"<te>",
			"colspan",
			"rowspan",
			"<th>",
			"",
			"",
			"",
			"",
			"<tr>",
			"vybiraci");
	pridejOtazku(
			"Co je z uvedené části kodu atribut XHTML značky? <p style=“color: #00ff00;font-style:italic;“>text</p>?",
			"style",
			"color: #00ff00; font-style:italic",
			"color",
			"#00ff00",
			"<p>",
			"font-style",
			"italic",
			"",
			"",
			"",
			"style",
			"vybiraci");
	pridejOtazku(
			"V jakých jednotkách se uvádí přenosová rychlost?",
			"pixel",
			"fps",
			"bps",
			"Bps",
			"pps",
			"",
			"",
			"",
			"",
			"",
			"bps",
			"vybiraci");
	pridejOtazku(
			"Co URL (Uniform Resource Data) vyjadřuje",
			"Kde je daný objekt umístěn",
			"Jaký má daný objekt vlastnosti",
			"Jak se daný objekt chová",
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
			'Co je z uvedené části kódu hodnota vlastnosti kaskádových stylů? <p style="color: #00ff00;">text</p>',
			"<p>",
			"color",
			"#00ff00",
			"style",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"vybiraci");
	pridejOtazku(
			'Co je z uvedené části kódu vlastnost kaskádových stylů? <p style="color: #00ff00;">text</p>',
			"<p>",
			"color",
			"#00ff00",
			"style",
			"",
			"",
			"",
			"",
			"",
			"",
			"color",
			"vybiraci");
	pridejOtazku(
			"Jak se nazývala síť, která je považována za předchůdce internetu?",
			"HTTP",
			"DARPANET",
			"WWW",
			"IP",
			"ARPANET",
			"",
			"",
			"",
			"",
			"",
			"ARPANET",
			"vybiraci");
	pridejOtazku(
			"Co je to webhosting?",
			"Pronájem prostoru pro webové stránky na webovém serveru",
			"Pronájem celého webového serveru pro webové stránky",
			"umístění vlastního serveru v telehousu pro webové stránky",
			"vyčlenění dedikovaného serveru pro webové stránky",
			"",
			"",
			"",
			"",
			"",
			"",
			"Pronájem prostoru pro webové stránky na webovém serveru",
			"vybiraci");
	pridejOtazku(
			"Jaký je obecný tvar URL (Uniform Resource Locator)",
			"protokol: jméno : uzel",
			"jméno : uzel : protokol",
			"uzel : protokol : jméno",
			"jméno : protokol : uzel",
			"uzel : jméno : protokol",
			"protokol : uzel : jméno",
			"",
			"",
			"",
			"",
			"protokol: jméno : uzel",
			"vybiraci");
	pridejOtazku(
			"Který z uvedených příkladů je XHTML validní kód?",
			'<img src="zdroj.pripona" alt="popis" width="342" height="125" />',
			'<IMG SRC="zdroj.pripona" ALT="popis" WIDTH="342" HEIGHT="125" />',
			'<img src="zdroj.pripona" alt="popis" width=342 height=125 />',
			'<img SRC="zdroj.pripona" ALT="popis" WIDTH="342" HEIGHT="125">',
			'<img src="zdroj.pripona" alt="popis" width="342" height="125">',
			'<img src="zdroj.pripona" alt="popis" width=342 height=125>',
			"",
			"",
			"",
			"",
			'<img src="zdroj.pripona" alt="popis" width="342" height="125" />',
			"vybiraci");
	pridejOtazku(
			"Co je logická struktura website",
			"struktura XHTML stránky",
			"uložení dokumentů a skriptů na HDD",
			"odkazy (linky) mezi dokumenty",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"odkazy (linky) mezi dokumenty",
			"vybiraci");
	pridejOtazku(
			"Co je fyzická struktura website",
			"struktura XHTML stránky",
			"uložení dokumentů a skriptů na HDD",
			"odkazy (linky) mezi dokumenty",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"uložení dokumentů a skriptů na HDD",
			"vybiraci");
	pridejOtazku(
			"K čemu slouží Media Queries?",
			"k distribuci stylů mezi různými typy zařízení",
			"k nahrazení texhnologií na straně serveru",
			"k nastavení barevné hloubky obrázku",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"k distribuci stylů mezi různými typy zařízení",
			"vybiraci");
	pridejOtazku(
			"Co je JQuery",
			"framework pro Javascript",
			"framework pro JAVA",
			"API rozhraní pro Google aplikace",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"framework pro Javascript",
			"vybiraci");
	pridejOtazku(
			"Jaké grafické formáty jsou komprimovány se ztrátou?",
			"GIF",
			"BMP",
			"PNG",
			"TIFF",
			"JPEG",
			"",
			"",
			"",
			"",
			"",
			"JPEG",
			"vybiraci");
	pridejOtazku(
			"Jaké grafické formáty jsou komprimovány beze ztráty?",
			"GIF",
			"BMP",
			"JPEG",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"GIF",
			"vybiraci");
	pridejOtazku(
			"Kolika bity je popsán bod na obrázku v paletě 16,8mil barev?",
			"1",
			"4",
			"8",
			"16",
			"24",
			"",
			"",
			"",
			"",
			"",
			"24",
			"vybiraci");
	pridejOtazku(
			"Kolika bity je popsán bod na obrázku v paletě 256 barev?",
			"1",
			"4",
			"8",
			"16",
			"24",
			"",
			"",
			"",
			"",
			"",
			"8",
			"vybiraci");
	pridejOtazku(
			"Co je cílem HTML5?",
			"sémantika",
			"plné nahrazení technologií na straně serveru",
			"doplnění HTML4",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"sémantika",
			"vybiraci");
	pridejOtazku(
			"Jaká barevná paleta je použita pro formát GIF?",
			"32bitů",
			"24bitů",
			"16.8mil barev",
			"8bitů",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"vybiraci");
	pridejOtazku(
			"Co jsou domény 1. řádu?",
			"domény seznam.cz, centrum.cz atlas.cz, google.cz",
			"domény pocasi.centrum.cz, slovnik.seznam.cz",
			"domény .com, .org, .info",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"domény .com, .org, .info",
			"vybiraci");
	pridejOtazku(
			"Co jsou domény 2. řádu?",
			"domény seznam.cz, centrum.cz atlas.cz, google.cz",
			"domény pocasi.centrum.cz, slovnik.seznam.cz",
			"domény .com, .org, .info",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"domény seznam.cz, centrum.cz atlas.cz, google.cz",
			"vybiraci");
	pridejOtazku(
			"Co jsou domény 3. řádu?",
			"domény seznam.cz, centrum.cz atlas.cz, google.cz",
			"domény pocasi.centrum.cz, slovnik.seznam.cz",
			"domény .com, .org, .info",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"domény pocasi.centrum.cz, slovnik.seznam.cz",
			"vybiraci");
	pridejOtazku(
			"Jaká je filosofie jazyka HTML:",
			"definuje čím text je",
			"definuje jak má text vypadat",
			"určuje velikost textu",
			"definuje jak se má text zobrazovat",
			"",
			"",
			"",
			"",
			"",
			"",
			"definuje čím text je",
			"vybiraci");
	pridejOtazku(
			"Co je to „Den registrace“ doménového jména v doméně .cz?",
			"den, ve kterém dojde k zaregistrování Doménového jména v Centrálním registrudoménových jmen",
			"den následující po dni, ve kterém dojde k uplynutí doby, na kterou bylo Doménové jméno zaregistrováno",
			"den, ve kterém dojde k objednání doménového jména u registrátora doménových jmen",
			"registrované Doménové jméno o němž CZ.NIC vede záznam na primárním jmenném serveru",
			"",
			"",
			"",
			"",
			"",
			"",
			"den, ve kterém dojde k zaregistrování Doménového jména v Centrálním registru doménových jmen",
			"vybiraci");
	pridejOtazku(
			"Jakým způsobem se zrakově handicapovaný uživatel pohybuje tabulkou na WWW stránce pomocí hlasových nebo hmatových výstupů?",
			"po sloupcích",
			"po řádcích",
			"po diagonálách",
			"těžko",
			"",
			"",
			"",
			"",
			"",
			"",
			"po řádcích",
			"vybiraci");
	pridejOtazku(
			"Jaké deklarování stylopisu je z hlediska Web Site nejvýhodnější?",
			"přímo v textu zdroje u formátovaného elementu pomocí atributu style",
			" použitím externího stylopisu – externího souboru *.css, na který se stránka odkazuje tagem <link …. />",
			"pomocí „stylopisu“ (angl. „stylesheet“) v hlavičce stránky. Stylopis je jakýsi seznam stylů. Je v něm obecně napsáno, co má být jak zformátováno, například že nadpisy mají být zelené. Do stránky se stylopis píše mezi tagy <style> a </style>.",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			" použitím externího stylopisu – externího souboru *.css, na který se stránka odkazuje tagem <link …. />",
			"vybiraci");
	pridejOtazku(
			"Jaké jsou základní barvy subtrakčního barevného modelu?",
			"červená, zelená, modrá",
			"bílá, černá",
			"tyrkysová (azurová), fialová (purpurová), žlutá",
			"ani jedna z možností",
			"",
			"",
			"",
			"",
			"",
			"",
			"tyrkysová (azurová), fialová (purpurová), žlutá",
			"vybiraci");
	pridejOtazku(
			"Jaké jsou základní barvy aditivního barevného modelu?",
			"červená, zelená, modrá",
			"bílá, černá",
			"tyrkysová (azurová), fialová (purpurová), žlutá",
			"ani jedna z možností",
			"",
			"",
			"",
			"",
			"",
			"",
			"červená, zelená, modrá",
			"vybiraci");
	pridejOtazku(
			"Jakým způsobem ve většině případů získávají zrakově handicapovaní uživatelé informace z WWW stránek?",
			"ve FLASH animacích",
			"v textové podobě",
			"v grafické podobě",
			"v Java appletech",
			"",
			"",
			"",
			"",
			"",
			"",
			"v textové podobě",
			"vybiraci");
	pridejOtazku(
			"Jakým způsobem mají být tabulky koncipovány, aby byly co nejlépe přístupné zrakověpostiženým uživatelům?",
			"není důležité",
			"do čtverce",
			"aby dávaly smysl po sloupcích",
			"aby dávaly smysl po řádcích",
			"",
			"",
			"",
			"",
			"",
			"",
			"aby dávaly smysl po řádcích",
			"vybiraci");
	pridejOtazku(
			"Dle metodického návrhu Blind Friendly Web 2.3 se WWW stránka mění:",
			"v dostatečném časovém intervalu (uživatel má dostatek času na zpracování informací z WWW stránky)",
			"pouze, pokud uživatel aktivuje nějaký prvek",
			"kdykoli",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"pouze, pokud uživatel aktivuje nějaký prvek",
			"vybiraci");
	pridejOtazku(
			"Co jsou CSS (Cascading Style Sheets)",
			"technologie na straně serveru",
			"základ HTML (XHTML)",
			"kolekce metod pro grafickou úpravu WWW stránek",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"kolekce metod pro grafickou úpravu WWW stránek",
			"vybiraci");
	pridejOtazku(
			"Jakým způsobem může tvůrce Web Site zběžně zkontrolovat, zda je Web Site přístupný i pro těžce zrakově postižené uživatele?",
			"např. vypnutím zpracování grafických prvků",
			"tvůrce nemůže Web Site zkontrolovat, může však tuto činnost předat nezávislému uživateli",
			"tvůrce Web Site může tuto kontrolu provést pouze prostřednictvím odborné konzultační firmy",
			"přivřeme nad tím oči",
			"",
			"",
			"",
			"",
			"",
			"",
			"např. vypnutím zpracování grafických prvků",
			"vybiraci");
	pridejOtazku(
			"Jaký obecný tvar má zápis barev v CSS (Cascading Style Sheets) hexadecimálním číslem?",
			"#rrggbb",
			"#bbggrr",
			"#ggbbrr",
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
			"Kolik osob v ČR žije s těžkým zrakovým postižením?",
			"   10 000",
			"1 000 000",
			"  500 000",
			"  100 000",
			"",
			"",
			"",
			"",
			"",
			"",
			"  100 000",
			"vybiraci");
	pridejOtazku(
			"V rámci celého Web Site:",
			"Všechny HTML stránky na Internetu mají stejný název (title)",
			"Každá HTML stránka má svůj charakteristický název (title)",
			"Celý Web Site má svůj charakteristický název (title ve všech HTML stránkách v rámci Web Site stejný)",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"Každá HTML stránka má svůj charakteristický název (title)",
			"vybiraci");
	pridejOtazku(
			"Jaké jsou doplňkové barvy aditivního barevného modelu?",
			"červená, zelená, modrá",
			"ani jedna z možností",
			"bílá, černá",
			"tyrkysová (azurová), fialová (purpurová), žlutá",
			"",
			"",
			"",
			"",
			"",
			"",
			"tyrkysová (azurová), fialová (purpurová), žlutá",
			"vybiraci");
	pridejOtazku(
			"Jaké jsou doplňkové barvy subtrakčního barevného modelu?",
			"červená, zelená, modrá",
			"ani jedna z možností",
			"bílá, černá",
			"tyrkysová (azurová), fialová (purpurová), žlutá",
			"",
			"",
			"",
			"",
			"",
			"",
			"červená, zelená, modrá",
			"vybiraci");
	pridejOtazku(
			"[???] Co je z hlediska odkazu v katalogu důležité?",
			"Grafická forma odkazu",
			"Kontakt na správce webu",
			"Jednotná podoba url",
			"Použití URL vždy s částí WWW",
			"",
			"",
			"",
			"",
			"",
			"",
			"Jednotná podoba url",
			"vybiraci");
	pridejOtazku(
			"Které barvy jsou doplňkovými barvami subtraktivního modelu ?",
			"Černá",
			"Zelená",
			"Azurová",
			"Červená",
			"Bílá",
			"Žlutá",
			"Modrá",
			"puprurová",
			"",
			"",
			"bdg",
			"zaskrtavaci");
	pridejOtazku(
			"[?] Kolik sloupců má tabluka popsaná následujícím HTML kodem ? <TABLE><TR><TD></TD><TD></TD>><TD></TD></TR></TABLE>",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"27",
			"256",
			"",
			"3",
			"vybiraci");
	pridejOtazku(
			"Ve kterém roce byla realizována decentralizovaná síť, která je považována za předchůdce dnešního internetu ?",
			"1957",
			"1967",
			"1983",
			"1969",
			"1989",
			"1945",
			"",
			"",
			"",
			"",
			"1969",
			"vybiraci");
	pridejOtazku(
			"[?] Ce je to mod_rewrite ?",
			"technika přepisu obsahu webových stránek",
			"technika převodu parametrů na uživatelsky přívětivé URL",
			"technika modularizace jednotlibých částí webových aplikacá",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"technika převodu parametrů na uživatelsky přívětivé URL",
			"vybiraci");
	pridejOtazku(
			"[?] Pro položky formulářů z hlediska přístupnosti webu po zrakově hand. uživatele patří ? ",
			"povinné položky jsou označeny velikostí písma definovanou v CSS",
			"povinné položky jsouy označeny dodatečným znakem",
			"povinné položky jsou barevně odlišeny od nepovinných",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"povinné položky jsouy označeny dodatečným znakem",
			"vybiraci");
	pridejOtazku(
			"Jaká ze nazývá akademická síť v ČR ?",
			"intranet",
			"cesnet 2",
			"nsfnet",
			"arpanet",
			"extranet",
			"",
			"",
			"",
			"",
			"",
			"cesnet 2",
			"vybiraci");
	pridejOtazku(
			"[?] V jakých  jednotkách  může  být  velikost  buněk  tabulky  definována,  aby  byl  web  přístupný  zrakově  hand. Uživatelům ? ",
			"ex",
			"%",
			"mm",
			"in",
			"",
			"",
			"",
			"",
			"",
			"",
			"abd",
			"zaskrtavaci");
	pridejOtazku(
			"[?] Mezi server side technologie patří ?",
			"Cookies",
			"PHP",
			"WebSQL",
			"DOM",
			"Node.js",
			"",
			"",
			"",
			"",
			"",
			"bc",
			"zaskrtavaci");
	pridejOtazku(
			"Které barvy jsou doplňkovými barvami aditivního modelu ?",
			"Černá",
			"Zelená",
			"Azurová",
			"Červená",
			"Bílá",
			"Žlutá",
			"Modrá",
			"puprurová",
			"",
			"",
			"cfh",
			"zaskrtavaci");
	pridejOtazku(
			"[?] Co je HTML 5?",
			"nová specifikace značkovacího jazyka závislá na platformě",
			"nová specifikace značkovacího jazyka nahrazující XHTML",
			"nová specifikace značkovacího jazyka nahrazující XML",
			"značkovací jazyk zaměřený na sémantiku",
			"",
			"",
			"",
			"",
			"",
			"",
			"d",
			"zaskrtavaci");
	pridejOtazku(
			"[?] Co je hustota klíčových slov ?",
			"počet klíčových slov na stránce / celkový počet slov na stránce",
			"celkový počet slov na stránce / počet klíčových slov na stránce",
			"počet klíčových slov na stránce * počet clekových slov na stránce",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"počet klíčových slov na stránce / celkový počet slov na stránce",
			"vybiraci");
	pridejOtazku(
			"Který zápis barvy v CSS odpovídá červené barvě ? ",
			"#00ff00",
			"#0f0",
			"#f00",
			"#ff0000",
			"#00f",
			"",
			"",
			"",
			"",
			"",
			"cd",
			"zaskrtavaci");
	pridejOtazku(
			"Který zápis barvy v CSS odpovídá zelené barvě ? ",
			"#00ff00",
			"#0f0",
			"#f00",
			"#ff0000",
			"#00f",
			"#00ff00",
			"",
			"",
			"",
			"",
			"bf",
			"zaskrtavaci");
	pridejOtazku(
			"Který zápis barvy v CSS odpovídá modré barvě ? ",
			"#00ff00",
			"#0f0",
			"#f00",
			"#ff0000",
			"#00f",
			"#0000ff",
			"",
			"",
			"",
			"",
			"ef",
			"zaskrtavaci");
	pridejOtazku(
			"[?] Co je serverhousing ?",
			"pronájem webového serveru pro webové servery",
			"mořnost připojení vlasntího serveru k internetu se zveřejněním vlastních webových stránek",
			"pronájem prostoru pro webové stránky na webovém serveru",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"mořnost připojení vlasntího serveru k internetu se zveřejněním vlastních webových stránek",
			"vybiraci");
	pridejOtazku(
			"[?] Co je to zpětný odkaz z pohledu SEO ?",
			"odkaz na externí stylopis",
			"odkaz „zpět“ na úvodní stránku v rámci website",
			"odkaz vedoucí z jiné webové prezentace nebo dokumentu",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"odkaz vedoucí z jiné webové prezentace nebo dokumentu",
			"vybiraci");
	pridejOtazku(
			"[?] Co může být uzlem internetu ?",
			"Specializované zařízení, např. router",
			"Poštovní klient",
			"Webový prohlížeč",
			"Počítač",
			"člověk",
			"",
			"",
			"",
			"",
			"",
			"ad",
			"zaskrtavaci");
	pridejOtazku(
			"Z dlouhodobého hlediska muze byt vyhodnejší",
			"SEO",
			"mezi SEO a SEM neexistuje z časového hlediska rozdíl",
			"SEM",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"SEO",
			"vybiraci");
	pridejOtazku(
			"Z krátkodobého hlediska muze byt vyhodnejší",
			"SEO",
			"mezi SEO a SEM neexistuje z časového hlediska rozdíl",
			"SEM",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"SEM",
			"vybiraci");
	pridejOtazku(
			"[?] může tvurce webove prezentace zběžne zkontrolovat zda je webová prezentace přístupná zrakově handicpaoovaným uživatelům",
			"ano ale s přístupněním jiné nezavislé osoby",
			"ano ale s přístupenením zravkové handicapované osoby",
			"ano",
			"ne",
			"",
			"",
			"",
			"",
			"",
			"",
			"???",
			"vybiraci");
	pridejOtazku(
			"[???] jak pracují s počítačí nebo SW handicapovaní uživatele",
			"mohou k ovládání počítače používat mouze myš",
			"mohou k ovládání počítač jen pomoci klavesnice",
			"mohou ovladate SW jen pomoci klavesnice",
			"nemůžou mit nastaveny vysoky barevny kontrast",
			"",
			"",
			"",
			"",
			"",
			"",
			"???",
			"vybiraci");
	pridejOtazku(
			"[?] Co to je Hypertext?",
			"Zakladni komponenta objektového modelu dokumentu – webove stranky",
			"Soucast CSS",
			"Provazani jednotlivých stranek aktivnimi odkazy",
			"Soucast WWW",
			"Soucast XML",
			"",
			"",
			"",
			"",
			"",
			"Provazani jednotlivých stranek aktivnimi odkazy",
			"vybiraci");
	pridejOtazku(
			"Kolik lidi zije  v CR s tezkym zrakovym postizenim",
			"8-10K",
			"800-1000K",
			"80-100K",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"80-100K",
			"vybiraci");
	pridejOtazku(
			"[???] Co plati pro seznamy z pohledu pristupnosti webu pro zrakove handicapovane uzivatele",
			"Musi byt v textu vyznaceny příslušnou značkou",
			"Musi byt v textu zvyrazneny pomoci formatovacich znacek xhtml",
			"Musi byt v textu vyrazneny formatovani pomoci CSS",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"Musi byt v textu vyznaceny příslušnou značkou",
			"vybiraci");
	pridejOtazku(
			"co to je CPC",
			"platba za urcite obdobi",
			"platba za zobrazeni",
			"platba za proklik",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"platba za proklik",
			"vybiraci");
	pridejOtazku(
			"JavaScript se do html musi vkládat pomoci ",
			"Element <javascript>",
			"Lze vlozenim primo do textu",
			"Element <script>",
			"Element <link>",
			"Element <code>",
			"",
			"",
			"",
			"",
			"",
			"Element <script>",
			"vybiraci");
	pridejOtazku(
			"[???] Z jakých casti se sklada CCS",
			"Ram",
			"Kolerace",
			"Okraj",
			"metada",
			"",
			"",
			"",
			"",
			"",
			"",
			"???",
			"vybiraci");
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
			"",
			"",
			"",
			"",
			"",
			"",
			"vybiraci");



	/*
	 pridejOtazku(
	 "",
	 "",
	 "",
	 "",
	 "",
	 "abcd",
	 "zaskrtavaci");
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
		otazka: escapeHtml(otazka),
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