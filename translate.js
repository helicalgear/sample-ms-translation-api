function getToken(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken', true);
    xhr.setRequestHeader('Ocp-Apim-Subscription-Key', subscriptionKey);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                console.log(xhr.responseText);
            }
        }
    }
    xhr.send();
}

function translate(token, text, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.microsofttranslator.com/v2/http.svc/Translate?text=%1&to=%2&category=%3'.arg(text).arg('ja').arg('generalnn'), true);
    xhr.setRequestHeader('Authorization', 'Bearer %1'.arg(token));
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 && xhr.responseText.match(/<string .*>(.*)<\/string>/)) {
                callback(RegExp.$1);
            } else {
                console.log(xhr.responseText);
            }
        }
    }
    xhr.send();
}
