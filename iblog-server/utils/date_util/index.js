function formatDate(date){
    let d = new Date(date)
    let y = d.getFullYear()
    let m = d.getMonth() + 1
    let da = d.getDate()
    let h = d.getHours()
    let mi = d.getMinutes()
    let s = d.getSeconds()
    return y + '-' + to2(m) + '-' + to2(da) + ' ' + to2(h) + ':' + to2(mi) + ':' + to2(s)
}

function to2 (val){
    return val > 9 ? ''+val : '0'+val
}

module.exports = {
    formatDate: formatDate
}
