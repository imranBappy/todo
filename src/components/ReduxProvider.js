"use client";
import makeStore from "@/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
