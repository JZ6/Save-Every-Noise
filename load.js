// file:///C:/Users/yjzuo/Downloads/Every%20Noise%20at%20Once%20-%20indie%20pop.html

let artistsToLoad = ["Noah Adams» ", "Conan Gray» ", "Olivia Willhite» ", "Oh Wonder» ", "Ricky Montgomery» ", "Basia Bulat» ", "Omar Apollo» ", "Edward Sharpe & The Magnetic Zeros» ", "Coconut Records» ", "Sure Sure» ", "Passion Pit» ", "Fitz and The Tantrums» ", "Feist» ", "Claud» ", "San Cisco» ", "Beirut» ", "Louie Zong» ", "WALK THE MOON» ", "Jukebox The Ghost» ", "Miike Snow» ", "Chelsea Cutler» ", "Fiona Apple» ", "The 1975» ", "She & Him» ", "OK Go» ", "The Kooks» ", "The Whitest Boy Alive» ", "Roy Blair» ", "Lykke Li» ", "Still Woozy» ", "Men I Trust» ", "Egg» ", "Jack Stauber's Micropop» ", "Portugal. The Man» ", "flora cash» ", "Fleet Foxes» ", "Grandaddy» ", "Whitney» ", "Vampire Weekend» ", "Ben Folds Five» ", "Ryn Weaver» ", "Peter Bjorn and John» ", "Waxahatchee» ", "half•alive» ", "Albert Hammond, Jr.» ", "Capital Cities» ", "Clairo» ", "Death Cab for Cutie» ", "Unknown Mortal Orchestra» ", "Mother Mother» ", "Laura Marling» ", "Thao & The Get Down Stay Down» ", "ROLE MODEL» ", "Two Door Cinema Club» ", "Camera Obscura» ", "San Fermin» ", "Cage The Elephant» ", "dodie» ", "The Head and the Heart» ", "Tegan and Sara» ", "Alexander 23» ", "The Marías» ", "Rilo Kiley» ", "Sylvan Esso» ", "Foster The People» ", "khai dreams» ", "Electric Guest» ", "Architecture In Helsinki» ", "Kishi Bashi» ", "beabadoobee» ", "MGMT» ", "Bahamas» ", "Tessa Violet» ", "Of Monsters and Men» ", "Regina Spektor» ", "Orla Gartland» ", "Fosternicole» ", "FINNEAS» "];

[...document.getElementsByTagName("div")].forEach(div => {
	div.onclick = () => div.hasAttribute('played') ? div.removeAttribute('played') : div.setAttribute('played', true)
	artistsToLoad.includes(div.textContent) && div.setAttribute("played", true)
})