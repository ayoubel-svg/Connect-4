const spans = document.querySelectorAll(".game span");
const game = document.querySelector(".game");
const startBtn = document.querySelector(".start");
const playerTurn = document.querySelector(".playerTurn span");
const restart = document.querySelector(".rest");
const win = document.querySelector(".win");

const class1 = document.querySelectorAll(".cl1");
const class2 = document.querySelectorAll(".cl2");
const class3 = document.querySelectorAll(".cl3");
const class4 = document.querySelectorAll(".cl4");
const class5 = document.querySelectorAll(".cl5");
const class6 = document.querySelectorAll(".cl6");
const class7 = document.querySelectorAll(".cl7");
const class8 = document.querySelectorAll(".cl8");
const class9 = document.querySelectorAll(".cl9");
const class10 = document.querySelectorAll(".cl10");
const class11 = document.querySelectorAll(".cl11");
const class12 = document.querySelectorAll(".cl12");
const class13 = document.querySelectorAll(".cl13");
const class14 = document.querySelectorAll(".cl14");
const class15 = document.querySelectorAll(".cl15");
const class16 = document.querySelectorAll(".cl16");
const class17 = document.querySelectorAll(".cl17");
const class18 = document.querySelectorAll(".cl18");
const class19 = document.querySelectorAll(".cl19");
const class20 = document.querySelectorAll(".cl20");
const class21 = document.querySelectorAll(".cl21");
const class22 = document.querySelectorAll(".cl22");
const class23 = document.querySelectorAll(".cl23");
const class24 = document.querySelectorAll(".cl24");
const class25 = document.querySelectorAll(".cl25");
const class26 = document.querySelectorAll(".cl26");
const class27 = document.querySelectorAll(".cl27");
const class28 = document.querySelectorAll(".cl28");
const class29 = document.querySelectorAll(".cl29");
const class30 = document.querySelectorAll(".cl30");
const class31 = document.querySelectorAll(".cl31");
const class32 = document.querySelectorAll(".cl32");
const class33 = document.querySelectorAll(".cl33");
const class34 = document.querySelectorAll(".cl34");
const class35 = document.querySelectorAll(".cl35");
const class36 = document.querySelectorAll(".cl36");
const class37 = document.querySelectorAll(".cl37");
const class38 = document.querySelectorAll(".cl38");
const class39 = document.querySelectorAll(".cl39");
const class40 = document.querySelectorAll(".cl40");
const class41 = document.querySelectorAll(".cl41");
const class42 = document.querySelectorAll(".cl42");
const class43 = document.querySelectorAll(".cl43");
const class44 = document.querySelectorAll(".cl44");
const class45 = document.querySelectorAll(".cl45");
const class46 = document.querySelectorAll(".cl46");
const class47 = document.querySelectorAll(".cl47");
const class48 = document.querySelectorAll(".cl48");
const class49 = document.querySelectorAll(".cl49");
const class50 = document.querySelectorAll(".cl50");
const class51 = document.querySelectorAll(".cl51");
const class52 = document.querySelectorAll(".cl52");
const class53 = document.querySelectorAll(".cl53");
const class54 = document.querySelectorAll(".cl54");
const class55 = document.querySelectorAll(".cl55");
const class56 = document.querySelectorAll(".cl56");
const class57 = document.querySelectorAll(".cl57");
const class58 = document.querySelectorAll(".cl58");
const class59 = document.querySelectorAll(".cl59");
const class60 = document.querySelectorAll(".cl60");
const class61 = document.querySelectorAll(".cl61");
const class62 = document.querySelectorAll(".cl62");
const class63 = document.querySelectorAll(".cl63");
const class64 = document.querySelectorAll(".cl64");
const class65 = document.querySelectorAll(".cl65");
const colum1 = document.querySelectorAll(".col1");
const colum2 = document.querySelectorAll(".col2");
const colum3 = document.querySelectorAll(".col3");
const colum4 = document.querySelectorAll(".col4");
const colum5 = document.querySelectorAll(".col5");
const colum6 = document.querySelectorAll(".col6");
const colum7 = document.querySelectorAll(".col7");

let Player_Red;
let Player_Yellow;
let spanStatus = false;

function myCols() {
  for (let i = 0; i < colum1.length; i++) {
    colum1[0]++;
  }
}
myCols();
function playTheGam() {
  spans.forEach((span) => {
    span.addEventListener("click", () => {
      if (span.classList.contains("buttom")) {
        if (spanStatus === false) {
          Player_Red = span;
          Player_Red.style.background = "Red";
          Player_Red.style.pointerEvents = "none";
          playerTurn.innerHTML = "Yellow";
          playerTurn.style.color = "yellow";
          checkWin();
          spanStatus = true;
        } else if (spanStatus === true) {
          Player_Yellow = span;
          Player_Yellow.style.background = "Yellow";
          Player_Yellow.style.pointerEvents = "none";
          playerTurn.innerHTML = "Red";
          playerTurn.style.color = "red";
          checkWin();
          spanStatus = false;
        }
      } else {
        for (let i = 0; i < colum1.length; i++) {
          if (
            colum1[5].style.backgroundColor == "red" ||
            colum1[5].style.backgroundColor == "yellow"
          ) {
            colum1[4].classList.add("buttom");
          }
          if (
            colum1[4].style.backgroundColor == "red" ||
            colum1[4].style.backgroundColor == "yellow"
          ) {
            colum1[3].classList.add("buttom");
          }
          if (
            colum1[3].style.backgroundColor == "red" ||
            colum1[3].style.backgroundColor == "yellow"
          ) {
            colum1[2].classList.add("buttom");
          }
          if (
            colum1[2].style.backgroundColor == "red" ||
            colum1[2].style.backgroundColor == "yellow"
          ) {
            colum1[1].classList.add("buttom");
          }
          if (
            colum1[1].style.backgroundColor == "red" ||
            colum1[1].style.backgroundColor == "yellow"
          ) {
            colum1[0].classList.add("buttom");
          }
        }
        for (let i = 0; i < colum2.length; i++) {
          if (
            colum2[5].style.backgroundColor == "red" ||
            colum2[5].style.backgroundColor == "yellow"
          ) {
            colum2[4].classList.add("buttom");
          }
          if (
            colum2[4].style.backgroundColor == "red" ||
            colum2[4].style.backgroundColor == "yellow"
          ) {
            colum2[3].classList.add("buttom");
          }
          if (
            colum2[3].style.backgroundColor == "red" ||
            colum2[3].style.backgroundColor == "yellow"
          ) {
            colum2[2].classList.add("buttom");
          }
          if (
            colum2[2].style.backgroundColor == "red" ||
            colum2[2].style.backgroundColor == "yellow"
          ) {
            colum2[1].classList.add("buttom");
          }
          if (
            colum2[1].style.backgroundColor == "red" ||
            colum2[1].style.backgroundColor == "yellow"
          ) {
            colum2[0].classList.add("buttom");
          }
        }
        for (let i = 0; i < colum3.length; i++) {
          if (
            colum3[5].style.backgroundColor == "red" ||
            colum3[5].style.backgroundColor == "yellow"
          ) {
            colum3[4].classList.add("buttom");
          }
          if (
            colum3[4].style.backgroundColor == "red" ||
            colum3[4].style.backgroundColor == "yellow"
          ) {
            colum3[3].classList.add("buttom");
          }
          if (
            colum3[3].style.backgroundColor == "red" ||
            colum3[3].style.backgroundColor == "yellow"
          ) {
            colum3[2].classList.add("buttom");
          }
          if (
            colum3[2].style.backgroundColor == "red" ||
            colum3[2].style.backgroundColor == "yellow"
          ) {
            colum3[1].classList.add("buttom");
          }
          if (
            colum3[1].style.backgroundColor == "red" ||
            colum3[1].style.backgroundColor == "yellow"
          ) {
            colum3[0].classList.add("buttom");
          }
        }
        for (let i = 0; i < colum4.length; i++) {
          if (
            colum4[5].style.backgroundColor == "red" ||
            colum4[5].style.backgroundColor == "yellow"
          ) {
            colum4[4].classList.add("buttom");
          }
          if (
            colum4[4].style.backgroundColor == "red" ||
            colum4[4].style.backgroundColor == "yellow"
          ) {
            colum4[3].classList.add("buttom");
          }
          if (
            colum4[3].style.backgroundColor == "red" ||
            colum4[3].style.backgroundColor == "yellow"
          ) {
            colum4[2].classList.add("buttom");
          }
          if (
            colum4[2].style.backgroundColor == "red" ||
            colum4[2].style.backgroundColor == "yellow"
          ) {
            colum4[1].classList.add("buttom");
          }
          if (
            colum4[1].style.backgroundColor == "red" ||
            colum4[1].style.backgroundColor == "yellow"
          ) {
            colum4[0].classList.add("buttom");
          }
        }
        for (let i = 0; i < colum5.length; i++) {
          if (
            colum5[5].style.backgroundColor == "red" ||
            colum5[5].style.backgroundColor == "yellow"
          ) {
            colum5[4].classList.add("buttom");
          }
          if (
            colum5[4].style.backgroundColor == "red" ||
            colum5[4].style.backgroundColor == "yellow"
          ) {
            colum5[3].classList.add("buttom");
          }
          if (
            colum5[3].style.backgroundColor == "red" ||
            colum5[3].style.backgroundColor == "yellow"
          ) {
            colum5[2].classList.add("buttom");
          }
          if (
            colum5[2].style.backgroundColor == "red" ||
            colum5[2].style.backgroundColor == "yellow"
          ) {
            colum5[1].classList.add("buttom");
          }
          if (
            colum5[1].style.backgroundColor == "red" ||
            colum5[1].style.backgroundColor == "yellow"
          ) {
            colum5[0].classList.add("buttom");
          }
        }
        for (let i = 0; i < colum6.length; i++) {
          if (
            colum6[5].style.backgroundColor == "red" ||
            colum6[5].style.backgroundColor == "yellow"
          ) {
            colum6[4].classList.add("buttom");
          }
          if (
            colum6[4].style.backgroundColor == "red" ||
            colum6[4].style.backgroundColor == "yellow"
          ) {
            colum6[3].classList.add("buttom");
          }
          if (
            colum6[3].style.backgroundColor == "red" ||
            colum6[3].style.backgroundColor == "yellow"
          ) {
            colum6[2].classList.add("buttom");
          }
          if (
            colum6[2].style.backgroundColor == "red" ||
            colum6[2].style.backgroundColor == "yellow"
          ) {
            colum6[1].classList.add("buttom");
          }
          if (
            colum6[1].style.backgroundColor == "red" ||
            colum6[1].style.backgroundColor == "yellow"
          ) {
            colum6[0].classList.add("buttom");
          }
        }
        for (let i = 0; i < colum7.length; i++) {
          if (
            colum7[5].style.backgroundColor == "red" ||
            colum7[5].style.backgroundColor == "yellow"
          ) {
            colum7[4].classList.add("buttom");
          }
          if (
            colum7[4].style.backgroundColor == "red" ||
            colum7[4].style.backgroundColor == "yellow"
          ) {
            colum7[3].classList.add("buttom");
          }
          if (
            colum7[3].style.backgroundColor == "red" ||
            colum7[3].style.backgroundColor == "yellow"
          ) {
            colum7[2].classList.add("buttom");
          }
          if (
            colum7[2].style.backgroundColor == "red" ||
            colum7[2].style.backgroundColor == "yellow"
          ) {
            colum7[1].classList.add("buttom");
          }
          if (
            colum7[1].style.backgroundColor == "red" ||
            colum7[1].style.backgroundColor == "yellow"
          ) {
            colum7[0].classList.add("buttom");
          }
        }
      }
    });
  });
}
function checkWin() {
  for (i = 0; i < class1.length; i++) {
    if (
      class1[0].style.backgroundColor == "yellow" &&
      class1[1].style.backgroundColor == "yellow" &&
      class1[2].style.backgroundColor == "yellow" &&
      class1[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.color = "yellow";
    }
  }
  for (i = 0; i < class1.length; i++) {
    if (
      class1[0].style.backgroundColor == "red" &&
      class1[1].style.backgroundColor == "red" &&
      class1[2].style.backgroundColor == "red" &&
      class1[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.color = "red";
    }
  }
  for (i = 0; i < class2.length; i++) {
    if (
      class2[0].style.backgroundColor == "yellow" &&
      class2[1].style.backgroundColor == "yellow" &&
      class2[2].style.backgroundColor == "yellow" &&
      class2[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class2.length; i++) {
    if (
      class2[0].style.backgroundColor == "red" &&
      class2[1].style.backgroundColor == "red" &&
      class2[2].style.backgroundColor == "red" &&
      class2[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class3.length; i++) {
    if (
      class3[0].style.backgroundColor == "yellow" &&
      class3[1].style.backgroundColor == "yellow" &&
      class3[2].style.backgroundColor == "yellow" &&
      class3[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class3.length; i++) {
    if (
      class3[0].style.backgroundColor == "red" &&
      class3[1].style.backgroundColor == "red" &&
      class3[2].style.backgroundColor == "red" &&
      class3[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class4.length; i++) {
    if (
      class4[0].style.backgroundColor == "yellow" &&
      class4[1].style.backgroundColor == "yellow" &&
      class4[2].style.backgroundColor == "yellow" &&
      class4[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class4.length; i++) {
    if (
      class2[0].style.backgroundColor == "red" &&
      class2[1].style.backgroundColor == "red" &&
      class2[2].style.backgroundColor == "red" &&
      class2[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class5.length; i++) {
    if (
      class5[0].style.backgroundColor == "yellow" &&
      class5[1].style.backgroundColor == "yellow" &&
      class5[2].style.backgroundColor == "yellow" &&
      class5[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class5.length; i++) {
    if (
      class5[0].style.backgroundColor == "red" &&
      class5[1].style.backgroundColor == "red" &&
      class5[2].style.backgroundColor == "red" &&
      class5[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class6.length; i++) {
    if (
      class6[0].style.backgroundColor == "yellow" &&
      class6[1].style.backgroundColor == "yellow" &&
      class6[2].style.backgroundColor == "yellow" &&
      class6[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class6.length; i++) {
    if (
      class6[0].style.backgroundColor == "red" &&
      class6[1].style.backgroundColor == "red" &&
      class6[2].style.backgroundColor == "red" &&
      class6[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class7.length; i++) {
    if (
      class7[0].style.backgroundColor == "yellow" &&
      class7[1].style.backgroundColor == "yellow" &&
      class7[2].style.backgroundColor == "yellow" &&
      class7[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class7.length; i++) {
    if (
      class7[0].style.backgroundColor == "red" &&
      class7[1].style.backgroundColor == "red" &&
      class7[2].style.backgroundColor == "red" &&
      class7[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class8.length; i++) {
    if (
      class8[0].style.backgroundColor == "yellow" &&
      class8[1].style.backgroundColor == "yellow" &&
      class8[2].style.backgroundColor == "yellow" &&
      class8[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class8.length; i++) {
    if (
      class8[0].style.backgroundColor == "red" &&
      class8[1].style.backgroundColor == "red" &&
      class8[2].style.backgroundColor == "red" &&
      class8[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class9.length; i++) {
    if (
      class9[0].style.backgroundColor == "yellow" &&
      class9[1].style.backgroundColor == "yellow" &&
      class9[2].style.backgroundColor == "yellow" &&
      class9[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class9.length; i++) {
    if (
      class9[0].style.backgroundColor == "red" &&
      class9[1].style.backgroundColor == "red" &&
      class9[2].style.backgroundColor == "red" &&
      class9[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class10.length; i++) {
    if (
      class10[0].style.backgroundColor == "yellow" &&
      class10[1].style.backgroundColor == "yellow" &&
      class10[2].style.backgroundColor == "yellow" &&
      class10[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class10.length; i++) {
    if (
      class10[0].style.backgroundColor == "red" &&
      class10[1].style.backgroundColor == "red" &&
      class10[2].style.backgroundColor == "red" &&
      class10[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class11.length; i++) {
    if (
      class11[0].style.backgroundColor == "yellow" &&
      class11[1].style.backgroundColor == "yellow" &&
      class11[2].style.backgroundColor == "yellow" &&
      class11[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class11.length; i++) {
    if (
      class11[0].style.backgroundColor == "red" &&
      class11[1].style.backgroundColor == "red" &&
      class11[2].style.backgroundColor == "red" &&
      class11[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class12.length; i++) {
    if (
      class12[0].style.backgroundColor == "yellow" &&
      class12[1].style.backgroundColor == "yellow" &&
      class12[2].style.backgroundColor == "yellow" &&
      class12[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class12.length; i++) {
    if (
      class12[0].style.backgroundColor == "red" &&
      class12[1].style.backgroundColor == "red" &&
      class12[2].style.backgroundColor == "red" &&
      class12[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class13.length; i++) {
    if (
      class13[0].style.backgroundColor == "yellow" &&
      class13[1].style.backgroundColor == "yellow" &&
      class13[2].style.backgroundColor == "yellow" &&
      class13[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class13.length; i++) {
    if (
      class13[0].style.backgroundColor == "red" &&
      class13[1].style.backgroundColor == "red" &&
      class13[2].style.backgroundColor == "red" &&
      class13[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class14.length; i++) {
    if (
      class14[0].style.backgroundColor == "yellow" &&
      class14[1].style.backgroundColor == "yellow" &&
      class14[2].style.backgroundColor == "yellow" &&
      class14[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class14.length; i++) {
    if (
      class14[0].style.backgroundColor == "red" &&
      class14[1].style.backgroundColor == "red" &&
      class14[2].style.backgroundColor == "red" &&
      class14[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class15.length; i++) {
    if (
      class15[0].style.backgroundColor == "yellow" &&
      class15[1].style.backgroundColor == "yellow" &&
      class15[2].style.backgroundColor == "yellow" &&
      class15[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class15.length; i++) {
    if (
      class15[0].style.backgroundColor == "red" &&
      class15[1].style.backgroundColor == "red" &&
      class15[2].style.backgroundColor == "red" &&
      class15[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class16.length; i++) {
    if (
      class16[0].style.backgroundColor == "yellow" &&
      class16[1].style.backgroundColor == "yellow" &&
      class16[2].style.backgroundColor == "yellow" &&
      class16[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class16.length; i++) {
    if (
      class16[0].style.backgroundColor == "red" &&
      class16[1].style.backgroundColor == "red" &&
      class16[2].style.backgroundColor == "red" &&
      class16[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class17.length; i++) {
    if (
      class17[0].style.backgroundColor == "yellow" &&
      class17[1].style.backgroundColor == "yellow" &&
      class17[2].style.backgroundColor == "yellow" &&
      class17[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class17.length; i++) {
    if (
      class17[0].style.backgroundColor == "red" &&
      class17[1].style.backgroundColor == "red" &&
      class17[2].style.backgroundColor == "red" &&
      class17[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class18.length; i++) {
    if (
      class18[0].style.backgroundColor == "yellow" &&
      class18[1].style.backgroundColor == "yellow" &&
      class18[2].style.backgroundColor == "yellow" &&
      class18[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class18.length; i++) {
    if (
      class18[0].style.backgroundColor == "red" &&
      class18[1].style.backgroundColor == "red" &&
      class18[2].style.backgroundColor == "red" &&
      class18[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class19.length; i++) {
    if (
      class19[0].style.backgroundColor == "yellow" &&
      class19[1].style.backgroundColor == "yellow" &&
      class19[2].style.backgroundColor == "yellow" &&
      class19[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class19.length; i++) {
    if (
      class19[0].style.backgroundColor == "red" &&
      class19[1].style.backgroundColor == "red" &&
      class19[2].style.backgroundColor == "red" &&
      class19[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class20.length; i++) {
    if (
      class20[0].style.backgroundColor == "yellow" &&
      class20[1].style.backgroundColor == "yellow" &&
      class20[2].style.backgroundColor == "yellow" &&
      class20[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class20.length; i++) {
    if (
      class20[0].style.backgroundColor == "red" &&
      class20[1].style.backgroundColor == "red" &&
      class20[2].style.backgroundColor == "red" &&
      class20[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class21.length; i++) {
    if (
      class21[0].style.backgroundColor == "yellow" &&
      class21[1].style.backgroundColor == "yellow" &&
      class21[2].style.backgroundColor == "yellow" &&
      class21[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class21.length; i++) {
    if (
      class21[0].style.backgroundColor == "red" &&
      class21[1].style.backgroundColor == "red" &&
      class21[2].style.backgroundColor == "red" &&
      class21[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class22.length; i++) {
    if (
      class22[0].style.backgroundColor == "yellow" &&
      class22[1].style.backgroundColor == "yellow" &&
      class22[2].style.backgroundColor == "yellow" &&
      class22[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class22.length; i++) {
    if (
      class22[0].style.backgroundColor == "red" &&
      class22[1].style.backgroundColor == "red" &&
      class22[2].style.backgroundColor == "red" &&
      class22[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class23.length; i++) {
    if (
      class23[0].style.backgroundColor == "yellow" &&
      class23[1].style.backgroundColor == "yellow" &&
      class23[2].style.backgroundColor == "yellow" &&
      class23[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class23.length; i++) {
    if (
      class23[0].style.backgroundColor == "red" &&
      class23[1].style.backgroundColor == "red" &&
      class23[2].style.backgroundColor == "red" &&
      class23[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class24.length; i++) {
    if (
      class24[0].style.backgroundColor == "yellow" &&
      class24[1].style.backgroundColor == "yellow" &&
      class24[2].style.backgroundColor == "yellow" &&
      class24[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class24.length; i++) {
    if (
      class24[0].style.backgroundColor == "red" &&
      class24[1].style.backgroundColor == "red" &&
      class24[2].style.backgroundColor == "red" &&
      class24[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class25.length; i++) {
    if (
      class25[0].style.backgroundColor == "yellow" &&
      class25[1].style.backgroundColor == "yellow" &&
      class25[2].style.backgroundColor == "yellow" &&
      class25[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class25.length; i++) {
    if (
      class25[0].style.backgroundColor == "red" &&
      class25[1].style.backgroundColor == "red" &&
      class25[2].style.backgroundColor == "red" &&
      class25[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class26.length; i++) {
    if (
      class26[0].style.backgroundColor == "yellow" &&
      class26[1].style.backgroundColor == "yellow" &&
      class26[2].style.backgroundColor == "yellow" &&
      class26[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class26.length; i++) {
    if (
      class26[0].style.backgroundColor == "red" &&
      class26[1].style.backgroundColor == "red" &&
      class26[2].style.backgroundColor == "red" &&
      class26[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class27.length; i++) {
    if (
      class27[0].style.backgroundColor == "yellow" &&
      class27[1].style.backgroundColor == "yellow" &&
      class27[2].style.backgroundColor == "yellow" &&
      class27[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class27.length; i++) {
    if (
      class27[0].style.backgroundColor == "red" &&
      class27[1].style.backgroundColor == "red" &&
      class27[2].style.backgroundColor == "red" &&
      class27[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class28.length; i++) {
    if (
      class28[0].style.backgroundColor == "yellow" &&
      class28[1].style.backgroundColor == "yellow" &&
      class28[2].style.backgroundColor == "yellow" &&
      class28[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class28.length; i++) {
    if (
      class28[0].style.backgroundColor == "red" &&
      class28[1].style.backgroundColor == "red" &&
      class28[2].style.backgroundColor == "red" &&
      class28[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class29.length; i++) {
    if (
      class29[0].style.backgroundColor == "yellow" &&
      class29[1].style.backgroundColor == "yellow" &&
      class29[2].style.backgroundColor == "yellow" &&
      class29[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class29.length; i++) {
    if (
      class29[0].style.backgroundColor == "red" &&
      class29[1].style.backgroundColor == "red" &&
      class29[2].style.backgroundColor == "red" &&
      class29[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class30.length; i++) {
    if (
      class30[0].style.backgroundColor == "yellow" &&
      class30[1].style.backgroundColor == "yellow" &&
      class30[2].style.backgroundColor == "yellow" &&
      class30[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class30.length; i++) {
    if (
      class30[0].style.backgroundColor == "red" &&
      class30[1].style.backgroundColor == "red" &&
      class30[2].style.backgroundColor == "red" &&
      class30[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class31.length; i++) {
    if (
      class31[0].style.backgroundColor == "yellow" &&
      class31[1].style.backgroundColor == "yellow" &&
      class31[2].style.backgroundColor == "yellow" &&
      class31[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class31.length; i++) {
    if (
      class31[0].style.backgroundColor == "red" &&
      class31[1].style.backgroundColor == "red" &&
      class31[2].style.backgroundColor == "red" &&
      class31[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class32.length; i++) {
    if (
      class32[0].style.backgroundColor == "yellow" &&
      class32[1].style.backgroundColor == "yellow" &&
      class32[2].style.backgroundColor == "yellow" &&
      class32[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class32.length; i++) {
    if (
      class32[0].style.backgroundColor == "red" &&
      class32[1].style.backgroundColor == "red" &&
      class32[2].style.backgroundColor == "red" &&
      class32[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class33.length; i++) {
    if (
      class33[0].style.backgroundColor == "yellow" &&
      class33[1].style.backgroundColor == "yellow" &&
      class33[2].style.backgroundColor == "yellow" &&
      class33[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class33.length; i++) {
    if (
      class33[0].style.backgroundColor == "red" &&
      class33[1].style.backgroundColor == "red" &&
      class33[2].style.backgroundColor == "red" &&
      class33[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class34.length; i++) {
    if (
      class34[0].style.backgroundColor == "yellow" &&
      class34[1].style.backgroundColor == "yellow" &&
      class34[2].style.backgroundColor == "yellow" &&
      class34[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class34.length; i++) {
    if (
      class34[0].style.backgroundColor == "red" &&
      class34[1].style.backgroundColor == "red" &&
      class34[2].style.backgroundColor == "red" &&
      class34[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class35.length; i++) {
    if (
      class35[0].style.backgroundColor == "yellow" &&
      class35[1].style.backgroundColor == "yellow" &&
      class35[2].style.backgroundColor == "yellow" &&
      class35[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class35.length; i++) {
    if (
      class35[0].style.backgroundColor == "red" &&
      class35[1].style.backgroundColor == "red" &&
      class35[2].style.backgroundColor == "red" &&
      class35[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class36.length; i++) {
    if (
      class36[0].style.backgroundColor == "yellow" &&
      class36[1].style.backgroundColor == "yellow" &&
      class36[2].style.backgroundColor == "yellow" &&
      class36[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class36.length; i++) {
    if (
      class36[0].style.backgroundColor == "red" &&
      class36[1].style.backgroundColor == "red" &&
      class36[2].style.backgroundColor == "red" &&
      class36[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class37.length; i++) {
    if (
      class37[0].style.backgroundColor == "yellow" &&
      class37[1].style.backgroundColor == "yellow" &&
      class37[2].style.backgroundColor == "yellow" &&
      class37[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class37.length; i++) {
    if (
      class37[0].style.backgroundColor == "red" &&
      class37[1].style.backgroundColor == "red" &&
      class37[2].style.backgroundColor == "red" &&
      class37[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class38.length; i++) {
    if (
      class38[0].style.backgroundColor == "yellow" &&
      class38[1].style.backgroundColor == "yellow" &&
      class38[2].style.backgroundColor == "yellow" &&
      class38[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class38.length; i++) {
    if (
      class38[0].style.backgroundColor == "red" &&
      class38[1].style.backgroundColor == "red" &&
      class38[2].style.backgroundColor == "red" &&
      class38[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class39.length; i++) {
    if (
      class39[0].style.backgroundColor == "yellow" &&
      class39[1].style.backgroundColor == "yellow" &&
      class39[2].style.backgroundColor == "yellow" &&
      class39[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class39.length; i++) {
    if (
      class39[0].style.backgroundColor == "red" &&
      class39[1].style.backgroundColor == "red" &&
      class39[2].style.backgroundColor == "red" &&
      class39[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class40.length; i++) {
    if (
      class40[0].style.backgroundColor == "yellow" &&
      class40[1].style.backgroundColor == "yellow" &&
      class40[2].style.backgroundColor == "yellow" &&
      class40[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class40.length; i++) {
    if (
      class40[0].style.backgroundColor == "red" &&
      class40[1].style.backgroundColor == "red" &&
      class40[2].style.backgroundColor == "red" &&
      class40[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class41.length; i++) {
    if (
      class41[0].style.backgroundColor == "yellow" &&
      class41[1].style.backgroundColor == "yellow" &&
      class41[2].style.backgroundColor == "yellow" &&
      class41[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class41.length; i++) {
    if (
      class41[0].style.backgroundColor == "red" &&
      class41[1].style.backgroundColor == "red" &&
      class41[2].style.backgroundColor == "red" &&
      class41[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class42.length; i++) {
    if (
      class42[0].style.backgroundColor == "yellow" &&
      class42[1].style.backgroundColor == "yellow" &&
      class42[2].style.backgroundColor == "yellow" &&
      class42[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class42.length; i++) {
    if (
      class42[0].style.backgroundColor == "red" &&
      class42[1].style.backgroundColor == "red" &&
      class42[2].style.backgroundColor == "red" &&
      class42[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class43.length; i++) {
    if (
      class43[0].style.backgroundColor == "yellow" &&
      class43[1].style.backgroundColor == "yellow" &&
      class43[2].style.backgroundColor == "yellow" &&
      class43[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class43.length; i++) {
    if (
      class43[0].style.backgroundColor == "red" &&
      class43[1].style.backgroundColor == "red" &&
      class43[2].style.backgroundColor == "red" &&
      class43[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class44.length; i++) {
    if (
      class44[0].style.backgroundColor == "yellow" &&
      class44[1].style.backgroundColor == "yellow" &&
      class44[2].style.backgroundColor == "yellow" &&
      class44[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class44.length; i++) {
    if (
      class44[0].style.backgroundColor == "red" &&
      class44[1].style.backgroundColor == "red" &&
      class44[2].style.backgroundColor == "red" &&
      class44[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class45.length; i++) {
    if (
      class45[0].style.backgroundColor == "yellow" &&
      class45[1].style.backgroundColor == "yellow" &&
      class45[2].style.backgroundColor == "yellow" &&
      class45[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class45.length; i++) {
    if (
      class45[0].style.backgroundColor == "red" &&
      class45[1].style.backgroundColor == "red" &&
      class45[2].style.backgroundColor == "red" &&
      class45[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class46.length; i++) {
    if (
      class46[0].style.backgroundColor == "yellow" &&
      class46[1].style.backgroundColor == "yellow" &&
      class46[2].style.backgroundColor == "yellow" &&
      class46[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class46.length; i++) {
    if (
      class46[0].style.backgroundColor == "red" &&
      class46[1].style.backgroundColor == "red" &&
      class46[2].style.backgroundColor == "red" &&
      class46[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class47.length; i++) {
    if (
      class47[0].style.backgroundColor == "yellow" &&
      class47[1].style.backgroundColor == "yellow" &&
      class47[2].style.backgroundColor == "yellow" &&
      class47[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class47.length; i++) {
    if (
      class47[0].style.backgroundColor == "red" &&
      class47[1].style.backgroundColor == "red" &&
      class47[2].style.backgroundColor == "red" &&
      class47[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class48.length; i++) {
    if (
      class48[0].style.backgroundColor == "yellow" &&
      class48[1].style.backgroundColor == "yellow" &&
      class48[2].style.backgroundColor == "yellow" &&
      class48[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class48.length; i++) {
    if (
      class48[0].style.backgroundColor == "red" &&
      class48[1].style.backgroundColor == "red" &&
      class48[2].style.backgroundColor == "red" &&
      class48[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class49.length; i++) {
    if (
      class49[0].style.backgroundColor == "yellow" &&
      class49[1].style.backgroundColor == "yellow" &&
      class49[2].style.backgroundColor == "yellow" &&
      class49[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class49.length; i++) {
    if (
      class49[0].style.backgroundColor == "red" &&
      class49[1].style.backgroundColor == "red" &&
      class49[2].style.backgroundColor == "red" &&
      class49[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class50.length; i++) {
    if (
      class50[0].style.backgroundColor == "yellow" &&
      class50[1].style.backgroundColor == "yellow" &&
      class50[2].style.backgroundColor == "yellow" &&
      class50[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class50.length; i++) {
    if (
      class50[0].style.backgroundColor == "red" &&
      class50[1].style.backgroundColor == "red" &&
      class50[2].style.backgroundColor == "red" &&
      class50[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class51.length; i++) {
    if (
      class51[0].style.backgroundColor == "yellow" &&
      class51[1].style.backgroundColor == "yellow" &&
      class51[2].style.backgroundColor == "yellow" &&
      class51[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class51.length; i++) {
    if (
      class51[0].style.backgroundColor == "red" &&
      class51[1].style.backgroundColor == "red" &&
      class51[2].style.backgroundColor == "red" &&
      class51[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class52.length; i++) {
    if (
      class52[0].style.backgroundColor == "yellow" &&
      class52[1].style.backgroundColor == "yellow" &&
      class52[2].style.backgroundColor == "yellow" &&
      class52[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class52.length; i++) {
    if (
      class52[0].style.backgroundColor == "red" &&
      class52[1].style.backgroundColor == "red" &&
      class52[2].style.backgroundColor == "red" &&
      class52[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class53.length; i++) {
    if (
      class53[0].style.backgroundColor == "yellow" &&
      class53[1].style.backgroundColor == "yellow" &&
      class53[2].style.backgroundColor == "yellow" &&
      class53[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class53.length; i++) {
    if (
      class53[0].style.backgroundColor == "red" &&
      class53[1].style.backgroundColor == "red" &&
      class53[2].style.backgroundColor == "red" &&
      class53[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class54.length; i++) {
    if (
      class54[0].style.backgroundColor == "yellow" &&
      class54[1].style.backgroundColor == "yellow" &&
      class54[2].style.backgroundColor == "yellow" &&
      class54[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class54.length; i++) {
    if (
      class54[0].style.backgroundColor == "red" &&
      class54[1].style.backgroundColor == "red" &&
      class54[2].style.backgroundColor == "red" &&
      class54[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class55.length; i++) {
    if (
      class55[0].style.backgroundColor == "yellow" &&
      class55[1].style.backgroundColor == "yellow" &&
      class55[2].style.backgroundColor == "yellow" &&
      class55[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class55.length; i++) {
    if (
      class55[0].style.backgroundColor == "red" &&
      class55[1].style.backgroundColor == "red" &&
      class55[2].style.backgroundColor == "red" &&
      class55[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class56.length; i++) {
    if (
      class56[0].style.backgroundColor == "yellow" &&
      class56[1].style.backgroundColor == "yellow" &&
      class56[2].style.backgroundColor == "yellow" &&
      class56[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class56.length; i++) {
    if (
      class56[0].style.backgroundColor == "red" &&
      class56[1].style.backgroundColor == "red" &&
      class56[2].style.backgroundColor == "red" &&
      class56[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class57.length; i++) {
    if (
      class57[0].style.backgroundColor == "yellow" &&
      class57[1].style.backgroundColor == "yellow" &&
      class57[2].style.backgroundColor == "yellow" &&
      class57[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class57.length; i++) {
    if (
      class57[0].style.backgroundColor == "red" &&
      class57[1].style.backgroundColor == "red" &&
      class57[2].style.backgroundColor == "red" &&
      class57[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class58.length; i++) {
    if (
      class58[0].style.backgroundColor == "yellow" &&
      class58[1].style.backgroundColor == "yellow" &&
      class58[2].style.backgroundColor == "yellow" &&
      class58[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class58.length; i++) {
    if (
      class58[0].style.backgroundColor == "red" &&
      class58[1].style.backgroundColor == "red" &&
      class58[2].style.backgroundColor == "red" &&
      class58[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class59.length; i++) {
    if (
      class59[0].style.backgroundColor == "yellow" &&
      class59[1].style.backgroundColor == "yellow" &&
      class59[2].style.backgroundColor == "yellow" &&
      class59[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class59.length; i++) {
    if (
      class59[0].style.backgroundColor == "red" &&
      class59[1].style.backgroundColor == "red" &&
      class59[2].style.backgroundColor == "red" &&
      class59[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class60.length; i++) {
    if (
      class60[0].style.backgroundColor == "yellow" &&
      class60[1].style.backgroundColor == "yellow" &&
      class60[2].style.backgroundColor == "yellow" &&
      class60[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class60.length; i++) {
    if (
      class60[0].style.backgroundColor == "red" &&
      class60[1].style.backgroundColor == "red" &&
      class60[2].style.backgroundColor == "red" &&
      class60[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class61.length; i++) {
    if (
      class61[0].style.backgroundColor == "yellow" &&
      class61[1].style.backgroundColor == "yellow" &&
      class61[2].style.backgroundColor == "yellow" &&
      class61[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class61.length; i++) {
    if (
      class61[0].style.backgroundColor == "red" &&
      class61[1].style.backgroundColor == "red" &&
      class61[2].style.backgroundColor == "red" &&
      class61[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class62.length; i++) {
    if (
      class62[0].style.backgroundColor == "yellow" &&
      class62[1].style.backgroundColor == "yellow" &&
      class62[2].style.backgroundColor == "yellow" &&
      class62[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class62.length; i++) {
    if (
      class62[0].style.backgroundColor == "red" &&
      class62[1].style.backgroundColor == "red" &&
      class62[2].style.backgroundColor == "red" &&
      class62[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class63.length; i++) {
    if (
      class63[0].style.backgroundColor == "yellow" &&
      class63[1].style.backgroundColor == "yellow" &&
      class63[2].style.backgroundColor == "yellow" &&
      class63[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class63.length; i++) {
    if (
      class63[0].style.backgroundColor == "red" &&
      class63[1].style.backgroundColor == "red" &&
      class63[2].style.backgroundColor == "red" &&
      class63[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class64.length; i++) {
    if (
      class64[0].style.backgroundColor == "yellow" &&
      class64[1].style.backgroundColor == "yellow" &&
      class64[2].style.backgroundColor == "yellow" &&
      class64[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class64.length; i++) {
    if (
      class64[0].style.backgroundColor == "red" &&
      class64[1].style.backgroundColor == "red" &&
      class64[2].style.backgroundColor == "red" &&
      class64[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
  for (i = 0; i < class65.length; i++) {
    if (
      class65[0].style.backgroundColor == "yellow" &&
      class65[1].style.backgroundColor == "yellow" &&
      class65[2].style.backgroundColor == "yellow" &&
      class65[3].style.backgroundColor == "yellow"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "yellow";
    }
  }
  for (i = 0; i < class65.length; i++) {
    if (
      class65[0].style.backgroundColor == "red" &&
      class65[1].style.backgroundColor == "red" &&
      class65[2].style.backgroundColor == "red" &&
      class65[3].style.backgroundColor == "red"
    ) {
      win.style.display = "block";
      win.style.backgroundColor = "red";
    }
  }
}

restart.addEventListener("click", () => {
  location.reload();
});

function start() {
  playTheGam();
}
startBtn.addEventListener("click", start, { once: true });
