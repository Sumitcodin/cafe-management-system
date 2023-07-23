var menuGrid = [
  {
    class: "coffee-grid",
    display: "none",
  },
  {
    class: "tea-grid",
    display: "none",
  },
  {
    class: "pastry-grid",
    display: "none",
  },
  {
    class: "fast-food-grid",
    display: "none",
  },
  {
    class: "beverage-grid",
    display: "none",
  },
  {
    class: "sweets-grid",
    display: "none",
  },
  {
    class: "chocolate-grid",
    display: "none",
  },
];

function displayGridByClassNameAndHideOthers(className) {
  this.menuGrid.forEach((element) => {
    if (element.class === className) {
      console.log(className);
      // console.log(document.getElementById(element.class))
      // console.log(document.getElementById(element.class).style.display);
      var ele = document.getElementById(className);
      ele.style.display = "grid";
      console.log(ele.style);
      // document.getElementById(className).style.display = 'grid'
      element.display = "grid";
    } else {
      element.display = "none";
      document.getElementById(className).style.display = element.display;
    }
  });
}

function displayCurrentGridAndHideOthers(className) {
  // console.log(className)
  document.getElementById(className).style.display = "grid";
  // this.displayGridByClassNameAndHideOthers(className)
  console.log(this.menuGrid);
}

function bookTable(event) {
//   console.log(event.srcElement[0].value);
//   console.log(event.srcElement[1].value);
//   console.log(event.srcElement[2].value);
//   console.log(event.srcElement[3].value);
//   console.log(event.srcElement[4].value);
//   console.log(event.srcElement[5].value);

  document.getElementById("book-name").innerText = event.srcElement[0].value;
  document.getElementById("book-email").innerText = event.srcElement[1].value;
  document.getElementById("book-date").innerText = event.srcElement[2].value;
  document.getElementById("book-time").innerText = event.srcElement[3].value;
  document.getElementById("book-guest").innerText = event.srcElement[4].value;
  document.getElementById("book-table").innerText = event.srcElement[5].value;

  document.getElementById("booking-cnf-popup").style.display = "flex";

  event.preventDefault();
}

//         const tableForm = document.getElementById("table-booking-form");
// console.log('tableForm', tableForm);
// tableForm.addEventListener("submit", bookTable);

function closeBookingCnfWindow() {
//   console.log("clicked");
  document.getElementById("booking-cnf-popup").style.display = "none";
}

var carItems = [];

function storeCartItem(data) {

//   console.log(carItems);

  var foundAt
for (let index = 0; index < carItems.length; index++) {
    const element = carItems[index];
    if(element.item === data.item){
        foundAt = index
    }
    
}

if( foundAt !== undefined){
    // console.log(foundAt)
    let item = carItems[foundAt]
    // console.log(item)
    item.qty = item.qty + data.qty
    carItems[foundAt] = item
}else{
    carItems.push(data)
}
    
var x = document.getElementById("snackbar")

// Add the "show" class to DIV
x.className = "show";

// After 3 seconds, remove the show class from DIV
setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2500);
  

//   console.log(carItems);
}



function cart(data){

    // console.log(carItems)

    var ul = document.getElementById("cart-item-ul")
    ul.innerHTML = ''


    var totalPrice = 0
    carItems.forEach(item => {

        var li = document.createElement('li')

        var rowdiv = document.createElement('div')
        rowdiv.setAttribute("class","item-row")

        var itemNameDiv = document.createElement('div')
        itemNameDiv.innerText = item.item

        var itemQtyDiv = document.createElement('div')
        itemQtyDiv.innerText = "X"+item.qty.toString()

        var itemPriceDiv = document.createElement('div')
        itemPriceDiv.innerText = "Rs."+item.price.toString()

        rowdiv.appendChild(itemNameDiv)
        rowdiv.appendChild(itemQtyDiv)
        rowdiv.appendChild(itemPriceDiv)

        li.appendChild(rowdiv)
        ul.appendChild(li)

        
        // console.log(li)
        
        totalPrice += (item.qty * item.price)
        // console.log('totalPrice', totalPrice)
    })
    if(carItems.length >= 9 ){
        document.getElementById("cart-details").style.overflowY = "scroll"
    }else{
        document.getElementById("cart-details").style.overflowY = "none"

    }
    document.getElementById("cart-price").innerText = totalPrice


}


function payBill(event){

    console.log('paybill');
    var cartPrice = document.getElementById("cart-price").innerText
    // console.log('cartPrice', cartPrice);
    // console.log(event.srcElement[0].value);
    // console.log(event.srcElement[1].value);
    // console.log(event.srcElement[2].value);

    if(carItems.length > 0){

        document.getElementById("bill-pay-wrap").style.display = "flex"
        document.getElementById("bill-pay-cnf-price").innerText = cartPrice
        document.getElementById("bill-cust-name").innerText = event.srcElement[0].value

    }else{

    }

    // console.log(event.srcElement.nextSibling.parentElement.children[2].firstElementChild.nextElementSibling.innerText)
    event.preventDefault()
}

function closePayBillCnfWindow(){
    document.getElementById("bill-pay-wrap").style.display = "none"
    var ul = document.getElementById("cart-item-ul")
    var div = document.createElement('div')
    div.innerText = 'No items in the cart !'
    div.style.marginTop = "40%"
    div.style.textAlign = "center"
    console.log(div)
    div.setAttribute("id", "no-items")
    var li = document.createElement('li')
    li.appendChild(div)
    ul.appendChild(li)
    carItems = []
    cart({})
    
    console.log(ul);
}