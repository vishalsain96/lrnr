import React, { Component } from 'react';
import { Button, withStyles, Grid } from '@material-ui/core';
import TreeData from './TreeData'
import TextEditor from './TextEditor';

const styles = {
    buttonStyle:{
        fontSize:12,
        textAlign:'left'
    }
}
class Tree extends Component {
    constructor() {
        super()
        this.state = {
           // indexArray : []
           render:false,
           isEditor: false
        }
    }

    handleEvent = (data) => {
    
        console.log(data)
    }
    addItem = (data,domElem) => {
        console.log("enetered");
        console.log(domElem);
        let fileName = prompt("Enter the file name");
        let myObj = {
            "id":123,
            "name":fileName
        }
        if(fileName != null) {
        data.children.push(myObj)
        }
        this.setState(prevState => ({render:!prevState}))
        console.log(TreeData)
    }

    showTextEditor = (elemName) =>{
        if(elemName == "WYSIWYG Editor"){
            this.setState({isEditor:true})
        } else {
            this.setState({isEditor:false})
        }
    }

    createTree(data,index) {
        console.log("Entered")
       // this.state.indexArray.push(index);
        console.log(index)
        const {classes} = this.props;
        console.log(this.props)
            if (data.children !== undefined && data.children.length > 0) {
                return (
                    <ul>
                        <li>
                            <Button className={classes.buttonStyle}>{data.name}</Button>
                            <Button onClick={() => {this.addItem(data,this)}}>+</Button>
                        </li>
                        {data.children.map((item,index) => (
                            this.createTree(item,index)
                        ))}
                    </ul>
                )
            } else {
                return (
                    <ul><Button className={classes.buttonStyle} onClick={() => this.showTextEditor(data.name)}>{data.name}</Button></ul>
                )
            }
        }
    
    render() {
        const {data} = this.props
        //this.state.indexArray.push(index);
        return (
            <Grid  style={{"display": "-webkit-box", "width": "342%"}}>
            <div >
                {data.map(item=>
                    this.createTree(item)
                    )}
            </div>
            {this.state.isEditor && 
            <Grid style={{ "width": "80%", "marginLeft": "10%"}}>
                <TextEditor/>
            </Grid>}
            </Grid>
        )
    }
}

export default withStyles(styles)(Tree)