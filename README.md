# Pet Adoption Website
這是一個 Pet Adoption 的網站專案, 旨在練習基本的 Express 伺服器架設以及網頁切版。此專案採用 MVC 架構撰寫，依不同的路由呼叫不同的 controller。為了增加強可讀性, 使用模組化的SASS樣式表, 依不同區塊將樣式拆成對應的低階模組。

## 專案結構
```markdown
.
├── app.js: 主要的伺服器啟動檔案
├── controllers: 包含各個路由對應的邏輯控制
├── public: 靜態文件，如 CSS、JavaScript、圖片等
├── routes: 包含對應各個功能的路由
├── views: 包含視圖模板文件，使用 Handlebars
└── README.md
```


## 安裝與運行
### 前置需求
- Node.js (版本 ^14.x)

### 安裝步驟
1. 下載或克隆此專案
2. 在專案根目錄執行以下指令安裝所需套件：
    ```bash
    npm install
    ```

### 啟動伺服器
開發環境下，可以使用 nodemon 來啟動伺服器：
```bash
npm run dev
```

## Linting
此專案使用 ESLint 進行代碼檢查。你可以使用以下指令來檢查代碼：
```bash
npx eslint .
```

## 主要相依套件
- express: 用於構建伺服器的框架
- express-handlebars: 用於視圖模板的引擎

## 開發工具
- eslint: 用於代碼風格檢查
- eslint-config-standard: ESLint 的標準配置
- eslint-plugin-import: ESLint 的 import 插件
- eslint-plugin-node: ESLint 的 Node.js 插件
- eslint-plugin-promise: ESLint 的 Promise 插件