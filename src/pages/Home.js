import React, {Fragment} from "react";
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";

export const Home = () => {
  const notes = new Array(3)
    .fill('')
    .map((_, idx) => ({id: idx, title: `note ${idx + 1}`}))

  return (
    <Fragment>
      <Form/>
      <div className="dropdown-divider"/>

      <Notes notes={notes}/>

    </Fragment>
  )
}
