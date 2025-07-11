---
outline: deep
---

:::warning
nfqws работает только при установленном и включенном модуле!
:::
Если у вас не работает nfqws, попробуйте byedpi, выключив переключатель Использовать модуль на странице настроек.
# Использование nfqws (root) {#using-nfqws}

## Быстрый старт {#quick-start}
1. Включите в Настройках пункт Использовать модуль
2. На странице Хосты выберите один или несколько листов
3. <small>(необязательно) </small>На странице Стратегии выберите одну стратегию
4. На Главной странице запустите или перезапустите модуль.

## Управление {#manage-service}

Для запуска, остановки и перезапуска сервиса на Главной странице есть соответствующие кнопки.
Также есть возможность периодически (1 раз в час) перезапускать модуль и запускать его при запуске системы (да, за это отвечает один выключатель). Расположен он на странице Настроек под пунктом "Периодически перезапускать сервис"

### Управление листами и стратегиями {#manage-lists-and-strategies}

:::tip
**Лист** - *это список из доменных имён, показывающий nfqws, на какие домены должен распространяться обман DPI*
:::

:::tip
**Стратегия** - *набор параметров для nfqws, описывающих, как именно нужно изменять траффик.*
:::

Управление листами производится на странице **Хосты**. Приложение предлагает фукнции активации, деактивации, удаления листа. Одновременно можно выбрать несколько листов, и минимально должен быть включён один, иначе сервис не будет модифицировать траффик.

Управление стратегиями, по аналогии с листами производится на странице **Стратегии**, однако одновременно выбрать можно лишь одну стратегию. Стратегию выбирать необязательно, в случае выключенной стратегии будет использоваться встроенная в модуль дефолтная стратегия.

#### Где взять листы и стратегии?
Листы и стратегии можно добавить самостоятельно, либо скачать из репозитория
**Добавление собственных файлов**
1. Нажмите на кнопку с плюсом
2. Нажмите на "Добавить"
3. Выберите файл
4. Готово


**Скачивание из репозитория** - [инструкция](repo.md#использование-usage)