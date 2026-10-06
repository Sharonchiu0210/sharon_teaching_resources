'use strict';
const FLOORS=[{title:'此刻之廳',en:'THE PRESENT',note:'分辨日常習慣與此刻正在發生的事',color:'#b4d4e2'},{title:'昨日迴廊',en:'THE PAST',note:'回望已結束的事件與當時正在進行的動作',color:'#d6bdde'},{title:'記憶齒輪',en:'THE PERFECT',note:'看見過去與現在的連結',color:'#e8c382'},{title:'明日迴廊',en:'THE FUTURE',note:'讀懂計畫、預測與時間順序',color:'#bacfbe'}];
const QUESTIONS=[
{context:'每天早上，貓咪都會巡視鐘塔。',text:'Every morning, the cat ___ the tower.',options:['checks','is checking','checked','has checked'],answer:0,why:'Every morning 表示固定習慣，用現在簡單式。主詞 the cat 是第三人稱單數，所以用 checks。',clue:'固定習慣 → 現在簡單式'},
{context:'看！貓咪此刻正在攀爬階梯。',text:'Look! The cat ___ the stairs right now.',options:['climbed','climbs','is climbing','has climbed'],answer:2,why:'Look! 和 right now 把焦點放在此刻正在進行的動作，用 is climbing。',clue:'此刻進行中 → 現在進行式'},
{context:'鐘擺平常每秒擺動一次，這是它的固定運作方式。',text:'The pendulum usually ___ once every second.',options:['is swinging','swings','swung','has swung'],answer:1,why:'usually 表示通常如此，描述固定運作方式用現在簡單式 swings。',clue:'通常如此 → 現在簡單式'},
{context:'昨天，貓咪在雪地找到了一把鑰匙。',text:'The cat ___ a key in the snow yesterday.',options:['finds','has found','is finding','found'],answer:3,why:'yesterday 指明已結束的過去時間，用過去簡單式 found。',clue:'明確的過去時間 → 過去簡單式'},
{context:'昨晚八點，貓咪正在研究地圖；那個動作當時尚未結束。',text:'At eight last night, the cat ___ the map.',options:['studies','was studying','has studied','will study'],answer:1,why:'焦點是過去某一時刻正在進行的動作，用 was studying。',clue:'過去當時進行中 → 過去進行式'},
{context:'貓咪正在過橋時，鐘聲突然響起。',text:'While the cat was crossing the bridge, the bell ___.',options:['rings','has rung','rang','will ring'],answer:2,why:'was crossing 是當時持續中的背景動作；鐘聲響起是其間發生的事件，用過去簡單式 rang。',clue:'過去的背景動作＋其間發生的事件'},
{context:'從2020年到現在，守塔人一直住在這裡，而且還住著。',text:'The keeper ___ here since 2020 and still lives here.',options:['has lived','lived','will live','is living'],answer:0,why:'since 2020 標示起點，且狀態持續到現在，用現在完成式 has lived。',clue:'過去開始，持續到現在 → 現在完成式'},
{context:'貓咪以前從未看過這麼大的齒輪；說的是截至現在的經驗。',text:'The cat ___ such a huge gear before.',options:['never sees','will never see','is never seeing','has never seen'],answer:3,why:'談截至現在的經驗，且沒有指定某個已結束的過去時間，用 has never seen。',clue:'截至現在的經驗 → 現在完成式'},
{context:'貓咪抵達時，鐘已經停了；停擺發生在抵達之前。',text:'By the time the cat arrived, the clock ___ already ___.',options:['has / stopped','had / stopped','is / stopping','will / stop'],answer:1,why:'arrived 是過去時間點；更早完成的停擺動作用過去完成式 had already stopped。',clue:'比另一個過去事件更早 → 過去完成式'},
{context:'看那個鬆脫、正在傾斜的齒輪！依眼前跡象，它就要掉下來了。',text:'Look at that loose gear! It ___ fall.',options:['has','was','is going to','did'],answer:2,why:'依目前可見的跡象預測即將發生的事，可用 be going to；主詞 it 搭配 is。',clue:'眼前跡象支持的預測 → be going to'},
{context:'貓咪承諾明天會回來幫守塔人。',text:'“I promise I ___ back tomorrow,” says the cat.',options:['will come','came','have come','was coming'],answer:0,why:'這裡用 will come 表達對未來的承諾，tomorrow 也指向未來。',clue:'對未來的承諾 → will'},
{context:'最後一道門：等鐘響起，門就會打開。',text:'When the clock ___, the final door will open.',options:['will ring','has been ringing','rang','rings'],answer:3,why:'表示未來的時間副詞子句中，通常用現在式表達未來。這裡用 When the clock rings，主要子句則用 will open。',clue:'未來的 when 時間子句 → 現在式'},
{context:'到現在為止，貓咪已經在鐘塔裡待了三個小時，而且還在塔裡。',text:'The cat ___ in the tower for three hours and is still here.',options:['was','will be','has been','is'],answer:2,why:'for three hours 表示持續多久；情境指出狀態延續到現在，因此用現在完成式 has been。',clue:'過去開始且延續至今 → 現在完成式'},
{context:'守塔人從去年起就認識這隻貓，現在兩人仍是朋友。',text:'The keeper ___ the cat since last year.',options:['knows','knew','will know','has known'],answer:3,why:'認識的狀態從去年持續到現在，用 has known。know 描述認識、知道的狀態，這裡不使用進行式。',clue:'since＋起點，狀態持續到現在'},
{context:'鑰匙現在就在貓咪手上；牠剛剛已經找到它了。',text:'The cat ___ the key. It is in its paw now.',options:['has found','was finding','will find','finds'],answer:0,why:'找到了是已完成的動作，而結果與現在有關：鑰匙就在手上。這裡用 has found。',clue:'已完成的動作，結果與現在有關'},
{context:'到現在為止，貓咪還沒打開第三道門，牠仍在想辦法。',text:'The cat ___ the third door yet.',options:['does not open','has not opened','will not open','is not opening'],answer:1,why:'yet 搭配這裡「截至現在仍未完成」的語意，用現在完成式的否定 has not opened。',clue:'截至現在尚未完成 → has/have not＋過去分詞'},
{context:'貓咪昨天到達鐘塔前，守塔人就已經把入口鎖好了。',text:'Before the cat arrived yesterday, the keeper ___ the entrance.',options:['has locked','locks','had locked','will lock'],answer:2,why:'抵達和鎖門都是過去的事件；題目強調鎖門在抵達之前已完成，選 had locked。',clue:'過去某事件之前就已完成 → 過去完成式'},
{context:'昨天貓咪走進大廳時，最後一位訪客早已離開。',text:'When the cat entered the hall yesterday, the last visitor ___ already ___.',options:['has / left','is / leaving','will / leave','had / left'],answer:3,why:'entered 是過去的時間點；訪客離開發生得更早，且當時已經完成，所以用 had already left。',clue:'先離開，再進入：較早的過去用 had＋過去分詞'}
,
{context:'貓咪現在沒有翅膀。想像牠有翅膀，就能飛過花園。',text:'If the cat ___ wings, it could fly across the garden.',options:['has','had','will have','has had'],answer:1,why:'這是假設現在與事實不同的情況。if 子句用過去式 had，主要子句用 could＋原形動詞；had 在這裡不表示過去時間。',clue:'與現在事實不同：If＋過去式，would/could＋原形'},
{context:'花園現在是鎖著的。假如我有鑰匙，我就會打開它。',text:'If I had the key, I ___ the garden gate.',options:['opened','have opened','will open','would open'],answer:3,why:'If I had the key 是與現在事實相反的假設，結果用 would open。',clue:'現在的反事實結果 → would＋原形動詞'},
{context:'貓咪現在太矮，碰不到燈。用較正式的假設句想像另一種情況。',text:'If the cat ___ taller, it could reach the lantern.',options:['were','is','will be','has been'],answer:0,why:'在較正式的反事實假設中，be 動詞可用 were，主詞是單數也一樣。口語有時也用 was，但這題的選項以 were 為答案。',clue:'正式的反事實假設：If＋主詞＋were'},
{context:'貓咪昨天沒有看到標誌，所以走錯了路。現在回想另一種可能。',text:'If the cat ___ the sign yesterday, it would have taken the right path.',options:['sees','would see','had seen','has seen'],answer:2,why:'這是假設已經結束的過去。if 子句用 had seen，主要子句用 would have taken，表示當時沒有實現的另一種結果。',clue:'與過去事實不同：If＋had＋過去分詞'},
{context:'昨晚守園人沒有點燈，所以貓咪迷路了。假如當時點了燈，牠就不會迷路。',text:'If the keeper had lit the lamps, the cat ___ lost.',options:['will not get','would not have got','does not get','has not got'],answer:1,why:'條件是與過去事實相反的假設，因此結果用 would not have got lost。美式英語也常用 gotten，這裡採 got。',clue:'過去的反事實結果 → would have＋過去分詞'},
{context:'貓咪昨天跳得不夠高，所以沒碰到樹枝。假如當時跳高一點，就碰得到了。',text:'If the cat had jumped higher yesterday, it ___ the branch.',options:['reaches','will reach','has reached','could have reached'],answer:3,why:'想像過去本來可能做到的事，用 could have reached。had jumped 已把假設定位在過去。',clue:'過去原本有可能 → could have＋過去分詞'},
{context:'貓咪現在不懂花朵的語言，牠希望自己現在聽得懂。',text:'The cat wishes it ___ the language of flowers.',options:['understood','understands','will understand','has understood'],answer:0,why:'wish 後面用過去式 understood，表達現在與事實不同的願望；這裡並不是在說過去懂不懂。',clue:'對現在的反事實願望：wish＋過去式'},
{context:'貓咪昨天把地圖留在塔裡了。現在牠後悔當時沒有帶來。',text:'The cat wishes it ___ the map yesterday.',options:['brings','will bring','had brought','has brought'],answer:2,why:'對過去的遺憾，用 wish＋had＋過去分詞。had brought 表示希望當時帶了，但實際沒有帶。',clue:'對過去的遺憾：wish＋had＋過去分詞'},
{context:'貓咪現在還被困在門外。用較正式的語氣表達強烈願望：要是門現在開著就好了！',text:'If only the gate ___ open now!',options:['will be','were','had been','has been'],answer:1,why:'If only 可以表達強烈願望。這裡希望現在的狀況不同，使用 were；had been 通常會把反事實願望放到過去。',clue:'If only＋過去式／were：但願現在不同'}

];


const GARDEN_FLOORS=[
{title:'若此刻不同',en:'ANOTHER NOW',note:'先看現實，再想像一個不同的現在',color:'#bbc7e7'},
{title:'若昨日重來',en:'ANOTHER YESTERDAY',note:'回望已發生的過去，想像未曾發生的可能',color:'#d9b2d4'},
{title:'願望開花時',en:'WHERE WISHES BLOOM',note:'用 wish 與 if only 說出願望與遺憾',color:'#b7d5c1'}];

if(typeof module!=='undefined')module.exports={FLOORS,QUESTIONS,GARDEN_FLOORS};
