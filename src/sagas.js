import { put, takeEvery } from "redux-saga/effects";
import { setAssignment } from "./reducers/assignmentAReducer";
import axios from "axios";

const spectrumStatusUrl =
  "https://isaraerospace-webdeveloper-assignment1.azurewebsites.net/api/SpectrumStatus?token=0DB9D71DE67";
const mockState = {
  velocity: {
    x: 1,
    y: 1,
    z: 1,
  },
  altitude: 1,
  temperature: 1,
  goingUp: true,
  statusMessage: "Still Ok",
};

function* fetchSpectrumStatus(action) {
  try {
    const resp = yield axios.get(spectrumStatusUrl, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    yield put(setAssignment(resp.data));
  } catch (e) {
    yield put({ type: "SPECTRUM_STATUS_FETCH_FAILED", message: e.message });
  }
}
function* rootSaga() {
  yield takeEvery("SPECTRUM_STATUS_FETCH_REQUESTED", fetchSpectrumStatus);
}

export default rootSaga;
