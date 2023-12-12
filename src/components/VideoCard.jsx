import React from "react";
import { Link } from "react-router-dom";
import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelUrl,
	demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	// Check if snippet is available
	const timestamp1 = snippet?.publishedAt;
	const dateObject1 = new Date(timestamp1);

	const timestamp2 = new Date();
	const dateObject2 = new Date(timestamp2);

	// Menghitung selisih waktu dalam milisekon
	const timeDifference = dateObject2 - dateObject1;

	// Menghitung selisih waktu dalam hari, bulan, dan tahun
	const daysDifference = Math.floor(
		timeDifference / (1000 * 60 * 60 * 24)
	);
	const monthsDifference =
		dateObject2.getMonth() -
		dateObject1.getMonth() +
		12 *
			(dateObject2.getFullYear() -
				dateObject1.getFullYear());
	const yearsDifference =
		dateObject2.getFullYear() - dateObject1.getFullYear();

	// Menentukan label untuk menampilkan
	let displayLabel;
	let displayValue;

	if (daysDifference > 30) {
		displayLabel = "Bulan";
		displayValue = monthsDifference;
	} else if (yearsDifference > 1) {
		displayLabel = "Tahun";
		displayValue = yearsDifference;
	} else {
		displayLabel = "Hari";
		displayValue = daysDifference;
	}
	return (
		<Card
			sx={{
				width: {
					xs: "100%",
					sm: "358px",
					md: "420px",
				},
				boxShadow: "none",
				borderRadius: 2,
				border: "1px solid gray",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={6} sm={6}>
					<Stack>
						<Link
							to={
								videoId
									? `/video/${videoId}`
									: `/video/cV2gBU6hKfY`
							}
						>
							<CardMedia
								image={
									snippet
										?.thumbnails
										?.high
										?.url ||
									demoThumbnailUrl
								}
								alt={
									snippet?.title
								}
								sx={{
									width: "200px",
									height: "146px",
									borderRadius: "5px",
								}}
							/>
						</Link>
					</Stack>
				</Grid>
				<Grid item xs={6} sm={6}>
					<Stack>
						<CardContent
							sx={{
								backgroundColor:
									"#FFF",
								height: "106px",
							}}
						>
							<Link
								to={
									videoId
										? `/video/${videoId}`
										: demoVideoUrl
								}
							>
								<Typography
									variant="subtitle1"
									fontWeight="bold"
									color="black"
									sx={{
										fontSize: "12px",
										fontFamily: "'Roboto', sans-serif",
									}}
								>
									{snippet?.title.slice(
										0,
										60
									) ||
										demoVideoTitle.slice(
											0,
											60
										)}
								</Typography>
							</Link>
							<Link
								to={
									snippet?.channelId
										? `/channel/${snippet?.channelId}`
										: demoChannelUrl
								}
							>
								<Typography
									variant="subtitle2"
									color="gray"
									sx={{
										fontSize: "10px",
										color: "gray",
										ml: "5px",
										fontFamily: "'Roboto', sans-serif",
									}}
								>
									{snippet?.channelTitle ||
										demoChannelTitle}
									<CheckCircleIcon
										sx={{
											fontSize: "8px",
											color: "gray",
											ml: "5px",
										}}
									/>
								</Typography>
							</Link>
							<Typography
								variant="subtitle2"
								color="gray"
								sx={{
									fontSize: "10px",
									color: "gray",
									ml: "5px",
									fontFamily: "'Roboto', sans-serif",
								}}
							>
								{`${displayValue} ${displayLabel} yang lalu`}
							</Typography>
						</CardContent>
					</Stack>
				</Grid>
			</Grid>
		</Card>
	);
};

export default VideoCard;
