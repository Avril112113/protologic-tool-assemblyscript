// DO NOT MODIFY, THIS FILE IS GENERATED //
// VERSION 0.4.0 //

import {_MainState} from "./_MainState";
import {sharedmemory_set_readaddress} from "./queries";
import {PackedVector3} from "./PackedVector3";
import {PackedQuaternion} from "./PackedQuaternion";
import {QS_GunData} from "./QS_GunData";


let _data: _MainState = new _MainState();
sharedmemory_set_readaddress(_data, _MainState.DATA_SIZE);

export class MainState {
	static get position(): PackedVector3 {
		return _data.position;
	}

	static get velocity(): PackedVector3 {
		return _data.velocity;
	}

	static get orientation(): PackedQuaternion {
		return _data.orientation;
	}

	static get angular_velocity(): PackedVector3 {
		return _data.angular_velocity;
	}

	static get radar_contact_count(): i32 {
		return _data.radar_contact_count;
	}

	static get gun_data0(): QS_GunData {
		return _data.gun_data0;
	}

	static get gun_data1(): QS_GunData {
		return _data.gun_data1;
	}

	static get gun_data2(): QS_GunData {
		return _data.gun_data2;
	}

	static get gun_data3(): QS_GunData {
		return _data.gun_data3;
	}

	static get gun_bearing0(): f32 {
		return _data.gun_bearing0;
	}

	static get gun_bearing1(): f32 {
		return _data.gun_bearing1;
	}

	static get gun_bearing2(): f32 {
		return _data.gun_bearing2;
	}

	static get gun_bearing3(): f32 {
		return _data.gun_bearing3;
	}

	static get gun_elevation0(): f32 {
		return _data.gun_elevation0;
	}

	static get gun_elevation1(): f32 {
		return _data.gun_elevation1;
	}

	static get gun_elevation2(): f32 {
		return _data.gun_elevation2;
	}

	static get gun_elevation3(): f32 {
		return _data.gun_elevation3;
	}

	static get gun_refire_time0(): f32 {
		return _data.gun_refire_time0;
	}

	static get gun_refire_time1(): f32 {
		return _data.gun_refire_time1;
	}

	static get gun_refire_time2(): f32 {
		return _data.gun_refire_time2;
	}

	static get gun_refire_time3(): f32 {
		return _data.gun_refire_time3;
	}

	static get gun_reload_time0(): f32 {
		return _data.gun_reload_time0;
	}

	static get gun_reload_time1(): f32 {
		return _data.gun_reload_time1;
	}

	static get gun_reload_time2(): f32 {
		return _data.gun_reload_time2;
	}

	static get gun_reload_time3(): f32 {
		return _data.gun_reload_time3;
	}

	static get gun_magazine_capacity0(): u16 {
		return _data.gun_magazine_capacity0;
	}

	static get gun_magazine_capacity1(): u16 {
		return _data.gun_magazine_capacity1;
	}

	static get gun_magazine_capacity2(): u16 {
		return _data.gun_magazine_capacity2;
	}

	static get gun_magazine_capacity3(): u16 {
		return _data.gun_magazine_capacity3;
	}

	static get gun_magazine_remaining0(): u16 {
		return _data.gun_magazine_remaining0;
	}

	static get gun_magazine_remaining1(): u16 {
		return _data.gun_magazine_remaining1;
	}

	static get gun_magazine_remaining2(): u16 {
		return _data.gun_magazine_remaining2;
	}

	static get gun_magazine_remaining3(): u16 {
		return _data.gun_magazine_remaining3;
	}

	static get gun_ammo_type0(): i32 {
		return _data.gun_ammo_type0;
	}

	static get gun_ammo_type1(): i32 {
		return _data.gun_ammo_type1;
	}

	static get gun_ammo_type2(): i32 {
		return _data.gun_ammo_type2;
	}

	static get gun_ammo_type3(): i32 {
		return _data.gun_ammo_type3;
	}

	static get engine_fuel_amount(): f32 {
		return _data.engine_fuel_amount;
	}

	static get engine_fuel_capacity(): f32 {
		return _data.engine_fuel_capacity;
	}

	static get engine_throttle(): f32 {
		return _data.engine_throttle;
	}

	static get radar_noise(): f32 {
		return _data.radar_noise;
	}

	static get mass(): f32 {
		return _data.mass;
	}

	static get missile_launcher_stockpile(): u16 {
		return _data.missile_launcher_stockpile;
	}

	static get missile_launcher_reload_time0(): f32 {
		return _data.missile_launcher_reload_time0;
	}

	static get missile_launcher_reload_time1(): f32 {
		return _data.missile_launcher_reload_time1;
	}

	static get missile_launcher_reload_time2(): f32 {
		return _data.missile_launcher_reload_time2;
	}

	static get missile_launcher_reload_time3(): f32 {
		return _data.missile_launcher_reload_time3;
	}

	static get missile_launcher_reload_time4(): f32 {
		return _data.missile_launcher_reload_time4;
	}

	static get missile_launcher_reload_time5(): f32 {
		return _data.missile_launcher_reload_time5;
	}

	static get missile_launcher_reload_time6(): f32 {
		return _data.missile_launcher_reload_time6;
	}

	static get missile_launcher_reload_time7(): f32 {
		return _data.missile_launcher_reload_time7;
	}

	static get missile_launcher_reload_time8(): f32 {
		return _data.missile_launcher_reload_time8;
	}

	static get missile_launcher_reload_time9(): f32 {
		return _data.missile_launcher_reload_time9;
	}

	static get missile_launcher_reload_time10(): f32 {
		return _data.missile_launcher_reload_time10;
	}

	static get missile_launcher_reload_time11(): f32 {
		return _data.missile_launcher_reload_time11;
	}

	static get missile_launcher_reload_time12(): f32 {
		return _data.missile_launcher_reload_time12;
	}

	static get missile_launcher_reload_time13(): f32 {
		return _data.missile_launcher_reload_time13;
	}

	static get missile_launcher_reload_time14(): f32 {
		return _data.missile_launcher_reload_time14;
	}

	static get missile_launcher_reload_time15(): f32 {
		return _data.missile_launcher_reload_time15;
	}

	static get missile_launcher_reload_time16(): f32 {
		return _data.missile_launcher_reload_time16;
	}

	static get missile_launcher_reload_time17(): f32 {
		return _data.missile_launcher_reload_time17;
	}

	static get missile_launcher_reload_time18(): f32 {
		return _data.missile_launcher_reload_time18;
	}

}
