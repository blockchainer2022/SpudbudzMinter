/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { withStyles } from "@material-ui/core";
import logo from "../../assets/SPUDBUDZ.png";
import Slider from "@material-ui/core/Slider";
import logotopbrimg from "../../assets/image1.png";
import "./topSection.css";
import { Button } from "@material-ui/core";

const PrettoSlider = withStyles({
  // eslint-disable-next-line no-unused-vars
  root: {
    color: "#2c2a55",
    width: "100%",
    height: 8,
    marginTop: "50px",
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid #2c2a55",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#2c2a55",
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
})(Slider);

const TopSection = ({ mint, totalSupply, price, account, loadWeb3 }) => {
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="topsection-main-wrapper">
      <div className="topsection-inner-wrapper">
        <div className="top-logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="topsection-bootom-box-wrapper">
          <div className="topsection-bootom-inner-box-wrapper">
            <div className="topb-left-wrapper">
              <div className="buy-nowbtn-wrapper">
                <button onClick={() => loadWeb3()}>
                  {/* BUY ON OPENSEA */}
                  {account
                    ? account.slice(0, 8) +
                      "..." +
                      account.slice(account.length - 5)
                    : "CONNECT WALLET"}
                </button>
              </div>

              <div className="topsection-slider-wrapper">
                <PrettoSlider
                  value={value}
                  min={1}
                  step={1}
                  max={20}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={20}
                  onChange={handleChange}
                  className="slidercustome"
                />
              </div>

              <p className="slider-below-text">
                Buy {value} Spudbudz{" "}
                <span className="big-font">
                  {(value * price).toFixed(4)} Ether
                </span>
              </p>

              <div className="mint-buton-wrapper">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    mint(value);
                  }}
                  style={
                    !account || totalSupply === 2000
                      ? {
                          backgroundColor: "grey",
                          color: "white",
                          cursor: "default",
                        }
                      : null
                  }
                  disabled={!account ? true : false}
                >
                  {totalSupply === 2000 ? "All Sold" : "Buy Spudbudz"}
                </Button>
                <br />
                <span
                  style={
                    !account
                      ? {
                          color: "#fff",
                          marginTop: "5px",
                          display: "inline-block",
                          fontFamily: "Roboto",
                        }
                      : { display: "none" }
                  }
                >
                  Connect Wallet to Buy NFT
                </span>
              </div>

              <p>
                Total Spudbudz Sold{" "}
                <span className="linebreak">{totalSupply}/7777</span>
              </p>
              <br />
              <br />
              <br />
            </div>
            <div className="topb-right-wrapper">
              <img src={logotopbrimg} alt="logotopbrimg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
