const currentyear = new Date().getFullYear();
const hours = new Date().getHours();

function FullYear() {
   return currentyear;
}

export function Greetings() {
   let greetings = "";

   if (hours < 12) {
      greetings = "Good morning";
   } else if (hours > 12 && hours <= 18) {
      greetings = "Good afternoon";
   } else {
      greetings = "Good evening";
      console.log(greetings, hours);
   }

   return greetings;
}

export default FullYear;
