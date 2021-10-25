import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  sidebar,
  healthWarning,
  currentClasses,
}) => {
  console.log(currentClasses);
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      ></div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-6 is-offset-1">
                <div className="content">
                  <p style={{ fontStyle: "italic" }}>{healthWarning}</p>
                  <h2>Current Classes</h2>
                  {currentClasses.map((c) => {
                    return (
                      <div
                        key={c.title}
                        style={{
                          borderLeft: "3px solid lightgray",
                          paddingLeft: "15px",
                          paddingTop: "16px",
                          paddingBottom: "16px",
                          marginBottom: "24px",
                        }}
                      >
                        <h4>{c.title}</h4>
                        <p>
                          <b>What: </b>
                          {c.what}
                        </p>
                        <p>
                          <b>When: </b>
                          {c.when}
                        </p>

                        <p>
                          <b>Where: </b>
                          {c.where}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <BlogRoll />
              </div>
              <div className="column is-4">
                <a
                  className="has-background-white-ter box"
                  style={{
                    backgroundColor: "whitesmoke",
                    display: "block",
                    paddingBottom: "24px",
                  }}
                  href={sidebar.link}
                >
                  <h3 className="is-size-6 has-text-weight-semibold">
                    {sidebar.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginTop: "15px",
                      width: "100%",
                    }}
                  >
                    <img
                      src={
                        !!sidebar.photo.childImageSharp
                          ? sidebar.photo.childImageSharp.fluid.src
                          : sidebar.photo
                      }
                      alt="Darlene Kuzmic"
                      style={{
                        marginRight: "5px",
                        flexShrink: "1",
                        maxWidth: `${(120 / 340) * 100}%`,
                      }}
                    />
                    <img
                      src={
                        !!sidebar.logo.childImageSharp
                          ? sidebar.logo.childImageSharp.fluid.src
                          : sidebar.logo
                      }
                      style={{
                        flexShrink: "1",
                        maxWidth: `${(215 / 340) * 100}%`,
                      }}
                      alt="ERA Real Estate"
                    />
                  </div>
                </a>
                <div style={{ marginTop: "24px" }}>{sidebar.contact}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  sidebar: PropTypes.object,
  healthWarning: PropTypes.string,
  currentClasses: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        sidebar={frontmatter.sidebar}
        healthWarning={frontmatter.healthWarning}
        currentClasses={frontmatter.currentClasses}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sidebar {
          title
          link
          contact
          photo {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo {
            childImageSharp {
              fluid(maxWidth: 215, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        healthWarning
        currentClasses {
          title
          when
          what
          where
        }
      }
    }
  }
`;
