// DO NOT MODIFY, THIS FILE IS GENERATED //
// VERSION 0.4.0 //


/**
 */
export class QS_GunData {
	static get DATA_SIZE(): i32 { return 468; };

    protected _data: StaticArray<u8>;
	protected _offset: usize;

    constructor(_data: StaticArray<u8> = new StaticArray<u8>(QS_GunData.DATA_SIZE), _offset: usize = 0) {
        this._data = _data;
		this._offset = _offset;
    }

	get data(): StaticArray<u8> {
		return this._data;
	}

	get bearing(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 0);
	}

	get elevation(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 96);
	}

	get refire_time(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 188);
	}

	get reload_time(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 280);
	}

	get magazine_capacity(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 372);
	}

	get magazine_remaining(): u16 {
		return load<u16>(changetype<usize>(this._data) + this._offset, 418);
	}

	get ammo_type(): i32 {
		return load<i32>(changetype<usize>(this._data) + this._offset, 464);
	}

}
