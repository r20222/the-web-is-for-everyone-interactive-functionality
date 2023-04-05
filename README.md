> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving 📋
<!-- In de Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->

In de persoonlijke omgeving van Pepijn op de Vini Mini website kan je notities toevoegen en notities teruglezen.

<!-- Voeg een mooie poster visual toe 📸 -->

### Mobile-first 📱
![image](https://user-images.githubusercontent.com/101579892/229311985-febf09e7-9292-44c8-85e0-5e0e7cfffae0.png)

### Desktop 🖥️
![image](https://user-images.githubusercontent.com/101579892/229796711-c323c3b0-ecbb-45fd-8ed7-7fea0399f995.png)


<!-- Voeg een link toe naar Github Pages 🌐-->

https://dull-pear-swallow-coat.cyclic.app/ 

## Gebruik 🔌
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->

Bij dit project heb ik gedacht aan user-story #13: Als ouder wil ik in een dagboek aantekeningen kunnen maken zodat ik niet vergeet wat er is gebeurd.
Aangezien we notities konden posten heb ik het zo gelaten en er geen dagboek van gemaakt. Nu kan je dus notities lezen en ook posten.

## Kenmerken 📽️
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

Bij het maken van deze webpagina heb ik gebruik gemaakt van:

* Node.JS
* Express
* Ejs
* CSS
* JavaScript
* Gitignore
* .env

Dankzij node.js heb ik in de partials map een head.ejs en foot.ejs staan die ik op elke pagina makkelijk kan toevoegen zodat ik mezelf minder hoef te herhalen. 
In de index.js maak ik gebruik van express om routes te maken zodat ik data kan halen en posten uit en naar de API.
Waar ik erg blij mee ben dat mij gelukt is te maken is een formulier waarvan de data wordt gepost naar de API.
In CSS ben ik heel tevreden dat ik een carroussel heb gemaakt ook met behulp van JS.
In de .gitignore heb ik de node modules toegevoegd want dat is onnodig om allemaal naar github up te loaden.
Het env bestand was gewoon een test om mee te oefenen maar ik heb er geen belagrijke dingen mee gedaan.


### Wat is Progressive Enhancement? 📞

Progressive enhancement is een ontwikkelingsmethode voor het bouwen van websites. We willen dat websites voor iedereen toegankelijk zijn ongeacht het apparaat dat iemand gebruikt. Daarom is het belangrijk dat we de focus leggen op de belangrijke basisfuncties van de website, zodat deze het ook doen in bijvoorbeeld oude browsers. En pas als dat gemaakt is, dat we ons gaan focussen op bijvoorbeeld leuke animaties en andere toevoegingen.

### Hoe heb ik dit toegepast?

Ik heb de website zo gemaakt dat het ook te gebruiken is als de JavaScript disabled is. Dan zie je namelijk de notities onder elkaar in plaats van dat het een klik carrousel is. Ook heb ik in dat geval extra knoppen toegevoegd waardoor je snel naar boven en onderen kan navigeren.
Zonder JavaScript:

![image](https://user-images.githubusercontent.com/101579892/229312026-19b09f3d-ecff-475d-be9b-2e8c203682c4.png)

Voor de desktop versie is het de website hetzelfde met als zonder JavaScript, alleen is het menu zonder JavaScript nog niet werkend dus daar moet ik nog iets voor gaan bedenken.

## Installatie 🎢
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->

Mijn project is gemaakt met Node.JS en de ejs framework, daarom is het belangrijk om de node.js te downloaden voordat je aan dit project verder werkt.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
