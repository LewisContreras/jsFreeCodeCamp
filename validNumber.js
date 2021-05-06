function telephoneCheck(str) {
    const regex = /[1 ]*?([0-9]{3}|\([0-9]{3}\))[ \-]*[0-9]{3}[ \-)]*[0-9]{4}[ -]*/g;
    let str2;
    let bool = false;
    if (regex.test(str)) {
        str2 = str.match(regex).join("");
    }
    console.log(str);
    console.log(str2);
    console.log(str2 == str);
  }
  telephoneCheck("(6054756961)")
  telephoneCheck("(555) 555-5555");


// telephoneCheck("(6054756961)") should return false.
// telephoneCheck("2 (757) 622-7382") should return false.
// telephoneCheck("0 (757) 622-7382") should return false.
// telephoneCheck("-1 (757) 622-7382") should return false.
// telephoneCheck("2 757 622-7382") should return false.
// telephoneCheck("10 (757) 622-7382") should return false.
// telephoneCheck("27576227382") should return false.
// telephoneCheck("(275)76227382") should return false.
// telephoneCheck("2(757)6227382") should return false.
// telephoneCheck("2(757)622-7382") should return false.
// telephoneCheck("(555-555-5555") should return false.