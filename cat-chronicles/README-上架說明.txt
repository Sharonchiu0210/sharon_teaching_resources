# The Cat Chronicles — GitHub Pages 上架包

版本：2026-10-06，含英文圖片字標、兩章關卡、章節配樂、通關證書下載及 TeachMart 連結。

## 上傳到你現有的教材網站（建議）
1. 解壓縮 ZIP，取得 cat-chronicles 資料夾。
2. 用電腦開啟你的 sharon_teaching_resources 儲存庫。
3. 選 Add file → Upload files，把整個 cat-chronicles 資料夾拖入，然後 Commit changes。
4. 保留資料夾內原有結構。index.html 與 assets 要留在同一層，影片、音樂和圖片都要上傳。
5. 若這個儲存庫已啟用 GitHub Pages，上傳後等待部署完成即可。
6. 網址會是：https://sharonchiu0210.github.io/sharon_teaching_resources/cat-chronicles/
   （這是預期網址；需要你上傳並完成部署後才會存在。）

請上傳解壓縮後的資料夾，不是把 ZIP 直接上傳。這樣也不會蓋掉現有教材網站的首頁。

## 若要使用全新的儲存庫
1. 建立新儲存庫，例如 cat-chronicles。
2. 上傳 cat-chronicles 資料夾「裡面的內容」到新儲存庫最上層，讓 index.html 直接位於根目錄。
3. 到 Settings → Pages，Source 選 Deploy from a branch，Branch 選 main、資料夾選 /(root)，按 Save。
4. 等待部署完成，使用 GitHub Pages 顯示的網址。

## 檔案用途
- index.html：網頁入口。
- style.css：版型、字體、按鈕及證書樣式。
- game.js：遊戲、影片、音樂、碰撞與證書下載。
- questions.js：題目和詳解。
- assets/：7 個目前實際使用的影片、音樂、圖片資源。

純靜態網站，不需安裝套件、不需建置、不需 API 金鑰。學生成績只存在各自瀏覽器，本版沒有雲端成績蒐集。請透過網站網址遊玩；手機直接開本機 HTML 對影音支援可能不同。

## 操作
左右方向鍵移動、Space 跳躍、E 啟動機關；手機使用畫面下方按鈕。開場點貓掌播放。每章通關後可儲存英文證書。

## 上傳後快速確認
- 開場英文圖標與貓掌顯示正常，點貓掌播放影片。
- 第一章與第二章能切換，音樂不同。
- 通關證書可儲存，前往下一關及教材連結可使用。

官方說明：
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
