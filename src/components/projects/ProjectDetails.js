import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            explicabo possimus iure voluptate nostrum quibusdam nesciunt
            asperiores, at, fuga nobis, eveniet laudantium ratione perferendis
            omnis quae veritatis quia repellat facilis!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Travis Chan</div>
          <div>19th April, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
