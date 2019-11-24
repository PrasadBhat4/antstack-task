import React from 'react';

class ShowItem extends React.Component{
    render(){
        //console.log(this.props);
        return (
            <div>{this.props.itemName}-{this.props.itemValue}</div>
        )
    }
}

export default ShowItem;