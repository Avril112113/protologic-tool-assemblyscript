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
@external("protologic", "radar_get_contact_list")
declare function _internal_radar_get_contact_list(dest: StaticArray<u8>, destCount: i32): i32;

/**
 */
export function radar_get_contact_list(dest: RadarContactInfo[], destCount: i32): i32 {
	let dest_data = new StaticArray<u8>(RadarContactInfo.DATA_SIZE * destCount);
	for (let i = 0; i < destCount; i++) {
		dest[i] = new RadarContactInfo(dest_data, i*RadarContactInfo.DATA_SIZE);
	}
	return _internal_radar_get_contact_list(dest_data, destCount);
}

