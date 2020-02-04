import React, {createContext, Component} from 'react'

export const ShowModalContext = createContext(true);

class ShowModalContextProvider extends Component{
   
    state= {
        showModal: true
    }
    render(){
        return(
            <ShowModalContext.provider value={this.state.showModal}>
              {this.props.children}
            </ShowModalContext.provider>
        );
    }
}
 export default ShowModalContextProvider;

