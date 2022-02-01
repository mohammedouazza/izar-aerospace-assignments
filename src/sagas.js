import { put, takeEvery } from "redux-saga/effects";
import { setAssignment } from "./reducers/assignmentAReducer";
import {
  setAssignmentB,
  setError,
  setOpen,
} from "./reducers/assignmentBReducer";
import axios from "axios";

const spectrumStatusUrl =
  "https://isaraerospace-webdeveloper-assignment1.azurewebsites.net/api/SpectrumStatus?token=0DB9D71DE67";

const spectrumWSUrl =
  "wss://isaraerospace-webdeveloper-assignment1.azurewebsites.net/api/SpectrumWS?token=0DB9D71DE67";

const spectrumChangeDirectionUrl =
  "wss://isaraerospace-webdeveloper-assignment1.azurewebsites.net/api/SpectrumChangeDirection?token=0DB9D71DE67";

function* fetchSpectrumStatus() {
  try {
    const resp = yield axios.get(spectrumStatusUrl, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    yield put(setAssignment(resp.data));
  } catch (e) {
    yield put({ type: "SPECTRUM_STATUS_FETCH_FAILED", message: e.message });
  }
}

function* fetchSpectrumWS() {
  try {
    let socket = new WebSocket(spectrumWSUrl);
    console.log("WebSocket - status " + socket.readyState);
    socket.onopen = function (e) {
      //put(setError(""));
      //put(setOpen(true));
      console.log("onopen", e);
    };

    socket.onmessage = function (event) {
      //put(setAssignmentB(event.data));
      console.log("onmessage", event);
      //return false;
    };

    socket.onclose = function (event) {
      if (event.wasClean) {
        //put(setError(""));
        console.log("Was clean");
      } else {
        //put(setError("Connection died"));
        console.log("Server Died");
      }
      //put(setOpen(false));
      console.log("onclose", event);
    };

    socket.onerror = function (error) {
      //put(setError(error.message));
      console.log("onerror", error.message);
    };
    console.log(socket);
    //yield put(setAssignment(resp.data));
  } catch (e) {
    yield put({ type: "SPECTRUM_WS_FETCH_FAILED", message: e.message });
  }
}

function* fetchSpectrumChangeDirection(action) {
  try {
    const socketChangeDirection = new WebSocket(
      spectrumChangeDirectionUrl +
        (action.payload !== "" ? "&direction=" + action.payload : "")
    );

    socketChangeDirection.onopen = function (e) {
      console.log("Change direction onopen", e);
    };

    socketChangeDirection.onmessage = function (event) {
      put(setAssignmentB(event.data));
      console.log("Change direction onmessage", event);
      return false;
    };

    socketChangeDirection.onclose = function (event) {
      if (event.wasClean) {
        put(setError(""));
      } else {
        put(setError("Connection died"));
      }
      put(setOpen(false));
      console.log("Change direction onclose", event);
    };

    socketChangeDirection.onerror = function (error) {
      put(setError(error.message));
      console.log("Change direction onerror", error.message);
    };
    console.log("Change direction", socketChangeDirection);
    //yield put(setAssignment(resp.data));
  } catch (e) {
    yield put({
      type: "SPECTRUM_CHANGE_DIRECTION_FETCH_FAILED",
      message: e.message,
    });
  }
}

function* rootSaga() {
  yield takeEvery("SPECTRUM_STATUS_FETCH_REQUESTED", fetchSpectrumStatus);
  yield takeEvery("SPECTRUM_WS_FETCH_REQUESTED", fetchSpectrumWS);
  yield takeEvery(
    "SPECTRUM_CHANGE_DIRECTION_FETCH_REQUESTED",
    fetchSpectrumChangeDirection
  );
}

export default rootSaga;
