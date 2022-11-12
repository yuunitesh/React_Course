import React from "react";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div
      onClick={props.onConfirm}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-10 flex justify-center items-center"
    >
      <Card className="shadow-xl shadow-white">
        <header className="bg-violet-400">
          <h2 className="font-bold text-2xl text-white py-2 px-4">
            {props.title}
          </h2>
        </header>
        <div>
          <p className="font-light text-sm py-2 px-4">{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm} className="ml-4 py-2 px-4">
            Back
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
