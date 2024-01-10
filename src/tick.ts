import * as actions from "./protologic/actions";
import * as queries from "./protologic/queries";
import * as constants from "./protologic/constants";
import * as wasi from "./protologic/wasi";

import { MainState } from "./protologic/MainState";


export function tick(): void {
    console.log("tick()");
    console.log("MainState.position: " + MainState.position.x.toString() + ", " + MainState.position.y.toString() + ", " + MainState.position.z.toString());
}
