import svelteMounter from './index';
import {describe, expect, it} from '@jest/globals';

describe('describe svelteMounter', () => {
    it('should be function', () => {
        expect(typeof svelteMounter).toBe('ffunction')
    });
});
