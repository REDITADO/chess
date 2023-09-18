const board =[new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8)];

function Spot(x,y,piece){
    this.x = x
    this.y =y
    this.piece =piece
    this.attacked = false
    this.defensed = false
}

