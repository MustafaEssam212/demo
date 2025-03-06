

const FallbackComponent = ({ type }) => {
  return (
    <div className={`skeleton-container ${type}`}>
      {type === "carousel" && (
        <div className="skeleton-carousel">
          <div className="skeleton-slide"></div>
          <div className="skeleton-slide"></div>
          <div className="skeleton-slide"></div>
        </div>
      )}

      {type === "text-container" && (
        <div className="skeleton-text-container">
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      )}

      {type === "container" && <div className="skeleton-block"></div>}

      {type === "cards" && (
        <div className="skeleton-cards">
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
        </div>
      )}
    </div>
  );
};

export default FallbackComponent;
