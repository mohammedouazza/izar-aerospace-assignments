import { call, put, take, takeEvery } from "redux-saga/effects";
import { setAssignment } from "./reducers/assignmentAReducer";

import { setAssignmentB, setError } from "./reducers/assignmentBReducer";
import axios from "axios";
import { eventChannel } from "redux-saga";

const spectrumStatusUrl =
  "https://isaraerospace-webdeveloper-assignment1.azurewebsites.net/api/SpectrumStatus?token=0DB9D71DE67";

const spectrumWSUrl =
  "wss://isaraerospace-webdeveloper-assignment1.azurewebsites.net/api/SpectrumWS?token=0DB9D71DE67";

const spectrumChangeDirectionUrl =
  "wss://isaraerospace-webdeveloper-assignment1.azurewebsites.net/api/SpectrumChangeDirection?token=0DB9D71DE67";

let socket, socketChangeDirection;

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

function spectrumWSInitChannel() {
  return eventChannel((emitter) => {
    socket = new WebSocket(spectrumWSUrl);
    socket.onopen = function (e) {
      //return emitter(setOpen(true));
    };

    socket.onmessage = function (event) {
      return emitter(setAssignmentB(JSON.parse(event.data)));
    };

    socket.onclose = function (event) {
      if (event.wasClean) {
        return emitter(setError(""));
      } else {
        return emitter(setError("Connection died"));
      }
      //return emitter(setOpen(false));
    };

    socket.onerror = function (error) {
      return emitter(setError(error.message));
    };

    window.onload = function () {
      socket.close();
    };

    return () => {
      socket.off("ping");
    };
    /*return () => {
      socket.close();
    };*/
  });
}

function spectrumChangeDirectionInitChannel(action) {
  return eventChannel((emitter) => {
    socketChangeDirection = new WebSocket(
      spectrumChangeDirectionUrl +
        (action.payload !== "" ? "&direction=" + action.payload : "")
    );

    socketChangeDirection.onopen = function (e) {};

    socketChangeDirection.onmessage = function (event) {
      return emitter(setAssignmentB(event.data));
    };

    socketChangeDirection.onclose = function (event) {
      if (event.wasClean) {
        return emitter(setError(""));
      } else {
        return emitter(setError("Connection died"));
      }
    };

    socketChangeDirection.onerror = function (error) {
      return emitter(setError(error.message));
    };
    window.onload = function () {
      socketChangeDirection.close();
    };
    return () => {
      socketChangeDirection.off("ping");
    };
    /*return () => {
      socketChangeDirection.close();
    };*/
  });
}

function* fetchSpectrumWS() {
  try {
    const channel = yield call(spectrumWSInitChannel);
    while (true) {
      let action = yield take(channel);
      yield put(action);
    }

    //yield put(setAssignment(resp.data));
  } catch (e) {
    yield put({ type: "SPECTRUM_WS_FETCH_FAILED", message: e.message });
  }
}

function* fetchSpectrumChangeDirection(action) {
  try {
    const channel2 = yield call(spectrumChangeDirectionInitChannel, action);
    while (true) {
      let action2 = yield take(channel2);
      yield put(action2);
    }
    //yield put(setAssignment(resp.data));
  } catch (e) {
    yield put({
      type: "SPECTRUM_CHANGE_DIRECTION_FETCH_FAILED",
      message: e.message,
    });
  }
}

function* fetchSpectrumWSClose() {
  try {
    yield socket && socket.close();
  } catch (error) {}
}

function* fetchSpectrumChangeDirectionClose() {
  try {
    yield socketChangeDirection && socketChangeDirection.close();
  } catch (error) {}
}

function* rootSaga() {
  yield takeEvery("SPECTRUM_STATUS_FETCH_REQUESTED", fetchSpectrumStatus);
  yield takeEvery("SPECTRUM_WS_FETCH_REQUESTED", fetchSpectrumWS);
  yield takeEvery("SPECTRUM_WS_CLOSE_REQUESTED", fetchSpectrumWSClose);
  yield takeEvery(
    "SPECTRUM_CHANGE_DIRECTION_FETCH_REQUESTED",
    fetchSpectrumChangeDirection
  );
  yield takeEvery(
    "SPECTRUM_CHANGE_DIRECTION_CLOSE_REQUESTED",
    fetchSpectrumChangeDirectionClose
  );
}

export default rootSaga;
