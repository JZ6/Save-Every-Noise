[...document.getElementsByTagName('div')].forEach(div => div.onclick = () => div.hasAttribute('played') ? div.removeAttribute('played') : div.setAttribute('played', true));["item15", "item24", "item39", "item50", "item53", "item54", "item70", "item72", "item90", "item91", "item95", "item100", "item112", "item118", "item125", "item138", "item159", "item170", "item178", "item187", "item243", "item258", "item260", "item265", "item267", "item282", "item291", "item297", "item302", "item312", "item322", "item330", "item336", "item338", "item339", "item350", "item353", "item369", "item373", "item378", "item379", "item397", "item399", "item407", "item423", "item426", "tunnel"].forEach(id => document.getElementById(id).setAttribute("played", true))