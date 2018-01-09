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