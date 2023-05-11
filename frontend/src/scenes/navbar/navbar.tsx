import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme, Typography } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* left side */}

      <FlexBetween gap="0.75rem">
        <CurrencyRupeeIcon sx={{ fontSize: "20px" }} />
        <Typography variant="h4" fontSize="16px">
          wealthie
        </Typography>
      </FlexBetween>

      {/* right size */}

      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
