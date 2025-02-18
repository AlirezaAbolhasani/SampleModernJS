const formExpense = document.querySelector("#formExpense");
const formDesc = document.querySelector("#desc");
const formAmountInput = document.querySelector("#inputAmount");
const frmTotalAmnt = document.querySelector("#totalAmnt");
const frmExpenseBody = document.querySelector("#expanseBody");

//Array
let totalAmntArr = [];

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


const showInPage = ()=>{
    
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

const removeExpense=(index)=> {
    totalAmntArr = totalAmntArr.filter(( _ , i ) => i !== index);
    showInPage();
};
