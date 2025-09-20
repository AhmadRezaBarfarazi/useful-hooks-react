import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../src/useDebounce";

jest.useFakeTimers();

test("useDebounce should delay value changes", () => {
  const { result, rerender } = renderHook(
    ({ value }) => useDebounce(value, 500),
    { initialProps: { value: "a" } }
  );

  rerender({ value: "b" });
  rerender({ value: "c" });
  expect(result.current).toBe("a");

  act(() => {
    jest.advanceTimersByTime(500);
  });
  expect(result.current).toBe("c");
});
