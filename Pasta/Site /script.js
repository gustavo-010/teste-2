function clickPost() {
  Post.style.display = 'block'
  Chat.style.display = 'none'
  //fundoConfiguracao.style.display = 'none'
}

function clickChat() {
  Post.style.display = 'none'
  Chat.style.display = 'block'
  //fundoConfiguracao.style.display = 'none'
}

function clickConfiguracao() {
  Post.style.display = 'none'
  Chat.style.display = 'none'
  //fundoConfiguracao.style.display = 'block'
}




//código em manutenção
/* 

function clickbox() {
  if (box.checked) {
    document.querySelectorAll('.FundoConteudoPost').forEach(div => {
      div.style.background = '#DBDCE5';
      div.style.transition = '800ms'
    });

    document.querySelectorAll('.txtConteudoPost').forEach(div => {
      div.style.color = 'black';
      div.style.weight = '999';
      div.style.transition = '800ms'
    });

    var fundo = document.querySelector('body')
    fundo.style.background = '#F3F3F3'
    fundo.style.transition = '800ms'
    cabeca.style.background = '#DBDCE5'
    cabeca.style.transition = '800ms'
    fundoCheckbox.style.background = '#DBDCE5'
    fundoCheckbox.style.transition = '800ms'

  } else {
    document.querySelectorAll('.FundoConteudoPost').forEach(div => {
      div.style.background = '#121C25';

      div.style.transition = '800ms'
    });

    document.querySelectorAll('.txtConteudoPost').forEach(div => {
      div.style.color = 'white';
      div.style.transition = '800ms'
    });

    var fundo = document.querySelector('body')

    fundo.style.background = '#1C2A39'
    fundo.style.transition = '800ms'

    cabeca.style.background = '#121C25'
    cabeca.style.transition = '800ms'

    txtCheckbox.style.background = ''

    fundoCheckbox.style.background = '#121C25'

    fundoCheckbox.style.transition = '800ms'

  }
}

*/