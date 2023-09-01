import { useContext } from "react";
import ClimaContext from "../context/ClimaProvider";

export default function useClima() {
  return useContext(ClimaContext)
}
