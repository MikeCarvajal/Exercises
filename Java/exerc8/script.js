const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1; // Months are zero-based in JavaScript
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate = `${day}-${month}-${year}`;
// console.log(formattedDate);
currentDateParagraph.textContent = formattedDate;
// const exampleSentence = "selur pmaCedoCeerf".split("").reverse().join("");
// console.log(exampleSentence);
dateOptionsSelectElement.addEventListener("change", () => {
    sitch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate;
            .split("-").reverse().join("-");
            break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
        default
        currentDateParagraph.textContent = formattedDate;
    }
    // const selectedOption = dateOptionsSelectElement.value;
    // let formattedDate;
    
    // switch (selectedOption) {
    //     case "dd-mm-yyyy":
    //     formattedDate = `${day}-${month}-${year}`;
    //     break;
    //     case "mm-dd-yyyy":
    //     formattedDate = `${month}-${day}-${year}`;
    //     break;
    //     case "yyyy-mm-dd":
    //     formattedDate = `${year}-${month}-${day}`;
    //     break;
    //     case "dd/mm/yyyy":
    //     formattedDate = `${day}/${month}/${year}`;
    //     break;
    //     case "mm/dd/yyyy":
    //     formattedDate = `${month}/${day}/${year}`;
    //     break;
    //     case "yyyy/mm/dd":
    //     formattedDate = `${year}/${month}/${day}`;
    //     break;
    //     default:
    //     formattedDate = "";
    // }
    
    currentDateParagraph.textContent = formattedDate;
});