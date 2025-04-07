import './Loading.css'; 

export default function Loading() {
  return (
    <div className="container">
      <div className="row g-3" style={{ margin: "15px" }}>
        {[...Array(8)].map((_, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-3">
            <div className="skeleton-card">
              <div className="skeleton-box" style={{ height: "45%" }}></div>
              <div className="skeleton-box" style={{ height: "10%" }}></div>
              <div className="skeleton-box" style={{ height: "10%" }}></div>
              <button className="skeleton-button"></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
