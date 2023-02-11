import React from "react";
import { Button } from "./atoms/button/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

export const App = () => {
  const handleClick = () => {
    console.log(
      "Addind event handler by destructuring event handlers through {...rest} in the child component instead of accessing each handler separately"
    );
  };

  return (
    <>
      <div>
        <Button onClick={handleClick} primary rounded>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase />
          Danger
        </Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button success>
          <GoCloudDownload />
          Success
        </Button>
      </div>
    </>
  );
};
