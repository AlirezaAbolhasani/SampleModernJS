
const formExpense = document.querySelector("#formExpense");
const formDesc = document.querySelector("#desc");
const formAmountInput = document.querySelector("#inputAmount");
const frmTotalAmnt = document.querySelector("#totalAmnt");
const frmExpenseBody = document.querySelector("#expanseBody");

//Array
let totalAmntArr = [];

//A Anonymous Function 
// @param By a listener get data from page's text boxes and 
// @Output push in a array and set empty text boxes
formExpense.addEventListener("submit",(e)=>{
    e.preventDefault();
    const desc =  formDesc.value.trim();
    const amount = formAmountInput.value.trim();
    console.log("Desc = ",desc ,'Amount =' , amount);
    totalAmntArr.push({desc,amount});
    formAmountInput.value ="";
    formDesc.value = "";
    frmExpenseBody.innerHTML = "";

    showInPage();
});

//A Anonymous Function
// @param null
// @Output calculate totalAmnt for show in bellow table in web page and add as a row to table
const showInPage = () => {
    let totalAmnt_ = 0 ;
    let body ='';
    for( let i = 0 ; i < totalAmntArr.length; i++){
        totalAmnt_ += +totalAmntArr[i].amount;
    }
    for(let j = 0 ; j < totalAmntArr.length ; j++){
        body += `<tr><td> ${totalAmntArr[j].desc}</td>
                 <td>${parseFloat(totalAmntArr[j].amount).toLocaleString("fa-IR")}</td>
                 <td> <button onclick="removeExpense(${j})">....</button></td></tr>
        `;
    }
    frmTotalAmnt.textContent = totalAmnt_.toLocaleString("fa-IR");
    frmExpenseBody.innerHTML = body;
}

//A Anonymous Function
// @param a index from a array
// @Output delete that index from global array totalAmntArr
const removeExpense = (index) => {
    totalAmntArr = totalAmntArr.filter(( _ , i ) => i !== index);
    showInPage();
}

//A Function
// @param a color for tempelate 
// @Output changing your background color to { Dark or light} mode
function changingPageColor (Template) {
    document.querySelector('html').setAttribute('data-theme', Template);
    if (Template === 'dark') {
        document.querySelector('#dark-btn').style.display = "none";
        document.querySelector('#light-btn').style.display = "block"; // نمایش دکمه light		

    } else {
        document.querySelector('#light-btn').style.display = "none";
        document.querySelector('#dark-btn').style.display = "block"; // نمایش دکمه dark
    }
}
