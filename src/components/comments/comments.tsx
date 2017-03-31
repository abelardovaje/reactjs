import * as React from 'react';

export interface CommentProps{
	name?:string;
	image?:string;
}

export class Components extends React.Component<CommentProps,{}>{

	template(){
		return (
			<div className="comments">

				<div className="userInfo">
					<div className="avatar">
						<img src=".jpg"/>
					</div>
					<div className="user-name">Abel</div>
				</div>

			</div>
		);
	}
	render(){
		return this.template();	
	}
}
