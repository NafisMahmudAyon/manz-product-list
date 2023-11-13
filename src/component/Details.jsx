// Popup.js

import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Star, Wishlist, WishlistDone } from "./Icon";
import TooltipItem from "./TooltipItem";

const Details = ({ isOpen, closePopup, selectedItem }) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div
			className={`fixed top-0 left-0 w-full h-[100vh] bg-slate-900 flex justify-center overflow-y-auto ${
				isOpen ? "block" : "hidden"
			}`}>
			{/* <div
				className="absolute inset-0  opacity-50 h-[100vh]  "
				onClick={closePopup}></div> */}
			<div className=" min-h-full p-8 rounded-md mt-6 z-10 ">
				<div className="flex flex-col  ">
					<div className="border rounded-md mb-3 ">
						<Splide
							aria-label="My Favorite Images"
							options={{
								rewind: true,

								gap: "1rem",
							}}>
							{selectedItem?.img.map((imageUrl, index) => (
								<SplideSlide
									key={index}
									className="flex justify-center items-center ">
									<img
										src={imageUrl}
										alt={`Image ${index + 1}`}
										className="max-h-[400px] mx-auto "
									/>
								</SplideSlide>
							))}
						</Splide>
					</div>
				</div>

				<div className="text-gray-400 text-sm whitespace-nowrap my-3">
					<span className="animate-ping-slow ">✨</span>
					{selectedItem?.category}
				</div>
				<div className="flex justify-between items-center ">
					<div className="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis font-bold ">
						{selectedItem?.productName}
					</div>
					{selectedItem?.stock ? (
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
					{selectedItem?.sale ? (
						<div className="flex gap-2 ">
							<span className="text-xl font-bold line-through text-gray-400 ">
								৳{selectedItem?.regularPrice}
							</span>
							<span className="text-xl font-bold ">
								৳{selectedItem?.salePrice}
							</span>
						</div>
					) : (
						<div className="text-xl font-bold ">
							৳{selectedItem?.regularPrice}
						</div>
					)}
				</div>
				<div className="flex gap-4">
					<div className="flex justify-center items-center gap-2">
						<span className="text-gray-400">Color:</span>
						<span
							style={{ backgroundColor: selectedItem?.color }}
							className=" w-4 h-4 rounded-full block"></span>
					</div>
					<div className="flex justify-center items-center gap-2 ">
						<span className="text-gray-400 ">Size:</span>
						<div className="flex gap-3 relative ">
							{selectedItem?.size?.map((size, index) => (
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
				<div className="hidden items-center gap-6 my-4 ">
					<button
						className="transition ease-in-out duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 "
						onClick={() => openDetails(selectedItem)}>
						Details
					</button>
					<button className="hidden transition ease-in-out duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
						Buy Now
					</button>
				</div>
				<div className="my-4 mt-6 ">
					<div className="text-lg pb-4 block ">
						<span className="text-red-500 text-2xl ">♦️</span>
						<span className="mx-3">{selectedItem?.heading}</span>
						<span className="text-red-500 text-2xl ">♦️</span>
					</div>
					{selectedItem?.details.map((item, index) => (
						<div className="mb-3 " key={index}>
							<span className="animate-ping-slow  ">✨</span>{" "}
							<span>{item}</span>
						</div>
					))}
				</div>

				<button
					className="  text-red-500 px-2 py-1 rounded-md border border-inset border-red-500 hover:bg-red-500 hover:text-white ease-in-out duration-500 fixed top-2 right-2"
					onClick={closePopup}>
					X
				</button>
			</div>
		</div>
	);
};

export default Details;
