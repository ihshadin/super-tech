import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { motion } from "framer-motion";

const FooterBanner = ({
	footerBanner: {
		largeText1,
		largeText2,
		smallText,
		midText,
		buttonText,
		image,
		desc,
		slug,
	},
}) => {
	return (
		<motion.div
		initial={{ opacity: 0, translateY: 50 }}
		transition={{ duration: 0.4, delay: 0.4 }}
		whileInView={{ translateY: 0, opacity: 1 }} className="footer-banner-container">
			<div className="banner-desc">
				<div className="left">
					<h3>{largeText1}</h3>
					<h3>{largeText2}</h3>
				</div>
				<div className="right">
					<p>{smallText}</p>
					<h3>{midText}</h3>
					<p>{desc}</p>
					<Link href={`/product/${slug.current}`}>
						<button>
							{/* <svg width="150px" height="50px" viewBox="0 0 180 60" class="border">
								<polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
								<polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
							</svg> */}
							<svg width="150px" height="50px" viewBox="0 0 180 60">
								<rect x="1" y="1" width="178" height="58" rx="10" ry="10" />
								<rect x="1" y="1" width="178" height="58" rx="10" ry="10" />
							</svg>
							<span>Shop Now</span>
						</button>
					</Link>
				</div>
			</div>
			<img src={urlFor(image)} className="footer-banner-image" alt="" />
		</motion.div>
	);
};

export default FooterBanner;
