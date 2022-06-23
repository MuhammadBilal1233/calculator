let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
console.log(buttons);
let screenValue = '';
var hist = '';
var hist1 = { h1: "", h2: "", h3: "", h4: "", h5: "", h6: "", h7: "", h8: "", h9: "", h10: "" }
start = '';
flag = 0;
prev = '';
prev1 = '';
prev2 = '';
prev3 = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (flag == 1) {
            start += buttonText;
        }
        if (buttonText == 'X') {
            prev = "*"
            prev3 = prev1;
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == '+') {
            prev = buttonText
            prev3 = prev1;
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == '-') {
            prev = buttonText
            prev3 = prev1;
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == '/') {
            prev = buttonText
            prev3 = prev1;
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'log') {
            prev = buttonText
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == 'ln') {
            prev = buttonText
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == 'e') {
            prev = buttonText
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == 'sin') {
            prev = buttonText
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == 'cos') {
            prev = buttonText
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == 'tan') {
            prev = buttonText
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == 'bin') {
            prev = buttonText
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == 'oct') {
            prev = buttonText
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == 'hex') {
            prev = buttonText
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == '^') {
            prev = buttonText
            prev3 = prev1;
            screenValue += buttonText;
            screen.value = screenValue;
            flag = 1;
        }
        else if (buttonText == '=') {
            prev1 = '';
            try {
                if (flag === 1) {
                    if (prev == 'ln') {
                        screen.value = Math.log2(parseInt(start))
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == '+') {
                        start1 = parseInt(prev3);
                        start2 = parseInt(start);
                        screen.value = start1 + start2;
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == '-') {
                        start1 = parseInt(prev3);
                        start2 = parseInt(start);
                        screen.value = start1 - start2;
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == '*') {
                        start1 = parseInt(prev3);
                        start2 = parseInt(start);
                        screen.value = start1 * start2;
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    } else if (prev == '/') {
                        start1 = parseInt(prev3);
                        start2 = parseInt(start);
                        screen.value = start1 / start2;
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == 'log') {
                        screen.value = Math.log10(parseInt(start))
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == 'e') {
                        screen.value = Math.pow(10, parseInt(start))
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == 'sin') {
                        screen.value = Math.sin(parseInt(start) / (180 / Math.PI))
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == 'cos') {
                        screen.value = Math.cos(parseInt(start) / (180 / Math.PI))
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == 'tan') {
                        screen.value = Math.tan(parseInt(start) / (180 / Math.PI))
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == 'bin') {
                        start1 = parseInt(start)
                        screen.value = start1.toString(2)
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == 'oct') {
                        start1 = parseInt(start)
                        screen.value = start1.toString(8)
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == 'hex') {
                        start1 = parseInt(start)
                        screen.value = start1.toString(16)
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else if (prev == '^') {
                        start1 = parseInt(prev3);
                        start2 = parseInt(start);
                        screen.value = Math.pow(start1, start2)
                        hist = "<h3 id=\"data1\">" + screenValue + "=" + screen.value + "</h3>" + "<br>";
                        console.log(hist);
                        screenValue = "";
                        flag = 0;
                        start = '';
                    }
                    else{
                        screen.value = "Incorrect Syntax";
                        screenValue = "";
                    }
                }
                else {
                    screen.value = "Incorrect Syntax";
                    screenValue = "";
                }
            }
            catch {
                screen.value = "Incorrect Syntax";
                screenValue = "";
            }
            hist1.h10 = hist1.h9;
            hist1.h9 = hist1.h8;
            hist1.h8 = hist1.h7;
            hist1.h7 = hist1.h6;
            hist1.h6 = hist1.h5;
            hist1.h5 = hist1.h4;
            hist1.h4 = hist1.h3;
            hist1.h3 = hist1.h2;
            hist1.h2 = hist1.h1;
            hist1.h1 = hist;
        }
        else if (buttonText == 'History') {
            document.getElementById("history1").id = "history"
            document.getElementById("data").innerHTML = hist1.h1 + hist1.h2 + hist1.h3 + hist1.h4 + hist1.h5 + hist1.h6 + hist1.h7 + hist1.h8 + hist1.h9 + hist1.h10;
        }
        else if (buttonText == 'Close') {
            document.getElementById("history").id = "history1"
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
            prev1 += buttonText;
            console.log("last one" + prev1)
            prev2 = buttonText;
        }

    })
}



