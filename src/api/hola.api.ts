import { HolaDTO } from "./dto/hola.dto";

export class HolaAPI {
    public static async getAll(): Promise<HolaDTO[]> {
        const resp = await fetch("http://localhost:3000/holas", {
            method: "GET"
        })

        const data = await resp.json();

        return data;
    }
}