var CountValue = 0;
function countUp(){
  CountValue++;
}

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
    countUp();
    document.getElementsByClassName('paste-space')[CountValue].textContent = text;
    console.log("クリップボードの中身は「" + text + "」です。")
}, function () {
  console.log('ペースト失敗');
    });
};

const pastebutton = document.getElementById('click-paste');
  pastebutton.addEventListener('click', function(){
    paste();
  }, false);


