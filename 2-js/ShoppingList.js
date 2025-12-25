/* Declare variable names */
const inputEl = document.querySelector("input");  //get the input element with id= item
const formEl = document.querySelector("#myForm"); //get the form element wieh id= myForm

/* myForm of submit eventlistener */
formEl.addEventListener("submit",function(event){
    event.preventDefault();                       //prevent the default form submission (page reload)
    addItem();                                    //call addItem()
    inputEl.value = "";                           //clear text inside of input txt box
})

/* add shopping item */
function addItem(){
    let inputItem; //input item name in this variable
    
    inputItem = inputEl.value;
    insertNewElement(inputItem);

}

/* create li tag inside of ul tag */
function insertNewElement(item){
    const newElItem = document.createElement('li');               //create li tag obj
    const parentNode = document.querySelector('#shoppingList');   //create ul tag obj

    newElItem.textContent = item;                                 //add item in new list
    parentNode.appendChild(newElItem);                            //append li tag with txt inside of ul tag
}