import  React, {Component} from 'react'
import Map from './Map'
import showModalContextProvider from './utils/Context'

export default class MainContainer extends Component{
constructor(props){
    super(props)
}
    render(){
        return(
           
               <Map/> 
          
        )
    }
}