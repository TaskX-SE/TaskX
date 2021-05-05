export default function getDateTime(date){
    return new Date(date).toLocaleString('en-US', {timeZone: "Asia/Kolkata"})
}