let playedDivs = [...document.getElementsByTagName("div")]
	.filter(div => div.hasAttribute("played") && div.title)
	.map(div => div.textContent)
// .map(element => console.warn('2', element))

let clipBoardValue = `// ${window.location}\n\n`
clipBoardValue += `let artistsToLoad = ${JSON.stringify(playedDivs)};\n\n`
clipBoardValue += `[...document.getElementsByTagName("div")].forEach(div => {
	div.onclick = () => div.hasAttribute('played') ? div.removeAttribute('played') : div.setAttribute('played', true)
	artistsToLoad.includes(div.textContent) && div.setAttribute("played", true)
})`

let el = document.createElement('textarea')

el.value = clipBoardValue
el.setAttribute('readonly', '')
el.style = { position: 'absolute', left: '-9999px' }

document.body.appendChild(el)
el.select()
document.execCommand('copy')
document.body.removeChild(el)
