function stringDecoder(song) {
    return song.replaceAll(new RegExp("(WUB){1,}", "gm"), " ").trim()
}

function phone(strng, num) {
    let matches = strng.match(new RegExp(num, "gm")) ?? []
    if (matches.length == 0)
        return "Error => Not found: " + num
    else if (matches.length > 1)
        return "Error => Too many people: " + num
    else {
        let re = new RegExp(`(.)*${num}(.)*`, "g")
        let data = strng.match(re)[0]
        const telMatch = /.?\+(\d{1,2}-\d\d\d-\d\d\d-\d\d\d\d).?/
        const nameMatch = /<(.*)>/
        const tel = data.match(telMatch)[1]
        const name = data.match(nameMatch)[1]
        const address = data.replaceAll(new RegExp(nameMatch.source, "gm"), "").replaceAll(new RegExp(telMatch.source, "gm"), "").replaceAll("_", " ").trim()

        return `Phone => ${tel}, Name => ${name}, Address => ${address}`
    }
}

module.exports = { stringDecoder, phone }