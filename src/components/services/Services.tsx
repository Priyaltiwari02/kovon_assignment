// components/Services.tsx

"use client";
import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { IoImagesOutline } from "react-icons/io5";
import {SERVICES} from "@/constants/content";

export const Services = () => {
  const services = SERVICES; // Replace with actual services data

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0f172a",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "2.8rem" } }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Everything you need to build, deploy, and scale your modern
            applications efficiently.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#0f172a",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
                    borderColor: "primary.main",
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 3,
                    "& svg": {
                      transition: "all 0.3s ease",
                    },
                    "&:hover svg": {
                      transform: "scale(1.15)",
                      color: "#2563eb",
                    },
                  }}
                >
                  <IoImagesOutline size={70} />
                </Box>

                {/* Title */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {service.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
