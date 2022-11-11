function perfil(){
    let caixa = document.getElementById("caixa")
    let valor_display = window.getComputedStyle(caixa).getPropertyValue('display');
    if (valor_display  == 'none'){
            document.getElementById("caixa").style.display="block"
            }else{
            document.getElementById("caixa").style.display="none";
            }
}
