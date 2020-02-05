export const suma = (a,b) => {
    const divSuma = document.querySelector('.content-suma');

    if (divSuma){
        divSuma.classList.add('style-suma','font-cursive');
        divSuma.innerHTML =`La suma es : ${a+b}`;
    }
}