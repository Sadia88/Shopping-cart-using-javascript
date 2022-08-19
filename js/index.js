
function UpdateNumber(isIncrease){
    const inputFieldCaseId=document.getElementById('inputField-case')
    inputFieldCaseString=inputFieldCaseId.value
     const inputFieldCase=parseInt(inputFieldCaseString)
     let  InputFieldCase;
     if(isIncrease){
        InputFieldCase=inputFieldCase+1;
     }
     else{
        InputFieldCase=inputFieldCase-1;
     }

     inputFieldCaseId.value=InputFieldCase
     return InputFieldCase
}

function totalcaseamout(upadtedNumber){
    const casecost=upadtedNumber*59
    let caseAmountId=document.getElementById('case-amount')
    caseAmountId.innerText=casecost
    getTotalamount()

}
// console.log('connected')
document.getElementById('btn-plus-case').addEventListener('click',function(){


const upadtedNumber=UpdateNumber(true)
totalcaseamout(upadtedNumber)
   

})

document.getElementById('btn-minus-case').addEventListener('click',function(){

    const upadtedNumber=UpdateNumber(false)
    totalcaseamout(upadtedNumber)
    
    })









    function UpdateNumberPhone(isIncrease){
        const inputFieldCaseIdPhone=document.getElementById('inputField-phone')
        inputFieldCaseStringPhone=inputFieldCaseIdPhone.value
         const inputFieldCasePhone=parseInt(inputFieldCaseStringPhone)
         let  InputFieldCasePhone;
         if(isIncrease){
            InputFieldCasePhone=inputFieldCasePhone+1;
         }
         else{
            InputFieldCasePhone=inputFieldCasePhone-1;
         }
    
         inputFieldCaseIdPhone.value=InputFieldCasePhone
         return InputFieldCasePhone
    }
    
    function totalcaseamoutPhone(upadtedNumberPhone){
        const casecostPhone=upadtedNumberPhone*1219
        let caseAmountIdPhone=document.getElementById('phone-amount')
        caseAmountIdPhone.innerText=casecostPhone
        getTotalamount()
    
    }
    // console.log('connected')
    document.getElementById('btn-plus-phone').addEventListener('click',function(){
    
    
    const upadtedNumberPhone=UpdateNumberPhone(true)
    totalcaseamoutPhone(upadtedNumberPhone)
       
    
    })
    
    document.getElementById('btn-minus-phone').addEventListener('click',function(){
    
        const upadtedNumberPhone=UpdateNumberPhone(false)
        totalcaseamout(upadtedNumberPhone)
        
        })



function getTotalamount(){
    const subTotalId=document.getElementById('sub-total')
    const subTotal=parseFloat(subTotalId.innerText)
    let caseAmountIdPhone=parseInt(document.getElementById('phone-amount').innerText)
    let caseAmountId=parseInt(document.getElementById('case-amount').innerText)
    const subTotalAmount=caseAmountIdPhone+caseAmountId
    console.log(typeof(subTotalAmount))
    subTotalId.innerText= subTotalAmount




    const Taxid=document.getElementById('tax')
    const tax=parseFloat(Taxid.innerText)
     const taxAmount=parseFloat((subTotalAmount*.0134).toFixed(2))
     
     Taxid.innerText=taxAmount

     
    const totalid=document.getElementById('total')
    const total=parseFloat(Taxid.innerText)

     const totalAmount=subTotalAmount+taxAmount
     totalid.innerText=totalAmount


}
    
    
    