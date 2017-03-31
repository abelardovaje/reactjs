import * as React from 'react';

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

				<div className="userInfo">
					<div className="avatar">
						<img src=".jpg"/>
					</div>
					<div className="user-name">{this.props.name}</div>
				</div>

			</div>
		);
	}
	render(){
		return this.template();	
	}
}
