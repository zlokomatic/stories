import React from 'react';

export default class Stories extends React.Component {
  render(){
    let stories = this.props.stories.map((val, idx) => {
      return (<li key={idx}><Story {...val}/></li>);
    });

    return (
      <div className="StoriesContainer">
        <ul className="StoriesList">
        {stories}
        </ul>
      </div>
    );
  }
};

var Story = (props) => {
  return <div>
      <p>{props.title}</p>
      {props.text}
  </div>;
};
