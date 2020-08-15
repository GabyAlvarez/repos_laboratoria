export const portaPapeles = (idElement) => {
       
    let elemtCopy = document.querySelector('#'+idElement);

    let range = document.createRange();
    range.selectNode(elemtCopy);
    
    window.getSelection().addRange(range);
    document.execCommand('copy');
    
    window.getSelection().removeAllRanges();
}

export const addClassName = (idElement, nameClass) => {
       
    let elemt = document.querySelector('#'+idElement);  
    elemt.className += " " +nameClass;

    setTimeout(() => {  
        elemt.classList.remove(nameClass)
    }, 1000);
}
