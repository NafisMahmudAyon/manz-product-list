const TooltipItem = ({ children, tooltipsText, position, className }) => {
	return (
		<div className="">
			<div className="group relative inline-block">
				<button className={`${className}`}>{children}</button>
				<div
					className={` ${
						(position === "right" &&
							`absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-slate-700 px-4 py-[6px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
						(position === "top" &&
							`absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-slate-700 px-4 py-[6px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
						(position === "left" &&
							`absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded bg-slate-700 px-4 py-[6px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
						(position === "bottom" &&
							`absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-slate-700 px-4 py-[6px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100`)
					}`}>
					<span
						className={` ${
							(position === "right" &&
								`absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-slate-700`) ||
							(position === "top" &&
								`absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-slate-700`) ||
							(position === "left" &&
								`absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-slate-700`) ||
							(position === "bottom" &&
								`absolute left-1/2 top-[-3px] -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-slate-700`)
						} `}></span>
					{tooltipsText}
				</div>
			</div>
		</div>
	);
};

export default TooltipItem;
