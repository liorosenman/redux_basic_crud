// A mock function to mimic making an async request for data
import axios from "axios";
import { Animal } from "./Animal";
import { Server } from "http";
const SERVER = "http://localhost:3000"

// export function fetchCount(amount = 1) {
//     return new Promise<{ data: number }>((resolve) =>
//       setTimeout(() => resolve({ data: amount }), 500)
//     );
//   }

export function fetchData(){
    return axios<Animal[]>(SERVER)
}