

const att = (image) => {
    let aDiv = document.createElement("div")
    aDiv.innerHTML = `<img class="bigP" src="/Activities/sir Arl_WS101/IMGS/${image}>`

    return aDiv
}
const bAtt = (image) => {
    let cDiv = document.createElement("div")
    cDiv.innerHTML = `<img class="sOne" src="/Activities/sir Arl_WS101/IMGS/${image}>`

    return cDiv
}

const bATt = (image) => {
    let cDivO = document.createElement("div")
    cDivO.innerHTML = `<img class="sTwo" src="/Activities/sir Arl_WS101/IMGS/${image}>`

    return cDivO
}

const bATT = (image) => {
    let cDivT = document.createElement("div")
    cDivT.innerHTML = `<img class="sThr" src="/Activities/sir Arl_WS101/IMGS/${image}>`

    return cDivT
}

export {att, bAtt, bATt, bATT}