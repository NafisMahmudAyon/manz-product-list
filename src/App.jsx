import data from "./product.json";

const tshirt = data.productDetails?.tshirt;
console.log(tshirt);

const Star = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlSpace="preserve"
		style={{
			enableBackground: "new 0 0 122.88 69.4",
		}}
		viewBox="0 0 122.88 69.4"
		{...props}>
		<path
			d="M7.85 0h107.18c4.32 0 7.85 3.53 7.85 7.85v53.69c0 4.32-3.53 7.85-7.85 7.85H7.85C3.53 69.4 0 65.87 0 61.55V7.85C0 3.53 3.53 0 7.85 0zm36.37 14.59v39.37h-9.48l-5.63-17.9v17.9h-9.05V14.59h9.05l6.05 17.73V14.59h9.06zm4.34 0h18.06v7.86h-7.21v7.52h6.74v7.47h-6.74v8.66h7.95v7.86h-18.8V14.59zm62.62 0-4.83 39.37H92.86c-1.21-6.05-2.31-12.94-3.29-20.67-.45 3.33-1.46 10.22-3.03 20.67H73.13l-4.85-39.37h10.53l1.14 13.75 1.1 13.29c.41-6.88 1.41-15.89 3-27.04h11.21c.13 1.17.52 5.5 1.15 13.01l1.22 14.98c.64-9.53 1.65-18.86 3.03-27.99h10.52z"
			style={{
				fillRule: "evenodd",
				clipRule: "evenodd",
				fill: "#fbbf24",
			}}
		/>
	</svg>
);
const Wishlist = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		className="h-6 w-6 "
		viewBox="0 0 24 24"
		{...props}>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z"
		/>
	</svg>
);
const WishlistDone = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlSpace="preserve"
		style={{
			enableBackground: "new 0 0 122.88 107.41",
		}}
		viewBox="0 0 122.88 107.41"
		{...props}>
		<path
			d="M60.83 17.19C68.84 8.84 74.45 1.62 86.79.21c23.17-2.66 44.48 21.06 32.78 44.41-3.33 6.65-10.11 14.56-17.61 22.32-8.23 8.52-17.34 16.87-23.72 23.2l-17.4 17.26-14.38-13.84C29.16 76.9.95 55.93.02 29.95-.63 11.75 13.73.09 30.25.3c14.76.2 20.97 7.54 30.58 16.89zM39.31 51.36a5.604 5.604 0 0 1-.16-7.92 5.6 5.6 0 0 1 3.92-1.72c1.43-.03 2.88.49 3.99 1.56l8.52 8.16 20.26-18.82.69.52-.69-.52c.05-.07.12-.13.19-.18A5.648 5.648 0 0 1 80 31.08l.07.01c1.41.09 2.78.72 3.8 1.85a5.574 5.574 0 0 1 1.42 4.04l-.01.07c-.09 1.38-.7 2.73-1.79 3.74l-24.1 22.46c-.04.05-.09.1-.14.14a5.6 5.6 0 0 1-7.57-.17L39.31 51.36z"
			style={{
				fillRule: "evenodd",
				clipRule: "evenodd",
			}}
		/>
	</svg>
);
const TooltipItem = ({ children, tooltipsText, position, className }) => {
  return (
    <div className="">
        <div className="group relative inline-block">
          <button className={`${className}`}>
            {children}
          </button>
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
            }`}
          >
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
              } `}
            ></span>
            {tooltipsText}
          </div>
        </div>
      
    </div>
  );
};

function App() {
	return (
		<div className="max-w-[100vw] min-h-[100vh] bg-slate-900  ">
			<header className="flex justify-center items-center py-6 ">
				<img src="/lg.png" alt="logo" className="w-1/6 max-w-[200px]   " />
			</header>
			<div className="flex justify-center w-[100%] mt-10 ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[75%] bg-gray-900 ">
					{tshirt.map((item, index) => (
						<div
							key={index}
							className="flex flex-col border p-6 rounded-2xl w-full ">
							<div className="relative ">
								<img
									src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
									alt="Just a flower"
									className="object-fill  rounded-2xl"
								/>
								<button className="transition absolute top-2 right-2 ease-in-out duration-300   hover:text-purple-500 shadow hover:shadow-md  rounded-full w-8 h-8 text-center p-1 flex justify-center ">
									{item.wishlist ? (
										<WishlistDone className="w-5 h-5 " fill="red" />
									) : (
										<Wishlist
											className="w-5 h-5 "
											fill="#ffffff00"
											stroke="red"
											strokeWidth="3px"
										/>
									)}
								</button>
							</div>
							<div className="text-gray-400 text-sm whitespace-nowrap my-3">
								<span className="animate-ping-slow ">✨</span>
								{item.category}
							</div>
							<div className="flex justify-between items-center ">
								<div className="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis font-bold ">
									{item.productName}
								</div>
								{item.stock ? (
									<div className="whitespace-nowrap px-2 p-1 bg-teal-600 rounded-lg ">
										In Stock
									</div>
								) : (
									<div className="whitespace-nowrap px-2 p-1 bg-teal-600 rounded-lg ">
										Out of Stock
									</div>
								)}
							</div>
							<div className="my-2 mb-3">
								{item.sale ? (
									<div className="flex gap-2 ">
										<span className="text-xl font-bold line-through text-gray-400 ">
											৳{item.regularPrice}
										</span>
										<span className="text-xl font-bold ">
											৳{item.salePrice}
										</span>
									</div>
								) : (
									<div className="text-xl font-bold ">৳{item.regularPrice}</div>
								)}
							</div>
							<div className="flex gap-4">
								<div className="flex justify-center items-center gap-2">
									<span className="text-gray-400">Color:</span>
									<span
										style={{ backgroundColor: item.color }}
										className=" w-4 h-4 rounded-full block"></span>
								</div>
								<div className="flex justify-center items-center gap-2 ">
									<span className="text-gray-400 ">Size:</span>
									<div className="flex gap-3 relative ">
										{item.size?.map((size) => (
											<>
											{size.stock ? <TooltipItem key={size.id} position="top"  tooltipsText="In Stock" className="p-1 bg-slate-700 w-6 flex justify-center items-center rounded-md hover:text-purple-500 transition ease-in-out duration-300 hover:bg-slate-800 ">{size.sizeName}</TooltipItem> : <TooltipItem key={size.id} position="top"  tooltipsText="Out of Stock" className="p-1 bg-slate-700 w-6 flex justify-center items-center rounded-md hover:text-white transition ease-in-out duration-300 hover:bg-red-700 ">{size.sizeName}</TooltipItem> }
											
											</>
											
											
											
										))}
									</div>
								</div>
							</div>
							<div className="flex items-center gap-6 my-4 ">
								<button className="transition ease-in-out duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">Details</button>
								<button className="hidden transition ease-in-out duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">Buy Now</button>
							</div>
							


						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;

