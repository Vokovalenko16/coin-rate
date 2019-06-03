import axios from "axios";

export const getBinPrices = cb => {
  axios
    .get("api/pricesBin")
    .then(res => cb(res))
    .catch(err => {
      console.log(err);
    });
};
export const getCobPrices = cb => {
  axios
    .get("api/pricesCob")
    .then(res => cb(res))
    .catch(err => {
      console.log(err);
    });
};
