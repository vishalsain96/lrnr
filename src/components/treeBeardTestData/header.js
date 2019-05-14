import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'shallowequal';
import deepEqual from 'deep-equal';
import {Button} from '@material-ui/core'
import TreeData from '../TreeData'

class NodeHeader extends Component {
    constructor() {
        super()
        this.state = {
            data : TreeData,
            setNode : "",
            render : false
        }
    }
    shouldComponentUpdate(nextProps) {
        const props = this.props;
        const nextPropKeys = Object.keys(nextProps);

        for (let i = 0; i < nextPropKeys.length; i++) {
            const key = nextPropKeys[i];
            if (key === 'animations') {
                continue;
            }

            const isEqual = shallowEqual(props[key], nextProps[key]);
            if (!isEqual) {
                return true;
            }
        }

        return !deepEqual(props.animations, nextProps.animations, {strict: true});
    }

    addTreeNode(node,children){
    const fileName = prompt("Please enter the file name")
    if(fileName != null && fileName.length > 0){
       let someObject = {
            "name":fileName
        }
        children.push(someObject);
        this.setState(prevState => ({render:!prevState}))
    }
    }

    render() {
        const {animations, decorators, node, onClick, style} = this.props;
        const {active, children} = node;
        const terminal = !children;
        const container = [style.link, active ? style.activeLink : null];
        const headerStyles = Object.assign({container}, style);

        return (
            <div style={{display: "inline-flex"}}>
            <decorators.Container
                {...{animations, decorators, node, onClick, terminal}}
                style={headerStyles}
            />
            {node.children &&
            <Button onClick={() => this.addTreeNode(node,children)}> + </Button>
            }
            </div>
        );
    }
}

NodeHeader.propTypes = {
    style: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    node: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default NodeHeader;
