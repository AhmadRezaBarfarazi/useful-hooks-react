import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "../src/useLocalStorage";

test("useLocalStorage should store and retrieve values", () => {
  const { result } = renderHook(() => useLocalStorage("key", "initial"));

  expect(result.current[0]).toBe("initial");

  act(() => {
    result.current[1]("newValue");
  });

  expect(localStorage.getItem("key")).toBe('"newValue"');
  expect(result.current[0]).toBe("newValue");
});
