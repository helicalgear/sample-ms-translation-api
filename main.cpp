#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QQmlContext>

int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);

    QQmlApplicationEngine engine;
    engine.rootContext()->setContextProperty("subscriptionKey", SUBSCRIPTION_KEY);
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));

    return app.exec();
}
