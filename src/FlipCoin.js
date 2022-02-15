import React from 'react'
import Coin  from './Coin'


class FlipCoin extends React.Component{

    static defaultProps={
        coins:[
            {side:'head',imgSrc:'https://lenadesign.org/wp-content/uploads/2020/06/head.png'},
            {side:'tail',imgSrc:'https://lenadesign.org/wp-content/uploads/2020/06/tail.png'}
        ]
    }

    constructor(props)
    {
        super(props)
        this.state={
            currFace:null,
            totalFlips:0,
            heads:0
        }
        this.handleClick=this.handleClick.bind(this)
    }
    choice(arr)
    {
        const randomInx = Math.floor(Math.random()*arr.length)
        return arr[randomInx]
    }
    flipCoin(){
        const newFace=this.choice(this.props.coins)
        this.setState(curState=>{
            const heads=curState.heads +
            (newFace.side === 'head'? 1:0)
            return {
                currFace:newFace,
                totalFlips:curState.totalFlips+1,
                heads:heads
            }
        })
    }
    handleClick(){
        this.flipCoin()
    }
    render()
    {
        const {currFace, totalFlips, heads} = this.state
        return(
          <div style={{textAlign:'center', marginTop:'15vh'}}>
            <h2 style={{fontSize:'40px'}}>Let's flip a coin</h2>
             
            {/* If current face exist then show current face */}
            {currFace && <Coin info={currFace} />}
             
            {/* Button to flip the coin  */}
            <button onClick={this.handleClick} style={{padding:'10px', borderRadius:'10px',backgroundColor:'rgba(64, 209, 153, 0.8)' 
            ,borderColor:'rgba(64, 209, 153, 0.8)'}}>
                
                Flip Me!</button>
             
             
     
            <p>
              Out of {totalFlips} flips, there have been {heads} heads
              and {totalFlips - heads} tails
            </p>
     
          </div>
        )
      }
    }

export default FlipCoin;