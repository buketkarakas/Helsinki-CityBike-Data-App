import * as React from "react";
import Typography from "./Typography";
import HeroBannerLayout from "./HeroBannerLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1511288561564-8fdcce26ad5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";

export default function HeroBanner() {
    return (
        <HeroBannerLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: "#7fc7d9", // Average color of the background image.
                backgroundPosition: "center",
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: "none" }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
       Pedal Through Helsinki with Bike Data
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
            >
       Explore Helsinki on two wheels: Get the latest City Bike data now!
            </Typography>     
        </HeroBannerLayout>
    );
}