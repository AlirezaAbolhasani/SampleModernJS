const formExpense = document.querySelector("#formExpense");
const formDesc = document.querySelector("#desc");
const formAmountInput = document.querySelector("#inputAmount");
const frmTotalAmnt = document.querySelector("#totalAmnt")

//Array
const totalAmntArr = [];

formExpense.addEventListener("submit",(e)=>{
    e.preventDefault();
    const desc =  formDesc.value.trim();
    const amount = formAmountInput.value.trim();

    console.log("Desc = ",desc ,'Amount =' , amount);

    totalAmntArr.push({desc,amount});
    formAmountInput.value ="";
    formDesc.value = "";
    addToArray();

});

const addToArray = ()=>{
    
    let totalAmnt_ = 0 ;

    for( let i = 0 ; i < totalAmntArr.length; i++){
        totalAmnt_ += parseFloat(totalAmntArr[i].amount);
    }

    frmTotalAmnt.textContent = totalAmnt_.toLocaleString("fa-IR");

}