import React, {Component} from 'react';


class EvenAndOdd extends Component{
    constructor() {
        super();
    
        this.state ={
            evenarray: [],
            oddarray: [],
            userInput: ''
    
        }
    }

    handleChange(val){
        this.setState({userInput:val})
    }
    assignEvenAndOdds(userInput){
        
        let arr = userInput.split('')
        console.log(arr)
        let evens = []
        let odds =[]

        for(let i=0; i<= arr.length - 1;i++){
            console.log(arr[i])
            if(arr[i] %2===0){
                evens.push(parseInt(arr[i]), 10);
            }else
                odds.push(parseInt(arr[i]), 10);

             }  
             this.setState({evenarray: evens, oddarray: odds}) 
            }

            
        
    
    
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenarray)}</span>
            <span className="resultsBox">Odd:{JSON.stringify(this.state.oddarray)}</span>

            </div>
        )
    }
}
export default EvenAndOdd;