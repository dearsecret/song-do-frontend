export const formatDate = (n: number) =>{
    const arr = new Array()
    const now = new Date()
    for (let i=0; i<n; i++ ){
        const targetDate = new Date(now.getTime()+now.getTimezoneOffset()*60*1000).toJSON().split("-").slice(0,2).join('')
        arr.push(targetDate)
        now.setDate(0)
    }
    return arr
}

export const korTime = (diff=0) => {
    const now = new Date();
    const utc =  now.getTime() + now.getTimezoneOffset()*60*1000
    const krt = new Date(utc + (9-diff)*60*60*1000)
    return krt
}

export const formatTime =(diff=0)=>{
    const krt = korTime(diff=diff)
    const month = ('0'+(krt.getMonth()+1).toString()).slice(-2)
    const day = ('0'+krt.getDate().toString()).slice(-2)

    const preHour = ("0" +(krt.getHours()).toString()).slice(-2)
    const yyyymmdd = `${krt.getFullYear()}${month}${day}`
    return {yyyymmdd ,preHour}
}