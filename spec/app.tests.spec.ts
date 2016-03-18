/// <reference path="../typings/main.d.ts" />

import {App} from '../src/app';

describe('App Tests', () => {
    
    var app = new App();
    
    it('should get a message', () => {                    
        expect(app.GetMessage()).toBe('Welcome to Aurelia');  
    });
})