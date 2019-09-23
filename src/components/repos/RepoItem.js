import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h4>
        <a href={repo.html_url} className="text-success">
          {repo.name}
        </a>
      </h4>
      <p>{repo.description}</p>
    </div>
  );
};

export default RepoItem;
