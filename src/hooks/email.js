import { useAlert } from "react-alert";

export function EmailMe(msg) {
  let elasticemail = require("elasticemail");
  var client = elasticemail.createClient({
    username: "giovanni",
    apiKey:
      "78AC5D880991D08710D0AD9C1A2ED4CF0D6FCBC7E4C91A85D7FF5811362419A0604F77F093506C5E370F98D3C83EFBC8",
  });
  client.mailer.send(msg, function (err, result) {
    if (err) {
      return console.log(err);
    }
    /* alert.show("Email inviata", { type: "success" }); */

    console.log(result);
  });
}
