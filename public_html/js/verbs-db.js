/** Array of arrays containing the verbs tenses
 *  Structure of the inner array - ["%infinitive% %transcription%", %past simple% %transcription%, %past participle% %transcription%]
 *  Transcriptions are getted from http://lingorado.com/transcription/
 */
var verbDB = [
  // v1.?.0
  ["begin [biˈgin]", "began [bɪˈgæn]", "begun [bɪˈgʌn]"],
  ["come [kʌm]", "came [keɪm]", "come [kʌm]"],
  ["do [duː]", "did [dɪd]", "done [dʌn]"],
  ["get [gɛt]", "got [gɒt]", "got [gɒt]"],
  ["go [gəʊ]", "went [wɛnt]", "gone [gɒn]"],
  ["have [hæv]", "had [hæd]", "had [hæd]"],
  ["leave [liːv]", "left [lɛft]", "left [lɛft]"],
  ["make [meɪk]", "made [meɪd]", "made [meɪd]"],
  ["see [siː]", "saw [sɔː]", "seen [siːn]"],
  ["show [ʃəʊ]", "showed [ʃəʊd]", "shown [ʃəʊn]"],
  ["sing [sɪŋ]", "sang [sæŋ]", "sung [sʌŋ]"],
  ["take [teɪk]", "took [tʊk]", "taken [ˈteɪkən]"],
  ["be [biː]", "was,were [wɒz,wɜː]", "been [biːn]"],
  ["ring [rɪŋ]", "rang [ræŋ]", "rung [rʌŋ]"],
  ["run [rʌn]", "ran [ræn]", "run [rʌn]"],
  ["say [seɪ]", "said [sɛd]", "said [sɛd]"],
  ["sit [sɪt]", "sat [sæt]", "sat [sæt]"],
  ["sleep [sliːp]", "slept [slɛpt]", "slept [slɛpt]"],
  ["understand [ˌʌndəˈstænd]", "understood [ˌʌndəˈstʊd]", "understood [ˌʌndəˈstʊd]"],
  ["wake [weɪk]", "woke [wəʊk]", "woken [ˈwəʊkən]"],

  // v1.?.1
  ["fall [fɔːl]", "fell [fɛl]", "fallen [ˈfɔːlən]"],
  ["find [faɪnd]", "found [faʊnd]", "found [faʊnd]"],
  ["give [gɪv]", "gave [geɪv]", "given [ˈgɪvn]"],
  ["know [nəʊ]", "knew [njuː]", "known [nəʊn]"],
  ["lie [laɪ]", "lay [leɪ]", "lain [leɪn]"],
  ["meet [miːt]", "met [mɛt]", "met [mɛt]"],
  ["read [riːd]", "read [rɛd]", "read [rɛd]"],
  ["spend [spɛnd]", "spent [spɛnt]", "spent [spɛnt]"],
  ["teach [tiːʧ]", "taught [tɔːt]", "taught [tɔːt]"],
  ["tell [tɛl]", "told [təʊld]", "told [təʊld]"],
  ["think [θɪŋk]", "thought [θɔːt]", "thought [θɔːt]"],
  ["throw [θrəʊ]", "threw [θruː]", "thrown [θrəʊn]"],
  ["write [raɪt]", "wrote [rəʊt]", "written [ˈrɪtn]"],

  // v1.?.2
  ["buy [baɪ]", "bought [bɔːt]", "bought [bɔːt]"],
  ["drink [drɪŋk]", "drank [dræŋk]", "drunk [drʌŋk]"],
  ["sell [sɛl]", "sold [səʊld]", "sold [səʊld]"],
  ["swim [wɪm]", "swam [swæm]", "swum [swʌm]"],

  // v1.?.3
  ["eat [iːt]", "ate [ɛt]", "eaten [ˈiːtn]"],
  ["feel [fiːl]", "felt [fɛlt]", "felt [fɛlt]"],
  ["hear [hɪə]", "heard [hɜːd]", "heard [hɜːd]"],
  ["stand [stænd]", "stood [stʊd]", "stood [stʊd]"],
  ["win [wɪn]", "won [wʌn]", "won [wʌn]"],

  // v1.?.4
  ["cut [kʌt]", "cut [kʌt]", "cut [kʌt]"],
  ["forget [fəˈgɛt]", "forgot [fəˈgɒt]", "forgotten [fəˈgɒtn]"],
  ["let [lɛt]", "let [lɛt]", "let [lɛt]"],
  ["pay [peɪ]", "paid [peɪd]", "paid [peɪd]"],
  ["steal [stiːl]", "stole [stəʊl]", "stolen [ˈstəʊlən]"],

  // v1.?.5
  ["cost [kɒst]", "cost [kɒst]", "cost [kɒst]"],
  ["drive [draɪv]", "drove [drəʊv]", "driven [ˈdrɪvn]"],
  ["lend [lɛnd]", "lent [lɛnt]", "lent [lɛnt]"],
  ["put [pʊt]", "put [pʊt]", "put [pʊt]"],
  ["speak [spiːk]", "spoke [spəʊk]", "spoken [ˈspəʊkən]"],

  // v1.?.6
  ["break [breɪk]", "broke [brəʊk]", "broken [ˈbrəʊkən]"],
  ["build [bɪld]", "built [bɪlt]", "built [bɪlt]"],
  ["choose [ʧuːz]", "chose [ʧəʊz]", "chosen [ˈʧəʊzn]"],
  ["lose [luːz]", "lost [lɒst]", "lost [lɒst]"],
  ["send [sɛnd]", "sent [sɛnt]", "sent [sɛnt]"],

  // v1.?.7
  ["become [bɪˈkʌm]", "became [bɪˈkeɪm]", "become [bɪˈkʌm]"],
  ["catch [kæʧ]", "caught [kɔːt]", "caught [kɔːt]"],
  ["feed [fiːd]", "fed [fɛd]", "fed [fɛd]"],
  ["fly [flaɪ]", "flew [fluː]", "flown [fləʊn]"],
  ["learn [lɜːn]", "learnt/learned [lɜːnt/lɜːnt]", "learnt/learned [lɜːnt/lɜːnt]"],
  ["set [sɛt]", "set [sɛt]", "set [sɛt]"],
  ["wear [weə]", "wore [wɔː]", "worn [wɔːn]"],

  // v1.?.8
  ["bring [brɪŋ]", "brought [brɔːt]", "brought [brɔːt]"],
  ["freeze [friːz]", "froze [frəʊz]", "frozen [ˈfrəʊzn]"],
  ["hide [haɪd]", "hid [hɪd]", "hidden [ˈhɪdn]"],
  ["mean [miːn]", "meant [mɛnt]", "meant [mɛnt]"],
  ["shake [ʃeɪk]", "shook [ʃʊk]", "shaken [ˈʃeɪkən]"],
  ["smell [smɛl]", "smelt [smɛlt]", "smelt [smɛlt]"],
  ["wear [weə]", "wore [wɔː]", "worn [wɔːn]"]

];
