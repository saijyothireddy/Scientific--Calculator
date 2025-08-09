        document.addEventListener("DOMContentLoaded", function () {
            const display = document.getElementById("Calc-display");
            const buttons = document.getElementsByClassName("btn");
        
            function evaluateResult(){
                console.log('currentval:',currentval);
                const convertedval=currentval.replace("×","*") .replace("÷","/") .replace("%","*0.01") .replace("sin" ,"Math.sin")
                .replace("cos" ,"Math.cos") .replace("In" ,"Math.log") .replace("π" ,"Math.PI")
                .replace("log","Math.log10").replace("e","Math.E").replace("tan","Math.tan") .replace(/√/g, 'Math.sqrt');

                console.log("convertedvalue:", convertedval)
                const result=eval(convertedval);
                currentval=result.toString();
                display.value=currentval;
            }

            let currentval = "";
            // Convert HTMLCollection to Array
            Array.from(buttons).forEach(btn => {
                btn.addEventListener('click', () => {
                    // console.log( btn.innerText);
                    let value = btn.innerText;
                    if (value == "AC"){
                        currentval="";
                        display.value=currentval;
                    }else if(value == "="){
                        evaluateResult();
                    }
                    else{
                    currentval += value;
                    display.value = currentval;
                    }
                });
            });
        });