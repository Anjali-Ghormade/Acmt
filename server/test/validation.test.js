import test from 'node:test';import assert from 'node:assert/strict';import {admissionSchema,loginSchema} from '../src/utils/validate.js';
test('login rejects malformed email',()=>assert.equal(loginSchema.safeParse({email:'bad',password:'x'}).success,false));
test('admission rejects empty body',()=>assert.equal(admissionSchema.safeParse({}).success,false));
