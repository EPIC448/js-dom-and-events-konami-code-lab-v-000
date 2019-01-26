const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init(e) {
  let index = 0
  document.body.addEventListener('keydown', function(){

  const key = parseInt(e.detail || e.which);

  if (key === alphabet[index]){ index++;

  if (index === alphabet.length){
        alert("alert")
        index = 0
    }

 } else {
  index = 0;
	   } 
    })
}