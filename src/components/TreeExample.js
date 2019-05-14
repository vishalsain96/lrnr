import React from 'react';
import TreeBeard from './treeBeardTestData/treeBeard';
import Tree from './Tree'
import TreeData from './TreeData'

const data = TreeData;

class TreeExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(node, toggled){
        console.log(node)
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.children){ 
            node.toggled = toggled; 
        }
        this.setState({ cursor: node });
    }

    render(){
        return (
            // <TreeBeard
            //     data={data}
            //     onToggle={this.onToggle}
            // />
            
            <Tree data={data}/>
            
        );
    }
}

export default TreeExample