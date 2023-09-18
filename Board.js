const board =[new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8)];

function Spot(x,y,piece){
    this.x = x
    this.y =y
    this.piece =piece||null
    this.defensers= []
    this.attacked = false
    // this.defensed = false
}

for(let row=0; row<=board.length;row++){
    for(let col=0;col<=board[row].length;col++){
        if(row==1 ){
            board[row][col]=new Spot(row,col,new King("white",row,col))
        }
    }
}