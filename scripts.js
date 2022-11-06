const wrapper = document.getElementsByClassName("wrapper");
const checkBox = document.getElementById("switch");
const input = document.getElementById("input")

if (localStorage.getItem("theme") == undefined || localStorage.getItem("theme") == "grey") {
  localStorage.setItem("theme", "grey")
} else{
  wrapper[0].classList.add("wrapper", "blue")
  localStorage.setItem("theme", "blue")
  checkBox.checked = true
}

checkBox.addEventListener("click", function (evt) {  

    if(checkBox.checked == false){
      wrapper[0].classList.remove("blue")
      wrapper[0].classList.add("wrapper")
      localStorage.setItem("theme", "grey")
    } else {
      wrapper[0].classList.remove("grey")
      wrapper[0].classList.add("wrapper", "blue")
      localStorage.setItem("theme", "blue")
    }
    

});

sessionStorage.getItem("value") == undefined ? "" : document.getElementById("input-text").innerHTML = sessionStorage.getItem("value")


  input.addEventListener("keyup", function(evt){
    document.getElementById("input-text").innerHTML=input.value
    sessionStorage.setItem("value", input.value)
  })