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
import { UnixTimestampToDate } from "../utils/UnixTimestampToDate";
import { useTheme } from "@mui/material/styles";

const BikeCard: React.FC<{ bike: BikeProps }> = ({ bike }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const accordionSummaryStyles = {
    borderBottom: "1px solid #ddd",
    backgroundColor: expanded ? "#3498db" : "#333",
    color: "#fff",
  };

  const accordionDetailsStyles = {
    display: "flex !important",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  };

  const mediaStyles = {
    height: "200px",
    width: "250px",
    flex: "0 0 30%",
    background: "#f0f0f0",
  };

  const descriptionStyles = {
    px: "1%",
    flex: "0 0 38%",
    wordBreak: "break-all",
  };

  const infoStyles = {
    display: "flex",
    alignItems: "baseline",
    flexDirection: "column",
    minWidth: "200px",
    flex: "0 0 30%",
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
        sx={accordionSummaryStyles}
      >
        <Typography sx={{ fontWeight: "300", letterSpacing: "1px" }}>
          {bike.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={accordionDetailsStyles}
        className="accordion-details"
      >
        <CardMedia
          component="img"
          sx={mediaStyles}
          image={bike.thumb || noBikeImg}
          alt="Bike Thumbnail"
        />
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          sx={descriptionStyles}
        >
          {bike.description || "-"}
        </Typography>

        <Typography component="div" sx={infoStyles}>
          <UnixTimestampToDate timestamp={bike.date_stolen || 0} />
          <small>
            <strong>year:</strong>
            {bike.year || "-"}
          </small>
          <small>
            <strong style={{ color: "red" }}>stolen_location:</strong>
            {bike.stolen_location || "-"}
          </small>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default BikeCard;
