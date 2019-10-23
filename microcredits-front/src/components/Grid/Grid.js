import React from "react"
// import './style.css'
import Card from "../Card"



export default class Grid extends React.Component{
    constructor(){
        super()

        this.state={
            vCharacters: [
                {id:2, name: "Rick", status:"", image:""}
        
            ]
            
        }
            

    }

componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character/")
    .then(res=> res.json())
     .then((res)=> {
        console.log(res.results)
        this.setState({
            vCharacters: res.results
        })
     })
        

    
    .catch(()=>{
        
    })
}

render(){
    return <>
        
        <div className="container">
        <h1>Rick and Morty</h1>
        {
            this.state.vCharacters.map(item=>(
                
                <Card id={item.id} name={item.name} status={item.status} image={item.image}>

                </Card>
            ))
        }
       
        </div>
 
        </>

}
    


}