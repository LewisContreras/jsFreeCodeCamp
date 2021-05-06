function rot13(str) {
    let news = "";
    let arr = str.split("");
for (let i = 0; i < str.length; i++) {
    if (!/[A-Z]/.test(str[i])) {
        news += str[i];
        continue
    }
    let element = str.charCodeAt(i);
    element = element + 13;
    if (element>90) {
        element = element%91 + 65;
    }
    news += String.fromCharCode(element);
    
}
    return news
}
rot13("SERR PBQR PNZC")