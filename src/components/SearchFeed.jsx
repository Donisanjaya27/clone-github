import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const [chanel, setChanel] = useState(null);
  const [count, setCount] = useState(null);
  const [date, setDate] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(search?part=snippet&q=${searchTerm})
      .then((data) => setVideos(data.items))
    fetchFromAPI(search?part=snippet&type=channel'&q=${searchTerm})
      .then((data) => setChanel( data.items))
    fetchFromAPI(search?part=snippet&order=viewCount&q=${searchTerm})
      .then((data) => setCount( data.items))
    fetchFromAPI(search?part=snippet&order=date&q=${searchTerm})
      .then((data) => setDate( data.items))

  }, [searchTerm]);
  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h6"    color="white" mb={3} ml={{ sm: "100px"}}>
        Hasil Pencarian for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={chanel} />}
      </Box>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={count} />}
      </Box>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={date} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
