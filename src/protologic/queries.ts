// DO NOT MODIFY, THIS FILE IS GENERATED //
// VERSION 0.4.0 //

import {_MainState} from "./_MainState";
import {RadarContactInfo} from "./RadarContactInfo";


// queries.ts


// @ts-ignore
@external("protologic", "sharedmemory_set_readaddress")
declare function _internal_sharedmemory_set_readaddress(addr: StaticArray<u8>, len: i32): void;

/**
 */
export function sharedmemory_set_readaddress(addr: _MainState, len: i32): void {
	return _internal_sharedmemory_set_readaddress(addr.data, len);
}

// @ts-ignore
@external("protologic", "cpu_get_fuel")
declare function _internal_cpu_get_fuel(): i64;

/**
 */
export function cpu_get_fuel(): i64 {
	return _internal_cpu_get_fuel();
}

// @ts-ignore
@external("protologic", "radar_get_contact_info")
declare function _internal_radar_get_contact_info(index: i32, dst: StaticArray<u8>): void;

/**
 */
export function radar_get_contact_info(index: i32, dst: RadarContactInfo): void {
	return _internal_radar_get_contact_info(index, dst.data);
}

