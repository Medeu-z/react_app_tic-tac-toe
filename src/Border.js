import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import { useState } from "react";

var xArr=[];
var oArr=[];
var game = false;
const divColor = {color: 'darkbrown' };
const winColor = {
    color: 'brown',
    pointerEvents: 'none',
    };

var ch = [
    {body: '',status: false,color: divColor,id: 0},
    {body: '',status: false,color: divColor,id: 1},
    {body: '',status: false,color: divColor,id: 2},
    {body: '',status: false,color: divColor,id: 3},
    {body: '',status: false,color: divColor,id: 4},
    {body: '',status: false,color: divColor,id: 5},
    {body: '',status: false,color: divColor,id: 6},
    {body: '',status: false,color: divColor,id: 7},
    {body: '',status: false,color: divColor,id: 8},
];
const players = "x is next";
const Border = () => {
   
    
    
    
    const winCases = [[0,1,2],
                      [3,4,5],
                      [7,8,6],
                      [2,5,8], 
                      [1,4,7],
                      [0,3,6],
                      [0,4,8],
                      [2,4,6]];
   
   


    const [choice, setChoice] = useState(ch);
    const [player, setPlayer] = useState(players);
        const containsAll = (arr1, arr2) => 
        arr2.every(arr2Item => arr1.includes(arr2Item))
        
        const sameMembers = (arr1, arr2) => 
                containsAll(arr1, arr2);



    const checkWinner = (arr1) => {
        
        for (let index = 0; index < winCases.length; index++) {
            
            if (sameMembers(arr1,winCases[index])) {
                console.log(winCases[index]);
                console.log(index +'winner');
                
                changeColor(index);
                game = true;
                
                console.log(ch);
            }
            
        }
        
        
    }
       
    const changeColor = (id) => {
        for (let index = 0; index < 3; index++) {
            console.log(winCases[id][index] + " this");
            ch[winCases[id][index]].color=winColor;
            
        }
        
    }




   

    const handleChoice = (id,c) => {
        if (ch[id].status===false) {
            ch[id].status=true;
            ch[id].body=c;
            
        }
        console.log(ch);
    
    };
    
    

    const [count, setCount] = useState(1);
    const handleStart = (id, status) => {  
    if ( game  === false) {
        
    
     if(status===false){
         if(count%2===0){
            handleChoice(id,"o");
            setCount(count + 1);
            oArr.push(id);
            checkWinner(oArr);
            if (game===false) {
                setPlayer('x is next');
            }else{
                setPlayer('o is winner');
            }
            
        }else{
            handleChoice(id,"x");
            setCount(count + 1);
            xArr.push(id);
            checkWinner(xArr);
            if (game===false) {
                setPlayer('o is next');
            }else{
                setPlayer('x is winner');
            }
        }                       
               
    }              
   }
       
    }
    
    const refreshPage = ()=>{
        window.location.reload();
     }
    

    return (  
        <div className="Border">
            <div className="buttons">
           <div className="player_start"> { player }</div>
              <div className="button_restart" onClick={refreshPage}>Restart</div>
            </div>
            <h1>Tic <span>Tac</span> Toe</h1>
            <div className="grid-container">
              {
                  choice.map((choice) => (
                      <div className="grid-item" key={choice.id} onClick={() => handleStart(choice.id,choice.status)}>
                          <div className="choice" style={choice.color}>{choice.body}</div>
                          </div>
                  ))}
            </div>
        </div>
    );
}
 



export default Border;