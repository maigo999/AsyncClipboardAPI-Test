
const copy = function () {
    navigator.clipboard.writeText(document.getElementById('copy-text').value)
      .then(function () {
            console.log("CopyOK!");
        }, function () {
            console.log('CopyNoOK!');
        });
};

const copybutton = document.getElementById('click-copy');
  copybutton.addEventListener('click', function(){
    copy();
  }, false);

const paste = function(){
navigator.clipboard.readText()
.then(function (text) {
  document.getElementsByClassName('pastespace').innerHTML = text; // なんで動かないのおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお
  console.log(text)
}, function () {
  console.log('ペースト失敗');
    });
};

const pastebutton = document.getElementById('click-paste');
  pastebutton.addEventListener('click', function(){
    paste();
  }, false);


