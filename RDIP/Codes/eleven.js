let op = ""

let hidebutton = []

let pra1, randstore, pra2;

let ebutton = []


//displaying the words of a particular sentence once the language is choosen

function sfun() {

    var y = document.getElementById("buton");

    y.innerHTML = "";

    y.style.display = "none";

    pra1 = ""

    randstore = ""

    pra2 = ""

    op = "";

    hidebutton = [];

    ebutton = [];

    let l = document.getElementById('chng').value;

    document.getElementById('id1').innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"

    document.getElementById('id2').innerHTML = "(select the buttons in proper order)"

    document.getElementById('crctchk').style.display = 'none';

    document.getElementById('enbl').innerHTML = "";

    document.getElementById('sbt').innerHTML = "";

    document.getElementById('rfrm').style.display = 'none';

    document.getElementById('wrong').innerHTML = "";

    document.getElementById('right').innerHTML = "";

    document.getElementById('getcrctsentence').style.display = 'none';

    document.getElementById('closesentence').style.display = 'none';

    document.getElementById('showanswer').style.display = 'none';

    if (l === 'English') { //checking which language is choosen

        y.style.display = "block";

        var openFile = new XMLHttpRequest();

        openFile.open("GET", "../files/english.txt", true); //opening english.txt file which contains different types of english sentences

        openFile.onreadystatechange = function() {

            if (openFile.readyState === 4) {

                var ATxt = openFile.responseText;

                var Txt1 = ATxt.split("   ");

                var ran = Math.floor(Math.random() * 9); //selecting one random sentence from the choosen file

                var k = Txt1[ran];

                var Txt2 = k.split("  ");

                pra1 = Txt2;

                var z = Txt2[0].split(" ");

                var len = z.length;

                z = zigzag(z);

                randstore = z;

                for (var i = 0; i < z.length; i++) {

                    var button = document.createElement("button");

                    button.innerHTML = z[i];

                    button.className = "btn1";

                    button.id = "btn" + i;

                    ebutton.push("btn" + i);

                    button.value = z[i]

                    button.onclick = function() { enblfun(button.id) };

                    var buttonDiv = document.getElementById("buton");

                    buttonDiv.appendChild(button);

                }

            }

        }

        openFile.send();

    } else { // else block will be executed if the user chooses hindi

        y.style.display = "block";

        var openFile = new XMLHttpRequest();

        openFile.open("GET", "../files/hindi.txt", true); //opening the file that contains english sentences

        openFile.onreadystatechange = function() {

            if (openFile.readyState === 4) {

                var ATxt = openFile.responseText;

                var Txt1 = ATxt.split("   ");

                var ran = Math.floor(Math.random() * 6); //choosing one random sentences in the opened file

                var k = Txt1[ran];

                var Txt2 = k.split("  ");

                pra1 = Txt2;

                var z = Txt2[0].split(" ");

                var len = z.length;

                z = zigzag(z);

                randstore = z;

                for (var i = 0; i < z.length; i++) {

                    var button = document.createElement("button");

                    button.innerHTML = z[i];

                    button.className = "btn1";

                    button.value = z[i]

                    button.onclick = function() { enblfun(button.id) };



                    button.id = "btn" + i;

                    ebutton.push("btn" + i);

                    var buttonDiv = document.getElementById("buton");

                    buttonDiv.appendChild(button);

                }

            }

        }

        openFile.send();



    }

}





//shuffling the words in the sentence

function zigzag(arra1) {

    var cntrl = arra1.length,

        temp, idx;

    while (cntrl > 0) {

     idx = Math.floor(Math.random() * cntrl);

        cntrl--; //decrementing the counter

//swaping the variables

       temp = arra1[cntrl];

        arra1[cntrl] = arra1[idx];

        arra1[idx] = temp;

    }

    return arra1;

}





//displaying the sentence that is formed after selecting the words

function enblfun(id) {

    var y = document.getElementById(event.srcElement.id).value
 
    document.getElementById(event.srcElement.id).style.display = 'none'

    document.getElementById('rfrm').style.display = 'block'

    document.getElementById('sbt').innerHTML = "Formed Sentence (after selecting words):"

    op += y.trim()

    op += " "

    document.getElementById('enbl').innerHTML = op

    hidebutton.push(event.srcElement.id)

    if (hidebutton.length === randstore.length) {

        document.getElementById('crctchk').style.display = 'block';

    }

}





//reforming the sentence

function rfrmsentence() {

    document.getElementById('enbl').innerHTML = "";

    document.getElementById('buton').innerHTML = "";

    document.getElementById('sbt').innerHTML = "";

    document.getElementById('wrong').innerHTML = "";

    document.getElementById('right').innerHTML = "";

    document.getElementById('crctchk').style.display = 'none';

    op = ""

    hidebutton = [];

    document.getElementById('rfrm').style.display = 'none'

    showbtnagain();

}






function showbtnagain() {

    ebutton = []

    for (var i = 0; i < randstore.length; i++) {

        var button = document.createElement("button");

        button.innerHTML = randstore[i];

        button.className = "btn1";

        button.id = "btn" + i;

        ebutton.push("btn" + i);

        button.value = randstore[i]

        button.onclick = function() { enblfun(button.id) };

        var buttonDiv = document.getElementById("buton");

        buttonDiv.appendChild(button);

    }

}





//checking the correctness of the sentence

function correctness() {

    document.getElementById('wrong').innerHTML = "";

    document.getElementById('right').innerHTML = "";

    var str = op.trim();

    for (var i = 0; i < pra1.length; i++) {

        var str1 = pra1[i].trim();

        console.log(i, str1.localeCompare(str), str, str.length, str1, str1.length)

        var ran = str1.localeCompare(str);

        if (ran == 0) {

            document.getElementById('right').innerHTML = "Right !!!";

            return;

        }

    }

    document.getElementById('wrong').innerHTML = "Wrong !!!";

    document.getElementById('getcrctsentence').style.display = 'block'

}







//showing whether the sentence is right or wrong

function showcrctsentence() {

    document.getElementById('getcrctsentence').style.display = 'none';

    document.getElementById('closesentence').style.display = 'block';

    document.getElementById('showanswer').style.display = 'none'

    for (var i = 0; i < pra1.length; i++) {

        document.getElementById('lastsentence').innerHTML += " ";

        document.getElementById('lastsentence').innerHTML += " ";

        document.getElementById('lastsentence').innerHTML += pra1[i];

        document.getElementById('lastsentence').innerHTML += " ";

        document.getElementById('lastsentence').innerHTML += "<br>";

    }

}



//Hiding the correct answers

function closesentence() {

    document.getElementById('getcrctsentence').style.display = 'none';

    document.getElementById('closesentence').style.display = 'none';

    document.getElementById('showanswer').style.display = 'block';

    document.getElementById('lastsentence').innerHTML = "";

}








//displaying the correct answers

function getans() {

    document.getElementById('getcrctsentence').style.display = 'none';

    document.getElementById('closesentence').style.display = 'block';

    document.getElementById('showanswer').style.display = 'none'

    for (var i = 0; i < pra1.length; i++) {

        document.getElementById('lastsentence').innerHTML += " ";

        document.getElementById('lastsentence').innerHTML += " ";

        document.getElementById('lastsentence').innerHTML += pra1[i];

        document.getElementById('lastsentence').innerHTML += " ";

        document.getElementById('lastsentence').innerHTML += "<br>";

    }

}







