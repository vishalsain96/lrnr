
import React, { Component } from 'react'
// import Tree from './Tree'
import TreeData from './TreeData'
import TreeExample from './TreeExample'


export default class TreeView extends Component {
    constructor() {
        super();

        this.state = {
            tree: TreeData //initialize tree
        }

    }

    render() {
        // const { tree } = this.state;

        return (
            <div>
                <div id="default">
                   <TreeExample />
                </div>
             </div>
        );
    }

}
