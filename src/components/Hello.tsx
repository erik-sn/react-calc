import * as React from 'react';

export interface HelloProps { compiler: string; framework: string; }

export default class Hello extends React.Component<HelloProps, {}> {
    
    render() {
        return (
            <h1>Hello!  {this.props.compiler} and {this.props.framework}! This is a test. Test me</h1>
        );
    }
}