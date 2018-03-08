const recurse = function (count, limit) {
    console.log(count)
    if (count > limit) {
        return count
        
    } else {
        return recurse(count += 1, limit)
    }
}

console.log(recurse(0, 10))

const batman = function (string, count) {
    if (count > 16) {
        return string + ' Batman!'
    } else {
        return batman(string + 'nah ', count += 1)
    }
}

console.log(batman('', 0))

