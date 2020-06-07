![](https://github.com/Barbaris2/-sandbox-ReactJS/blob/master/src/images/sandboxreact.jpg?style=centerme)

# [sandbox] ReactJS

Материал для работы с библиотекой **ReactJS**. В данном репозитории моя 'песочница' для закрепления материалов при прохождении обучающих курсов.В данном репозитории рассматриваются новые версии библиотеки, обновлённые и добавленные возможности. А так же функциональности которые устаревают. Это помогает мне понять как работает **ReactJS**.

### Быстрый старт

- клонируйте репозиторий: `git clone https://github.com/Barbaris2/-sandbox-ReactJS.git`
- уcтановите зависимости: `yarn install` или `npm install`
- перейдите в нужную ветку(_см. описание веток ниже_): `git checkout <branch name>`
- запустите проект: `yarn start` or `npm start`
- откройте [http://localhost:3000](http://localhost:3000) в Вашем браузере.

## Описание веток

- `git checkout master`- пустой проект [Create React App](https://github.com/facebook/create-react-app).
- `git checkout 01_createContext` - передача данных через дерево компонентов без передачи пропсов.
- `git checkout 02_createContext_contextType` - передача данных через дерево компонентов с статическим свойством **static contextType** для работы с контекстом.
- `git checkout 03_memo` - оптимизация рендеринга DOM-дерева при помощи [HOC](https://ru.reactjs.org/docs/higher-order-components.html) **React.memo()**. Используется для простых функциональных компонентов. Если пропсы не изменились, рендеринга не произойдет.
- `git checkout 04_Routing` - маршрутизация с использованием библиотеки **react-router-dom**.
- `git checkout 05_lazy` - **React.lazy()** - метод из API - _React suspense_, который может грузить компоненты асинхронно. Позволяет определять компонент, который загружается динамически. Работает только если рендеринг происходит на клиенте.
- `git checkout 06_getDerivedStateFromError` - это улучшенная функциональность метода _componentDidCatch_ для отлавливания ошибок рендеринга в дочерних компонентах.
- `git checkout 07_useContext` - **useContext()** - хук для использования контекста.
- `git checkout 08_useState` - **useState()** - хук для использования _state_ внутри функционального компонента
- `git checkout 09_useEffect` - **useEffect()** метод жизненного цикла, представляет собой совокупность методов _componentDidMount_, _componentDidUpdate_, и _componentWillUnmount_.

### Ветки репозитория:

- `git checkout master`
- `git checkout 01_createContext`
- `git checkout 02_createContext_contextType`
- `git checkout 03_memo`
- `git checkout 04_Routing`
- `git checkout 05_lazy`
- `git checkout 06_getDerivedStateFromError`
- `git checkout 07_useContext`
- `git checkout 08_useState`
- `git checkout 09_useEffect`
