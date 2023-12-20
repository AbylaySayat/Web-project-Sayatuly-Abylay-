import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout >
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Qazaq Food </Typography>
        <p>
          Feel free to reach out to us with any questions or inquiries. We would
          be happy to assist you.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper} sx={{ boxShadow: 5, borderRadius: 5 }}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />{" "}
                  <span style={{ fontWeight: "bold" }}>1800-00-0000</span>{" "}
                  (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  <span style={{ fontWeight: "bold" }}>info@qazaqfood.com</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />{" "}
                  <span style={{ fontWeight: "bold" }}>1234567890</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Visit Us
          </Typography>
          <Typography>
            Qazaq Food Restaurant <br />
            Abaya Zharokova <br />
            Almaty, Kazakhstan <br />
            Welcome
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
