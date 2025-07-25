---
outline: deep
---

# Установка модуля и приложения
Установка приложения и модуля немного сложнее, нежели установка только приложения, но в некоторых ситуациях может увеличить эффективность сервиса
## Установка модуля {#install-module}
::: danger
Любые действия вы производите **на свой страх и риск**. Мы не несём ответственности за ваши действия и ущерб, причиненный устройству в случае ошибок.
:::
1. Скачайте ZIP-архив модуля [последнего релиза на GitHub](https://github.com/egor-white/zaprett/releases/latest) <small>[(как выбрать версию?)](pick-module-version.md)</small>. Если качается файл с расширением .bin, попробуйте **сменить ваш браузер**.
2. После завершения загрузки установите модуль в вашем root-менеджере, выбрав скачанный файл.
::: warning
Убедитесь, что модуль установлен успешно и нет каких-либо ошибок при установке. При их возникновении повторите попытку или попробуйте исправить проблему самостоятельно.
:::

## Установка приложения {#install-app}
1. Скачайте APK файл [последнего релиза на GitHub](https://github.com/CherretGit/zaprett-app/releases/latest)
2. Откройте скачанный файл
3. Дайте вашему браузеру разрешение на установку неизвестных приложений (если оно не было выдано ранее)
4. Установите и откройте приложение
5. Выдайте приложению все запрашиваемые им разрешения

| Разрешение | Цель получения |
|------------|----------------|
|управление хранилищем|приложение хранит конфиг, листы и стратегии в папке /sdcard/zaprett для удобной работы с модулем|
|уведомления|необходимо для того, чтобы Android не убивал фоновые процессы byedpi, прерывая этим работу сервиса|
|root-права (автоматически запршивается только при использовании Magisk)|необходимо для управлением nfqws|

6. Если вы используете не Magisk или не выдали root-права при запуске, полностью завершите приложение, откройте ваш root-менеджер и выдайте приложению root-права, затем снова запустите его.

7. В вкладке "Настройки" включите опцию "Использовать модуль"

8. Приложение готово к эксплуатации!

Как работать с приложением (nfqws), можно найти в [этой статье](../use/nfqws.md)