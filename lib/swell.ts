import swell from "swell-js";

// Initialize the client first
swell.init(
  process.env.NEXT_PUBLIC_SWELL_STORE_ID as string,
  process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY as string
);

// Now you can use any method

// await swell.products.list({
//   category: "t-shirts",
//   limit: 25,
//   page: 1,
// });

export default swell;
