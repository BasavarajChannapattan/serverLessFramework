const axios = require("axios");
const { utils } = require("./helpers/index");
const constants = utils.constants;

const baseUrl = constants.baseUrl;

module.exports.getStatus = async (event) => {
  try {
    const response = await axios.get(`${baseUrl}/status`);
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

module.exports.getProducts = async (event) => {
  try {
    const res = await axios.get(`${baseUrl}/products?results=20`);
    return {
      statusCode: res.status,
      body: JSON.stringify(res.data),
    };
  } catch (error) {
    return {
      statusCode: error.res ? error.res.status : 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

module.exports.createCart = async (event) => {
  try {
    const createCartRes = await axios.post(`${baseUrl}/carts`);
    const cartId = createCartRes.data.cartId;

    if (!cartId) {
      throw new Error("Cart ID not found in the response");
    }

    return {
      statusCode: createCartRes.status,
      body: JSON.stringify({ cartId }),
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({
        message: error.message,
        details: error.response ? error.response.data : undefined,
      }),
    };
  }
};

module.exports.getCart = async (event) => {
  try {
    const cartId = event.pathParameters.cartId;

    if (!cartId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Cart ID is required" }),
      };
    }

    const retrieveRes = await axios.get(`${baseUrl}/carts/${cartId}`);

    return {
      statusCode: retrieveRes.status,
      body: JSON.stringify({
        cartId: cartId,
        cartDetails: retrieveRes.data,
      }),
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({
        message: error.message,
        details: error.response ? error.response.data : undefined,
      }),
    };
  }
};
