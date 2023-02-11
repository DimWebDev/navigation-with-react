import React from "react";
import { Button } from "./atoms/button/Button";

export const App = () => {
  return (
    <>
      <div>
        <Button>Hello</Button>
      </div>
      <div>
        <Button>This is a button</Button>
      </div>
      <div>
        <Button>Children</Button>
      </div>
      <div>
        <Button>Hide ads</Button>
      </div>
      <div>
        <Button>Show ads</Button>
      </div>
    </>
  );
};
