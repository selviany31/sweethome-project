import React from "react";
import { ItemContainer } from "../../assets/styles/components/dashboardPage/AppointmentItem.styles";

export default function AppoinmentItem(props) {
  return (
    <ItemContainer>
      <div className="dashboard_title">{props.title}</div>
      <div className="dashboard_data">{props.data}</div>
    </ItemContainer>
  );
}
