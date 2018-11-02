import React from "react";
import _ from "lodash";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

function avrage(data) {
  return _.round(_.sum(data) / data.length);
}
export default function(props) {
  return (
    <React.Fragment>
      <Sparklines data={props.data} height={80} width={180}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {avrage(props.data)} {props.units}
      </div>
    </React.Fragment>
  );
}
