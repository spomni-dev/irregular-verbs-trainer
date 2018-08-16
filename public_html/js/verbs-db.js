/** Array of arrays containing the verbs tenses
 *  Structure of the inner array - ["%infinitive% %transcription%", %past simple% %transcription%, %past participle% %transcription%]
 *  Transcriptions are getted from http://lingorado.com/transcription/
 */
var verbDB = [
  // v1.?.0
  ["begin [biˈgin]", "began [bɪˈgæn]", "begun [bɪˈgʌn]", "начать"],
  ["come [kʌm]", "came [keɪm]", "come [kʌm]", "приехать"],
  ["do [duː]", "did [dɪd]", "done [dʌn]", "делать"],
  ["get [gɛt]", "got [gɒt]", "got [gɒt]", "получить"],
  ["go [gəʊ]", "went [wɛnt]", "gone [gɒn]", "идти"],
  ["have [hæv]", "had [hæd]", "had [hæd]", "иметь"],
  ["leave [liːv]", "left [lɛft]", "left [lɛft]", "покидать"],
  ["make [meɪk]", "made [meɪd]", "made [meɪd]", "делать, совершать"],
  ["see [siː]", "saw [sɔː]", "seen [siːn]", "видеть"],
  ["show [ʃəʊ]", "showed [ʃəʊd]", "shown [ʃəʊn]", "показывать"],
  ["sing [sɪŋ]", "sang [sæŋ]", "sung [sʌŋ]", "петь"],
  ["take [teɪk]", "took [tʊk]", "taken [ˈteɪkən]", "брать"],
  ["be [biː]", "was,were [wɒz,wɜː]", "been [biːn]", "быть"],
  ["ring [rɪŋ]", "rang [ræŋ]", "rung [rʌŋ]", "звонить"],
  ["run [rʌn]", "ran [ræn]", "run [rʌn]", "бежать"],
  ["say [seɪ]", "said [sɛd]", "said [sɛd]", "говорить"],
  ["sit [sɪt]", "sat [sæt]", "sat [sæt]", "сидеть"],
  ["sleep [sliːp]", "slept [slɛpt]", "slept [slɛpt]", "спать"],
  ["understand [ˌʌndəˈstænd]", "understood [ˌʌndəˈstʊd]", "understood [ˌʌndəˈstʊd]", "понимать"],
  ["wake [weɪk]", "woke [wəʊk]", "woken [ˈwəʊkən]", "будить, просыпаться"],

  // v1.?.1
  ["fall [fɔːl]", "fell [fɛl]", "fallen [ˈfɔːlən]", "падать"],
  ["find [faɪnd]", "found [faʊnd]", "found [faʊnd]", "находить"],
  ["give [gɪv]", "gave [geɪv]", "given [ˈgɪvn]", "давать"],
  ["know [nəʊ]", "knew [njuː]", "known [nəʊn]", "знать"],
  ["lie [laɪ]", "lay [leɪ]", "lain [leɪn]", "врать"],
  ["meet [miːt]", "met [mɛt]", "met [mɛt]", "встречать"],
  ["read [riːd]", "read [rɛd]", "read [rɛd]", "читать"],
  ["spend [spɛnd]", "spent [spɛnt]", "spent [spɛnt]", "тратить"],
  ["teach [tiːʧ]", "taught [tɔːt]", "taught [tɔːt]", "учить, обучать"],
  ["tell [tɛl]", "told [təʊld]", "told [təʊld]", "говорить"],
  ["think [θɪŋk]", "thought [θɔːt]", "thought [θɔːt]", "говоритьб сообщать"],
  ["throw [θrəʊ]", "threw [θruː]", "thrown [θrəʊn]", "бросать"],
  ["write [raɪt]", "wrote [rəʊt]", "written [ˈrɪtn]", "писать"],

  // v1.?.2
  ["buy [baɪ]", "bought [bɔːt]", "bought [bɔːt]", "поккупать"],
  ["drink [drɪŋk]", "drank [dræŋk]", "drunk [drʌŋk]", "пить"],
  ["sell [sɛl]", "sold [səʊld]", "sold [səʊld]", "продавать"],
  ["swim [wɪm]", "swam [swæm]", "swum [swʌm]", "плавать"],

  // v1.?.3
  ["eat [iːt]", "ate [ɛt]", "eaten [ˈiːtn]", "есть"],
  ["feel [fiːl]", "felt [fɛlt]", "felt [fɛlt]", "чувстввать"],
  ["hear [hɪə]", "heard [hɜːd]", "heard [hɜːd]", "слушать"],
  ["stand [stænd]", "stood [stʊd]", "stood [stʊd]", "стоять"],
  ["win [wɪn]", "won [wʌn]", "won [wʌn]", "выигрывать, побеждать"],

  // v1.?.4
  ["cut [kʌt]", "cut [kʌt]", "cut [kʌt]", "вырезать"],
  ["forget [fəˈgɛt]", "forgot [fəˈgɒt]", "forgotten [fəˈgɒtn]", "забывать"],
  ["let [lɛt]", "let [lɛt]", "let [lɛt]", "позволять"],
  ["pay [peɪ]", "paid [peɪd]", "paid [peɪd]", "платить"],
  ["steal [stiːl]", "stole [stəʊl]", "stolen [ˈstəʊlən]", "воровать"],

  // v1.?.5
  ["cost [kɒst]", "cost [kɒst]", "cost [kɒst]", "стоить"],
  ["drive [draɪv]", "drove [drəʊv]", "driven [ˈdrɪvn]", "водить машину"],
  ["lend [lɛnd]", "lent [lɛnt]", "lent [lɛnt]", "одалживать"],
  ["put [pʊt]", "put [pʊt]", "put [pʊt]", "класть"],
  ["speak [spiːk]", "spoke [spəʊk]", "spoken [ˈspəʊkən]", "говорить"],

  // v1.?.6
  ["break [breɪk]", "broke [brəʊk]", "broken [ˈbrəʊkən]", "ломать"],
  ["build [bɪld]", "built [bɪlt]", "built [bɪlt]", "строить"],
  ["choose [ʧuːz]", "chose [ʧəʊz]", "chosen [ˈʧəʊzn]", "выбирать"],
  ["lose [luːz]", "lost [lɒst]", "lost [lɒst]", "терять"],
  ["send [sɛnd]", "sent [sɛnt]", "sent [sɛnt]", "отправлять"],

  // v1.?.7
  ["become [bɪˈkʌm]", "became [bɪˈkeɪm]", "become [bɪˈkʌm]", "становиться"],
  ["catch [kæʧ]", "caught [kɔːt]", "caught [kɔːt]", "ловить"],
  ["feed [fiːd]", "fed [fɛd]", "fed [fɛd]", "кормить"],
  ["fly [flaɪ]", "flew [fluː]", "flown [fləʊn]", "летать"],
  ["learn [lɜːn]", "learnt/learned [lɜːnt/lɜːnt]", "learnt/learned [lɜːnt/lɜːnt]", "учить, изучать"],
  ["set [sɛt]", "set [sɛt]", "set [sɛt]", "устанавливать"],
  ["wear [weə]", "wore [wɔː]", "worn [wɔːn]", "носить"],

  // v1.?.8
  ["bring [brɪŋ]", "brought [brɔːt]", "brought [brɔːt]", "приносить"],
  ["freeze [friːz]", "froze [frəʊz]", "frozen [ˈfrəʊzn]", "замораживать"],
  ["hide [haɪd]", "hid [hɪd]", "hidden [ˈhɪdn]", "скрывать, прятать"],
  ["mean [miːn]", "meant [mɛnt]", "meant [mɛnt]", "означать, подразумевать"],
  ["shake [ʃeɪk]", "shook [ʃʊk]", "shaken [ˈʃeɪkən]", "трясти"],
  ["smell [smɛl]", "smelt [smɛlt]", "smelt [smɛlt]", "пахнуть, нюхать"],

  // v1.?.9
  ["blow [bləʊ]", "blew [bluː]", "blown [bləʊn]", "дуть"],
  ["draw [drɔː]", "drew [druː]", "drown [draʊn]", "рисовать"],
  ["fight [faɪt]", "fought [fɔːt]", "fought [fɔːt]", "драться"],
  ["grow [grəʊ]", "grew [gruː]", "grown [grəʊn]", "расти"],
  ["hit [hɪt]", "hit [hɪt]", "hit [hɪt]", "бить"],
  ["hold [həʊld]", "held [hɛld]", "held [hɛld]", "держать, удерживать"],
  ["keep [kiːp]", "kept [kɛpt]", "kept [kɛpt]", "держать, сохранять, придерживаться"],
  ["ride [raɪd]", "rode [rəʊd]", "ridden [ˈrɪdn]", "ехать верхом"],
  ["rise [raɪz]", "rose [rəʊz]", "risen [ˈrɪzn]", "подниматься"],
  ["shine [ʃaɪn]", "shone [ʃɒn]", "shone [ʃɒn]", "светить"],
  ["shoot [ʃuːt]", "shot [ʃɒt]", "shot [ʃɒt]", "стрелять"],
  ["strike [straɪk]", "struck [strʌk]", "struck [strʌk]", "бить"],
  ["upset [ʌpˈsɛt]", "upset [ʌpˈsɛt]", "upset [ʌpˈsɛt]", "расстраивать, огорчать"],

  // v1.?.10
  ["bear [beə]", "bore [bɔː]", "born [bɔːn]", "нести, терпеть"],
  ["lead [liːd]", "led [lɛd]", "led [lɛd]", "вести, руководить"],
  ["weep [wiːp]", "wept [wɛpt]", "wept [wɛpt]", "плакать, рыдать"]

];