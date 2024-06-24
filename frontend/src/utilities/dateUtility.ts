
class dateUtility {

    formatDate(dateString: Date) {
       const date = new Date(dateString);
         const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
       const months = [
         "January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"
       ];
     
       const dayOfWeek = weekdays[date.getDay()]; 
       const month = months[date.getMonth()];
       const day = date.getDate();
       const year = date.getFullYear();
       const hours = date.getHours().toString().padStart(2, '0');
       const minutes = date.getMinutes().toString().padStart(2, '0');
   
       return `${dayOfWeek}, ${month} ${day}, ${year}, ${hours}:${minutes}`;
    }
}

export default new dateUtility();