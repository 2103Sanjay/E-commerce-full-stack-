const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const User = require("./mongodb");
const nodemailer = require("nodemailer");
const { url } = require("inspector");
const e = require("express");
const port = 3001;
const app = express();
const bcript = require("bcryptjs");
const { compare } = require("bcrypt");
const axios = require("axios");
const uniqid = require("uniqid");
const sha256 = require("sha256");
const { request } = require("http");
const { error } = require("console");
const { send } = require("process");

const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const MERCHANT_ID = "PGTESTPAYUAT";
const SALT_INDEX = 1;
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var paths = path.join(__dirname, "../client/views/emailsend.html");
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.static(path.join(__dirname, "../client/images/img_home")));
app.use(express.static(path.join(__dirname, "../client/images/loginsignup")));
app.use(express.static(path.join(__dirname, "../client/images/coustomize")));
app.use(express.static(path.join(__dirname, "../client/images/tableware")));
app.use(express.static(path.join(__dirname, "../client/images/bedroom")));
app.use(express.static(path.join(__dirname, "../client/images/gridimg")));
app.use(express.static(path.join(__dirname, "../client/images/icons")));
app.use(express.static(path.join(__dirname, "../client/images/livingroom")));
app.use(express.static(path.join(__dirname, "../client/images/office")));
app.use(express.static(path.join(__dirname, "../client/images/dining")));
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.static(path.join(__dirname, "../client/images/bgvideo")));
app.use(express.static(path.join(__dirname, "../client/images/decors")));
app.use(express.static(path.join(__dirname, "../client/images/kitchen")));
app.use(express.static(path.join(__dirname, "../client/images/bath")));
app.use(express.static(path.join(__dirname, "../client/images/finalpreview")));
app.use(
  express.static(path.join(__dirname, "../client/images/customizedOrders"))
);
app.use(express.static(path.join(__dirname, "../client/javascript")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/login.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/login.html"));
});

app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/login.html"));
});

app.get("/signup.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/signup.html"));
});

app.post("/login.html", async (req, res) => {
  const userData = {
    username: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const salt = await bcript.genSalt();
    userData.password = await bcript.hash(userData.password, salt);
    // Create a new document in MongoDB using the User model
    const user = await User.create(userData);
    console.log("User saved successfully:", user);
    res.sendFile(path.join(__dirname, "../client/views/login.html"));
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("Error saving user");
  }
});

app.post("/finallogin", async (req, res) => {
  const email = req.body.email;
  var otp = 0;
  otp = Math.floor(1000 + Math.random() * 9000);
  console.log(otp);
  try {
    const check = await User.findOne({ email: req.body.email });
    const hashedPassword = await bcript.compare(
      req.body.password,
      check.password
    );
    if (hashedPassword) {
      // res.sendFile(path.join(__dirname, "../client/views/emailsend.html"));
      res.sendFile(path.join(__dirname, "../client/views/emailsend.html"));
      // Create a transporter using SMTP
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "sanjaysekar0321@gmail.com",
          pass: "awvt qqtm iixh osai",
        },
      });

      // Define email options
      let mailOptions = {
        from: "sanjaysekar0321@gmail.com",
        to: email,
        subject: "Complete Your Shopping Experience on COZYNEST",
        html: `<h3>Hii,You've successfully logged in, and your shopping journey continues.</h3><br><h1>Your OTP Is :${otp}</h1><br><h2>HAPPY SHOPPING :)</h2>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error occurred:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });
    } else {
      res.sendFile(path.join(__dirname, "../client/views/usernot.html"));
    }
  } catch (error) {
    res.sendFile(path.join(__dirname, "../client/views/usernot.html"));
  }

  app.post("/checkotp", (req, res) => {
    try {
      const otpinput = req.body.otp;
      if (otp == otpinput) {
        res.sendFile(path.join(__dirname, "../client/views/home.html"));
      } else {
        res.sendFile(path.join(__dirname, "../client/views/emailsend.html"));
      }
    } catch (error) {
      res.sendFile(path.join(__dirname, "../client/views/emailsend.html"));
    }
  });
});

app.get("/coustomize", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/coustomization.html"));
});

app.get("/confirm", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/payment.html"));
});

app.get("/confirmorder", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/placeorder.html"));
});

app.get("/tableware", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/tableware.html"));
});
app.get("/livingroom", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/livingroom.html"));
});
app.get("/decors", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/decors.html"));
});

app.get("/bedroom", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/bedroom.html"));
});

app.get("/office", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/office.html"));
});
app.get("/dining", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/dining.html"));
});

app.get("/kitchen", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/kitchen.html"));
});

app.get("/bath", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/bath.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/cart.html"));
});

app.post("/placeorder", async (req, res) => {
  const email = req.body.email;
  let a = 1;
  try {
    if (a == 1) {
      res.sendFile(path.join(__dirname, "../client/views/orderplaced.html"));
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "sanjaysekar0321@gmail.com",
          pass: "awvt qqtm iixh osai",
        },
      });

      let mailOptions = {
        from: "sanjaysekar0321@gmail.com",
        to: email,
        subject: "Order Confirmation",
        html: `<h2>Congratulations! Your personalized perfection is now in the works! Thank you for choosing CozyNest, where your order has been lovingly crafted to match your unique selections. Get ready to experience comfort tailored just for you!</h2>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error occurred:", error);
        } else {
          console.log("Email sent:", info.response);
        }
        res.sendFile(path.join(__dirname, "../client/views/mailsend.html"));
      });
    } else {
      res.sendFile(path.join(__dirname, "../client/views/placeorder.html"));
    }
  } catch (error) {
    res.sendFile(path.join(__dirname, "../client/views/placeorder.html"));
  }
});

app.post("/placeorderready", async (req, res) => {
  const email = req.body.emails;
  console.log(email);
  let a = 1;
  try {
    if (a == 1) {
      res.sendFile(path.join(__dirname, "../client/views/orderplaced.html"));
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "sanjaysekar0321@gmail.com",
          pass: "awvt qqtm iixh osai",
        },
      });

      let mailOptions = {
        from: "sanjaysekar0321@gmail.com",
        to: email,
        subject: "Order Confirmation",
        html: `<h2>"Congratulations! Your journey to coziness begins now! Your order with CozyNest has been officially confirmed, and we couldn't be more excited to bring comfort straight to your doorstep."</h2>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error occurred:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });
    } else {
      res.sendFile(path.join(__dirname, "../client/views/placeorder.html"));
    }
  } catch (error) {
    res.sendFile(path.join(__dirname, "../client/views/placeorder.html"));
  }
});

app.get("/checkoutaddtocart", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/readypayment.html"));
});

let merchantTransactionId = uniqid();
console.log(merchantTransactionId);

app.get("/confirmorderready", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/readyplaceorder.html"));
});
app.post("/makepayment", (req, res) => {
  const payEndpoint = "/pg/v1/pay";
  const merchantUserId = 123;
  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: merchantUserId,
    amount: 1000000,
    redirectUrl: `http://127.0.0.1:${port}/redirect-url${merchantTransactionId}`,
    redirectMode: "REDIRECT",
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const bufferObj = Buffer.from(JSON.stringify(payload), "utf-8");
  const base63EncodedPlayload = bufferObj.toString("base64");
  const xVerify =
    sha256(base63EncodedPlayload + payEndpoint + SALT_KEY) + "###" + SALT_INDEX;
  const options = {
    method: "post",
    url: `${PHONE_PE_HOST_URL}${payEndpoint}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": xVerify,
    },
    data: {
      request: base63EncodedPlayload,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      const url = response.data.data.instrumentResponse.redirectInfo.url;
      res.redirect(url);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/redirect-url:merchantTransactionId", (req, res) => {
  merchantTransactionId = merchantTransactionId;
  console.log(`/redirect-url/:${merchantTransactionId}`);
  console.log(merchantTransactionId);
  console.log("merchantTransactionId", merchantTransactionId);
  if (merchantTransactionId) {
    const xVerify =
      sha256(
        `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + SALT_KEY
      ) +
      "###" +
      SALT_INDEX;
    const options = {
      method: "get",
      url: `${PHONE_PE_HOST_URL}/pg-sandbox/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-MERCHANT-ID": merchantTransactionId,
        "X-VERIFY": xVerify,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    res.sendFile(path.join(__dirname, "../client/views/orderplaced.html"));
  } else {
    res.send({ error: "ERROR" });
  }
});

app.get("/makepaymentready", (req, res) => {
  const payEndpoint = "/pg/v1/pay";
  // const merchantTransactionId = uniqid();
  const merchantUserId = 123;
  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: merchantUserId,
    amount: 10000,
    redirectUrl: `http://127.0.0.1:${port}/redirect-url`,
    redirectMode: "REDIRECT",
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const bufferObj = Buffer.from(JSON.stringify(payload), "utf-8");
  const base63EncodedPlayload = bufferObj.toString("base64");
  const xVerify =
    sha256(base63EncodedPlayload + payEndpoint + SALT_KEY) + "###" + SALT_INDEX;
  const options = {
    method: "post",
    url: `${PHONE_PE_HOST_URL}${payEndpoint}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": xVerify,
    },
    data: {
      request: base63EncodedPlayload,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      const url = response.data.data.instrumentResponse.redirectInfo.url;
      res.redirect(url);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/redirect-url", (req, res) => {
  merchantTransactionId = merchantTransactionId;
  console.log(`/redirect-url/:${merchantTransactionId}`);
  console.log(merchantTransactionId);
  console.log("merchantTransactionId", merchantTransactionId);
  if (merchantTransactionId) {
    const xVerify =
      sha256(
        `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + SALT_KEY
      ) +
      "###" +
      SALT_INDEX;
    const options = {
      method: "get",
      url: `${PHONE_PE_HOST_URL}/pg-sandbox/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-MERCHANT-ID": merchantTransactionId,
        "X-VERIFY": xVerify,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    res.sendFile(path.join(__dirname, "../client/views/orderplaced.html"));
  } else {
    res.send({ error: "ERROR" });
  }
});

app.listen(port, () => {
  console.log(`Server Is Running On http://127.0.0.1:${port}`);
});
