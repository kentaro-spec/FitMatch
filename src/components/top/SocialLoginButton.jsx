import React from "react";

export default function SocialLoginButton({ color, children }) {
	const socialColor = color;
	const bgColor = {
		style : `mb-5 min-w-full py-2 ${socialColor} rounded-md text-white font-bold block mx-auto shadow-md`
	}

  return (
    <button className={bgColor.style}>
      {children}
    </button>
  );
}
