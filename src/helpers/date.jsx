export const currentyear = new Date().getFullYear();
const hours = new Date().getHours();

export function Greetings() {
   let greetings = "";

   if (hours < 12) {
      greetings = "Good morning";
   } else if ((hours) => 12 && hours <= 18) {
      greetings = "Good afternoon";
   } else {
      greetings = "Good evening";
   }

   return greetings;
}

export default Greetings;
