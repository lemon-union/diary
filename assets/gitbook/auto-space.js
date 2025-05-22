function addSpaceBetweenLangAndNumber(text) {
    return text
    .replace(/([\u4e00-\u9fa5])([A-Za-z0-9])/g, '$1 $2')
    .replace(/([A-Za-z0-9])([\u4e00-\u9fa5])/g, '$1 $2');
}

function walkTextNode(node) {
    if (node.nodeType === 3 && node.parentNode && ['SCRIPT','STYLE'].indexOf(node.parentNode.tagName) === -1) {
    node.nodeValue = addSpaceBetweenLangAndNumber(node.nodeValue);
    } else if (node.nodeType === 1) {
    for (let child of node.childNodes) {
        walkTextNode(child);
    }
    }
}

window.onload = function () {
    walkTextNode(document.body);
};