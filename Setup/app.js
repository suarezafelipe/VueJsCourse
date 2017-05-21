new Vue({
el: '#app',
data: {        
    newGame: false, 
    gameLog: [],  
    playerWidth: 300,                
    monsterWidth: 300,                
    playerHealthBar: {          
        width: '300px',
        backgroundColor: 'green',
        margin: '0',
        color: 'white'          
    },
    monsterHealthBar: {
        width: '300px',
        backgroundColor: 'green',
        margin: 0,
        color: 'white'
    }
},
methods: {
    startNewGame: function(){
        this.newGame = !this.newGame
        this.monsterWidth = 300
        this.playerWidth = 300
        this.playerHealthBar.width = this.playerWidth + 'px'  
        this.monsterHealthBar.width = this.monsterWidth + 'px'
        this.gameLog = []
    },
    normalAttack: function(){
        this.attack('player', 1)
        this.attack('monster', 1)            
    },
    specialAttack: function(){
        this.attack('player', 2)
        this.attack('monster', 2)            
    },        
    attack: function(ply, multiplier) {   
        var dmgDealt = Math.round(Math.random()*10*multiplier*-1)                       
        //splice is used to reverse the order of pushing items into the array                                 
        this.gameLog.splice(0,0,{
            player: ply,                
            amount: dmgDealt
        })
        if (ply=='monster'){
            this.updatePlayerBar(dmgDealt)
        } else {
            this.updateMonsterBar(dmgDealt)
        }            
    },
    heal: function(){
        var dmgHealed = Math.round(Math.random()*10*1.5)                       
        this.gameLog.splice(0,0,{
            player: 'player',                
            amount: dmgHealed          
        })
        this.updatePlayerBar(dmgHealed)            
        this.attack('monster', 1)  
    },
    updatePlayerBar: function(amount){
        this.playerWidth += amount*3
        this.playerHealthBar.width = this.playerWidth + 'px' 
        if (this.playerWidth <= 0){
            alert("You lose!")
            this.newGame = !this.newGame
        }      
    },
    updateMonsterBar: function(amount){
        this.monsterWidth += amount*3
        this.monsterHealthBar.width = this.monsterWidth + 'px'      
        if (this.monsterWidth <= 0){
            alert("You WIN!")
            this.newGame = !this.newGame
        }
    }
}
});
