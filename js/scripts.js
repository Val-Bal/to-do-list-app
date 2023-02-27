
function newItem() {

    //javascript
    //1. Adding a new item to the list of items: 

    // Code in Vanilla JS 
    // let li = document.createElement("li");
    // let inputValue = document.getElementById("input").value;
    // let text = document.createTextNode(inputValue);
    // li.appendChild(text);

    // Code with jQuery
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    // Code in Vanilla JS 
    // if (inputValue === '') {
    //     alert("You must write something!");
    // } else {
    //     let list = document.querySelector('#list');
    //     list.appendChild(li);
    // }

    // Code with jQuery
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = $('#list');
        $('#list').append(li);
    }


    //2. Crossing out an item from the list of items:
    // Code in Vanilla JS 
    // function crossOut() {
    //     li.classList.toggle("strike");
    // }

    // li.addEventListener("dblclick", crossOut);

    // Code with jQuery
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //3(i). Adding the delete button "X": 
    // Code in Vanilla JS 
    // let crossOutButton = document.createElement("crossOutButton");
    // crossOutButton.appendChild(document.createTextNode("X"));
    // li.appendChild(crossOutButton);

    // crossOutButton.addEventListener("click", deleteListItem);

    // Code with jQuery
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    // Code in Vanilla JS 
    // function deleteListItem() {
    //     li.classList.add("delete")
    // }

    // Code with jQuery
    function deleteListItem() {
        li.addClass("delete")
    }

    // 4. Reordering the items: 
    $('#list').sortable();

}



    // If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








/*
// jQuery Code
//1. Adding a new item to the list:
 
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);
 
if (inputValue === '') {
  alert("You must write something!");
} else {
  $('#list').append(li);
}
//2. Crossing an item out:
function crossOut() {
      li.toggleClass("strike");
  }
 
  li.on("dblclick", function crossOut() {
      li.toggleClass("strike");
  });
//3. Adding a delete button
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);
 
//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
 $('#list').sortable();
*/










