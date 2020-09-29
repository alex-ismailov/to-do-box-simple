import React from 'react';

export default (props) => {
  const { task, onRemove } = props;
  return (
    <div>
      <div className="row">
        <div>
          <button onClick={onRemove} type="button" className="btn btn-primary btn-sm">-</button>
        </div>
        <div className="col-10">{task}</div>
      </div>
      <hr />
    </div>
  );
};
