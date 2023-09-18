function Piece(color,x,y,name){
    this.color = color
    this.name = name
    this.x=x
    this.y=y
    this.lastIndexes =[]

    this.attack=(x,y)=>{
        let spot =board[x][y]
        //aqui se verifica se a casa esta sendo defendida e caso seja o rei atacando n pode permirtir
        if(spot.attacked&&spot.defensers.indexOf(spot.piece.color)&& this.name=="K"){
            return false
        }

        spot.piece = this
        return [x,y]
    }
}

function King(color,x,y){
    Piece.call(this,color,x,y)
    this.validMove =()=>{
        if(this.x <8 && this.y<8){
            if(Boolean(this.lastIndexes[0])){

                let newIndexes = [[this.x+1,y],[this.x+1,this.y+1],[this.x+1,this.y-1],[this.x-1,y],[this.x-1,y+1],[this.x-1,y-1],[this.x,this.y+1],[this.x,this.y-1]]
                for(let element=0;element<=newIndexes.length;element++){
                    if(newIndexes[element].toString()!==this.lastIndexes[element].toString()){
                       let boardSpot =  board[this.lastIndexes[element][0]][this.lastIndexes[element][1]]
                        if(boardSpot.defensers.length>1){
                            boardSpot.splice(boardSpot.defensers.indexOf(this.color),1)
                        }else{
                            boardSpot.attacked=false
                        }

                    }
                    let newboardSpot =board[newIndexes[element][0]][newIndexes[element][1]]
                    newboardSpot.attacked=true
                    newboardSpot.defensers.indexOf(this.color)>-1? newboardSpot.defensers.push(this.color):null
                }
                this.lastIndexes=newIndexes
            }else{
               this.lastIndexes.push([this.x+1,y],[this.x+1,this.y+1],[this.x+1,this.y-1],[this.x-1,y],[this.x-1,y+1],[this.x-1,y-1],[this.x,this.y+1],[this.x,this.y-1])
               
            }

        }
    }

    this.move=(endX,endY)=>{
        this.validMove()
        if(board[endX][endY].piece!==null && board[endX][endY].piece.color==this.color){
            return false
        }
        else if(board[endX][endY].piece!==null && board[endX][endY].piece.color!==this.color){
            return this.attack(endX,endY)
        }
        const moveIsValid = this.lastIndexes.find(element=> element[0]==endX&&element[1]==endY)||false
        if(Boolean(moveIsValid)){
            this.x=endX
            this.y=endY
            this.validMove()
        }
       return  moveIsValid
    }
}

function Pawn(color,x,y){
    Piece.call(this,color,x,y)
    this.validMoves=(endx,endy)=>{

    }
}

const k=new King("white",6,3)


console.log(k.move(7,4),k)
