import React from 'react';
import { connect } from 'react-redux'

import { loadStories } from '../redux/reducers/stories';

let mapStateToProps = (state) => {
  return {
    ...state.stories
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    loadStories: () => dispatch(loadStories())
  }
};


//@connect(mapStateToProps)
class Stories extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    error: React.PropTypes.string.isRequired,
    loaded: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
  }

  static defaultProps = {
    data: [],
    errors: [],
    loaded: false,
    loading: false
  };

  componentWillMount(){
    if(!this.props.loaded){
      this.props.loadStories();
    }
  }

  render(){
    let elements;
    if(this.props.loaded){
      elements = this.renderStories();
    }
    else if(this.props.loading){
      elements = this.renderLoading();
    }
    else if(this.props.error){
      elements = this.renderError();
    }
    else{
      elements = this.renderWaiting();
    }



    return (
      <div className="StoriesContainer">
        {elements}
      </div>
    );
  }

  renderWaiting(){
    return (<p>Waiting...</p>)
  }

  renderLoading(){
    return (<p>Loading...</p>)
  }

  renderStories(){
    let stories = this.props.data.map((val, idx) => {
      return (<li key={idx}><Story {...val}/></li>);
    });

    return (
      <ul className="StoriesList">
      {stories}
      </ul>
    );
  }

  renderError(){
    return (
      <div>
        <p>Error...{this.props.error}</p>
        <button className="btn" onClick={this.props.loadStories}>Reload</button>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories)


class Story extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    nick: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    u_id: React.PropTypes.number
  }

  render(){
    return (
      <div>
          <p>{this.props.title} - {this.props.nick}</p>
          {this.props.text}
      </div>
    );
  }
};
