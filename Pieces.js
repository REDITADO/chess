function Piece(color,x,y){
    this.color = color
    this.x=x
    this.y=y
    this.lastIndexes =[]
}

function King(color,x,y,endx,endy){
    Piece.call(this,color,x,y)
    this.attack =()=>{
        if(this.x <8 && this.y<8){
            if(Boolean(this.lastIndexes)){

            }else{
                this.lastIndexes=[[this.x+1,y],[this.x+1,this.y+1],[this.x+1,this.y-1],[this.x-1,y],]
            }
        }
    }
}
console.log(new King("white",8,3))
