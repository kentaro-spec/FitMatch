import React, {useState} from "react";

export default function PostChatBar({locked, postMessage, getData}) {
	const [postContent, setPostContent] = useState("");
	const handleClick = () => {
		postMessage(postContent);
		getData()
		// console.log(postContent)
	}

  return (
		<div className=" flex justify-center">
			<div className="text-center bottom-5 fixed">
				<div className="inline-block relative">
					<input
					  disabled={locked}
						type="text"
						value={postContent}
						onChange={(e) => setPostContent(e.target.value)}
						placeholder="メッセージを入力"
						className="text-blue text-xl block appearance-none w-full bg-gray-light border-2 border-blue font-bold hover:border-gray-500 px-10 py-3 pr-16 rounded-3xl shadow leading-tight focus:outline-none focus:shadow-outline placeholder-blue"
					/>

					<button disabled={locked} onClick={handleClick} className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						{locked ? <img className="h-10 w-10" src="/images/arrow-gray.png" alt="" /> : <img className="h-10 w-10" src="/images/arrow.png" alt="" />}
					</button>
				</div>
			</div>
		</div>
  );
}