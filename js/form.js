const loginButton = document.getElementById('enter')
loginButton.addEventListener('click', function(event){
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  if (username === '' || password === ''){
    event.preventDefault()
    alert('Preencha os campos vazios')
  }
})