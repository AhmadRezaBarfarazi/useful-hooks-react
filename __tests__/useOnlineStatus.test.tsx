import { renderHook } from "@testing-library/react";
import { useOnlineStatus } from "../src/useOnlineStatus";

test("useOnlineStatus should return a boolean", () => {
  const { result } = renderHook(() => useOnlineStatus());
  expect(typeof result.current).toBe("boolean");
});
