import posterSaga from "./posterSaga"

export default function* rootSaga() {
  yield posterSaga()
}
