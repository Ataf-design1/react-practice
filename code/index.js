// function generateKeyFromEmail(email) {
//     // Step 1: Validate email
//     if (!email.includes("@")) {
//         return "Invalid email format";
//     }

//     const [username, domain] = email.split("@");
//     if (!username || !domain) {
//         return "Invalid email format";
//     }

//     // Step 2: Username → ASCII code string
//     let asciiStr = "";
//     for (let char of username) {
//         asciiStr += char.charCodeAt(0);
//     }

//     // Step 3: Lexicographic sort of ASCII string
//     const sortedAsciiStr = asciiStr.split("").sort().join("");

//     // Step 4: Domain reordering
//     const vowels = "aeiouAEIOU";
//     let vowelChars = "", digitChars = "", otherChars = "";

//     for (let char of domain) {
//         if (vowels.includes(char)) {
//             vowelChars += char;
//         } else if (/\d/.test(char)) {
//             digitChars += char;
//         } else {
//             otherChars += char;
//         }
//     }

//     const reorderedDomain = vowelChars + digitChars + otherChars;

//     // Step 5: Combine with '#'
//     const combined = `${sortedAsciiStr}#${reorderedDomain}`;

//     // Step 6: Reverse the final string
//     const finalKey = combined.split("").reverse().join("");

//     return finalKey;
// }

// let res = generateKeyFromEmail("abc12@domain.com")
// console.log(res)

function generateKeyFromEmail(str) {
  if (!str.split("").includes("@")) {
    console.log("Invalid Email Address");
    return;
  }
  str = str.split("@");
  let asci = "";
  for (let i = 0; i < str[0].length; i++) {
    asci += str[0].charCodeAt(i);
  }
  console.log(asci);
  asci = asci.split("").sort().join("");
  console.log(asci);
  let domain = "";
  for (let i = 0; i < str[1].length; i++) {
    if (
      str[1][i] === "a" ||
      str[1][i] === "e" ||
      str[1][i] === "i" ||
      str[1][i] === "o" ||
      str[1][i] === "u"
    ) {
      domain += str[1][i];
    }
  }
  console.log(domain);
  for (let j = 0; j < str[1].length; j++) {
    if (
      str[1][j] !== "a" &&
      str[1][j] !== "e" &&
      str[1][j] !== "i" &&
      str[1][j] !== "o" &&
      str[1][j] !== "u"
    ) {
      domain += str[1][j];
    }
  }
  let ans = asci + "#" + domain;
  ans = ans.split("").reverse().join("");
  console.log(ans);
}
generateKeyFromEmail("paayush1209@gmail.com");
