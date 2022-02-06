import React, { memo } from "react";
import { useSelector } from "react-redux";
import { List, ListItem, IconButton, ListItemText } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const ListServices = ({ list, onDelete }) => {
  const isWizardChildren = useSelector((state) => state.isWizardChildren);
  return (
    <>
      {isWizardChildren && (
        <List sx={{ width: "95%", bgcolor: "background.paper" }}>
          {list.flat().map((value, index) => (
            <ListItem
              sx={{
                borderTop: "1px solid #dde1ec",
                ":first-of-type": { borderTop: "none" },
              }}
              key={value.id}
              disableGutters
              secondaryAction={
                <IconButton onClick={() => onDelete(value.id)}>
                  <DeleteOutlinedIcon sx={{ color: "#ea2119" }} />
                </IconButton>
              }
            >
              <ListItemText
                primary={`${index + 1}  ${value.name}  ➔  ${value.group.name}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default memo(ListServices);