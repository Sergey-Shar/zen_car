import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";
import {
  ListItemText,
  Button,
  ListItem,
  DialogTitle,
  Dialog,
  Typography,
  List,
} from "@mui/material";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { CITY } from "../../utils/constants";
import { createAction } from "../../utils/helpers/actionsCreater";

const SimpleDialog = (props) => {
  const { onClose, selectedValue, open } = props;

  const { t } = useTranslation();

  const cities = [
    t("cities.part1"),
    t("cities.part2"),
    t("cities.part3"),
    t("cities.part4"),
    t("cities.part5"),
    t("cities.part6"),
    t("cities.part7"),
    t("cities.part8"),
  ];

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle variant="h5">{t("cities.tittle")}</DialogTitle>
      <List sx={{ pt: 0, width: "16rem" }}>
        {cities.map((city) => (
          <ListItem
            button
            onClick={() => handleListItemClick(city)}
            key={city}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={city} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const SimpleDialogDemo = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Казань");

  const dispatch = useDispatch();

  const getCurrentCity = (value) => {
    const result = CITY.filter((sity) => sity.city.includes(value));
    dispatch(createAction("SET_CURRENT_CITY", ...result));
  };

  useEffect(() => {
    getCurrentCity(selectedValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const className = useSelector((state) => state.classNamePopup);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <div className={className}>
        <br />
        <Button variant="text" onClick={handleClickOpen}>
          <Typography variant="h7" component="div" sx={{ color: "#000" }}>
            {t(selectedValue)}
          </Typography>
          <ArrowDropDownIcon sx={{ color: "#000" }} />
        </Button>
        <SimpleDialog
          selectedValue={` ${selectedValue} `}
          open={open}
          onClose={handleClose}
        />
      </div>
    </>
  );
};

export default memo(SimpleDialogDemo);
