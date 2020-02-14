import React, { PureComponent } from 'react';
import { DetailWraper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
    render(){
        return(
            <DetailWraper>
                <Header dangerouslySetInnerHTML = {{ __html: this.props.title }} />
                <Content dangerouslySetInnerHTML = {{ __html: this.props.content }} />
            </DetailWraper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.detail.get('title'),
    content: state.detail.get('content')
})
const mapDispatch = (dispatch) => {
    return {
        getDetail(id) {
            dispatch(actionCreators.getDetail(id));
        }
    }
}
export default connect(mapState, mapDispatch)(withRouter(Detail));