let re;

re = /hello/;
re = /hello/i;


re =/^h/i //must start with h
re = /world$/i // must end with world
re = /^hello$/i //must begin and end with
re = /h.llo/i; //single character wild card "hillo", "htllo"
re = /h*llo/i; //wild card "heeopiwllo"
re = /gra?e?y/i; //optional character "grey or gray"
re = /gra?e?y\?/i //escape "?" with \ "gray?" or "grey?"

re = /gr[ae]y/i; // "gray" or "grey"
re = /[GF]ray/; //"Gray" or "Fray";
re = /[^GF]ray/ // any "ray" that doesn't start with G or F
re = /[A-Z]ray/ // character before "ray" must be uppercase letter
re = /[a-z]ray/ // character before "ray" must be lowercase letter
re = /[A-Za-z]ray/ // character before "ray" must be letter
re = /[0-5]ray/ // character before "ray" must be #

re = /Hel{2}o/i; // letter preceding {#} must occur # times
re = /Hel{2,4}o/i; // range
re = /hel{2,}o/i // minimum 2 "l"

re = /([0-9]x){3}/ //"3x3x3x"

re = /\w/; //word character - alphanumeric or _
re = /\w+/; // + is 1 or more
re = /\W/; //non word characters
re = /\d/; // numerical character
re = /\d+/; // 1 or more numerical character
re = /\D/; //non numerical character "example removing leading numbers"
re = /\D+/; //non numerical character "example removing leading numbers"
re = /\s/; //whitespace characters
re = /\S/; //non-whitespace characters
re = /Hell\b/i; //word boundary
re = /x(?=y)/; // x followed by y
re = /x(?!y)/; // x not followed by y

const str = 'dlskfghj;xylaksdn';

const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);