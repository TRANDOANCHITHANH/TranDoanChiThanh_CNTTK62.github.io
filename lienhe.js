function getValue(id){
    return document.getElementById(id).value.trim();
}

function showError(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}
function validate()
{   

    var flag = true;
    var username = getValue('username');
    if (username == '' ){
        flag = false;
        showError('username', '*Họ tên không được để trống');
    }else{
        showError('username','');
    }
    var subject = getValue('subject');
    if (subject == '' ){
        flag = false;
        showError('subject', '*Subject không được để trống');
    }else{
        showError('subject','');
    }

    var email = getValue('email');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!mailformat.test(email)){
        flag = false;
         
        showError('email', '*Vui lòng kiểm tra lại Email');
    }else{
        showError('email','');
    }
    var message = getValue('message');
    if (message == '' ){
        flag = false;
        showError('message', '*Message không được để trống');
    }else{
        showError('message','');
    }
    if(username!='' && subject != '' && mailformat.test(email) && message != ''){
        alert('Gửi thông tin thành công');
        flag=true;
        
    }
    return flag;
   
}
