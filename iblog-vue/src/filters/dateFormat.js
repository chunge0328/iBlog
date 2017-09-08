
const formatDate = (date) => {
    let d = new Date(date)
    let y = d.getFullYear()
    let m = d.getMonth() + 1
    let da = d.getDate()
    return y + '-' + to2(m) + '-' + to2(da)
}

const to2 = (val) => {
    return val > 9 ? ''+val : '0'+val
}

export default formatDate  
