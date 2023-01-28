import React from "react";

const ViewDetail = (props) => {
  const { item } = props;
  return (
    <>
      <div className="view-detail-container">
        <div className="view-detail-list">
          <li>
            <p>Contact</p>
            {item.name}
          </li>
          <li>
            <p>Company</p>
            {item.company.name}
          </li>
          <li>
            <p>Phone No</p>
            {item.phone}
          </li>
        </div>
        <div className="view-detail-list-2">
          <li>
            <p>Address</p>
            {item.address.street}
          </li>
          <li>
            <p>Email</p> {item.email}
          </li>
          <li>
            <p>Website</p>
            {item.website}
          </li>
        </div>
      </div>
    </>
  );
};

export default ViewDetail;
