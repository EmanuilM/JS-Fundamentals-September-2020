function solve(arr = [] ) {
    return arr.reduce((a, b) => {
        if (!a.includes(b)) a.push(b)
        return a
    }, []).join(' ')
}
