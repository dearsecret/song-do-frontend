export const formatDate = (n: number) =>{
    const arr = new Array()
    const now = new Date()
    for (let i=0; i<n; i++ ){
        const targetDate = new Date(now.getTime()-now.getTimezoneOffset()*60*1000).toJSON().split("-").slice(0,2).join('')
        arr.push(targetDate)
        now.setDate(0)
    }
    return arr
}
