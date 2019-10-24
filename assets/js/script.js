function Age(){
  var age = document.getElementById('age').value;
  if(age < 18){
    window.alert('Vous êtes mineur');
  }else{
    window.alert('Vous êtes majeur');
  }
}
