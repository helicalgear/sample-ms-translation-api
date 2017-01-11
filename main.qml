import QtQuick 2.7
import QtQuick.Window 2.2
import 'translate.js' as Translate

Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")

    Row {
        anchors.fill: parent
        Rectangle {
            width: parent.width / 2
            height: parent.height
            border.width: 1
            TextInput {
                id: translate
                anchors.fill: parent
                padding: 10
                text: 'Please input the texts.'
                wrapMode: Text.WordWrap
                onTextChanged: {
                    Translate.getToken(function (token){
                        Translate.translate(token, translate.text, function (translated_text) {
                            translated.text = translated_text;
                        });
                    });
                }
            }
        }
        Rectangle {
            width: parent.width / 2
            height: parent.height
            border.width: 1
            Text {
                id: translated
                anchors.fill: parent
                padding: 10
                text: ''

                wrapMode: Text.WordWrap
            }
        }
    }
}
