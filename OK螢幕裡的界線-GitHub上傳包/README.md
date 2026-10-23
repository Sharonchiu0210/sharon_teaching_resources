# 螢幕裡的界線｜23:17 未讀訊息

給國中生的網路安全宣講與互動懸疑遊戲。網站內有「宣講內容」「小雨的故事」「實境 20 題」三個分頁。

## 上傳 GitHub

1. 在 GitHub 建立一個 repository（儲存庫），例如 `screen-boundaries`。使用 GitHub Free 時，請建立 Public 儲存庫以使用 GitHub Pages。
2. 解壓縮網站套件，把裡面的 `index.html`、`README.md` 與 `.nojekyll` 上傳到儲存庫最外層。不要直接上傳 ZIP，也不要把 `github-pages-site` 整個資料夾再套一層。
3. 儲存檔案（Commit changes）。
4. 到儲存庫的 **Settings → Pages**。
5. 在 **Build and deployment → Source** 選 **Deploy from a branch**。
6. Branch 選 **main**，資料夾選 **/(root)**，按 **Save**。若你的預設分支不是 main，請選實際存放檔案的分支。
7. 等發布完成，到 Pages 頁面點 **Visit site**。這個網址就是可以分享給學生的網站。

若電腦隱藏 `.nojekyll`，仍可先上傳 `index.html` 與 `README.md`；本網站沒有需要特殊建置的檔案。

官方設定說明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 使用方式

- 打開網站會先顯示宣講內容，用上方分頁切換。
- 「小雨的故事」：先播 20 秒開場影片、讀故事摘要，再依序完成 4 關（找出可疑訊息、遮住行蹤線索、留下證據、傳出求助訊息）。上方的關卡列會顯示目前在第幾關。點擊有外框的文字會出現講解。
- 「實境 20 題」：每題三選一，可用鍵盤 A／B／C 作答、左右方向鍵換題；答對時主角的四項屬性會成長，全部完成後出現結局稱號。最下方有講者用解答一覽。
- 可自行開啟懸疑音樂、調整音量、使用柔和模式與暫停功能。
- 切換分頁會保留本次進度；重新整理或關閉網頁後，進度會重設。
- 直接連到某個分頁：網址後加 `#story`（小雨的故事）或 `#judge`（實境 20 題）。

## 檔案說明

- `index.html`：完整網站，影片、插圖、遊戲程式皆已內嵌，不需要另外上傳素材。
- `.nojekyll`：讓 GitHub Pages 直接提供靜態檔案。
- `README.md`：此說明文件。

不需要安裝套件、設定金鑰或執行建置。網頁使用 Google Fonts；無法連線時會使用系統字型。影片為情境示意，配有字幕，無配音；遊戲中的訊息傳送均為模擬。

## 日後更新

以新版 `index.html` 覆蓋儲存庫中的同名檔案並 Commit，GitHub Pages 會重新發布。網址不需更換。
