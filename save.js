let playedDivs = [...document.getElementsByTagName("div")]
   .filter(div => div.hasAttribute("played"))
   .map(div => div.id)

let clipBoardValue = `[...document.getElementsByTagName('div')].forEach(div => div.onclick = () => div.hasAttribute('played') ? div.removeAttribute('played') : div.setAttribute('played', true));`
clipBoardValue += `${JSON.stringify(playedDivs)}.forEach(id => document.getElementById(id).setAttribute("played", true))`

let el = document.createElement('textarea')
el.value = clipBoardValue

el.setAttribute('readonly', '')
el.style = { position: 'absolute', left: '-9999px' }

document.body.appendChild(el)
el.select()
document.execCommand('copy')
document.body.removeChild(el)
