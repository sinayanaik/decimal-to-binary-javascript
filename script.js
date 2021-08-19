// program to convert decimal to binary
function convertToBinary(x) {
    let text = "";
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        text = text+`<p>Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}</p>`
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    text = text + `<hr><h3>Binary: ${bin}</h3>`;
    return text;
}

function convert() {
    let DecimalNumber = document.querySelector("#enter-number").value;
    const ParentBox = document.querySelector("#parent-box");
    let OutputText = `<p>steps:</p><br>Decimal number = ${DecimalNumber}<hr>${convertToBinary(DecimalNumber)}`
    // check if already ChildBox present
    if(document.querySelectorAll('.childbox').length !=0){
        ParentBox.removeChild(document.querySelectorAll('.childbox')[0])
    }
    // child box
    const ChildBox = document.createElement("div");
    ChildBox.classList.add("box", "childbox");
    // output para
    const OutputPara = document.createElement("p");
    OutputPara.innerHTML = OutputText;
    // appendchild
    ChildBox.appendChild(OutputPara);
    ParentBox.appendChild(ChildBox);
}
