﻿function getText() {
    //12document.getElementById('btn').style.backgroundColor="white";

    var input_str = document.getElementById('ans').value;//取輸入的值;
    //如果沒有詩入任何東西，跳出alert。如果有東西才新增留言;
    if (input_str == "") {
        alert("人生不能有空白這個答案");
    }
    if (input_str == "5142") {
        window.location.href = 'STARTYOURARG2.html';
    }
}
