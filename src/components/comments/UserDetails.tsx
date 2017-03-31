import * as React from 'react';
import {Avatar} from './Avatar';
export class UserDetails extends React.Component<{},{}>{

	render(){
		return (
			<div className="userInfo">
				<Avatar image=".jpg"/>
			</div>
		)
	}

}