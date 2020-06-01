
const printToDom = (selector, text) => {
    //$(selector).html(text);
    document.querySelector(selector).innerHTML = text;
}

export default { printToDom };