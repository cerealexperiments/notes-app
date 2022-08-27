import React from "react";
import Modal from "./Modal";

function Header() {
  return (
    <header className="mb-12 flex justify-between items-center">
      <h1 className="font-bold text-2xl">Notes</h1>
      <Modal />
    </header>
  );
}

export default Header;
