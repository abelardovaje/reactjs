import * as React from 'react';
import {UserDetails} from './UserDetails';
export interface CommentProps{
	name?:string;
	image?:string;
}

export class Comments extends React.Component<CommentProps,{}>{

	componentDidMount(){

	}

	template(){
		return (
			<div className="comments">
			
				<UserDetails/>
				

			</div>
		);
	}
	render(){
		return this.template();	
	}
}
