// 1. is_string(x) nomli funksiya yarating. funksiya kiritilgan malumotni string ekanligini tekshirsin.

// is_string('w3resource') -> true
// is_string([1, 2, 4, 0]) -> false

// 2. string_to_array(str) nomli funksiya yarating. funksiya kiritilgan matnni arrayga aylantirib qaytarsin

// string_to_array("Abdujabbor JS") -> ["Abdujabbor", "JS"]

// 3. truncate_string(str, index) nomli funksiya yarating. Kiritilgan textni, kiritilgan indexgacha olib qaytarsin

// truncate_string("Robin Singh",4) -> "Robi"

// 4. protect_email(str) nomli funksiya yarating. kiritilgan emailni asl nomini 5 ta harfini ko'rsatsin qolganini ... qilib qo'ysin

// protect_email("robin_singh@example.com") -> "robin...@example.com"

// 5. string_parameterize(str) nomli funksiya yarating. kiritilgan stringdagi bo'shliqlarni - ga almashtirib, barcha harflarni kichik harfga o'girib qaytarsin

// string_parameterize("Javascript dasturlash tili hisoblanadi!") -> "javascript-dasturlash-tili-hisoblanadi"

// 6. capitalize(str) nomli funksiya yarating. kiritilgan stringni bosh harfini katta qilib bersin.

// capitalize('js string exercises') -> "Js string exercises"

// 7. capitalize_word(str) nomli funksiya yarating. kiritilgan stringni har bir so'zini bosh harfini katta qilib bersin.

// capitalize_words('js string exercises') -> "Js String Exercises"

// 8. repeat(str, count) nomli funksiya yarating. kiritilgan str ni count marta qaytarib yozib qaytaring

// repeat('Ha!',1) -> "Ha!"
// repeat('Ha!',2) -> "Ha!Ha!"
// repeat('Ha!',3) -> "Ha!Ha!Ha!"

// 9. most_frequent(str) nomli funksiya yarating. stringda eng ko'p yozilgan harfni qaytarsin

// most_frequent("Hello") -> "l"
// most_frequent("Javascript") -> "a"

// 10. rev(str) nomli funksiya yarating. kiritilgan stringni teskari qilib bersin.

// rev("Salom!") -> "!molaS"
// rev("JavaScript") -> "tpircSavaJ"

// 11. checkWhiteSpace(str) nomli funksiya yarating. agar stringda bo'sh joy bo'lsa true aks holda false qaytarsin.

// checkWhiteSpace("Hello") -> false
// checkWhiteSpace("Hel lo") -> true
// checkWhiteSpace("JavaScript dasturlash") -> true
// checkWhiteSpace("JavaScriptDasturlash") -> false

// 1.
function is_string(x) {
    if (typeof x == "string") {
      console.log(typeof x);
    } else {
      console.log(typeof x);
    }
  }
  // is_string([1, 2, 4, 0]); // Object
  
  // 2.
  function string_to_array(x = "") {
    console.log(x.split(" "));
  }
  // string_to_array("Abdujabbor JS"); //[ 'Abdujabbor', 'JS' ]
  
  // 3.
  function truncate_string(str = "", index) {
    console.log(str.slice(0, index + 1));
  }
  // truncate_string("Robin Singh", 4); // Robin
  // 4.
  function protect_email(str = "") {
    console.log(str);
    start_name = str.slice(0, 5);
    str = str.slice(5);
    index = str.indexOf("@");
    stars_leng = str.slice(0, index).length;
    start_name = start_name + "*".repeat(stars_leng);
    res = start_name + str.slice(index, 100);
  
    console.log(res);
  }
  // protect_email("robin_singh@example.com"); //robin******@example.com
  // 5.
  function string_parameterize(str = "") {
    str = str.replaceAll(" ", "-").toLowerCase();
    console.log(str);
  }
  // string_parameterize("Javascript dasturlash tili hisoblanadi!"); //javascript-dasturlash-tili-hisoblanadi!
  // 6.
  function capitalize(str = "") {
    head = str[0].toUpperCase();
    console.log(str.replace(str[0], head));
  }
  // capitalize("js string exercises"); //Js string exercises
  // 7.
  function capitalize_word(str = "") {
    str = str.split(" ");
    all = "";
    for (let i of str) {
      head = i[0].toUpperCase();
      all = all + " " + i.replace(i[0], head);
    }
    console.log(all.slice(1));
  }
  // capitalize_word("js string exercises"); //Js String Exercises
  // 8.
  function repeat(str = "", count) {
    console.log(str.repeat(count));
  }
  // repeat("Ha!", 1); // "Ha!"
  // repeat("Ha!", 2); // "Ha!Ha!"
  // repeat("Ha!", 3); // "Ha!Ha!Ha!"
  // 10.
  function reverse(str = "") {
    rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rev = rev + str[i];
    }
    console.log(rev);
  }
  // reverse("Salom!"); // "!molaS"
  // reverse("JavaScript"); // "tpircSavaJ"
  // 11
  function checkWhiteSpace(str = "") {
    console.log(str.includes(" "));
  }
  // checkWhiteSpace("Hello"); // false
  // checkWhiteSpace("Hel lo"); // true
  // checkWhiteSpace("JavaScript dasturlash"); // true
  // checkWhiteSpace("JavaScriptDasturlash"); // false
  