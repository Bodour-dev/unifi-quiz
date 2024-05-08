import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { BikeProps } from "../GlobalTypes";
import noBikeImg from "../assets/img/bike_placeholder.svg";

export const UnixTimestampToDate: React.FC<{ timestamp: number }> = ({
  timestamp,
}) => {
  // Convert Unix timestamp to milliseconds
  const date_stolen = new Date(timestamp * 1000).toLocaleString("en-US");
  return (
    <small>
      <strong>Date:</strong> {date_stolen}
    </small>
  );
};


const BikeCard: React.FC<{ bike: BikeProps }> = ({ bike }) => {
  const [expanded, setExpanded] = useState(true);
  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleExpansion}
      slots={{ transition: Fade as AccordionSlots["transition"] }}
      slotProps={{ transition: { timeout: 400 } }}
      sx={{
        "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
        "& .MuiAccordionDetails-root": {
          display: expanded ? "block" : "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          borderBottom: "1px solid #ddd",
          backgroundColor: expanded ? "#3498db" : "#333",
          color: "#fff",
        }}
      >
        <Typography sx={{fontWeight:'300',letterSpacing:'1px'}}>{bike.title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: "flex!important",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "start",
        }}
        className="accordion-details"
      >
        <CardMedia
          component="img"
          sx={{ height: "200px", width: "250px", flex: "0 0 30%",background:'#f0f0f0' }}
          image={bike.thumb ? bike.thumb : noBikeImg}
          alt="Live from space album cover"
        />
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          sx={{ px: "1%", flex: "0 0 38%" }}
        >
          {`${bike.description ? bike.description : "-"}`}
        </Typography>

        <Typography
          component="div"
          sx={{
            display: "flex",
            alignItems: "baseline",
            flexDirection: "column",
            minWidth: "200px",
            flex: "0 0 30%",
          }}
        >
          <UnixTimestampToDate
            timestamp={bike.date_stolen ? bike.date_stolen : 0}
          />
          <small>
            <strong>year:</strong>
            {` ${bike.year ? bike.year : "-"}`}
          </small>
          <small>
            <strong style={{color:'red'}}>stolen_location:</strong>
            {` ${bike.stolen_location ? bike.stolen_location : "-"}`}
          </small>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default BikeCard;
