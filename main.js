	
function reload() {

	// first
	var xhr = new XMLHttpRequest(); 
	xhr.open('GET', 'https://itineraires.taneo.nc/fr/itineraire/horaires?stopAreaId=KARUIA%3A1%3ANLAPI&stopPointId=KARUIA%3A0%3ANLAPI02&lineId=KARUIA%3AL5&startDateTime=2022-01-01%2015%3A52%3A00');
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4) {
	    var reponse = xhr.responseText.match(/\d+/g)[8];
	    if (reponse == "1") reponse = reponse + " minute";
	    else reponse = reponse + " minutes"
	    document.querySelector('span.first').textContent = reponse;
	  }
	};
	xhr.send();


	// second
	var xhr2 = new XMLHttpRequest(); 
	xhr2.open('GET', 'https://itineraires.taneo.nc/fr/itineraire/horaires?stopAreaId=KARUIA%3A1%3ANGALA&stopPointId=KARUIA%3A0%3ANGALA02&lineId=KARUIA%3AL5&startDateTime=2022-01-01%2015%3A52%3A00');
	xhr2.onreadystatechange = function() {
	  if (xhr2.readyState === 4) {
	    var reponse = xhr2.responseText.match(/\d+/g)[8];
	    if (reponse == "1") reponse = reponse + " minute";
	    else reponse = reponse + " minutes"
	    document.querySelector('span.second').textContent = reponse;
	  }
	};
	xhr2.send(); 


	// troisieme
	var xhr3 = new XMLHttpRequest(); 
	xhr3.open('GET', 'https://itineraires.taneo.nc/fr/itineraire/horaires?stopAreaId=KARUIA%3A1%3ANGALA&stopPointId=KARUIA%3A0%3ANGALA03&toStopAreaId=KARUIA%3A1%3ANLAPI&toStopPointId=KARUIA%3A0%3ANLAPI03&lineId=KARUIA%3AL5&destinationDisplay=DILLENSEGER&startDateTime=2022-01-16%2012%3A24%3A00&direction=RETURN');
	xhr3.onreadystatechange = function() {
	  if (xhr3.readyState === 4) {
	    var reponse = xhr3.responseText.match(/\d+/g)[8];
	    if (reponse == "1") reponse = reponse + " minute";
	    else reponse = reponse + " minutes"
	    document.querySelector('span.troisieme').textContent = reponse;
	  }
	};
	xhr3.send();

	// quatrieme 
	var xhr4 = new XMLHttpRequest(); 
	xhr4.open('GET', 'https://itineraires.taneo.nc/fr/itineraire/horaires?stopAreaId=KARUIA%3A1%3ANLJUL&stopPointId=KARUIA%3A0%3ANLJUL02&toStopAreaId=ISSTOPPLACE%3ATAD%3A1%3ANPLMO%3AKARUIA%3A1%3ANPLMO&toStopPointId=KARUIA%3A0%3ANPLMO07&lineId=KARUIA%3AL3&destinationDisplay=OUEN%20TORO&startDateTime=2022-01-16%2012%3A15%3A00&direction=OUTWARD');
	xhr4.onreadystatechange = function() {
	  if (xhr4.readyState === 4) {
	    var reponse = xhr4.responseText.match(/\d+/g)[8];
	    if (reponse == "1") reponse = reponse + " minute";
	    else reponse = reponse + " minutes"
	    document.querySelector('span.quatrieme').textContent = reponse;
	  }
	};
	xhr4.send(); 

	// cinquieme 
	var xhr5 = new XMLHttpRequest(); 
	xhr5.open('GET', 'https://itineraires.taneo.nc/fr/itineraire/horaires?stopAreaId=KARUIA%3A1%3ANLJUL&stopPointId=KARUIA%3A0%3ANLJUL02&toStopAreaId=ISSTOPPLACE%3AKARUIA%3A1%3ANDESM%3ACARSUD%3A1%3ANDESM&toStopPointId=KARUIA%3A0%3ANDEMA03&lineId=KARUIA%3AL6&destinationDisplay=NAISSELINE&startDateTime=2022-01-16%2012%3A06%3A00&direction=RETURN');
	xhr5.onreadystatechange = function() {
	  if (xhr5.readyState === 4) {
	    var reponse = xhr5.responseText.match(/\d+/g)[8];
	    if (reponse == "1") reponse = reponse + " minute";
	    else reponse = reponse + " minutes"
	    document.querySelector('span.cinquieme').textContent = reponse;
	  }
	};
	xhr5.send(); 


	setTimeout('reload', 30000);
}

reload();
