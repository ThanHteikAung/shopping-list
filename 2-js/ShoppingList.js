/* Declare variable names */
const inputEl = document.querySelector("input");  //get the input element
const formEl = document.querySelector("#myForm"); //get the form element with id= myForm
const ulEl = document.querySelector("ul");        //get the ul element
let arryItemList = new Array;

/* myForm of submit eventlistener */
formEl.addEventListener("submit", function (event) {
    event.preventDefault();                       //prevent the default form submission (page reload)
    addItemFun();                                    //call addItem()
    document.getElementById("myForm").reset();    //clear text inside of input txt box
})

/* li tag eventListener */
ulEl.addEventListener("click", function (event) {
    let removeItem;

    event.preventDefault();
    removeItem = event.target.textContent;
    const lastItem = document.querySelector(`#${removeItem}`);
    lastItem.remove();

})

/* add shopping item */
function addItemFun() {
    let inputItem;     //input item name in this variable
    let deleSpaceItm;  //save vaule after remove whitespace

    inputItem = inputEl.value;
    deleSpaceItm = inputItem.trim();

    /* not allow to add empty data and same shopping item */
    if (deleSpaceItm.length !== 0 && arryItemList.includes(deleSpaceItm) === false) {
        insertNewElement(inputItem);
    }

}

/* create li tag inside of ul tag */
function insertNewElement(item) {
    const newElItem = document.createElement('li');               //create li tag obj
    const parentNode = document.querySelector('#shoppingList');   //create ul tag obj

    newElItem.textContent = item;                                 //add item in new list
    newElItem.id = item;                                          //setup id name
    parentNode.appendChild(newElItem);                            //append li tag with txt inside of ul tag
    arryItemList.push(item);                                      //save item in array

}