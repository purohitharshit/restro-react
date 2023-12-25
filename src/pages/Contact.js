import React from "react";
import Layout from "../component/Layout/Layout";
import "../styles/ContactStyles.css"

import {
  Box,
  TableContainer,
  Typography,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import BusinessIcon from "@mui/icons-material/Business";
const Contact = () => {
  return (
    <Layout>
      <div className="contact">
      <Box
        sx={{
          m: "1rem",
          "& h4": {
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
          },
          "& p": { textAlign: "justify", fontFamily: "serif" },
        }}
      >
        <Typography
          variant="h4"
          sx={{ alignItems: "center", textALign: "center" }}
        >
          
        </Typography>

        <h2>Reservation Assistance</h2>

        <p>
          Ready to reserve a table for an intimate dinner, a special
          celebration, or a casual get-together? Use our convenient reservation
          form to secure your spot. Let us know your preferred date, time, and
          any special requests, and our team will ensure that everything is set
          for your upcoming visit.
        </p>

        <h2>General Inquiries</h2>
        <p>
          Have questions about our menu, events, or private dining options?
          We're here to help. Feel free to reach out through our contact form,
          and our friendly staff will respond promptly to assist you with any
          information you may need.
        </p>
        <h2>Visit Us in Person</h2>
        <p>
          If you prefer face-to-face interaction, our Contact page also provides
          our physical address. Drop by our location to experience the ambiance
          firsthand, discuss event planning, or simply say hello. We love
          meeting our guests in person!
        </p>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            justifyContent: "center",
            maxWidth: "1000px",
            m: "2rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Table
            sx={{ border: "black", justifyContent: "center",  }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    bgcolor: "black",
                    color: "white",
                    fontSize: "1rem",
                    fontFamily:"monospace"
                  }}
                >
                  React out to us{" "}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow
                sx={{ display: "flex", flexDirection: "row", pl: "2rem",  }}
              >
                <TableCell
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem",
                  fontSize: "1rem",fontFamily:"monospace"
                }}
                >
                  <SupportAgentIcon />
                  Phone: 124384934(Toll Free)
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ display: "flex", flexDirection: "row", pl: "2rem" }}
              >
                <TableCell
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem",
                  fontSize: "1rem",fontFamily:"monospace"
                }}
                >
                  <EmailIcon />
                  Email: demo@gmail.com
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ display: "flex", flexDirection: "row", pl: "2rem" }}
              >
                <TableCell
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem",
                  fontSize: "1rem",fontFamily:"monospace"
                }}
                >
                  <ChatIcon />
                  Chat with us
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ display: "flex", flexDirection: "row", pl: "2rem" }}
              >
                <TableCell
                  sx={{ display: "flex", flexDirection: "row", gap: "1rem",
                  fontSize: "1rem",fontFamily:"monospace"
                }}
                >
                  <BusinessIcon />
                  Address: P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620
                  (372) 587-2335
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </div>
      
    </Layout>
  );
};

export default Contact;
