// DO NOT MODIFY, THIS FILE IS GENERATED //
// VERSION 0.4.0 //

import {__internal_init__MainState} from "./MainState";


// wasi.ts


// @ts-ignore
@external("wasi_snapshot_preview1", "sched_yield")
declare function _internal_sched_yield(): i32;

/**
 */
export function sched_yield(): i32 {
	__internal_init__MainState();
	return _internal_sched_yield();
}

