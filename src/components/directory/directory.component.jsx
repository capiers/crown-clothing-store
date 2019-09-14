import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sectionData: []
    };
  }
  
  componentDidMount() {
    fetch("https://api.myjson.com/bins/znmrl")
      .then(response => response.json())
      .then(sections => this.setState({ sectionData: sections }));
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sectionData.map(({ id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
