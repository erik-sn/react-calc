export default function fireAction(reducer, currentState, type, payload = {}) {
  return reducer(currentState, {
    type,
    payload,
  });
}
