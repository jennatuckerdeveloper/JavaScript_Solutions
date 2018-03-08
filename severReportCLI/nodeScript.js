process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
    dataObject = JSON.parse(data)
    newData = sortNodes(dataObject)
  process.stdout.write(JSON.stringify(newData))
});


const sortNodes = function (nodeJSON) {
    let jsonCopy = Object.assign({}, nodeJSON)
    let jsonReturned = {}
    for (let nodeListed in jsonCopy) {
        let attributesList = Object.keys(jsonCopy[nodeListed])
        attributesList.map((e) => { if (! jsonReturned[e]) { jsonReturned[e] = {} } })
        let attributeValuePairs = Object.entries(jsonCopy[nodeListed])
        attributeValuePairs.map((e) => { 
            if (! jsonReturned[e[0]][e[1]]) { 
                jsonReturned[e[0]][e[1]] = [] 
            } 
            jsonReturned[e[0]][e[1]].push(nodeListed)
        }) 
    }
        return jsonReturned
    }

    