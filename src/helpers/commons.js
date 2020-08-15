export const clipboard = (idElement) => {
       
    let elementCopy = document.querySelector('#'+idElement);

    let range = document.createRange();
    range.selectNode(elementCopy);
    
    window.getSelection().addRange(range);
    document.execCommand('copy'); 
    
    window.getSelection().removeAllRanges();
}

export const addClassName = (idElement, nameClass) => {
       
    let element = document.querySelector('#'+idElement);  
    element.className += " " +nameClass;

    setTimeout(() => {  
        element.classList.remove(nameClass)
    }, 1000);
}
