var keyInput = document.getElementById('keyInput')
var valueInput = document.getElementById('valueInput')
var submitBtn = document.getElementById('submitBtn')
var output = document.getElementById('output')
submitBtn.addEventListener('click',addItem)
var array = [];
function addItem(e){
  var key = keyInput.value;
  var value = valueInput.value;
   
  if(key && value){
  array.push(localStorage.setItem(key , value))
  location.reload();
  }
  console.log(array)
  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i)
    var value = localStorage.getItem(key)

    output.innerHTML = `${key} : ${value}`
  }
}


