$("#crypt-form").on("submit", function (event) {
    event.preventDefault();
    var key = $('#encrypt-key').val();
    if (key == '') { key = 1; }
    var crypt = Encrypt($('#text-to-encrypt').val(), key);
    $('.encrypted-text').text(crypt);
});

$("#decrypt-form").on("submit", function (event) {
    event.preventDefault();
    var key = $('#decrypt-key').val();
    if (key == '') { key = 1; }
    var decrypt = Decrypt($('#text-to-decrypt').val(),key);
    $('.decrypted-text').text(decrypt);
});

$('.copy-button-encrypted').on("click", function () {
    var copyText = document.getElementById("encrypted-text");
    if (copyText.value != '') {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        $('#encrypted-copyed-success').fadeIn().delay(2000).fadeOut('fast');
    }
});

$('.copy-button-decrypted').on("click", function () {
    var copyText = document.getElementById("decrypted-text");
    if (copyText.value != '') {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        $('#decrypted-copyed-success').fadeIn().delay(2000).fadeOut('fast');
    }
});

function Encrypt(str, key) {
    if (!str) str = "";
    str = (str == "undefined" || str == "null") ? "" : str;
    try {
        var key = key;
        var pos = 0;
        var ostr = '';
        while (pos < str.length) {
            ostr = ostr + String.fromCharCode(str.charCodeAt(pos) ^ key);
            pos += 1;
        }
        return ostr;
    } catch (ex) {
        return '';
    }
}

function Decrypt(str, key) {
    if (!str) str = "";
    str = (str == "undefined" || str == "null") ? "" : str;
    try {
        var key = key;
        var pos = 0;
        var ostr = '';
        while (pos < str.length) {
            ostr = ostr + String.fromCharCode(key ^ str.charCodeAt(pos));
            pos += 1;
        }
        return ostr;
    } catch (ex) {
        return '';
    }
}

