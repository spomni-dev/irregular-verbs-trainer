var log = new AnWritterLogger('.log-viewport');
var sl = spStdLib;
var bem = new BEM();

document.addEventListener('DOMContentLoaded', function () {
  try {
    var trainer = new VerbTrainer(verbDB);
    trainer.goToNextVerb();
  } catch (error) {
  }

});