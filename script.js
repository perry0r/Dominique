var card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o "sim"
document.querySelector("#yes").addEventListener("click", function (){
  var question = document.getElementById("question")
  var message = document.getElementById("answer")
  card.style.backgroundImage = "url('https://th.bing.com/th/id/R.1e44ae19ffabe07d5b2df223f3ed3272?rik=N4kSI8JP9gCAFA&pid=ImgRaw&r=0')";
})

// Movimento aleatório do botão "Não"
document.querySelector("#no").addEventListener("mouseover", function(){
  var width = window.innerWidth - 30;
  var height = window.innerHeight - 30;

  this.style.position = 'absolute'
  this.style.top = Math.random() * width + 'px';
  this.style.left = Math.random() * height + 'px';
});
