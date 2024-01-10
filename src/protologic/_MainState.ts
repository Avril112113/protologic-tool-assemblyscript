// DO NOT MODIFY, THIS FILE IS GENERATED //
// VERSION 0.4.0 //

import {PackedVector3} from "./PackedVector3";
import {PackedQuaternion} from "./PackedQuaternion";
import {QS_GunData} from "./QS_GunData";

/**
 */
export class _MainState {
	static get DATA_SIZE(): i32 { return 664; };

    protected _data: StaticArray<u8>;
	protected _offset: usize;

    constructor(_data: StaticArray<u8> = new StaticArray<u8>(_MainState.DATA_SIZE), _offset: usize = 0) {
        this._data = _data;
		this._offset = _offset;
    }

	get data(): StaticArray<u8> {
		return this._data;
	}

	get position(): PackedVector3 {
		return new PackedVector3(this._data, 0);
	}

	get velocity(): PackedVector3 {
		return new PackedVector3(this._data, 12);
	}

	get orientation(): PackedQuaternion {
		return new PackedQuaternion(this._data, 24);
	}

	get angular_velocity(): PackedVector3 {
		return new PackedVector3(this._data, 40);
	}

	get radar_contact_count(): i32 {
		return load<i32>(changetype<usize>(this._data) + this._offset, 52);
	}

	get gun_data0(): QS_GunData {
		return new QS_GunData(this._data, 56);
	}

	get gun_data1(): QS_GunData {
		return new QS_GunData(this._data, 60);
	}

	get gun_data2(): QS_GunData {
		return new QS_GunData(this._data, 64);
	}

	get gun_data3(): QS_GunData {
		return new QS_GunData(this._data, 68);
	}

	get gun_bearing0(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 56);
	}

	get gun_bearing1(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 60);
	}

	get gun_bearing2(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 64);
	}

	get gun_bearing3(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 68);
	}

	get gun_elevation0(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 152);
	}

	get gun_elevation1(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 156);
	}

	get gun_elevation2(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 160);
	}

	get gun_elevation3(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 164);
	}

	get gun_refire_time0(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 244);
	}

	get gun_refire_time1(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 248);
	}

	get gun_refire_time2(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 252);
	}

	get gun_refire_time3(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 256);
	}

	get gun_reload_time0(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 336);
	}

	get gun_reload_time1(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 340);
	}

	get gun_reload_time2(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 344);
	}

	get gun_reload_time3(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 348);
	}

	get gun_magazine_capacity0(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 428);
	}

	get gun_magazine_capacity1(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 430);
	}

	get gun_magazine_capacity2(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 432);
	}

	get gun_magazine_capacity3(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 434);
	}

	get gun_magazine_remaining0(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 474);
	}

	get gun_magazine_remaining1(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 476);
	}

	get gun_magazine_remaining2(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 478);
	}

	get gun_magazine_remaining3(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 480);
	}

	get gun_ammo_type0(): i32 {
		return load<i32>(changetype<usize>(this._data) + this._offset, 520);
	}

	get gun_ammo_type1(): i32 {
		return load<i32>(changetype<usize>(this._data) + this._offset, 522);
	}

	get gun_ammo_type2(): i32 {
		return load<i32>(changetype<usize>(this._data) + this._offset, 524);
	}

	get gun_ammo_type3(): i32 {
		return load<i32>(changetype<usize>(this._data) + this._offset, 526);
	}

	get engine_fuel_amount(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 566);
	}

	get engine_fuel_capacity(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 570);
	}

	get engine_throttle(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 574);
	}

	get radar_noise(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 578);
	}

	get mass(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 582);
	}

	get missile_launcher_stockpile(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 586);
	}

	get missile_launcher_reload_time0(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 588);
	}

	get missile_launcher_reload_time1(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 592);
	}

	get missile_launcher_reload_time2(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 596);
	}

	get missile_launcher_reload_time3(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 600);
	}

	get missile_launcher_reload_time4(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 604);
	}

	get missile_launcher_reload_time5(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 608);
	}

	get missile_launcher_reload_time6(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 612);
	}

	get missile_launcher_reload_time7(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 616);
	}

	get missile_launcher_reload_time8(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 620);
	}

	get missile_launcher_reload_time9(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 624);
	}

	get missile_launcher_reload_time10(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 628);
	}

	get missile_launcher_reload_time11(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 632);
	}

	get missile_launcher_reload_time12(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 636);
	}

	get missile_launcher_reload_time13(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 640);
	}

	get missile_launcher_reload_time14(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 644);
	}

	get missile_launcher_reload_time15(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 648);
	}

	get missile_launcher_reload_time16(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 656);
	}

	get missile_launcher_reload_time17(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 656);
	}

	get missile_launcher_reload_time18(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 660);
	}

}
