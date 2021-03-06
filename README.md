### deploy to Heroku

> [https://newmovies.herokuapp.com/](https://newmovies.herokuapp.com/) — site on heroku

# Структура проекта

```
.
├── /build/                     # Папка для скомпилированного кода
├── /public/                    # Статические файлы, которые копируются в папку /build/public
├── /src/                       # Код приложения
│   ├── /components/            # React компоненты
│   ├── /data/                  # Исходные данные для приложение, в формате .txt и парсер для него
│   ├── /actions                # все action creators приложения
|   ├── /constants              # все константы для action creators приложения
|   ├── /reducers               # Глобальное управление стейтом приложения 
|   ├── /store                  # Конфиг стора, его инициализация 
│   ├── /routes/                # роутинг для приложения
│   ├── /client.js              # Скрипт запуска на стороне клиента
│   ├── /config.js              # глобальные настройки для приложения
│   ├── /server.js              # Скрипт запуска на стороне клиента
│   ├── /router.js              # инициализация universal-router(роутинга)
│   └── /history.js             # инициализация истории для роутинга
├── /jest/                      # загружчик файлов для тестирование
├── /tools/                     # 
│   ├── /build.js               # Создает проект из исходной папки
│   ├── /bundle.js              # Связывает веб-ресурсы с пакетами через Webpack
│   ├── /clean.js               # очистка /build
│   ├── /copy.js                # Копирует статические файлы в папку вывода /build
│   ├── /deploy.js              # Deploys your web application
│   ├── /postcss.config.js      # Конфигурация для преобразования стилей с плагинами PostCSS
│   ├── /run.js                 # для выполнения задач автоматизации сборки
│   ├── /runServer.js           # Запускает (или перезапускает) сервер Node.js
│   ├── /start.js               # Запускает веб-сервер разработки с «живой перезагрузкой»,
│   └── /webpack.config.js      # Конфигурации для клиентских и серверных пакетов
├── package.json                # список установленных библиотек
├── jest.config.js              # конфиг для тестирование
```

### Запуск проекта

#### 1. Cклонировать репозиторий

```shell
$ git clone https://github.com/YuraKolyada/films.git
$ cd films/
```
#### 2. Установить все пакеты, библиотеки

```shell
$ npm install
```
#### 3. Запустить сервер

```shell
$ npm start
```
footbal this 
Эта команда создаст приложение из исходных файлов (`/src`) в выходной файл
`/build`.Как только начальная сборка завершится, она запустит
сервер Node.js(`node build/server.js`) и Browsersync, с помощью HMR поверх него.

> [http://localhost:3000/](http://localhost:3000/) — Node.js сервер (`build/server.js`)
> [http://localhost:3001/](http://localhost:3001/) — панель Browsersync

### Тестирование проекта
точнее сказать: actions and reducers 

```shell
$ npm test

```
