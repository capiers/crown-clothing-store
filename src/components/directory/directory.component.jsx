import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import DIRECTORY_DATA from '../../data/directory/directory.data.js';

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sectionData: DIRECTORY_DATA
    };
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
