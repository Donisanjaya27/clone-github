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
}) => (
	<Card
		sx={{
			width: { xs: "100%", sm: "358px", md: "425px" },
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
								color="#000"
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
					</CardContent>
				</Stack>
			</Grid>
		</Grid>
	</Card>
);

export default VideoCard;
