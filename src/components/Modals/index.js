import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Modals.scss';
import React from 'react';
import { connect } from 'react-redux';
import Fail from './Fail';
import Success from './Success';
import * as c from '../../constants/modal';
import { hideModal, showModal } from '../../actions/modal';


class Modals extends React.Component {
  constructor(props){
    super(props);
  }


  render(){

    let { data: { title }, type, hideModal } = this.props;
    const MODAL_COMPONENTS = {
      [c.MODAL_TYPE_FAIL]: {
        component: Fail,
        props: {
          title,
        },
      },
      [c.MODAL_TYPE_SUCCSESS]: {
        component: Success,
        props: {
          title,
        },
      }
     
    };


    if (!type) {
      return null;
    }
    
    const ModalComponent = MODAL_COMPONENTS[type].component;
    const ModalProps = MODAL_COMPONENTS[type].props;
    return (
      <div className={s.modal}> 
        <ModalComponent 
          {...ModalProps}
          hideModal={hideModal} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  type: state.modal.type,
  data: state.modal.props,
});

let mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (type, props) => dispatch(showModal(type, props)),
});

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(Modals));
