const map = ""+
  " \\~\\|  ~~---___              ,                          | \\     \n"+
  "  | Wash./ |   ~~~~~~~|~~~~~| ~~---,                VT_/,ME>       \n"+
  " /~-_--__| |  Montana |N Dak\\ Minn/ ~\\~~/Mich.     /~| ||,'      \n"+
  " |Oregon /  \\         |------|   { WI / /~)     __-NY',|_\\,NH    \n"+
  "/       |Ida.|~~~~~~~~|S Dak.\\    \\   | | '~\\  |_____,|~,-'Mass.\n"+
  "|~~--__ |    | Wyoming|____  |~~~~~|--| |__ /_-'Penn.{,~Conn (RI)  \n"+
  "|   |  ~~~|~~|        |    ~~\\ Iowa/  `-' |`~ |~_____{/NJ         \n"+
  "|   |     |  '---------, Nebr.\\----| IL|IN|OH,' ~/~\\,|`MD (DE)   \n"+
  "',  \\ Nev.|Utah| Colo. |~~~~~~~|    \\  | ,'~~\\WV/ VA |          \n"+
  " |Cal\\    |    |       | Kansas| MO  \\_-~ KY /`~___--\\          \n"+
  " ',   \\  ,-----|-------+-------'_____/__----~~/N Car./            \n"+
  "  '_   '\\|     |      |~~~|Okla.|    | Tenn._/-,~~-,/             \n"+
  "    \\    |Ariz.| New  |   |_    |Ark./~~|~~\\    \\,/S Car.       \n"+
  "     ~~~-'     | Mex. |     `~~~\\___|MS |AL | GA /                \n"+
  "         '-,_  | _____|          |  /   | ,-'---~\\                \n"+
  "             `~'~  \\    Texas    |LA`--,~~~~-~~,FL\\              \n"+
  "                    \\/~\\      /~~~`---`         |  \\            \n"+
  "                        \\    /                   \\  |            \n"+
  "                         \\  |                     '\\'            \n"+
  "                          `~'                                      \n"+
  ""

(() => {
  const root = document.getElementById('root')

  const makeRow = (points) => {
    const pre = document.createElement('pre')

    pre.className += "row"
    pre.style.fontFamily += "monospace"
    pre.style.lineHeight = "0.1"

    points.forEach(point => { pre.innerText += point })

    return pre
  }

  const makeMap = (mapRows) => {
    mapRows.forEach(row => { root.appendChild(makeRow(row)) })
  }

  const _map = map.split('\n').map(r => r.split(''))

  makeMap(_map)
})()
