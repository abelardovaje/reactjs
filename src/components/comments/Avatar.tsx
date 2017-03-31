import * as React from 'react';


export class Avatar extends React.Component<{image:string},{}>{

	render(){
		return (
			<div>

				<div className="avatar">
					<img src={this.props.image}/>
				</div>

			</div>
			

		);
	}

}