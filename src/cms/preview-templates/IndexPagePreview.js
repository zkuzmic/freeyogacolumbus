import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        sidebar={{
          title: data.sidebar.title,
          link: data.sidebar.link,
          contact: data.sidebar.contact,
          photo: getAsset(data.sidebar.photo),
          logo: getAsset(data.sidebar.logo),
        }}
        healthWarning={data.healthWarning}
        currentClasses={data.currentClasses}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
