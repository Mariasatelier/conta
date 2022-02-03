var itemCmp = document.querySelector('.item-content');
var imgItem = document.querySelector('.img-item');
var titleItem = document.querySelector('.title-item');
var valorItem = document.querySelector('.valor-item');
var pacelaItem = document.querySelector('.pacela-item');
var descricaoItem = document.querySelector('.descricao-item');
var bxX = document.querySelector('.bx-x');
var cdp = document.querySelector('.cdp');
var body = document.querySelector('body');
var item1 = document.querySelector('.item-1');
var item2 = document.querySelector('.item-2');
var item3 = document.querySelector('.item-3');
var item4 = document.querySelector('.item-4');
var tamanhoLabel = document.querySelector('.tamanho-item-label');
var tamanhoInput = document.querySelector('.tamanho-item-input');

item1.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/59pbZqGS/Whats-App-Image-2022-01-26-at-16-36-33-4-removebg-preview-1.png"
  titleItem.innerHTML = "Capa de sousplat com estampa de girassóis com tecido de tricoline"
  valorItem.innerHTML = "R$17,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Capa de sousplat com estampa de girassóis com tecido de tricoline. No kit contém apenas a capa e não acompanha o mdf."
  cdp.value = "GFCF"
  tamanhoInput.style.display = "none"
  tamanhoLabel.style.display = "none"
});

item2.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/DZn3N8PN/Whats-App-Image-2022-01-27-at-18-13-00-1-removebg-preview.png"
  titleItem.innerHTML = "Babador para bebê com panda estampado no babador"
  valorItem.innerHTML = "R$--,--"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Babador para bebê com panda estampado no babador para seu filho(a) não se sujar quando come."
  cdp.value = "STCZ"
  tamanhoInput.style.display = "none"
  tamanhoLabel.style.display = "none"
});

item3.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/N0hc1N9B/Whats-App-Image-2022-01-27-at-18-13-02-4-removebg-preview.png"
  titleItem.innerHTML = "Máscara 3D com estampa de minnie - Tecido 100% algodão"
  valorItem.innerHTML = "R$5,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Máscara 3D com estampa personalizada super confortavel com tecido 100% algodão."
  cdp.value = "SPFC"
  tamanhoInput.style.display = "block"
  tamanhoLabel.style.display = "block"
});

item4.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/286rmLNR/Whats-App-Image-2022-01-27-at-18-13-02-removebg-preview.png"
  titleItem.innerHTML = "Máscara 3D com estampa de cor rosa - Tecido 100% algodão"
  valorItem.innerHTML = "R$5,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Máscara 3D com estampa de cor rosa super confortavel com tecido 100% algodão."
  cdp.value = "IBIS"
  tamanhoInput.style.display = "block"
  tamanhoLabel.style.display = "block"
});