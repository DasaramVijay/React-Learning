// import React from 'react'
// import {RiBookmarkLine,RiBookmarkFill} from '@remixicon/react'

// const Button = () => {
//     const handleClick = (val) => {
//         if(val.target.textContent !== "Saved"){
//             val.target.textContent = `Saved`;
//         }
//         else{
//             val.target.textContent = "Save";
//         }
//     }
//   return (
//     <div>
//       <button onClick={handleClick}>Save <RiBookmarkLine size={13}/></button>
//     </div>
//   )
// }

// export default Button


import React, { useState } from "react";
import { RiBookmarkLine, RiBookmarkFill } from "@remixicon/react";

const Button = () => {
  const [saved, setSaved] = useState(false);

  return (
    <div>
      <button onClick={() => setSaved(!saved)}
        style={{
          color: saved ? "black" : "gray04",
        }}>
        {saved ? (
          <>
            Saved <RiBookmarkFill size={15} />
          </>
        ) : (
          <>
            Save <RiBookmarkLine size={13} />
          </>
        )}
      </button>
    </div>
  );
};

export default Button;