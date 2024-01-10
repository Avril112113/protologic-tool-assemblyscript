// DO NOT MODIFY, THIS FILE IS GENERATED //
// VERSION 0.4.0 //


/**
 */
export class PackedQuaternion {
	static get DATA_SIZE(): i32 { return 16; };

    protected _data: StaticArray<u8>;
	protected _offset: usize;

    constructor(_data: StaticArray<u8> = new StaticArray<u8>(PackedQuaternion.DATA_SIZE), _offset: usize = 0) {
        this._data = _data;
		this._offset = _offset;
    }

	get data(): StaticArray<u8> {
		return this._data;
	}

	get x(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 0);
	}

	get y(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 4);
	}

	get z(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 8);
	}

	get w(): f32 {
		return load<f32>(changetype<usize>(this._data) + this._offset, 12);
	}

}
