class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
      this.question.hide()
      this.button.hide()
      this.input.hide()
   

    this.greeting.html("Hello "+this.name)
   this.greeting.position(130, 160)
 


    this.greeting.html("Hello "+this.name)
   this.greeting.position(130, 160)
if(allContestants !== undefined){
fill("Blue");
textSize(20);
text("NOTE: Contestant who answered correct are highlighted in green color!!",130,230);
}
 
  }
  }


