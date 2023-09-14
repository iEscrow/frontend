import React from "react";

const WalletAccion = () => {
  return (
    <div class="dropdown dropdown-left">
      <label tabindex="0" class="btn m-1">
        Click
      </label>
      <ul
        tabindex="0"
        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default WalletAccion;
