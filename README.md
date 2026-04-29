# 林彥良 (Lin Yen-Liang) - 個人履歷網頁

這個專案是使用 **React + Vite + Tailwind CSS** 開發的個人履歷網頁，專為部署至 **GitHub Pages** 最佳化。

## 如何部署到 GitHub Pages

1. **建立 GitHub 倉庫**：
   在 GitHub 上建立一個新的儲存庫。

2. **上傳程式碼**：
   將所有檔案上傳到您的 GitHub 儲存庫。

3. **設定 Package.json** (選填)：
   如果您想要自動部署，請在 `package.json` 中新增 `homepage` 欄位：
   ```json
   "homepage": "https://<您的使用者名稱>.github.io/<您的倉庫名稱>",
   ```

4. **執行部署命令**：
   在終端機中執行：
   ```bash
   npm run deploy
   ```
   這會自動執行 `build` 並將 `dist` 資料夾的內容推送到 `gh-pages` 分支。

5. **GitHub 設定**：
   前往 GitHub 儲存庫的 **Settings > Pages**，確保 **Source** 設定為 `Deploy from a branch` 並且分支選擇 `gh-pages`。

## 技術棧
- React 19
- Vite
- Tailwind CSS 4
- Lucide React (圖標)
- Motion (動畫)
