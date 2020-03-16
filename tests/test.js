import { expect } from 'chai';
import t from '../dist/index';

function get(key) {
	const str = sessionStorage.getItem(key);
	if (str) {
		return JSON.parse(str);
	} else {
		return null;
	}
}

describe('global set', async () => {
	it('set global value', async () => {
		t('key', '123456wk');
		const value = get('key')
		expect('123456wk').eq(value)
	});
});
