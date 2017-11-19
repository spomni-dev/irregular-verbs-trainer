/* 
 * @reqiere BEM_v0.1p in variable named "bem"
 * @reqiere spStdLib_v0.1p in variable named "sl"
  verb-trainer
    __infinitive _visibility _true|_false
    __past-simple _visibility _true|_false
    __participle _visibility _true|_false

    __show-next-tense _active _true|_false
    __next-verb
*/
function VerbTrainer(verbDB){
  var self = this;

  var tenseNodes = {
    "infinitive" : document.querySelector('.verb-trainer__infinitive'),
    "pastSimple" : document.querySelector('.verb-trainer__past-simple'),
    "participle" : document.querySelector('.verb-trainer__participle')
  };
  var showNextTenseNode = document.querySelector('.show-next-tense');
  var goToNextVerbNode = document.querySelector('.go-to-next-verb');
  var lastVerbNumber = null;
  var restVerbDB = copyArray( verbDB );

  self.showNextTense = function (event) {
    for (var key in tenseNodes){
      var modifierSelector = 'verb-trainer__'+camelToBem(key)+'_visibility';
      var visibilityValue = bem.lib.getModifierValue( tenseNodes[key], modifierSelector);
      if (visibilityValue == 'false'){
        bem.lib.setModifier( tenseNodes[key], modifierSelector+'_true' );
        break;
      }
    }
  }
  self.goToNextVerb = function (event) {
    if ( restVerbDB.length < 1) restVerbDB = copyArray( verbDB );
    if (restVerbDB.length > 0){
      verbNumber = randomInteger(0, restVerbDB.length-1);
      var changeResult = changeVerb( restVerbDB[verbNumber] );
      var deletedVerb = restVerbDB.splice(verbNumber, 1);

      if ( changeResult.error ){
        self.goToNextVerb();
      }
    } 
  }


  showNextTenseNode.addEventListener('click', self.showNextTense);
  goToNextVerbNode.addEventListener('click', self.goToNextVerb);


  function hideTense(tense) {
    bemTense = camelToBem(tense);
    bem.lib.setModifier(tenseNodes[tense], 'verb-trainer__'+bemTense+'_visibility_false');
  } // hideTense
  function showTense(tense) {
    bemTense = camelToBem(tense);
    bem.lib.setModifier(tenseNodes[tense], 'verb-trainer__'+tense+'_visibility_true');
  } // showTense
  function changeVerb(arrVerbTenses) {
    if ( !(arrVerbTenses instanceof Array) ) {
      return {
        error: true, 
        message: "Invalid input param: arrVerbTense must be instance of Array."
      }
    ;}
    hideTense('pastSimple');
    hideTense('participle');
    tenseNodes.infinitive.innerHTML = arrVerbTenses[0];
    tenseNodes.pastSimple.innerHTML = arrVerbTenses[1];
    tenseNodes.participle.innerHTML = arrVerbTenses[2];

    return {error: false}
  } // changeVerb

  function camelToBem(string) {
    var regExp = new RegExp('([^A-Z]([A-Z]))|(([A-Z])[^A-Z])', 'g');
    while (res = regExp.exec(string)) {
      if (res[1]){
        string = string.replace( res[0], res[1][0]+'-'+res[2].toLowerCase() );
      } else if (res[3]){
        string = string.replace( res[0], '-'+res[4].toLowerCase()+res[3][1] );
      }

      regExp.lastIndex += 2;
    }
    return string.toLowerCase();
  } // camelCodeToCssSelector

  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  } // randomInteger  
  
  function copyArray(array){
    if (array instanceof Array){
      var newArray = [];
      array.forEach(function(item, i, arr){
        newArray[i] = copyArray(item);
      });
      return newArray;
    }
    return array;
  }
}