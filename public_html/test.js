var n = 0;
var otazky = new Array();
var odpovezene = new Array();
var spatneOtazky = new Array();

var spravne = 0;
var spatne = 0;

var otazka;

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
		}
		else{
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

	var str2;
	str2 = '<div id="form">' + otazka.otazka + '<br>';
	do {
		while (true) {
			rand = Math.floor((Math.random() * 4));
			if (used.indexOf(rand) >= 0)
				;
			else
				break;
		}
		
		used.push(rand);
		
		if(otazka.typ == "vybiraci")
		{
			switch(rand){
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
			}
		}
		else
		{
			switch(rand){
				case 0:
					str2 += '<br><input id="a" type="checkbox" name="a" value="'+ String.fromCharCode(97 + numOfQuestion) +'">' + '<span id="aa"> ' + otazka.a + '</span>';
					break;
				case 1:
					str2 += '<br><input id="b" type="checkbox" name="a" value="'+ String.fromCharCode(97 + numOfQuestion) +'">' + '<span id="bb"> ' + otazka.b + '</span>';
					break	
				case 2:
					str2 += '<br><input id="c" type="checkbox" name="a" value="'+ String.fromCharCode(97 + numOfQuestion) +'">' + '<span id="cc"> ' + otazka.c + '</span>';
					break;
				case 3: 
					str2 += '<br><input id="d" type="checkbox" name="a" value="'+ String.fromCharCode(97 + numOfQuestion) +'">' + '<span id="dd"> ' + otazka.d + '</span>';
					break;
			}	
		}
		numOfQuestion++;

	} while (used.length != 4)
	
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
	if(otazka.typ == "vybiraci")
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
	if (otazka.odpoved.indexOf("d") > -1) {
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

	if (document.getElementById("a").checked == false &&
			document.getElementById("b").checked == false &&
			document.getElementById("c").checked == false &&
			document.getElementById("d").checked == false) {
		if (otazka.odpoved.indexOf("b") > -1)
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("c") > -1)
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("d") > -1)
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
		if (otazka.odpoved.indexOf("a") > -1)
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
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
			else if (otazka.d == otazka.odpoved)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';

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
			else if (otazka.d == otazka.odpoved)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';

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
			else if (otazka.d == otazka.odpoved)
				document.getElementById("dd").style.backgroundColor = 'LightGreen';

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
			else if (otazka.a == otazka.odpoved)
				document.getElementById("aa").style.backgroundColor = 'LightGreen';

			document.getElementById("check").innerHTML = '<p style="color:red">Špatně!</p>' +
					'Správná odpověď je: ' + otazka.odpoved;
			spatne++;
			spatneOtazky.push(otazka);
		}
	} else {
		if (otazka.b == otazka.odpoved)
			document.getElementById("bb").style.backgroundColor = 'LightGreen';
		else if (otazka.c == otazka.odpoved)
			document.getElementById("cc").style.backgroundColor = 'LightGreen';
		else if (otazka.d == otazka.odpoved)
			document.getElementById("dd").style.backgroundColor = 'LightGreen';
		else if (otazka.a == otazka.odpoved)
			document.getElementById("aa").style.backgroundColor = 'LightGreen';
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
			"-",
			"#0000ff",
			"vybiraci");
	pridejOtazku(
			"Který zápis odpovídá zelené barvě?",
			"#ff0000",
			"#0000ff",
			"#00ff00",
			"-",
			"#00ff00",
			"vybiraci");
	pridejOtazku(
			"Který zápis odpovídá červené barvě?",
			"#ff0000",
			"#0000ff",
			"#00ff00",
			"-",
			"#ff0000",
			"vybiraci");
	pridejOtazku(
			"Jakým způsobem se zrakově handicapovaný uživatel pohybuje tabulkou na WWW stránce pomocí hlasových nebo hmatových výstupů?",
			"po sloupcích",
			"po řádcích",
			"po diagonálách",
			"-",
			"po řádcích",
			"vybiraci");
	pridejOtazku(
			"Dle metodického návrhu Blind Friendly Web 2.3 veškeré grafické prvky, které slouží kovládání stránky, musí mít:",
			"flashovou alternativu",
			"textovou alternativu",
			"JavaScript alternativu",
			"Java alternativu",
			"textovou alternativu",
			"vybiraci");
	pridejOtazku(
			"Dle metodického návrhu Blind Friendly Web 2.3 veškeré grafické prvky, které slouží kovládání stránky, musí mít:",
			"flashovou alternativu",
			"textovou alternativu",
			"grafickou alternativu",
			"Java alternativu",
			"textovou alternativu",
			"vybiraci");
	pridejOtazku(
			"Jakým způsobem se zrakově handicapovaný uživatel pohybuje po WWW stránce pomocí hlasových nebo hmatových výstupů?",
			"po řádcích od pravého horního rohu do pravého dolního rohu",
			"po sloupcích od pravého horního rohu do levého dolního rohu",
			"po řádcích od levého horního rohu do pravého dolního rohu",
			"po sloupcích od levého horního rohu do pravého dolního rohu",
			"po řádcích od levého horního rohu do pravého dolního rohu",
			"vybiraci");
	pridejOtazku(
			"Která instituce (konsorcium) stanovuje standardy pro WWW?",
			"IEEE",
			"ISO",
			"W3C",
			"ISOC",
			"W3C",
			"vybiraci");
	pridejOtazku(
			"Která instituce (konsorcium) stanovuje standardy pro WWW?",
			"IEEE",
			"ISO",
			"W3C",
			"IAB",
			"W3C",
			"vybiraci");
	pridejOtazku(
			"Jaká je obecná syntaxe CSS (Cascading Style Sheets)",
			"hodnoty od vlastností jsou odděleny pomlčkou, vlastni navzájem jsou odděleny dvojtečkou, viz. vlastnost1 – hodnota: vlastnost2 – hodnota:",
			"hodnoty od vlastností jsou odděleny středníkem, vlastni navzájem jsou odděleny dvojtečkou, viz. vlastnost1; hodnota: vlastnost2; hodnota:",
			"hodnoty od vlastností jsou odděleny dvojtečkou, vlastni navzájem jsou odděleny středníkem, viz. vlastnost1: hodnota; vlastnost2: hodnota;",
			"hodnoty od vlastností jsou odděleny pomlčkou, vlastni navzájem jsou odděleny středníkem, viz. vlastnost1 – hodnota; vlastnost2 – hodnota;",
			"hodnoty od vlastností jsou odděleny dvojtečkou, vlastni navzájem jsou odděleny středníkem, viz. vlastnost1: hodnota; vlastnost2: hodnota;",
			"vybiraci");
	pridejOtazku(
			"Každá WWW stránka by měla mít své hlavní sdělení:",
			"na začátku",
			"ve 2/3 stránky",
			"na konci",
			"v polovině stránky",
			"na začátku",
			"vybiraci");
	pridejOtazku(
			"Jaké deklarování stylopisu je z hlediska Web Site nejvýhodnější?",
			"přímo v textu zdroje u formátovaného elementu pomocí atributu style",
			"použitím externího stylopisu – externího souboru *.css, na který se stránka odkazuje tagem \<link …. \/\>",
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
			"vybiraci");
	pridejOtazku(
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

function pridejOtazku(otazka, a, b, c, d, odpoved, typ) {
	var q = {
		a: escape(a),
		b: escape(b),
		c: escape(c),
		d: escape(d),
		otazka: escape(otazka),
		odpoved: escape(odpoved),
		typ: typ
	};

	otazky.push(q);
}