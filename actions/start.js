import Router from "next/router";
import api from "../lib/api";

export async function onStart(e) {
  e.preventDefault();

  const initialResult = await api.post("/api/chat/start");

  Router.push(
    {
      pathname: "/start",
      query: {
        step: 1,
        sessionId: initialResult.data.sessionId
      }
    },
    `/start/${initialResult.data.sessionId}/1`
  );
}
