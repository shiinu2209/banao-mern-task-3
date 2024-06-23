import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const UserPost = (props) => {
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper
        onClick={handleSelect}
        sx={{
          padding: 2,
          cursor: "pointer",
          marginBottom: 2,
          display: "flex",
          flexDirection: selected ? { xs: "column", sm: "row" } : "column",
          alignItems: "center",
          transition: "all 0.3s ease-in-out",
          backgroundColor: selected ? "rgba(0, 0, 0, 0.12)" : "transparent",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: selected ? { xs: "100%", sm: "30%" } : "100%",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Avatar
            src={props.userdata.avatar}
            alt={props.userdata.profile.username}
            sx={{
              width: selected ? 120 : 56,
              height: selected ? 120 : 56,
              transition: "width 0.3s, height 0.3s",
            }}
            onClick={handleOpen}
          />
          <Typography variant="h6" sx={{ mt: 1 }}>
            {props.userdata.profile.username}
          </Typography>
        </Box>
        {selected && (
          <Box
            sx={{
              height: { md: "270px" },
              width: { xs: "100%", sm: "70%" },
              mt: { xs: 2, sm: 0 },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <List>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <ListItem>
                    <ListItemText
                      primary="FirstName"
                      secondary={props.userdata.profile.firstName}
                      // primaryTypographyProps={{ fontWeight: "bold" }}
                      secondaryTypographyProps={{
                        fontSize: 16,
                      }}
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ListItem>
                    <ListItemText
                      primary="LastName"
                      secondary={props.userdata.profile.lastName || "N/A"}
                      secondaryTypographyProps={{
                        fontSize: 16,
                      }}
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ListItem>
                    <ListItemText
                      primary="Job Title"
                      secondary={props.userdata.jobTitle || "N/A"}
                      secondaryTypographyProps={{
                        fontSize: 16,
                      }}
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ListItem>
                    <ListItemText
                      primary="Email"
                      secondary={props.userdata.profile.email}
                      secondaryTypographyProps={{
                        fontSize: 16,
                      }}
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12}>
                  <ListItem>
                    <ListItemText
                      primary="Bio"
                      secondary={props.userdata.Bio || "N/A"}
                      secondaryTypographyProps={{
                        fontSize: 16,
                      }}
                    />
                  </ListItem>
                </Grid>
              </Grid>
            </List>
          </Box>
        )}
      </Paper>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <img
            src={props.userdata.avatar}
            alt={props.userdata.profile.username}
            style={{ width: "20vw", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserPost;
