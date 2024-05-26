export interface ICard {
    id: number;
    name: string;
    description: string;
    image: string;
    images:ICarImages;
    price:string;
    range:string;
    acceleration:string;
    topSpeed:string;
}
export interface ICarImages {
    red: string;
    black: string;
    blue: string;
    white: string;
    grey: string;
}
// export type TCarImages="red"| "blue" | "black" | "white" | "grey"

