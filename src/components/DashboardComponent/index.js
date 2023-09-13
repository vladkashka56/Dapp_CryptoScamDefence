import React from "react";
import { PageHeader} from "antd";

import "./style.css";

export default (props) => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <PageHeader
          style = {{ minHeight : "450px"}}
          title={
            <span className="page-title">
              {/*User Dashboard*/}
            </span>
          }
        >
        </PageHeader>
          <div className="heading text-center">
              <div
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.3s"
              >
                  <h6 className="sub-title">Cooming Soon</h6>
                  <h2 className="title">User Dashboard</h2>
                  <h6 className="title">Release-1.0 almost here</h6>
                  <h6 className="title">BE MVP & API Beta launch October 2021</h6>
              </div>
              <p
                  className="content-desc animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.4s"
              >
                  Coming together is the beginning.
                  <br className="d-none d-xl-block" />Staying together is progress.
                  <br className="d-none d-xl-block" />Working together is success.
              </p>
          </div>
      </div>
    </div>
  );
};
