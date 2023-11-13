import { useEffect, useState } from "react";
import Details from "./component/Details";
import data from "./product.json";
import { Star, Wishlist, WishlistDone } from "./component/Icon";
import TooltipItem from "./component/TooltipItem";

// const productList = data.productDetails?.tshirt;
console.log(data.productDetails?.pant);

function App() {
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null); // State to hold the selected item

	const openDetails = (item) => {
		setSelectedItem(item);
		setPopupOpen(true);
	};

	const closePopup = () => {
		setPopupOpen(false);
	};
	const [activeButton, setActiveButton] = useState("Pant");
	const [productList, setProductList] = useState(data.productDetails?.tshirt);

	useEffect(() => {
		if (activeButton === "T-Shirt") {
			const productData = data.productDetails?.tshirt;
			setProductList(data.productDetails?.tshirt);
		}
		if (activeButton === "Pant") {
			const productData = data.productDetails?.pant;
			setProductList(data.productDetails?.pant);
		}
	}, [activeButton]);

	const handleButtonClick = (buttonType) => {
		setActiveButton(buttonType);
	};
	return (
		<div className="w-[100vw] max-w-[100vw] min-h-[100vh] bg-slate-900  ">
			<header className="flex justify-center items-center py-6 ">
				<img
					src="/lg.png"
					alt="logo"
					className="w-1/6 min-w-[100px] max-w-[200px]   "
				/>
			</header>
			<div className="flex justify-center items-center gap-4 ">
				<button
					type="button"
					className={`p-2 ${
						activeButton === "Pant" ? "bg-teal-800" : "bg-teal-600"
					} px-4 rounded-md`}
					onClick={() => handleButtonClick("Pant")}>
					Pant
				</button>
				<button
					type="button"
					className={`p-2 ${
						activeButton === "T-Shirt" ? "bg-teal-800" : "bg-teal-600"
					}  px-4 rounded-md`}
					onClick={() => handleButtonClick("T-Shirt")}>
					T-Shirt
				</button>
			</div>
			<div className="flex justify-center w-[100%] mt-10 ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-[75%] md:w-[85%] bg-gray-900">
					{productList?.map((item, index) => (
						<div
							key={index}
							className="flex flex-col border p-4 rounded-2xl w-full ">
							<div className="relative ">
								<img
									src={item.img[0]}
									alt="Just a flower"
									className="object-cover cursor-pointer rounded-2xl h-[320px] w-[100%] "
									onClick={() => openDetails(item)}
								/>
								{/* <button
									className="transition absolute top-2 right-2 ease-in-out duration-300   hover:text-purple-500 shadow hover:shadow-md  rounded-full w-8 h-8 text-center p-1 flex justify-center "
									onClick={!item.wishlist}>
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
								</button> */}
								<button
									className="transition absolute top-2 right-2 ease-in-out duration-300 hover:text-purple-500 shadow hover:shadow-md rounded-full w-8 h-8 text-center p-1 flex justify-center "
									onClick={() => {
										// Toggle the wishlist property of the item
										item.wishlist = !item.wishlist;
									}}>
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
								<div
									className="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis cursor-pointer font-bold "
									onClick={() => openDetails(item)}>
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
							<div
								className={`flex gap-4 ${
									activeButton === "Pant" ? "flex-col items-start" : ""
								} `}>
								<div className="flex justify-center items-center gap-2">
									<span className="text-gray-400">Color:</span>
									<span
										style={{ backgroundColor: item.color }}
										className=" w-4 h-4 rounded-full block"></span>
								</div>
								<div className="flex justify-center items-center gap-2 ">
									<span className="text-gray-400 ">Size:</span>
									<div className="flex gap-3 relative ">
										{item.size?.map((size, index) => (
											<div key={index}>
												{size.stock ? (
													<TooltipItem
														key={size.id}
														position="top"
														tooltipsText="In Stock"
														className="p-1 bg-slate-700 w-6 flex justify-center items-center rounded-md hover:text-purple-500 transition ease-in-out duration-300 hover:bg-slate-800 ">
														{size.sizeName}
													</TooltipItem>
												) : (
													<TooltipItem
														key={size.id}
														position="top"
														tooltipsText="Out of Stock"
														className="p-1 bg-red-500 md:bg-slate-700 w-6 flex justify-center items-center rounded-md hover:text-white transition ease-in-out duration-300  md:hover:bg-red-700 ">
														{size.sizeName}
													</TooltipItem>
												)}
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="flex items-center gap-6 my-4 ">
								<button
									className="transition ease-in-out duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 "
									onClick={() => openDetails(item)}>
									Details
								</button>
								<button className="hidden transition ease-in-out duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
									Buy Now
								</button>
							</div>
						</div>
					))}
					<Details
						isOpen={isPopupOpen}
						closePopup={closePopup}
						selectedItem={selectedItem}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;

