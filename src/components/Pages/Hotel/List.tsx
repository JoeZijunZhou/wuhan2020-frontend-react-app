import * as React from "react";
import styles from '../../../styles/pages/hotel/list.module.scss';
import Message from "../../Message";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { IApplicationState } from "../../../store";
import { withRouter, RouteComponentProps } from "react-router";
import { Layout } from "antd";

interface ConnectedProps {
	loading: boolean;
}

interface Props extends RouteComponentProps {

}
const { Content } = Layout;
class HotelList extends React.PureComponent<Props, {}>
{
	public props: ConnectedProps & Props;
	componentDidMount() {
	}

	onNewClick = () => {

	}

	render()
	{
		return (
			<Layout style={{backgroundColor: '#fff', flex: '1 0 auto', minHeight: 'unset'}}>
				<Content>
					<div className={styles.pageHotelList}>
            {Message('DEVELOPING')}
					</div>
				</Content>
			</Layout>
		)
	}
}

const mapStateToProps = (state: IApplicationState) =>
{
	return {
		loading: state.app.loading,
	};
};

const mapActionsToProps = dispatch =>
{
	return {
		actions: bindActionCreators(
			{
			},
			dispatch
		),
	};
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(withRouter(HotelList));
