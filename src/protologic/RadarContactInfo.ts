// DO NOT MODIFY, THIS FILE IS GENERATED //
// VERSION 0.4.0 //


/**
 * Contact info.
 */
export class RadarContactInfo {
	static get DATA_SIZE(): i32 { return 44; };

    protected _data: StaticArray<u8>;
	protected _offset: usize;

    constructor(_data: StaticArray<u8> = new StaticArray<u8>(RadarContactInfo.DATA_SIZE), _offset: usize = 0) {
        this._data = _data;
		this._offset = _offset;
    }

	get data(): StaticArray<u8> {
		return this._data;
	}

	get id(): i64 {
		return load<i64>(changetype<usize>(this._data) + this._offset, 0);
	}

	get type(): i32 {
		return load<i32>(changetype<usize>(this._data) + this._offset, 8);
	}

	get signal_strength(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 16);
	}

	get x(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 24);
	}

	get y(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 32);
	}

	get z(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 40);
	}

}
