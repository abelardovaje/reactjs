import * as React from "react";

export interface HelloProps { 
	name: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.

export class Hello extends React.Component<HelloProps,{}>{


	constructor(){
		super();
	}

	formatName(){

		return 'Abel';
	}


	template(){
		return(

			<div className="sample">

				{this.props.name}

			</div>
			
		);
	}

	render(){
		return this.template();
	}
}