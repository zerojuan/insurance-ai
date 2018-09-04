require("dotenv").config();
const next = require("next");

const expressServer = require("./api/server");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    expressServer.get("/start/:sessionId/:step", (req, res) => {
      const actualPage = "/start";
      const queryParams = {
        step: req.params.step,
        sessionId: req.params.sessionID
      };

      app.render(req, res, actualPage, queryParams);
    });

    expressServer.get("/quote/:sessionId", (req, res) => {
      const actualPage = "/quote";
      const queryParams = {
        sessionId: req.params.sessionId
      };

      app.render(req, res, actualPage, queryParams);
    });

    expressServer.get("*", (req, res) => {
      return handle(req, res);
    });

    expressServer.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
