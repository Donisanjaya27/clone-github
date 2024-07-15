import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let allVideos = [];

      const response1 = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
      const data1 = await response1.json();
      allVideos = [...allVideos, ...data1.items];

      const response2 = await fetchFromAPI(`search?part=snippet&type=channel&q=${searchTerm}`);
      const data2 = await response2.json();
      allVideos = [...allVideos, ...data2.items];

      const response3 = await fetchFromAPI(`search?part=snippet&order=viewCount&q=${searchTerm}`);
      const data3 = await response3.json();
      allVideos = [...allVideos, ...data3.items];

      const response4 = await fetchFromAPI(`search?part=snippet&order=date&q=${searchTerm}`);
      const data4 = await response4.json();
      allVideos = [...allVideos, ...data4.items];

      setVideos(allVideos);
    };

    fetchData();
  }, [searchTerm]);
  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h6"    color="white" mb={3} ml={{ sm: "100px"}}>
        Hasil Pencarian for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
