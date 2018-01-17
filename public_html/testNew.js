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
		"",
		"",
		"",
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