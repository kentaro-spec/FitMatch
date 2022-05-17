import React from "react";
import { useState } from "react";

export default function RadioButton({todayDate, tomorrowDate, dayaftertomorrowDate,setDateState}) {
  const [value, setValue] = useState("today");
  const leftClasses = {
    select: "bg-blue text-white p-3 text-center font-bold text-lg rounded-l-lg border-blue  border",
    nonSelect: "bg-white p-3 text-center font-bold text-xl text-blue rounded-l-lg border-blue  border",
    none: "",
  };
  const middleClasses = {
    select: "bg-blue text-white p-3 text-center font-bold text-lg border-blue border-y ",
    nonSelect: "bg-white p-3 text-center font-bold text-xl text-blue border-blue border-y",
    none: "",
  };
  const rightClasses = {
    select: "bg-blue text-white p-3 text-center font-bold text-lg rounded-r-lg border-blue border",
    nonSelect: "bg-white p-3 text-center font-bold text-xl text-blue rounded-r-lg border-blue border",
    none: "",
  };
  const handleChange = (e) => {
    setValue(e.target.value);
		setDateState(e.target.value);
  };
  return (
		<div className="text-center mb-5">
			<div className="inline-block  ">
				<div className="flex  justify-center ">
					<div className={value === "today" ? leftClasses.select : leftClasses.nonSelect}>
						<label htmlFor="radio1" className="">
							<input
								id="radio1"
								className="hidden"
								name="aaa"
								type="radio"
								value="today"
								onChange={handleChange}
								checked={value === "today"}
							/>
							今日
							<p className="text-sm font-normal">{todayDate}</p>
						</label>
					</div>

					<div
						className={value === "tomorrow" ? middleClasses.select : middleClasses.nonSelect}
					>
						<label htmlFor="radio2" className="">
							<input
								id="radio2"
								className="hidden"
								name="aaa"
								type="radio"
								value="tomorrow"
								onChange={handleChange}
								checked={value === "tomorrow"}
							/>
							明日
							<p className="text-sm font-normal">{tomorrowDate}</p>
						</label>
					</div>

					<div
						className={
							value === "day-after-tomorrow" ? rightClasses.select : rightClasses.nonSelect
						}
					>
						<label htmlFor="radio3">
							<input
								id="radio3"
								className="hidden"
								name="aaa"
								type="radio"
								value="day-after-tomorrow"
								onChange={handleChange}
								checked={value === "day-after-tomorrow"}
							/>
							明後日
							<p className="text-sm font-normal">{dayaftertomorrowDate}</p>
						</label>
					</div>
				</div>
			</div>
		</div>
  );
}
