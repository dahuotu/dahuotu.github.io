# 框架说明

基于 `create-react-app` 脚手架搭建。

## 使用技术

- [React18]()
- [React-Router-Dom V6]()
- [全局状态管理](https://github.com/dai-shi/react-hooks-global-state)
- [Typescript]()
- [Sass/Scss]()
- [Less]()
- [Antd]()
- [axios]()
- [反向代理]()
- [国际化多语言]()
- [谷歌插件存储](https://github.com/onikienko/use-chrome-storage)

## 开发说明

由于是 Web3 项目建议使用 `npm` ， `yarn` 虽然速度快但实际项目中有一些依赖无法正确安装。

### 安装

```cmd
npm install
```

### 启动

```cmd
npm start
```

### 编译

```cmd
npm build
```

## 搭建过程

### 通过 `create-react-app` 脚手架搭建项目

```cmd
npx create-react-app project-name --template typescript
```

### 统一代码风格的利器 `prettier`

> 安装

```cmd
npm install prettier -D
```

安装完之后我们可以声明两个文件， `.prettierignore` 表示 `prettier` 忽略不需要去检查的目录，而 `.prettierrc.js` 就是我们的 `prettier` 规则定义的地方。

> `.prettierignore` 配置

```txt
# Ignore artifacts:
node_modules
dist
.vscode
.prettierignore
.history
```

> `.prettierrc.js` 配置

```js
module.exports = {
  printWidth: 140,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  useTabs: false
};
```

> 如果使用的 `vscode` ，推荐下载 `prettier` 插件。

PS：插件的配置是全局的，如果你希望使用当前的项目 `prettier` 配置的话，建议在目录下创建一个 `.vscode` 文件夹，在里面声明一个 `settings.json` ，在 `settings.json` ` 中的配置优先级高于编辑器的全局配置。

> `settings.json` 配置

```json
{
  // prettier规则使用当前目录的.prettierrc.js
  "prettier.configPath": ".prettierrc.js",
  // 保存的时候自动格式化
  "editor.formatOnSave": true
}
```

### 解决代码质量的利器 `eslint`

> 安装

```cmd
npm i eslint -D
```

> 新建 `eslintrc.js` 文件，添加配置代码。

```js
module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  extends: ['plugin:prettier/recommended'], //定义文件继承的子规范
  plugins: ['@typescript-eslint', 'react-hooks', 'eslint-plugin-react'], //定义了该eslint文件所依赖的插件
  env: {
    //指定代码的运行环境
    browser: true,
    node: true
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // 自定义的一些规则
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'error',
    'valid-typeof': [
      'warn',
      {
        requireStringLiterals: false
      }
    ]
  }
};
```

> `parser` 配置：插件 `@typescript-eslint/parser` 让 `ESLint` 对 `TypeScript` 的进行解析。

```cmd
npm i @typescript-eslint/parser -D
```

> `extends` 配置：为了防止 `eslint` 和 `prettier` 的规则发生冲突，我们需要集成两者则设置为['plugin:prettier/recommended']。

```cmd
npm i eslint-config-prettier eslint-plugin-prettier -D
```

> plugins 配置:

1. `@typescript-eslint`：包含了各类定义好的检测`Typescript`代码的规范。
2. `react-hooks`：为了检测和规范`React hooks`的代码规范检查的插件。
3. `eslint-plugin-react`：为了检测和规范 React 代码的书写的插件。

```cmd
npm i eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin -D
```

> 最后再修改 `settings.json`

```json
{
  "prettier.configPath": ".prettierrc.js",
  "eslint.options": {
    "extensions": [".js", ".ts", ".tsx", "jsx", "html"]
  },
  "editor.codeActionsOnSave": {
    // 保存时使用eslint进行格式化
    "source.fixAll.eslint": true
  }
}
```

> 暴露配置

先提交到 git 上再暴露配置

```cmd
npm run eject
```

此时项目多出了 `config` 文件夹，找到 `config` 目录下的 `webpack.config.js` 文件，在 50-70 行之间有个 `cssRegex` ，在此处添加

```js
// less
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
```

在 `webpack.config.js` 文件 500 多行有个 `sassRegex` ，模仿写对应的 `lessRegex` 。

```js
// less
{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders({
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'less-loader'
    ),
    sideEffects: true,
},
// less
{
    test: lessModuleRegex,
    use: getStyleLoaders({
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modules: true,
            getLocalIdent: getCSSModuleLocalIdent,
        },
        'less-loader'
    ),
},
```

### 设置路径别名

为了避免使用相对路径的麻烦，可以设置路径别名。

> 修改 `config/webpack.config.js`

```js
  alias: {
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web',
      // Allows for better profiling with ReactDevTools
      ...(isEnvProductionProfile && {
          'react-dom$': 'react-dom/profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
      }),
      ...(modules.webpackAliases || {}),
      +'@': path.join(__dirname, '..', 'src'),
  },
```

这样在 js 代码开头的 import 路径中，直接使用@表示“src 根目录”，不用去自己去数有多少个"../"了。例如， `src/app.js`

```js
// 表示该文件当前路径下的app.styl（相对路径）
import './app.less';
// 表示src/app.styl，等价于上面的文件地址（绝对路径）
import '@/app.less';
```

> react+ts 工程中找不到模块`@/pages/index`或其相应的类型声明，在`tsconfig.json`文件中添加。

```json
"paths": {
 "@/*": ["src/*"]
 }

```

### 禁止 build 项目生成 map 文件

map 文件，即 Javascript 的 source map 文件，是为了解决被混淆压缩的 js 在调试的时候，能够快速定位到压缩前的源代码的辅助性文件。这个文件发布出去，会暴露源代码。因此，建议直接禁止 build 时生成 map 文件。

> 方法一、修改 `config/webpack.config.js` ，把 `shouldUseSourceMap` 的值改成 `false`

```js
// Source maps are resource heavy and can cause out of memory issue for large source files.
- // const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
+ const shouldUseSourceMap = false;
```

> 方法二、或者修改暴露的`scripts`目下`build.js`，添加

```
process.env.GENERATE_SOURCEMAP = false;
```

### 配置 `less`

> 安装

```cmd
npm i less less-loader -S
```

### Antd

> 安装

```cmd
npm install antd
```

> 实现按需加载，安装 `babel-plugin-import`

```cmd
npm install babel-plugin-import --dev
```

> 修改 `package.json`

```json
    "babel": {
        "presets": [
            "react-app"
M       ],
+       "plugins": [
+           [
+               "import",
+               {
+                   "libraryName": "antd",
+                   "style": "css"
+               }
+           ]
+       ]
    }
```

> 主题定制

参考官方文档，[文档](https://github.com/ant-design/ant-design-aliyun-theme)

### 配置 axios 和反向代理

> 安装 `axios` 和 `http-proxy-middleware`（后面反向代理会用到）

```cmd
npm i axios http-proxy-middleware -s
```

在 `src` 目录下创建 api 文件夹，然后创建 `index.ts` 和 `request.ts` 文件

> index.ts

```js
import Server from '@/utils/request';

// 获取藏品分析数据
export function getApi(para: any) {
  //   console.log("para, head=>", para, head);
  return Server({
    url: '/api/get',
    method: 'get',
    params: para
  });
}
```

> request.ts

```js
import axios from 'axios';
import { message } from 'antd';

//请求地址
const apiPath = 'http://nftsiteapi';

const Request = axios.create({
  baseURL: apiPath,
  timeout: 60000,
  withCredentials: false // 表示跨域请求时是否需要使用凭证
});

// 请求拦截器
Request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
Request.interceptors.response.use(
  (response) => {
    const rep = response.data;
    //这里根据后台返回来设置
    if (rep.code === 0) {
      return response.data;
    } else {
      console.log('err', rep.msg);
      message.error(rep.msg);
      return Promise.reject(rep.msg);
    }
  },
  (error) => {
    console.log('err', error);
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default Request;
```

> 配置代理，可以访问到后台的服务器地址

在`src`文件夹中创建`setupProxy.ts`内容配置如下

```js
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://www.ibugthree.com/oldcar/', //后台服务器地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};
```

### 配置国际化多语言

> 安装最新版

```cmd
npm i react-intl-universal
```

> 使用参考[文档](https://www.npmjs.com/package/react-intl-universal)

### mobx 状态管理

搭配 React18 的状态管理包

> 安装

```cmd
yarn add mobx mobx-react-lite

```

> 创建 Store

- 初始化 mobx

`src` 目录下新建 `store` 文件夹以及 `index.js`(/src/store/index.js)

```ts
import React from 'react';
import TestStore from './test.Store';

class RootStore {
  constructor() {
    this.taskStore = new TestStore();
  }
}
// 实例化
const context = React.createContext(new RootStore());
export const useStore = () => React.useContext(context);
```

`store` 目录下新建 `test.Store.js` 对 `mobx` 进行模块化管理(/src/store/test.Store.js)

```ts
import { makeAutoObservable } from 'mobx';
class TestStore {
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }
  // 添加
  addTest() {
    this.count++;
  }
}
export default TestStore;
```

> 如何使用

在页面中引入 store，使用中间件连接，实现数据响应式。

```ts
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/index';

function Test() {
  const { testStore } = useStore();
  return (
    <div>
      <span>{testStore.count}</span>
      <button onClick={testStore.addTest}>点击</button>
    </div>
  );
}

export default observer(Test);
```

## 插件开发注意事项

### React hooks 使用

> build 打包后的插件不支持异步组件调用

考虑加载效率问题，一般会拆包，让组件异步加载。但在浏览器插件开发过程不支持异步组件调用，会导致插件直接奔溃。异步加载请禁用以下方式：

- 错误的方式

```ts
const Transactions = lazy(() => import('./components/Transactions'));
```

- 正确的方式

```ts
import Account from './components/Account';
```

### 注入页面的调用

> `content` 页面需要注入到目标网页中要使用如下方式

```ts
// 创建id为CRX-container的div
const app = document.createElement('div');
app.id = 'CRX-container';
// 将刚创建的div插入body最后
document.body.appendChild(app);
// 将ReactDOM插入刚创建的div
ReactDOM.render(<Content />, app);
```

> 开发过程中 `content` 页面的调用

- 正确的方式

```ts
import '@/content';
```

- 错误的方式

```ts
import Content from '@/content';
```

### React 下浏览器跨域问题

1. 实测谷歌浏览器插件 v3 下使用代理可以有效规避跨域问题。
2. 如果浏览器代理无效可以借助 backgroud.js 的标签跨域访问。

### 语言框架选择

谷歌浏览器插件一些内置的 api 都是 js 的，所以框架选择 webpack+react 即可，切记千万别使用 ts 否则一些谷歌 Api 编译都不通过。
