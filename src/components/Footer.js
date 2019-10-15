  import React, { Component } from 'react';
  import { connect } from 'react-redux';

  class Footer extends Component {

    render() {
      return (
        <div className='card-header text-center'>
         Clicks: {this.props.clicks}
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    clicks: state.clicks
  });
  export default connect(mapStateToProps)(Footer);
