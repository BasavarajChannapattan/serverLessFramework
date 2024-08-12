const axios = require('axios');

module.exports.getStatus = async (event) => {
  try {
    const response = await axios.get('https://simple-grocery-store-api.glitch.me/status');
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

module.exports.getProducts = async (event)=>{
  try{
    const res = await axios.get("https://simple-grocery-store-api.glitch.me/products?results=20")
    return{
      statusCode:res.status,
      body:JSON.stringify(res.data),
    };
  }
  catch(error)
  {
    return{
      statusCode:error.res?error.res.status:500,
      body:JSON.stringify({message:error.message}),
    };
  }
}
