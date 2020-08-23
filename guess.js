function getText() {
    //12document.getElementById('btn').style.backgroundColor="white";

    var input_str = document.getElementById('ans').value;//取輸入的值;
    //如果沒有詩入任何東西，跳出alert。如果有東西才新增留言;
    
    if (input_str == "DWARFS" || input_str == "dwarfs" || input_str == "Dwarfs") {
        window.location.href = 'DWARFS.html';
    }
    else if (input_str == "QUEEN" || input_str == "queen" || input_str == "Queen") {
        window.location.href = 'QUEEN.html';
    }
    else {
        alert("找水哥");
    }
}
