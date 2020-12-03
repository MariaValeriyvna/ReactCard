import express from "express";
import ReactDOM from "react-dom/server";
import axios from 'axios';
import { App } from "../App";
import{indexTemplate} from "./indexTemplate";

const app = express();

app.use('/static', express.static('./dist/client'));

app.get("/", (req, res) => {
   res.send (
      indexTemplate (ReactDOM.renderToString(App())),
   );
});

app.get("/auth", (req, res) => {
   axios.post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
      {
         auth: { username : proccess.env.CLIENT_ID , password: 'GzOmTjX6TX1bVg3zAa74xRnQCkTX2Q'},
         headers: {'Content-type': 'application/x-www-form-urlencoded'}
      }
   )
      .then(({data})=>{
      res.send (
         indexTemplate(ReactDOM.renderToString(App()), data['access_token']),
      );
      })
      .catch(console.log)
  
});


app.listen(3000, ()=> {
   console.log('Server started on http://localhost:3000');
});