import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import LightIcon from '@material-ui/icons/WbIncandescent';
import FanIcon from '@material-ui/icons/Toys';
import { TbAirConditioning, TbAirConditioningDisabled } from "react-icons/tb";
import { MdOutlineLightMode } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(5),
    fontFamily: 'Arial, sans-serif', // Đổi kiểu chữ
  },
  controlPanelContainer: {
    border: '3px solid #3f51b5',
    borderRadius: '20px',
    padding: theme.spacing(4),
    backgroundColor: '#e3f2fd',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '300px',
    fontFamily: 'Arial, sans-serif', // Đổi kiểu chữ
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: theme.spacing(2),
    fontFamily: 'Arial, sans-serif', // Đổi kiểu chữ
  },
  icon: {
    fontSize: '2rem',
    marginRight: theme.spacing(1),
  },
  largeButton: {
    padding: theme.spacing(2),
    fontSize: '3rem',
  },
  customSwitch: {
    '& .MuiSwitch-thumb': {
      width: 28,
      height: 28,
    },
    '& .MuiSwitch-track': {
      height: 16,
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    fontFamily: 'Arial, sans-serif', // Đổi kiểu chữ
    fontWeight: 'bold', // Chữ đậm
  },
  rotating: {
    animation: '$rotate 2s linear infinite',
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

export default function ControlPanel() {
  const classes = useStyles();
  const [isLightOn, setLightOn] = useState(false);
  const [isFanOn, setFanOn] = useState(false);
  const [isAcOn, setAcOn] = useState(false);

  const handleToggleLight = () => {
    setLightOn((prev) => !prev);
  };

  const handleToggleFan = () => {
    setFanOn((prev) => !prev);
  };

  const handleToggleAc = () => {
    setAcOn((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.controlPanelContainer}>
        <Typography variant="h6" className={classes.title}>
          Điều khiển thiết bị
        </Typography>

        <div className={classes.buttonContainer}>
          <IconButton
            color={isLightOn ? 'primary' : 'default'}
            onClick={handleToggleLight}
            className={classes.largeButton}
          >
            <LightIcon className={classes.icon} />
          </IconButton>
          <Switch
            checked={isLightOn}
            onChange={handleToggleLight}
            className={classes.customSwitch}
            inputProps={{ 'aria-label': 'light switch' }}
          />
        </div>

        <div className={classes.buttonContainer}>
          <IconButton
            color={isFanOn ? 'primary' : 'default'}
            onClick={handleToggleFan}
            className={classes.largeButton}
          >
            <FanIcon className={`${classes.icon} ${isFanOn ? classes.rotating : ''}`} />
          </IconButton>
          <Switch
            checked={isFanOn}
            onChange={handleToggleFan}
            className={classes.customSwitch}
            inputProps={{ 'aria-label': 'fan switch' }}
          />
        </div>

        <div className={classes.buttonContainer}>
          <IconButton
            color={isAcOn ? 'primary' : 'default'}
            onClick={handleToggleAc}
            className={classes.largeButton}
          >
            {isAcOn ? (
              <TbAirConditioning className={classes.icon} />
            ) : (
              <TbAirConditioningDisabled className={classes.icon} />
            )}
          </IconButton>
          <Switch
            checked={isAcOn}
            onChange={handleToggleAc}
            className={classes.customSwitch}
            inputProps={{ 'aria-label': 'ac switch' }}
          />
        </div>
      </div>
    </div>
  );
}
