import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import Page from "../../common/Page";

class ProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.getProject(this.props.params.id);
  }

  componentWillUnmount() {
    // this.props.actions.setproject();
  }

  render() {
    const {isBusy} = this.props;

    return (
      <Page isBusy={isBusy}>
        <div className="panel panel-default panel-link-list">
          <div className="panel-body btn-toolbar">
            <button type="button" className="btn btn-xs btn-primary-outline">Tasks</button>
            <button type="button" className="btn btn-xs btn-primary-outline">Discussions</button>
            <button type="button" className="btn btn-xs btn-primary-outline">Files</button>
            <button type="button" className="btn btn-xs btn-primary-outline">Calendar</button>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
              <ul className="media-list media-list-conversation c-w-md">
                <li className="media media-current-user m-b-md">
                  <div className="media-body">
                    <div className="media-body-text">
                      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit
                      libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi
                      leo
                      risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.
                    </div>
                    <div className="media-footer">
                      <small className="text-muted">
                        <a href="#">Dave Gamache</a> at 4:20PM
                      </small>
                    </div>
                  </div>
                  <a className="media-right" href="#">
                    <img className="img-circle media-object" src="../assets/img/avatar-dhg.png"/>
                  </a>
                </li>
                <li className="media m-b-md">
                  <a className="media-left" href="#">
                    <img className="img-circle media-object" src="../assets/img/avatar-fat.jpg"/>
                  </a>
                  <div className="media-body">
                    <div className="media-body-text">
                      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus,
                      nisi
                      erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel
                      scelerisque
                      nisl consectetur et.
                    </div>
                    <div className="media-body-text">
                      Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.
                      Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                      vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam
                      quis
                      risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </div>
                    <div className="media-body-text">
                      Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Integer posuere erat a ante
                      venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non
                      mi porta gravida at eget metus.
                    </div>
                    <div className="media-footer">
                      <small className="text-muted">
                        <a href="#">Fat</a> at 4:28PM
                      </small>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </Page>
    );
  }
}

ProjectPage.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  isBusy: PropTypes.bool
};

ProjectPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    project: state.project,
    isBusy: state.busyCount > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
