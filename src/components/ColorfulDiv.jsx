import React from "react";

function ColorDiv() {
   const colors = [
      "#0A2647",
      "#E80F88",
      "#FFC6D3",
      "#E98EAD",
      "#472183",
      "#E80F88",
      "#864879",
   ];

   function returnrandomColor(colors) {
      const arrayLength = colors.length;
      return Math.floor(Math.random() * (arrayLength - 1)) + 0;
   }

   return (
      <div className="grid-colors">
         <div className="">
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
         </div>
         <div className="small-margin-top">
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
         </div>
         <div className="small-margin-top">
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
            <span
               className="dotted-colors g-col-4"
               style={{ backgroundColor: colors[returnrandomColor(colors)] }}
            ></span>
         </div>
      </div>
   );
}

export default ColorDiv;
