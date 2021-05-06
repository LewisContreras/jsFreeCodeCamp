function convertToRoman(num) {
    let str = "";
    let arr = [1000,500,100,50,10,5]
    let romArr = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV"]
    let cont = 0;
    let perc = 0;
    for (const val of arr) {
        console.log(num)
        if (String(val).startsWith("1")) {
            perc = val*0.1;
        }else{
            perc = val*0.2;
        }
        let val1 = cont;
        let div1 = parseInt(Math.floor(num/val));
        num = num%val;
        let div2 = parseInt(Math.floor(num/(val-perc)));
        num = num%(val-perc);
        cont++
        let val2 = cont;
        console.log(val1, perc, div1, num, div2,val2)
        str +=  romArr[val1].repeat(div1) + romArr[val2].repeat(div2);
        cont++
        console.log(cont);
    }   
        str += "I".repeat(num/1);
    console.log(str);
   return str;
  }
  
  convertToRoman(4);